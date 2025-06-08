"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Server, Database, Smartphone, Globe, Palette, Zap, GitBranch, Cloud, Cpu } from "lucide-react"

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0) // 0: floating, 1: converging, 2: logo formed, 3: complete
  const [showText, setShowText] = useState(false)

  // Technology icons with their positions and colors
  const techIcons = [
    { icon: Code, name: "React", color: "#61DAFB", delay: 0 },
    { icon: Server, name: "Node.js", color: "#339933", delay: 0.1 },
    { icon: Database, name: "PostgreSQL", color: "#336791", delay: 0.2 },
    { icon: Smartphone, name: "React Native", color: "#61DAFB", delay: 0.3 },
    { icon: Globe, name: "AWS", color: "#FF9900", delay: 0.4 },
    { icon: Palette, name: "UI/UX", color: "#FF6B6B", delay: 0.5 },
    { icon: Zap, name: "Next.js", color: "#000000", delay: 0.6 },
    { icon: GitBranch, name: "Git", color: "#F05032", delay: 0.7 },
    { icon: Cloud, name: "Cloud", color: "#4285F4", delay: 0.8 },
    { icon: Cpu, name: "TypeScript", color: "#3178C6", delay: 0.9 },
  ]

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 2000) // Start converging after 2s
    const timer2 = setTimeout(() => setStage(2), 4000) // Form logo after 4s
    const timer3 = setTimeout(() => setShowText(true), 4500) // Show text after 4.5s
    const timer4 = setTimeout(() => setStage(3), 6500) // Complete after 6.5s
    const timer5 = setTimeout(() => onComplete(), 7000) // Call onComplete after 7s

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onComplete])

  // Generate random initial positions for floating icons
  const getRandomPosition = (index: number) => {
    const angle = (index / techIcons.length) * Math.PI * 2
    const radius = 300 + Math.random() * 200
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Cyberpunk Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%),
            linear-gradient(135deg, #0a0a0f 0%, #1a0b2e 25%, #16213e 50%, #0f1419 75%, #000000 100%)
          `,
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ["#8B5CF6", "#06B6D4", "#EC4899"][i % 3],
            boxShadow: `0 0 10px ${["#8B5CF6", "#06B6D4", "#EC4899"][i % 3]}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Technology Icons */}
          {techIcons.map((tech, index) => {
            const IconComponent = tech.icon
            const randomPos = getRandomPosition(index)

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  x: randomPos.x,
                  y: randomPos.y,
                  scale: 0,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  x: stage >= 1 ? 0 : randomPos.x,
                  y: stage >= 1 ? 0 : randomPos.y,
                  scale: stage >= 2 ? 0 : 1,
                  rotate: stage >= 1 ? 0 : [0, 360],
                }}
                transition={{
                  duration: stage === 0 ? 2 : 1.5,
                  delay: tech.delay,
                  ease: "easeInOut",
                  rotate: {
                    duration: 2,
                    repeat: stage < 1 ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  },
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    y: stage === 0 ? [0, -10, 0] : 0,
                  }}
                  transition={{
                    y: {
                      duration: 2 + Math.random(),
                      repeat: stage === 0 ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Icon Glow */}
                  <div
                    className="absolute inset-0 rounded-lg blur-lg opacity-60"
                    style={{
                      background: tech.color,
                      transform: "scale(1.5)",
                    }}
                  />

                  {/* Icon Container */}
                  <div
                    className="relative w-16 h-16 rounded-lg flex items-center justify-center border-2"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                      borderColor: tech.color,
                      boxShadow: `0 0 20px ${tech.color}80`,
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: tech.color }} />
                  </div>

                  {/* Tech Name Label */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-white whitespace-nowrap"
                    style={{
                      textShadow: `0 0 10px ${tech.color}`,
                    }}
                    animate={{
                      opacity: stage === 0 ? [0.5, 1, 0.5] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: stage === 0 ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Logo Formation */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Logo Square */}
                <motion.div
                  className="relative w-32 h-32 rounded-2xl border-4 flex items-center justify-center"
                  style={{
                    background: `
                      linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899),
                      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)
                    `,
                    borderColor: "#ffffff",
                    boxShadow: `
                      0 0 40px rgba(139, 92, 246, 0.8),
                      0 0 80px rgba(6, 182, 212, 0.6),
                      0 0 120px rgba(236, 72, 153, 0.4),
                      inset 0 0 40px rgba(255,255,255,0.1)
                    `,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Initials */}
                  <motion.div
                    className="text-4xl font-bold text-white"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.8)",
                      fontFamily: "monospace",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    JS
                  </motion.div>

                  {/* Rotating Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `conic-gradient(from 0deg, #8B5CF6, #06B6D4, #EC4899, #8B5CF6)`,
                      padding: "2px",
                    }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full bg-black rounded-2xl opacity-0" />
                  </motion.div>
                </motion.div>

                {/* Title Text */}
                <AnimatePresence>
                  {showText && (
                    <motion.div
                      className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <motion.h1
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                        style={{
                          background: "linear-gradient(45deg, #8B5CF6, #06B6D4, #EC4899)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        Full Stack Developer
                      </motion.h1>

                      <motion.div
                        className="w-48 h-1 mx-auto bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Progress */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage < 3 ? 1 : 0 }}
          >
            <div className="text-center mb-4">
              <span className="text-cyan-400 font-mono text-sm">INITIALIZING NEURAL INTERFACE...</span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((stage + 1) / 4) * 100}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade Out */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 3 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}
