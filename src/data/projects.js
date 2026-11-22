export const projects = [
  {
    id: "scribbl",
    title: "SCRIBBL",
    category: "Web Development",
    summary:
      "A full-featured Skribbl.io clone with server-authoritative game logic, WebSocket-based real-time drawing sync, public matchmaking, and advanced canvas tools.",
    description:
      "Designed a server-authoritative real-time multiplayer drawing and guessing game. Features a public matchmaking (quick-play) flow that auto-pairs players into lobbies, low-latency WebSocket synchronization for drawing tools with dynamic brush sizing and an optimized recursive Flood Fill paint engine. Built a modular room-based architecture with dynamic game settings, secure ownership transfers, and a deterministic scoring and leaderboard system with active timer shrinkage. Containerized with Docker using multi-stage builds, deployed on AWS EC2 behind an Nginx reverse proxy, and shipped with an automated GitHub Actions CI/CD pipeline.",
    techStack: [
      "Node.js",
      "Express.js",
      "WebSockets (ws)",
      "HTML5 Canvas",
      "JavaScript",
      "EJS",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
    ],
    keyFeatures: [
      "Public matchmaking (Quick Play) with auto-pairing",
      "Low-latency WebSocket drawing synchronization",
      "Optimized recursive Flood Fill paint engine",
      "Dynamic game settings with ownership transfers",
      "Multi-factor score calculation with timer shrinkage",
      "AWS EC2 deployment behind Nginx with GitHub Actions CI/CD",
      "Cross-device responsive canvas rendering",
    ],
    githubUrl: "https://github.com/pankaj8128/scribbl",
    liveUrl: "https://scribbl.panky.qzz.io/",
  },
  {
    id: "social-media",
    title: "SOCIAL FEED",
    category: "Web Development",
    summary:
      "A MERN-stack social posting platform with JWT authentication, image uploads, public feed with pagination, likes, comments, and sorting.",
    description:
      "Built a mini social post application where users can create accounts, post text/images, view a public feed, like posts, and comment. Features JWT-based authentication with secure signup/login, image upload support, a paginated public feed with sorting (All Posts, Most Liked, Most Commented), like/unlike with user details, comment threads, and the ability to delete own posts.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "CSS"],
    keyFeatures: [
      "JWT-based authentication with signup/login",
      "Image upload with text post support",
      "Paginated public feed with sorting options",
      "Like/unlike with user detail display",
      "Threaded comment system",
      "Responsive design for all devices",
    ],
    githubUrl: "https://github.com/pankaj8128/social_media",
    liveUrl: "https://social.panky.qzz.io/",
  },
  {
    id: "ai-child-monitoring",
    title: "AI-BASED CHILD MONITORING",
    category: "Web Development",
    summary:
      "A Django-based multi-tenant SaaS platform connecting parents, daycare providers, and administrators with AI-driven growth reports via Google Gemini.",
    description:
      "Built a role-based multi-tenant SaaS platform connecting parents, daycare providers, and administrators with dedicated dashboards for real-time communication. Integrated Google Gemini AI to analyze child developmental milestone data and generate personalized growth reports. Structured the backend for extensibility, enabling future analytics and reporting.",
    techStack: ["Python", "Django", "SQLite", "Google Gemini AI", "HTML/CSS", "JavaScript"],
    keyFeatures: [
      "Role-based multi-tenant SaaS architecture",
      "Dedicated dashboards for parents, daycares, and administrators",
      "Real-time parent-provider communication",
      "AI-generated personalized growth reports from milestone data",
      "Accurate cross-timezone milestone tracking",
      "Extensible backend for future analytics",
    ],
    githubUrl: "https://github.com/pnkaj8128/Ai_Based_Child_Monitoring_System",
    liveUrl: "",
  },
  {
    id: "student-attendance",
    title: "ATTENDANCE MANAGEMENT SYSTEM",
    category: "Web Development",
    summary:
      "A full-stack web app for teachers to manage student attendance with session-based auth, relational schema, and automated threshold detection.",
    description:
      "Architected a modular RESTful backend for attendance tracking, reporting, and student lifecycle management. Designed relational schema with optimized SQL queries for efficient aggregation. Implemented secure session-based authentication using cookies with protected routes and role-based access control.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "EJS", "bcrypt", "JWT"],
    keyFeatures: [
      "Modular RESTful backend architecture",
      "Optimized SQL query aggregation",
      "Session-based authentication with cookies",
      "Automated 75% attendance threshold alerts",
      "Topic tracking per class date",
      "Role-based access control",
    ],
    githubUrl: "https://github.com/pankaj8128/Student_Attendance",
    liveUrl: "https://attendance-management-swart.vercel.app/",
  },
  {
    id: "fake-certificate-detection",
    title: "FAKE CERTIFICATE DETECTION",
    category: "Web Application",
    summary:
      "An AI-powered verification pipeline combining OCR and LLMs for structured certificate data extraction and fraud detection.",
    description:
      "Designed an AI-powered verification pipeline combining Tesseract OCR and LLM-based parsing (Mistral, Llava via Ollama) for structured data extraction from certificates. Built a modular detection engine to validate certificates against PostgreSQL database records. Architected backend using FastAPI for asynchronous, high-performance API handling.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Tesseract OCR",
      "Ollama (Mistral/Llava)",
      "LLMs",
    ],
    keyFeatures: [
      "OCR + LLM-powered data extraction pipeline",
      "Database verification for fraud detection",
      "FastAPI asynchronous backend architecture",
      "Audit logging and verification traceability",
      "Planned bulk processing pipelines",
      "Enterprise-scale dashboard design",
    ],
    githubUrl: "https://github.com/pankaj8128/Fake-Certificate-Detection",
    liveUrl: "",
  },
  {
    id: "trading-bot",
    title: "TRADING BOT",
    category: "CLI tool",
    summary:
      "A Python CLI trading bot for placing Market, Limit, and Stop-Limit orders on Binance Futures Testnet with modular architecture.",
    description:
      "Built a simplified Python trading bot that places Market, Limit, and Stop-Limit orders on the Binance Futures Testnet via CLI. Features a clean modular architecture with separated concerns: API client wrapper, order placement logic, input validation, and configurable logging.",
    techStack: ["Python", "Binance API", "CLI (argparse)", "python-dotenv"],
    keyFeatures: [
      "Market, Limit, and Stop-Limit order support",
      "Modular architecture with separated concerns",
      "Comprehensive input validation",
      "Persistent log files for diagnostics",
    ],
    githubUrl: "https://github.com/pankaj8128/trading_bot",
    liveUrl: "",
  },
  {
    id: "doc-summarize",
    title: "DOCUMENT SUMMARIZER",
    category: "Desktop Application",
    summary:
      "A desktop application for summarizing PDF and DOCX documents using NLP techniques with a Tkinter GUI.",
    description:
      "Built a Python desktop application that extracts text from PDF and DOCX documents using PyPDF2 and python-docx, then generates concise summaries using NLTK and RAKE. Features a Tkinter-based GUI for easy file selection and summary display, with text-to-speech output via pyttsx3.",
    techStack: ["Python", "NLTK", "RAKE", "PyPDF2", "Tkinter", "pyttsx3"],
    keyFeatures: [
      "PDF and DOCX text extraction",
      "NLP-based automatic summarization",
      "Keyword extraction with RAKE",
      "Text-to-speech output",
    ],
    githubUrl: "https://github.com/pankaj8128/doc-summarize",
    liveUrl: "",
  },
];
