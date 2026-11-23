"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { headerReveal, staggerContainer } from "@/lib/animations"

const terminalLines = [
  { type: "comment", text: "# ws_server.js" },
  { type: "import", text: "import express from 'express'" },
  { type: "import", text: "import { WebSocketServer } from 'ws'" },
  { type: "blank", text: "" },
  { type: "code", text: "const app = express()" },
  { type: "code", text: "const wss = new WebSocketServer({ server })" },
  { type: "blank", text: "" },
  { type: "code", text: "wss.on('connection', (socket) => {" },
  { type: "code", text: "    socket.on('draw', (stroke) => {" },
  { type: "code", text: "        broadcast(stroke)   // server-authoritative" },
  { type: "code", text: "    })" },
  { type: "code", text: "})" },
  { type: "blank", text: "" },
  { type: "output", text: ">>> listening on :3000" },
  { type: "output", text: ">>> room SCRIBBL-42 created" },
  { type: "output", text: ">>> 8 players synced [12ms]" },
]

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          return 0
        }
        return prev + 1
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  const getLineColor = (type: string) => {
    switch (type) {
      case "comment":
        return "text-muted-foreground"
      case "import":
        return "text-primary"
      case "output":
        return "text-emerald-400"
      default:
        return "text-foreground"
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="flex h-full flex-col overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <motion.span variants={headerReveal} className="h-2.5 w-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
          <motion.span variants={headerReveal} className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
          <motion.span variants={headerReveal} className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" aria-hidden="true" />
        </div>
        <motion.span variants={headerReveal} className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
          ws_server.js
        </motion.span>
      </div>
      <div className="flex-1 overflow-hidden p-4" aria-label="Terminal animation showing a Node.js WebSocket server">
        <pre className="font-mono text-[0.71875rem] lg:text-xs leading-relaxed">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={`${line.text}-${i}`} className={`${getLineColor(line.type)} transition-opacity duration-200`}>
              {line.text || "\u00A0"}
            </div>
          ))}
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-primary" aria-hidden="true" />
        </pre>
      </div>
    </motion.div>
  )
}
