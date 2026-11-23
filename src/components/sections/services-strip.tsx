"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Server, LayoutTemplate, Database, Bot } from "lucide-react"
import { cinematicReveal, staggerContainer } from "@/lib/animations"
import { useIsMobile, useAutoHighlight } from "@/hooks/use-mobile-view-effect"
import { SectionHeader } from "../layout/section-header"

interface ServicesStripProps {
  index: number
}

const services = [
  {
    icon: Server,
    title: "Backend Development",
    tags: ["Node.js", "Django", "APIs"],
    description:
      "Robust, scalable server-side applications with clean architecture, secure REST APIs, and real-time communication via WebSockets.",
  },
  {
    icon: LayoutTemplate,
    title: "Full-Stack & Mobile",
    tags: ["React", "React Native", "Vite"],
    description:
      "End-to-end web and mobile applications — from interactive React frontends to production-grade backends and deployment.",
  },
  {
    icon: Database,
    title: "Database Design",
    tags: ["PostgreSQL", "MongoDB", "SQL"],
    description:
      "Efficient schemas and optimized queries across PostgreSQL, MongoDB, MySQL, and SQLite, with integrity-first data layers.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    tags: ["LLMs", "OCR", "GenAI"],
    description:
      "AI-assisted workflows from OCR document processing and LLM analysis to GenAI-driven recommendations and automated pipelines.",
  },
]

export function ServicesStrip({ index }: ServicesStripProps) {
  const isMobile = useIsMobile()

  return (
    <section id="services" className="border-t border-border" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeader
          index={index}
          title="What I Do"
          subtitle="Specialized technical solutions designed to scale your vision and accelerate impact."
        />

        <h2 id="services-heading" className="sr-only">Services</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, isMobile }: { service: typeof services[number]; isMobile: boolean }) {
  const ref = useRef(null)
  const isActive = useAutoHighlight(ref, isMobile)

  return (
    <motion.div
      ref={ref}
      variants={cinematicReveal}
      className={`relative bg-background lg:hover:z-10 ${isActive ? "z-10" : "z-0"}`}
    >
      <div className={`group flex h-full flex-col gap-6 p-4 lg:p-6 transition-all duration-500 ease-out lg:hover:bg-card lg:hover:-translate-y-1 lg:hover:shadow-xl lg:hover:shadow-primary/10 ${isActive ? "bg-card -translate-y-1 shadow-xl shadow-primary/10" : "bg-background translate-y-0 shadow-none"}`}>
        <div className="flex items-start justify-between">
          <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <span className="font-mono text-[0.625rem] text-muted-foreground">{"//"}</span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-md lg:text-lg font-medium tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="text-xs lg:text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-sm border px-2 py-0.5 font-mono text-[0.625rem] transition-all duration-500 ease-out lg:group-hover:border-primary/30 lg:group-hover:text-foreground lg:group-hover:-translate-y-0.5 ${isActive ? "border-primary/30 text-foreground -translate-y-0.5" : "border-border text-muted-foreground translate-y-0"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
