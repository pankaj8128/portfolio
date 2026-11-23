export interface HeroContent {
  [key: string]: {
    title: string
    description: string
  }
}

export interface AboutContent {
  [key: string]: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  description: string
  focus?: string
  highlights?: string[]
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface ExperienceRole {
  role: string
  period: string
  description?: string
  highlights?: string[]
}

export interface Experience {
  role: string
  company: string
  location?: string
  period: string
  description: string
  tags?: string[]
  highlights?: string[]
  roles?: ExperienceRole[]
}

export const HeroContent: HeroContent = {
  generalist: {
    title: "Developer",
    description:
      "Engineering robust full-stack solutions with clean architecture — from real-time multiplayer engines to AI-powered platforms and secure production APIs.",
  },
}

export const aboutContent: AboutContent = {
  generalist: [
    "I'm a Computer Engineering student and full-stack developer with a passion for building robust, scalable systems. My experience spans real-time web applications, production mobile apps, backend architecture with Node.js and Python, and database design.",
    "During a full-stack internship across a four-repository production ecosystem, I hardened security, built a shared design system, and shipped gamification features. I enjoy tackling complex engineering challenges — from designing server-authoritative multiplayer game engines to building AI-powered verification pipelines.",
    "I'm always eager to learn emerging technologies and apply clean, maintainable practices to every project I build. My focus is simple: understand the system end to end, secure its edges, and ship software that stays reliable in production.",
  ],
}

export const education: Education[] = [
  {
    degree: "B.Tech — Computer Engineering",
    school: "AISSMS INSTITUTE OF INFORMATION TECHNOLOGY",
    location: "Pune, Maharashtra, India",
    period: "2023 – 2027 (Expected)",
    focus: "Computer Engineering · CGPA 7.53 / 10",
    description:
      "Currently pursuing Bachelor of Technology in Computer Engineering, building a strong foundation in computer science fundamentals including Data Structures, Algorithms, DBMS, OOP, System Design, and full-stack web development.",
    highlights: [
      "Strong foundation in DSA, DBMS, OOP, System Design, and full-stack web development.",
      "Solved 350+ algorithmic problems on LeetCode alongside coursework.",
      "Vice President of Technology at CyberShield, the college cybersecurity club.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC — 12th Board)",
    school: "Azad Vidyalaya and Jr. College, Kasegaon",
    location: "Maharashtra, India",
    period: "2021 – 2023",
    focus: "Maharashtra State Board · 70.5% | MHT-CET: 97.27 Percentile",
    description:
      "Completed Higher Secondary Certificate (12th Board) examination from the Maharashtra State Board with 70.5% and scored a 97.27 percentile in the MHT-CET competitive entrance examination.",
    highlights: [
      "Achieved 97.27 percentile in the MHT-CET competitive entrance examination (2023).",
      "Secured 70.5% in the Maharashtra State Board HSC examination.",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC — 10th Board)",
    school: "Vidyarthi Vikas Vidyalaya, Mohityanche Vadgaon",
    location: "Maharashtra, India",
    period: "2020 – 2021",
    focus: "Maharashtra State Board · 96.2%",
    description:
      "Completed Secondary School Certificate (10th Board) examination from the Maharashtra State Board with distinction, achieving 96.2%.",
    highlights: [
      "Secured 96.2% with distinction in Maharashtra State Board SSC examination.",
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL", "HTML5 / CSS3"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "REST API Design", "WebSockets"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "React Native", "Vite", "Responsive Design", "Canvas API"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Mongoose"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Docker", "AWS EC2", "Nginx", "GitHub Actions", "Git / GitHub", "Linux"],
  },
  {
    label: "Systems & Security",
    skills: [
      "System Design",
      "JWT Authentication",
      "Session-Based Auth",
      "Role-Based Access Control",
      "Real-Time Systems",
      "GenAI Integration",
      "Tesseract OCR",
    ],
  },
]

export const experiences: Experience[] = [
  {
    role: "Full Stack Development Intern",
    company: "3W Business Private Limited",
    location: "Remote",
    period: "Jul 2026 – Aug 2026",
    description:
      "Worked across a multi-repository production ecosystem — React Native CLI mobile app, admin panel, business dashboard, and backend API — hardening security, building a shared design system, and shipping gamification features.",
    tags: ["React Native", "Node.js", "JWT", "Firebase FCM", "Cloudinary", "Git"],
    highlights: [
      "Remediated a critical JWT signature validation flaw and broken access control in crypto payout endpoints; patched authorization leaks in user-to-admin chat APIs.",
      "Engineered a reusable useTheme design system across React Native CLI, Admin Panel, and Business Dashboard with dynamic dark mode and Cloudinary asset optimization.",
      "Fixed socket delivery failures and eliminated duplicate alerts by automating Firebase Cloud Messaging (FCM) token invalidation on logout.",
      "Implemented random prize distribution for quizzes, weekly/monthly entry caps, multi-entry tournament logic, and paginated tournament entry displays.",
      "Coordinated version control, release cycles, and git conflict resolution across 4 micro-repositories.",
    ],
  },
  {
    role: "Vice President of Technology",
    company: "CyberShield — College Cybersecurity Club",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    description:
      "Leading technical direction, event planning, and secure engineering practices for the college cybersecurity club across consecutive leadership tenures.",
    tags: ["Cybersecurity", "Leadership", "Mentorship", "Team Leadership", "Infrastructure"],
    roles: [
      {
        role: "Vice President of Technology",
        period: "Oct 2025 – Present",
        description: "Promoted to lead the technology division, overseeing overall technical strategy, event planning, and student mentorship.",
        highlights: [
          "Promoted from Director to Vice President of Technology.",
          "Guiding club members on cybersecurity fundamentals and secure development practices.",
          "Managing technical infrastructure and hands-on knowledge-sharing sessions.",
        ],
      },
      {
        role: "Director of Technology",
        period: "Jan 2025 – Oct 2025",
        description: "Contributed to establishing the club's technical foundation and initial community operations.",
        highlights: [
          "Assisted in establishing the club's technical foundation.",
          "Participated in technical workshops and team coordination.",
        ],
      },
    ],
  },
]

export const achievements: string[] = [
  "Solved 350+ algorithmic problems on LeetCode, demonstrating strong DSA proficiency.",
  "Achieved 97.27 percentile in the MHT-CET competitive entrance examination.",
  "Secured 96.2% in the SSC board examination.",
  "Promoted from Director to Vice President of Technology at CyberShield.",
]
