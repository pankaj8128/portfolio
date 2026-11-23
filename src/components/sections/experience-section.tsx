"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/bio-data"
import { cinematicReveal, staggerContainer } from "@/lib/animations"
import { useIsMobile, useAutoHighlight } from "@/hooks/use-mobile-view-effect"
import { SectionHeader } from "../layout/section-header"

interface ExperienceSectionProps {
  index: number
}

export function ExperienceSection({ index }: ExperienceSectionProps) {
  const isMobile = useIsMobile()

  return (
    <section id="experience" className="border-t border-border" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeader 
          index={index} 
          title="Work Experience" 
          subtitle="A track record of delivering high-impact solutions across diverse technical landscapes."
        />

        <h2 id="experience-heading" className="sr-only">Work Experience</h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.role}-${exp.company}`} exp={exp} index={index} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index, isMobile }: { exp: typeof experiences[number], index: number, isMobile: boolean }) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <motion.div
      ref={ref}
      variants={cinematicReveal}
      className={`group relative flex flex-col gap-6 rounded-md border bg-card/40 backdrop-blur-md px-4 py-6 md:p-6 lg:p-8 transition-all duration-500 ease-out lg:hover:border-primary/30 lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:shadow-primary/5 ${isActive ? "border-primary/30 -translate-y-1 shadow-lg shadow-primary/5" : "border-border translate-y-0 shadow-none"}`}
    >
      {/* Top row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-primary-foreground ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-primary border-border"}`}
          >
            <Briefcase className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
            <span className="font-mono text-xs text-primary">{exp.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:text-right">
          {exp.location && (
            <span className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
              <MapPin className="h-3 w-3" strokeWidth={1.5} />
              {exp.location}
            </span>
          )}
          <span className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
            <Calendar className="h-3 w-3" strokeWidth={1.5} />
            {exp.period}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
        {exp.description}
      </p>

      {/* If multi-role tree/branch structure (e.g. CyberShield) */}
      {exp.roles && exp.roles.length > 0 ? (
        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-border">
          {exp.roles.map((role, rIdx) => (
            <div key={role.role} className="relative group/role">
              {/* Tree Node Dot & Branch */}
              <div className="absolute -left-[23px] top-1.5 flex items-center justify-center">
                <span className={`h-3 w-3 rounded-full border-2 border-background transition-colors ${
                  rIdx === 0 ? "bg-primary ring-2 ring-primary/30" : "bg-muted-foreground/60"
                }`} />
              </div>

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary/70">├──</span>
                  <h4 className="text-sm font-semibold text-foreground">{role.role}</h4>
                  {rIdx === 0 && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.5625rem] text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  )}
                </div>
                <span className="font-mono text-[0.625rem] text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" strokeWidth={1.5} />
                  {role.period}
                </span>
              </div>

              {role.description && (
                <p className="text-xs text-muted-foreground mb-2 pl-4">
                  {role.description}
                </p>
              )}

              {role.highlights && role.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5 pl-4">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground text-justify">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Highlights */}
          {exp.highlights && exp.highlights.length > 0 && (
            <ul className="flex flex-col gap-2">
              {exp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground text-justify">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* Tags */}
      {exp.tags && exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[0.625rem] transition-all duration-500 ease-out lg:group-hover:border-primary/20 lg:group-hover:text-foreground lg:group-hover:-translate-y-0.5 ${isActive ? "border-primary/20 text-foreground -translate-y-0.5" : "border-border text-muted-foreground translate-y-0"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Index marker */}
      <span className="absolute right-8 top-8 font-mono text-[0.625rem] text-muted-foreground/50">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  )
}