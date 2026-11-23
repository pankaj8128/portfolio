import type { Metadata } from "next"
import { ResumeContent } from "./resume-content"

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education, skills, and achievements of Pankaj Jagadale.",
}

export default function ResumePage() {
  return <ResumeContent />
}
