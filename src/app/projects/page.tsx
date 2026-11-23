import type { Metadata } from "next"
import { ProjectsPageContent } from "./projects-content"

export const metadata: Metadata = {
  title: "Projects",
  description: "Detailed project showcase with descriptions, tech stacks, and links.",
}

export default function ProjectsPage() {
  return <ProjectsPageContent />
}
