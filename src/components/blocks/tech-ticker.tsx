"use client"

const techStack = [
  "React",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "WebSockets",
  "Docker",
  "AWS EC2",
  "Nginx",
  "Git",
]

export function TechTicker() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex items-center pt-4">
        <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase opacity-60">
          tech_stack
        </span>
      </div>
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="flex animate-ticker gap-3 whitespace-nowrap px-4 hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center rounded-sm border border-border bg-card/50 px-2.5 py-1 font-mono text-[0.625rem] text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
