"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Calendar, CheckCircle, Shield, Star } from "lucide-react"
import { useRef, useState } from "react"

interface Certificate {
  title: string
  issuer: string
  date: string
  id: string
}

interface FloatingCertificatesProps {
  certificates: Certificate[]
}

const cyberColors = [
  { border: "#f0f", glow: "#f0f", bg: "rgba(40,0,60,0.8)" },
  { border: "#0ff", glow: "#0ff", bg: "rgba(0,30,40,0.8)" },
  { border: "#fff", glow: "#fff", bg: "rgba(40,40,60,0.8)" },
]

export function FloatingCertificates({ certificates }: FloatingCertificatesProps) {
  const sectionRef = useRef(null)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden py-16 px-4">
      {/* Simple animated border glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 40%, #f0f3 0%, transparent 70%)",
          zIndex: 1,
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <div className="text-center mb-12 z-10 relative">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{
            color: "#f0f",
            textShadow: "0 0 12px #f0f, 0 0 24px #0ff",
            letterSpacing: "0.1em",
          }}
        >
          CYBER CERTIFICATES
        </h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 rounded-full" />
      </div>

      {/* Lightweight Cyber Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto z-10 relative">
        {certificates.map((cert, i) => {
          const color = cyberColors[i % cyberColors.length]
          return (
            <motion.div
              key={cert.id}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(cert.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card
                className="p-6 rounded-xl border-2 shadow-lg transition-all duration-300"
                style={{
                  borderColor: hovered === cert.id ? color.border : "#222",
                  background: color.bg,
                  boxShadow: hovered === cert.id
                    ? `0 0 24px 2px ${color.glow}`
                    : "0 2px 12px #000",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Neon border animation */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "inherit",
                    border: `2px solid ${color.border}`,
                    opacity: hovered === cert.id ? 0.5 : 0.15,
                    filter: `drop-shadow(0 0 12px ${color.glow})`,
                  }}
                  animate={{
                    opacity: hovered === cert.id ? [0.5, 0.8, 0.5] : 0.15,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Card Content */}
                <div className="flex items-center mb-4">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{
                      background: hovered === cert.id
                        ? `linear-gradient(135deg, ${color.border}, #222)`
                        : "#181028",
                      boxShadow: hovered === cert.id
                        ? `0 0 16px ${color.glow}`
                        : "none",
                    }}
                  >
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <Badge
                      variant="outline"
                      className="text-xs font-mono"
                      style={{
                        borderColor: color.border,
                        color: color.border,
                        background: "#0002",
                      }}
                    >
                      CYBER VERIFIED
                    </Badge>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: color.border,
                    textShadow: `0 0 8px ${color.glow}`,
                  }}
                >
                  {cert.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4" style={{ color: color.glow }} />
                  <span className="text-base text-fuchsia-200">{cert.issuer}</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-200 font-mono">{cert.date}</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400 font-mono">ID: {cert.id}</span>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-400 font-mono">VERIFIED</span>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}