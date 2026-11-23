"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  Code2,
  ShieldCheck,
  Terminal,
} from "lucide-react"
import { education, achievements } from "@/lib/bio-data"
import { fadeUpVariant, cinematicReveal, staggerContainer } from "@/lib/animations"
import { useIsMobile, useAutoHighlight, useAtTopHighlight } from "@/hooks/use-mobile-view-effect"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/layout/section-header"
import { GlowCard } from "@/components/blocks/glow-card"
import { PremiumBackButton } from "@/components/ui/premium-back-button"
import { useNavigationHub } from "@/contexts/navigation-hub-context"

const intro = {
  title: "I build production systems end to end — and I care as much about their edges as their features.",
  paragraphs: [
    "I'm a Computer Engineering student and full-stack developer with a passion for building robust, scalable systems. My experience spans real-time web applications, production mobile apps, backend architecture with Node.js and Python, and database design.",
    "During a full-stack internship, I worked across a four-repository production ecosystem — a React Native CLI mobile app, admin panel, business dashboard, and backend API. I remediated a critical JWT validation flaw, hardened broken access control, and built a shared theme system used across all four repositories.",
    "I enjoy tackling complex engineering challenges — from designing server-authoritative multiplayer game engines with WebSockets to building OCR + LLM verification pipelines. I'm always eager to learn emerging technologies and apply clean, maintainable practices to every project I build.",
  ],
}

const journey = [
  {
    icon: Code2,
    title: "The Foundation",
    text: "Started with a Computer Engineering degree at AISSMS IOIT, Pune, building strong fundamentals in DSA, DBMS, OOP, and system design.",
  },
  {
    icon: Terminal,
    title: "Build & Ship",
    text: "Moved from coursework to real systems: a WebSocket multiplayer game, MERN social platform, Django SaaS, and FastAPI verification pipelines.",
  },
  {
    icon: Briefcase,
    title: "Production Internship",
    text: "Worked across a multi-repository production stack at 3W Business, hardening security, designing a shared theme system, and shipping gamification features.",
  },
  {
    icon: ShieldCheck,
    title: "Security Leadership",
    text: "Vice President of Technology at CyberShield, guiding members on security fundamentals and secure development practices.",
  },
]

export function AboutContent() {
  const { isOpen: isNavHubOpen } = useNavigationHub()
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [loadingDots, setLoadingDots] = useState("")
  const isMobile = useIsMobile()
  const scrollThreshold = 25
  const isAtTop = useAtTopHighlight(isMobile, scrollThreshold)
  const text = "> initiating background check"
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    const hasSeen = localStorage.getItem("has-seen-about-animation")
    if (hasSeen) {
      setSkipAnimation(true)
      setIsTypingComplete(true)
    } else {
      localStorage.setItem("has-seen-about-animation", "true")
    }
  }, [])

  useEffect(() => {
    if (!isTypingComplete) return
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 200)
    return () => clearInterval(interval)
  }, [isTypingComplete])

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-16 lg:pt-28">
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
          title="Profile // About Me"
          subtitle="A deep scan of my technical journey, core philosophy, and the path that led me to full-stack engineering."
        />

        {!skipAnimation && (
          <div className="mt-2 mb-8 font-mono text-xs md:text-sm text-muted-foreground min-h-[24px]">
            <span>
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.03, delay: i * 0.02 }}
                  onAnimationComplete={() => {
                    if (i === text.length - 1) setIsTypingComplete(true)
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span>{loadingDots}</span>
            </span>
          </div>
        )}

        {isTypingComplete && (
          <>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              className="mb-16 grid gap-4 grid-cols-1 lg:grid-cols-4"
            >
              <GlowCard
                as={motion.div}
                variants={cinematicReveal}
                className="rounded-md border border-border glass-premium-bg lg:col-span-3 p-4 md:p-8 lg:p-10"
              >
                <div className="flex h-full flex-col">
                  <span className="mb-4 inline-block font-mono text-[0.625rem] tracking-widest text-primary uppercase">
                    who I am
                  </span>
                  <h1 className="mb-6 text-balance font-medium leading-tight tracking-tight text-foreground text-md md:text-2xl lg:text-3xl">
                    {intro.title}
                  </h1>
                  <div className="flex max-w-full flex-col gap-4 text-justify">
                    {intro.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-xs md:text-base leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </GlowCard>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:flex-col">
                <GlowCard
                  as={motion.div}
                  variants={cinematicReveal}
                  className="flex flex-col justify-center gap-4 rounded-md border border-border glass-premium-bg p-4 md:p-8 lg:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-widest text-muted-foreground uppercase">
                      status
                    </span>
                  </div>
                  <p className="text-sm font-medium">Open to full-time & internship opportunities</p>
                </GlowCard>

                <GlowCard
                  as={motion.div}
                  variants={cinematicReveal}
                  className="flex flex-col justify-center gap-4 rounded-md border border-border glass-premium-bg p-4 md:p-8 lg:p-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[0.625rem] tracking-widest text-muted-foreground uppercase">location</span>
                    <p className="text-sm">Pune, Maharashtra, India</p>
                  </div>
                </GlowCard>
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <SectionHeader
                index={2}
                title="The Journey"
                subtitle="The sequential evolution of my technical mindset and professional focus."
              />

              <div className="flex flex-wrap justify-center gap-4">
                {journey.map((item) => (
                  <JourneyCard key={item.title} item={item} isMobile={isMobile} />
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <SectionHeader
                index={3}
                title="Academic Foundation"
                subtitle="Formal training in computer science and full-stack engineering."
              />

              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <EducationCard key={edu.degree} edu={edu} isMobile={isMobile} />
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <SectionHeader
                index={4}
                title="Milestones"
                subtitle="Practice, competition results, and technical leadership."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={achievement}
                    variants={cinematicReveal}
                    className="flex items-start gap-4 rounded-md border border-border glass-premium-bg p-4 md:p-6"
                  >
                    <span className="mt-0.5 font-mono text-[0.625rem] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </>
        )}
      </div>
      {isTypingComplete && <Footer />}
    </>
  )
}

function JourneyCard({ item, isMobile }: { item: typeof journey[number]; isMobile: boolean }) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <GlowCard
      ref={ref}
      as={motion.div}
      variants={cinematicReveal}
      enableTilt={!isMobile}
      className="group flex w-full flex-col gap-4 rounded-md border glass-premium-bg p-4 md:p-6 transition-all duration-300 md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]"
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-sm border transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-primary-foreground ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-primary border-border"}`}>
        <item.icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <h3 className="font-mono text-sm font-medium text-foreground">{item.title}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground text-justify">{item.text}</p>
    </GlowCard>
  )
}

function EducationCard({ edu, isMobile }: { edu: typeof education[number]; isMobile: boolean }) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <GlowCard
      ref={ref}
      as={motion.div}
      variants={cinematicReveal}
      enableTilt={!isMobile}
      className="group rounded-md border glass-premium-bg p-4 md:p-8 transition-all duration-300"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-primary-foreground ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-primary border-border"}`}>
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

      <p className="mb-4 font-mono text-xs text-primary">{edu.focus}</p>

      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
        {edu.description}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {edu.highlights?.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground text-justify">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
    </GlowCard>
  )
}
