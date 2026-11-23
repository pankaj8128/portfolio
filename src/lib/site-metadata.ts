const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://panky.qzz.io";

export const SITE_METADATA = {
	title: "Pankaj Jagadale",
	siteName: "pankaj.dev",
	description:
		"Full-Stack Developer. Engineering robust full-stack solutions with clean architecture — from real-time multiplayer engines to AI-powered platforms and secure production APIs.",
	siteUrl: SITE_URL,
	logo: "/logo.png",
	favicon: "/favicon.svg",
	keywords: [
		"Pankaj Jagadale",
		"Full Stack Developer",
		"Backend Developer",
		"Node.js",
		"React",
		"TypeScript",
		"WebSockets",
		"PostgreSQL",
		"GenAI",
	],
	social: {
		github: "https://github.com/pankaj8128",
		linkedin: "https://www.linkedin.com/in/pankaj8128",
		leetcode: "https://leetcode.com/u/pankaj8128",
		email: "mailto:pankajjagadale28@gmail.com",
	},
} as const;
