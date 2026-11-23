"use client"

import { useRef, type ComponentType, type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react"

import { education, experiences, skillCategories, achievements } from "@/lib/bio-data"
import { RESUMES } from "@/config/navigation-data"
import { SectionHeader } from "@/components/layout/section-header"
import { GlowCard } from "@/components/blocks/glow-card"
import { MagneticButton } from "@/components/blocks/magnetic-button"
import { PremiumBackButton } from "@/components/ui/premium-back-button"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { cinematicReveal, staggerContainer, headerReveal, lineReveal } from "@/lib/animations"
import { useIsMobile, useAutoHighlight, useAtTopHighlight } from "@/hooks/use-mobile-view-effect"
import { useNavigationHub } from "@/contexts/navigation-hub-context"

const resumeUrl = RESUMES[0].href

export function ResumeContent() {
  const isMobile = useIsMobile()
  const isAtTop = useAtTopHighlight(isMobile, 25)
  const { isOpen: isNavHubOpen } = useNavigationHub()

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 lg:pt-28">
        <div className="mb-12">
          <PremiumBackButton
            href="/"
            text="Back to Terminal"
            autoHover={isAtTop}
            isVisible={!isNavHubOpen}
          />
        </div>

        <SectionHeader
          index={1}
          title="Archive // Resume"
          subtitle="A complete index of experience, education, skills, and measurable outcomes."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-16 grid gap-4 lg:grid-cols-3"
        >
          <GlowCard
            as={motion.div}
            variants={cinematicReveal}
            className="rounded-md border glass-premium-bg p-6 md:p-8 lg:col-span-2"
          >
            <span className="mb-4 inline-block font-mono text-[0.625rem] tracking-widest text-primary uppercase">
              summary
            </span>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-justify">
              Detail-oriented Computer Engineering student with hands-on full-stack development
              experience across mobile applications, real-time event-driven systems, and cloud
              deployments. Proven track record securing production APIs, building modular UI design
              systems, integrating Generative AI models, and optimizing services across
              multi-repository ecosystems. Solved 350+ problems on LeetCode with strong DSA
              fundamentals.
            </p>
            <div className="mt-8">
              <MagneticButton>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:gap-4"
                >
                  <Download className="h-4 w-4" strokeWidth={2} />
                  Download Resume (PDF)
                </a>
              </MagneticButton>
            </div>
          </GlowCard>

          <GlowCard
            as={motion.div}
            variants={cinematicReveal}
            className="flex flex-col justify-center gap-5 rounded-md border glass-premium-bg p-6 md:p-8"
          >
            <Fact icon={MapPin} label="location" value="Pune, India" />
            <Fact icon={Briefcase} label="status" value="Open to opportunities" />
            <Fact icon={Mail} label="email" value="pankajjagadale28@gmail.com" />
          </GlowCard>
        </motion.div>

        <ResumeBlock index="01" label="work_history" title="Experience">
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <ExperienceCard key={`${exp.role}-${exp.company}`} exp={exp} isMobile={isMobile} />
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock index="02" label="academic_foundation" title="Education">
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <GlowCard
                key={edu.degree}
                as={motion.div}
                variants={cinematicReveal}
                className="rounded-md border glass-premium-bg p-4 md:p-8"
              >
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-primary">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-medium text-foreground">{edu.degree}</h3>
                      <span className="font-mono text-xs text-primary">{edu.school}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                      <MapPin className="h-3 w-3" strokeWidth={1.5} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                      <Calendar className="h-3 w-3" strokeWidth={1.5} />
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="mb-3 font-mono text-xs text-primary">{edu.focus}</p>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
              </GlowCard>
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock index="03" label="capability_matrix" title="Technical Skills">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.label} className="bg-background p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[0.625rem] tracking-widest text-primary uppercase">
                    {category.label}
                  </span>
                  <span className="font-mono text-[0.625rem] text-muted-foreground">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[0.6875rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock index="04" label="signal_log" title="Achievements">
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, i) => (
              <GlowCard
                key={achievement}
                as={motion.div}
                variants={cinematicReveal}
                className="flex items-start gap-4 rounded-md border glass-premium-bg p-4 md:p-6"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-primary">
                  <Award className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {achievement}
                </p>
                <span className="ml-auto font-mono text-[0.5rem] text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </GlowCard>
            ))}
          </div>
        </ResumeBlock>
      </main>
      <Footer />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
      <div className="flex flex-col">
        <span className="font-mono text-[0.5625rem] tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
        <span className="text-sm text-foreground break-all">{value}</span>
      </div>
    </div>
  )
}

function ResumeBlock({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-16 border-t border-border pt-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-8"
      >
        <div className="mb-3 flex items-center gap-4">
          <motion.span variants={headerReveal} className="font-mono text-[0.625rem] font-bold tracking-widest text-primary uppercase">
            {index}
          </motion.span>
          <motion.div variants={lineReveal} className="h-px w-8 origin-left bg-primary/30" aria-hidden="true" />
          <motion.span variants={headerReveal} className="font-mono text-[0.625rem] tracking-widest text-muted-foreground uppercase italic">
            {label}
          </motion.span>
        </div>
        <motion.h2 variants={headerReveal} className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          {title}
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    </section>
  )
}

function ExperienceCard({
  exp,
  isMobile,
}: {
  exp: typeof experiences[number]
  isMobile: boolean
}) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <motion.div
      ref={ref}
      variants={cinematicReveal}
      className={`group rounded-md border bg-card/40 backdrop-blur-md px-4 py-6 md:p-6 lg:p-8 transition-all duration-500 ease-out lg:hover:border-primary/30 lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:shadow-primary/5 ${isActive ? "border-primary/30 -translate-y-1 shadow-lg shadow-primary/5" : "border-border"}`}
    >
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-primary-foreground ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-primary border-border"}`}>
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

      <p className="mb-4 text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
        {exp.description}
      </p>

      {/* If multi-role tree/branch structure (e.g. CyberShield) */}
      {exp.roles && exp.roles.length > 0 ? (
        <div className="relative pl-6 space-y-6 mb-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-border">
          {exp.roles.map((role, rIdx) => (
            <div key={role.role} className="relative group/role">
              {/* Tree Node Dot */}
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
          {exp.highlights && (
            <ul className="mb-4 flex flex-col gap-2">
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

      {exp.tags && (
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.625rem] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
