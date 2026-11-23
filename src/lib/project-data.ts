// NOTE: All brief content should stay similar in length for UI consistency.

export interface Project {
	title: string;
	brief: string;
	description: string[];
	features?: string[];
	tags: string[];
	github?: string;
	live?: string;
	images?: string[];
	banner?: string;
	video?: string;
	mode: string[];
}

export const projects: Project[] = [
	{
		title: "Scribbl",
		brief:
			"A full-featured Skribbl.io clone with server-authoritative game logic, WebSocket-based real-time drawing sync, public matchmaking, and advanced canvas tools.",
		description: [
			"Designed a server-authoritative real-time multiplayer drawing and guessing game. Features a public matchmaking flow that auto-pairs players into lobbies, low-latency WebSocket synchronization for drawing tools with dynamic brush sizing, and an optimized recursive Flood Fill paint engine.",
			"Built a modular room-based architecture with dynamic game settings, secure ownership transfers, and a deterministic scoring and leaderboard system with active timer shrinkage. Containerized with Docker using multi-stage builds, deployed on AWS EC2 behind an Nginx reverse proxy, and shipped with an automated GitHub Actions CI/CD pipeline.",
		],
		features: [
			"Public matchmaking (Quick Play) with auto-pairing",
			"Low-latency WebSocket drawing synchronization",
			"Optimized recursive Flood Fill paint engine",
			"Dynamic game settings with ownership transfers",
			"Multi-factor score calculation with timer shrinkage",
			"Cross-device responsive canvas rendering",
		],
		tags: ["Node.js", "Express.js", "WebSockets", "HTML5 Canvas", "Docker", "AWS EC2", "Nginx", "GitHub Actions"],
		github: "https://github.com/pankaj8128/scribbl",
		live: "https://scribbl.panky.qzz.io/",
		mode: ["web"],
	},
	{
		title: "Social Feed",
		brief:
			"A MERN-stack social posting platform with JWT authentication, image uploads, a paginated public feed, likes, comments, and sorting.",
		description: [
			"Built a mini social post application where users can create accounts, post text/images, view a public feed, like posts, and comment. Features JWT-based authentication with secure signup/login, image upload support, and a paginated public feed with sorting (All Posts, Most Liked, Most Commented).",
			"Includes like/unlike with user details, threaded comment discussions, and the ability to delete your own posts, all wrapped in a responsive interface.",
		],
		features: [
			"JWT-based authentication with signup/login",
			"Image upload with text post support",
			"Paginated public feed with sorting options",
			"Like/unlike with user detail display",
			"Threaded comment system",
			"Responsive design for all devices",
		],
		tags: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
		github: "https://github.com/pankaj8128/social",
		live: "https://social-iota-sooty.vercel.app/",
		mode: ["web"],
	},
	{
		title: "AI-Based Child Monitoring",
		brief:
			"A Django-based multi-tenant SaaS platform connecting parents, daycare providers, and administrators with AI-driven growth reports via Google Gemini.",
		description: [
			"Built a role-based multi-tenant SaaS platform connecting parents, daycare providers, and administrators with dedicated dashboards for real-time communication. Integrated Google Gemini AI to analyze child developmental milestone data and generate personalized growth reports.",
			"Structured the backend for extensibility, enabling future analytics and reporting across timezones and organizations.",
		],
		features: [
			"Role-based multi-tenant SaaS architecture",
			"Dedicated dashboards for parents, daycares, and administrators",
			"Real-time parent-provider communication",
			"AI-generated personalized growth reports",
			"Accurate cross-timezone milestone tracking",
			"Extensible backend for future analytics",
		],
		tags: ["Python", "Django", "SQLite", "Google Gemini AI", "JavaScript"],
		github: "https://github.com/pankaj8128/Ai_Based_Child_Monitoring_System",
		mode: ["web", "ai-data"],
	},
	{
		title: "Attendance Management System",
		brief:
			"A full-stack web app for teachers to manage student attendance with session-based auth, a relational schema, and automated threshold detection.",
		description: [
			"Architected a modular RESTful backend for attendance tracking, reporting, and student lifecycle management. Designed a relational schema with optimized SQL queries for efficient aggregation.",
			"Implemented secure session-based authentication using cookies with protected routes, role-based access control, and automated 75% attendance threshold alerts.",
		],
		features: [
			"Modular RESTful backend architecture",
			"Optimized SQL query aggregation",
			"Session-based authentication with cookies",
			"Automated 75% attendance threshold alerts",
			"Topic tracking per class date",
			"Role-based access control",
		],
		tags: ["Node.js", "Express.js", "PostgreSQL", "EJS", "bcrypt", "JWT"],
		github: "https://github.com/pankaj8128/Student_Attendance",
		live: "https://attendance-management-swart.vercel.app/",
		mode: ["web"],
	},
	{
		title: "Fake Certificate Detection",
		brief:
			"An AI-powered verification pipeline combining OCR and LLMs for structured certificate data extraction and fraud detection.",
		description: [
			"Designed an AI-powered verification pipeline combining Tesseract OCR and LLM-based parsing (Mistral, Llava via Ollama) for structured data extraction from certificates. Built a modular detection engine to validate certificates against PostgreSQL database records.",
			"Architected the backend using FastAPI for asynchronous, high-performance API handling, with audit logging for verification traceability.",
		],
		features: [
			"OCR + LLM-powered data extraction pipeline",
			"Database verification for fraud detection",
			"FastAPI asynchronous backend architecture",
			"Audit logging and verification traceability",
			"Bulk processing pipeline design",
		],
		tags: ["Python", "FastAPI", "PostgreSQL", "Tesseract OCR", "Ollama", "LLMs"],
		mode: ["ai-data"],
	},
	{
		title: "Trading Bot",
		brief:
			"A Python CLI trading bot for placing Market, Limit, and Stop-Limit orders on Binance Futures Testnet with a modular architecture.",
		description: [
			"Built a simplified Python trading bot that places Market, Limit, and Stop-Limit orders on the Binance Futures Testnet via CLI. The code is split into an API client wrapper, order placement logic, input validation, and configurable logging.",
		],
		features: [
			"Market, Limit, and Stop-Limit order support",
			"Modular architecture with separated concerns",
			"Comprehensive input validation",
			"Persistent log files for diagnostics",
		],
		tags: ["Python", "Binance API", "argparse", "python-dotenv"],
		github: "https://github.com/pankaj8128/trading_bot",
		mode: ["tools"],
	},
	{
		title: "Document Summarizer",
		brief:
			"A desktop application for summarizing PDF and DOCX documents using NLP techniques with a Tkinter GUI.",
		description: [
			"Built a Python desktop application that extracts text from PDF and DOCX documents using PyPDF2 and python-docx, then generates concise summaries using NLTK and RAKE.",
			"Features a Tkinter-based GUI for file selection and summary display, with text-to-speech output via pyttsx3.",
		],
		features: [
			"PDF and DOCX text extraction",
			"NLP-based automatic summarization",
			"Keyword extraction with RAKE",
			"Text-to-speech output",
		],
		tags: ["Python", "NLTK", "RAKE", "PyPDF2", "Tkinter", "pyttsx3"],
		mode: ["tools", "ai-data"],
	},
];
