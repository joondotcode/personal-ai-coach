# Personal AI Coach

## Vision
Personal AI Coach is a fullstack, open, and extensible AI coaching platform designed to help users learn, grow, and master new skills through interactive challenges, feedback, and personalized guidance. The system is built to be modular, privacy-friendly, and easily swappable between cloud and local LLMs.

## Why Start with OpenAI?
We begin with OpenAI integration for rapid prototyping, best-in-class language capabilities, and to ensure a smooth developer experience. This allows us to validate features and user experience quickly, while keeping the backend flexible for future LLM providers.

## Tech Stack
- **Frontend:** Next.js 14, Monaco code editor for rich in-browser coding and feedback
- **Backend:** FastAPI, modular service architecture
- **Memory:** ChromaDB vector store for semantic memory and retrieval
- **Orchestration:** LangChain for prompt management and LLM abstraction

## Local LLM Support
The backend is designed to swap out OpenAI for local LLMs (Ollama, vLLM, etc.) with minimal changes. The `inference.py` service abstracts LLM calls, so you can run the system fully locally for privacy or cost reasons.

## Directory Structure
```
personal-ai-coach/
├── frontend/                # Next.js 14 app with Monaco code editor
│   ├── pages/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   └── utils/
│       └── api.ts          # API fetch layer for backend interaction
│
├── backend/                 # FastAPI backend
│   ├── main.py              # Entry point
│   ├── routes/
│   ├── services/
│   │   └── inference.py     # ask_llm function (OpenAI/local switch)
│   ├── memory/
│   │   └── chroma_vectorstore.py
│   ├── challenges/
│   │   └── loader.py        # Local challenge loading
│   └── database/
│       └── skills.json      # Initial skill state
│
├── shared/
│   ├── types.ts             # Shared types between front/back
│   └── prompts/
│       └── grading_prompt.txt
│
├── .env.example             # Template for API keys
├── README.md
├── requirements.txt         # Python dependencies
├── package.json             # Frontend package file
└── docker-compose.yml       # Multi-container setup
```

---

- **LangChain** is used for prompt management and LLM abstraction, making it easy to switch between providers.
- **ChromaDB** provides fast, local vector search for memory and retrieval.
- **Local LLMs** (Ollama, vLLM) will be supported by updating the backend's `inference.py` service.

---

## ⚠️ Disclaimer & Visibility

This repository is an **open preview** of the Personal AI Coach platform, intended for portfolio, recruiter, and demonstration purposes. Please note:

- **Core logic** (including LLM prompts, evaluation heuristics, and inference routes) is **private** and not included in this public version.
- Sensitive or proprietary logic is **abstracted** to protect user privacy, product roadmap, and intellectual property.
- Contributions and feedback are welcome! However, production features and the full implementation live in a **private fork**.
- For demos, early access, or questions, please reach out via email (see SECURITY.md).

---

## Security & Access

Certain files and logic are not visible in this repository to protect privacy, security, and the future product roadmap. If you are interested in a demo, early access, or have questions about the implementation, please contact the maintainer via email (see SECURITY.md).

--- 