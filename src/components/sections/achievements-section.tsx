"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { achievements } from "@/lib/bio-data"
import { cinematicReveal, staggerContainer } from "@/lib/animations"
import { useIsMobile, useAutoHighlight } from "@/hooks/use-mobile-view-effect"
import { SectionHeader } from "../layout/section-header"

interface AchievementsSectionProps {
  index: number
}

export function AchievementsSection({ index }: AchievementsSectionProps) {
  const isMobile = useIsMobile()

  return (
    <section id="achievements" className="border-t border-border" aria-labelledby="achievements-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeader
          index={index}
          title="Achievements"
          subtitle="Consistent practice, competition results, and technical leadership."
        />

        <h2 id="achievements-heading" className="sr-only">Achievements</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          {achievements.map((achievement, i) => (
            <AchievementCard
              key={achievement}
              achievement={achievement}
              index={i}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AchievementCard({
  achievement,
  index,
  isMobile,
}: {
  achievement: string
  index: number
  isMobile: boolean
}) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <motion.div
      ref={ref}
      variants={cinematicReveal}
      className={`group relative flex items-start gap-4 rounded-md border bg-card/40 backdrop-blur-md px-4 py-6 md:p-6 transition-all duration-500 ease-out lg:hover:border-primary/30 lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:shadow-primary/5 ${isActive ? "border-primary/30 -translate-y-1 shadow-lg shadow-primary/5" : "border-border translate-y-0 shadow-none"}`}
    >
      <span className="absolute right-4 top-3 font-mono text-[0.5rem] tracking-widest text-muted-foreground/30">
        [ ACH_{String(index + 1).padStart(2, "0")} ]
      </span>

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-primary-foreground ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-primary border-border"}`}
      >
        <Trophy className="h-4 w-4" strokeWidth={1.5} />
      </div>

      <p className="pt-1 text-sm leading-relaxed text-muted-foreground text-justify">
        {achievement}
      </p>
    </motion.div>
  )
}
