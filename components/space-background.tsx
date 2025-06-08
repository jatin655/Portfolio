"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number; color: string }> = []
    const colors = ["#FFFFFF", "#8B5CF6", "#3B82F6", "#EC4899", "#06B6D4"]

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Create nebula particles
    const nebulae: Array<{ x: number; y: number; size: number; opacity: number; speed: number; hue: number }> = []
    for (let i = 0; i < 50; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 60 + 260, // Purple to blue range
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulae.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.size)
        gradient.addColorStop(0, `hsla(${nebula.hue}, 70%, 60%, ${nebula.opacity * 0.8})`)
        gradient.addColorStop(0.5, `hsla(${nebula.hue + 20}, 60%, 50%, ${nebula.opacity * 0.4})`)
        gradient.addColorStop(1, `hsla(${nebula.hue + 40}, 50%, 40%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.size, 0, Math.PI * 2)
        ctx.fill()

        // Move nebula
        nebula.y += nebula.speed * 0.2
        nebula.x += Math.sin(Date.now() * 0.001 + nebula.y * 0.01) * 0.5
        if (nebula.y > canvas.height + nebula.size) {
          nebula.y = -nebula.size
          nebula.x = Math.random() * canvas.width
        }
      })

      // Draw enhanced stars
      stars.forEach((star) => {
        const twinkle = 0.5 + 0.5 * Math.sin(Date.now() * 0.003 * star.speed)

        // Create glow effect
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
        gradient.addColorStop(0, star.color)
        gradient.addColorStop(0.5, star.color + "80")
        gradient.addColorStop(1, star.color + "00")

        ctx.save()
        ctx.globalAlpha = star.opacity * twinkle
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright center
        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Move stars
        star.y += star.speed * 0.3
        if (star.y > canvas.height) {
          star.y = -star.size
          star.x = Math.random() * canvas.width
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - darker and more cyberpunk */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #0a0a0f 0%, #1a0b2e 25%, #16213e 50%, #0f1419 75%, #000000 100%),
            radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)
          `,
        }}
      />

      {/* Neon grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Neon accent lights */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
        animate={{
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Floating cosmic elements with neon glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, #8B5CF6 30%, transparent 70%)",
          boxShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF6, 0 0 60px #8B5CF6",
        }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full"
        style={{
          background: "radial-gradient(circle, #EC4899 0%, #EC4899 30%, transparent 70%)",
          boxShadow: "0 0 15px #EC4899, 0 0 30px #EC4899, 0 0 45px #EC4899",
        }}
        animate={{
          scale: [0, 2, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-5 h-5 rounded-full"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, #06B6D4 30%, transparent 70%)",
          boxShadow: "0 0 25px #06B6D4, 0 0 50px #06B6D4, 0 0 75px #06B6D4",
        }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Cyberpunk data streams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-20 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent opacity-60"
          style={{
            left: `${10 + i * 12}%`,
            top: "0%",
          }}
          animate={{
            y: ["-100px", "100vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Holographic panels */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-20 border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(6, 182, 212, 0.8)", "rgba(6, 182, 212, 0.3)"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-24 h-16 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          borderColor: ["rgba(139, 92, 246, 0.3)", "rgba(139, 92, 246, 0.8)", "rgba(139, 92, 246, 0.3)"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
      </motion.div>

      {/* Energy particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ["#8B5CF6", "#EC4899", "#06B6D4", "#3B82F6"][i % 4],
            boxShadow: `0 0 10px ${["#8B5CF6", "#EC4899", "#06B6D4", "#3B82F6"][i % 4]}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}
