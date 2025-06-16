import { useEffect, useState } from "react";
import * as webllm from "@mlc-ai/web-llm";

import "./app.css";

function App() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hello how can I help you?",
    },
  ]);
  const [engine, setengine] = useState(null);
  const [engineStatus, setEngineStatus] = useState("");

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    webllm
      .CreateMLCEngine(selectedModel, {
        initProgressCallback: (initProgress) => {
          console.log("init progress", initProgress);
        },
      })
      .then(async (engine) => {
        await engine.reloadChat(); // ✅ IMPORTANT STEP
        setengine(engine);
        setEngineStatus("Model Loaded Successfully!");
        console.log("Engine Created!");
        setTimeout(() => setEngineStatus(""), 2000);
      })
      .catch((error) => {
        console.log("Error at engine", error);
        setEngineStatus("Error loading the Model. Please try again.");
      });
  }, []);

  function sendMessageToLlm() {
    if (!engine || !engine.chat || !engine.chat.completion) {
      console.error("Engine or chat not initialized");
      setEngineStatus("Engine not ready. Please wait...");
      return;
    }

    const tempMessages = [...messages, { role: "user", content: input }];
    setMessages(tempMessages);
    setinput("");

    engine.chat.completion
      .create({ messages: tempMessages })
      .then((reply) => {
        const text = reply.choices[0].message.content;
        setMessages([
          ...tempMessages,
          {
            role: "assistant", // ✅ fixed typo
            content: text,
          },
        ]);
      })
      .catch((err) => {
        console.error("LLM error:", err);
        setEngineStatus("Failed to get response from model.");
      });
  }

  return (
    <main>
      <section>
        <div className="conversation-area"></div>
        {engineStatus && <div className="engine-status">{engineStatus}</div>}
        <div className="messages">
          {messages
            .filter((message) => message.role !== "system")
            .map((message, index) => {
              return (
                <div className={`message ${message.role}`} key={index}>
                  {message.content}
                </div>
              );
            })}
        </div>
        <div className="input-area">
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessageToLlm();
              }
            }}
            type="text"
            placeholder="Message LLM"
          />
          <button
            onClick={() => {
              sendMessageToLlm();
            }}
          >
            send
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
