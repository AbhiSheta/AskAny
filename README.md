🧠 AskAny: AI-powered Local ChatBot
AskAny is a fully offline AI chatbot powered by WebLLM, running large language models locally in the browser using WebGPU. Designed with a smooth and intuitive interface using ReactJS, AskAny provides real-time conversational AI capabilities without relying on internet access or external APIs.

🚀 Features
🤖 On-device AI Chatbot

Runs large language models directly in the browser via WebLLM

No internet or backend server required for inference

💬 Real-time Interaction

Responsive and intuitive interface using ReactJS

Seamless user experience with instant replies

⚡ WebGPU Acceleration

Utilizes WebGPU for fast and efficient local model inference

Great performance even on modern consumer devices

🔐 Private & Secure
No data sent to servers – all processing stays on your machine

🧰 Tech Stack
Layer	Technology
Frontend	ReactJS
AI Runtime	WebLLM
Acceleration	WebGPU

📸 Screenshots
(Include screenshots or screen recording GIFs here)
UI Chat Interface | Model Loading | WebGPU Performance Panel

🏁 Getting Started
Prerequisites
A modern browser with WebGPU support (e.g., Chrome Canary or latest Chromium builds)

Node.js and npm (for local development)

Installation
Clone the repository


Copy
Edit
git clone https://github.com/your-username/askany-chatbot.git
cd askany-chatbot
Install dependencies
Build and run the App
Open in browser
Visit http://localhost:3000

📝 Ensure you’re using a browser with WebGPU enabled. You may need to enable flags manually.

📦 Build for Production
bash
Copy
Edit
npm run build
📄 Folder Structure 

/askany-chatbot

│

├── /public      

├── /src

│   ├── /App.jsx      

│   ├── /app.css           

│   ├── /index.css

│   ├── /main.jsx           

├── eslint.config.js             

├── index.html

├── package.json

├── vite.config.js           

└── README.md
💡 Future Enhancements
Voice input and text-to-speech support

Multi-model support and model selector

Persistent chat history

Offline install via PWA
