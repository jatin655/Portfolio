"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Calendar, Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react"
import { useRef } from "react"

interface FluidContactProps {
  personalData: {
    name: string
    email: string
    phone: string
    location: string
    github: string
    linkedin: string
  }
}

export function FluidContact({ personalData }: FluidContactProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background gradients and floating orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 80%, #533483 100%)",
            opacity: 0.95,
          }}
        />
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              background: `radial-gradient(circle, ${
                ["#53348344", "#0f346044", "#16213e44", "#1a1a2e44"][i % 4]
              } 0%, transparent 70%)`,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 10}%`,
              zIndex: 0,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(26, 26, 46, 0.8)",
              }}
            >
              LET'S CONNECT
            </h2>
            <motion.div
              className="w-40 h-1 mx-auto bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 rounded-full"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Main Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info & Actions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            >
              <div
                className="rounded-2xl p-8 backdrop-blur-sm border"
                style={{
                  background: "rgba(26, 26, 46, 0.7)",
                  border: "1px solid rgba(26, 26, 46, 0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-slate-400" />
                  Get In Touch
                </h3>
                <div className="space-y-4 mb-6">
                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-lg"
                    style={{ background: "rgba(26, 26, 46, 0.2)" }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(26, 26, 46, 0.3)" }}
                  >
                    <Mail className="w-5 h-5 text-slate-400" />
                    <span className="text-gray-300">{personalData.email}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-lg"
                    style={{ background: "rgba(26, 26, 46, 0.2)" }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(26, 26, 46, 0.3)" }}
                  >
                    <Phone className="w-5 h-5 text-slate-400" />
                    <span className="text-gray-300">{personalData.phone}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-lg"
                    style={{ background: "rgba(26, 26, 46, 0.2)" }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(26, 26, 46, 0.3)" }}
                  >
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="text-gray-300">{personalData.location}</span>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalData.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border border-slate-500/50"
                      style={{
                        boxShadow: "0 0 20px rgba(26, 26, 46, 0.4)",
                      }}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="block">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-slate-600/50 text-slate-300 hover:bg-slate-800/20"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Social Links & Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div
                className="rounded-2xl p-8 backdrop-blur-sm border"
                style={{
                  background: "rgba(22, 33, 62, 0.7)",
                  border: "1px solid rgba(22, 33, 62, 0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <User className="w-5 h-5 mr-3 text-slate-400" />
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Github, href: personalData.github, label: "GitHub", color: "#1a1a2e" },
                    { icon: Linkedin, href: personalData.linkedin, label: "LinkedIn", color: "#16213e" },
                    { icon: Mail, href: `mailto:${personalData.email}`, label: "Email", color: "#0f3460" },
                    { icon: Phone, href: `tel:${personalData.phone}`, label: "Phone", color: "#533483" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex flex-col items-center p-4 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: `0 10px 25px ${social.color}30`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6 text-slate-300 mb-2" />
                      <span className="text-sm text-slate-400">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div
                className="rounded-2xl p-6 backdrop-blur-sm border"
                style={{
                  background: "rgba(15, 52, 96, 0.7)",
                  border: "1px solid rgba(15, 52, 96, 0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-slate-400" />
                  Availability
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="text-green-400 font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I’m currently open to full-time opportunities as a Full Stack Developer. Feel free to connect if you’re hiring or have a role that matches my skills!!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          >
            <blockquote className="text-lg text-slate-400 italic max-w-2xl mx-auto">
              "Ready to turn ideas into impactful solutions. Let’s connect and explore how we can build something exceptional—together."
            </blockquote>
            <div className="mt-4 text-slate-500">— {personalData.name}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}