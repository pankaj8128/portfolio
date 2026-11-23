import type { Metadata } from "next"
import { Navigation } from "@/components/layout/navigation"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, philosophy, and journey of Pankaj Jagadale — full-stack developer.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutContent />
      </main>
    </div>
  )
}
