"use client"

import { useEffect, useRef } from "react"

// Minimal, playful black & white space with floating cartoon astronauts

const ASTRONAUTS = [
  {
    // Top right
    x: 0.7,
    y: 0.13,
    size: 0.22,
    angle: 18,
    flip: false,
  },
  {
    // Left
    x: 0.13,
    y: 0.38,
    size: 0.22,
    angle: -18,
    flip: true,
  },
  {
    // Bottom right (half out)
    x: 0.85,
    y: 0.85,
    size: 0.22,
    angle: 12,
    flip: false,
  },
]

function drawAstronaut(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number, flip: boolean) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate((angle * Math.PI) / 180)
  if (flip) ctx.scale(-1, 1)

  // Body
  ctx.beginPath()
  ctx.ellipse(0, 0, size * 0.32, size * 0.22, 0, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#222"
  ctx.stroke()

  // Head
  ctx.beginPath()
  ctx.arc(0, -size * 0.23, size * 0.13, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()

  // Visor
  ctx.beginPath()
  ctx.arc(0, -size * 0.23, size * 0.11, Math.PI * 0.15, Math.PI * 1.85)
  ctx.fillStyle = "#111"
  ctx.fill()
  ctx.stroke()

  // Visor shine
  ctx.beginPath()
  ctx.arc(-size * 0.04, -size * 0.27, size * 0.03, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.globalAlpha = 0.7
  ctx.fill()
  ctx.globalAlpha = 1

  // Left arm
  ctx.save()
  ctx.rotate(-0.7)
  ctx.beginPath()
  ctx.ellipse(-size * 0.18, size * 0.03, size * 0.07, size * 0.025, 0, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // Right arm
  ctx.save()
  ctx.rotate(0.7)
  ctx.beginPath()
  ctx.ellipse(size * 0.18, size * 0.03, size * 0.07, size * 0.025, 0, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // Left leg
  ctx.save()
  ctx.rotate(-0.3)
  ctx.beginPath()
  ctx.ellipse(-size * 0.09, size * 0.18, size * 0.05, size * 0.025, 0, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // Right leg
  ctx.save()
  ctx.rotate(0.3)
  ctx.beginPath()
  ctx.ellipse(size * 0.09, size * 0.18, size * 0.05, size * 0.025, 0, 0, Math.PI * 2)
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // "Esc" label
  ctx.save()
  ctx.font = `${size * 0.09}px monospace`
  ctx.fillStyle = "#222"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.rotate(-0.08)
  ctx.fillText("Esc", 0, size * 0.04)
  ctx.restore()

  // Backpack
  ctx.save()
  ctx.beginPath()
  ctx.rect(-size * 0.13, size * 0.01, size * 0.08, size * 0.07)
  ctx.fillStyle = "#fff"
  ctx.strokeStyle = "#222"
  ctx.lineWidth = 2
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  ctx.restore()
}

export function DarkFluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    let t = 0
    const animate = () => {
      t += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Black background
      ctx.fillStyle = "#111"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Stars
      for (let i = 0; i < 60; i++) {
        ctx.save()
        ctx.globalAlpha = 0.7 + Math.sin(t * 0.01 + i) * 0.2
        ctx.beginPath()
        ctx.arc(
          (canvas.width * ((i * 73) % 1000)) / 1000,
          (canvas.height * ((i * 97) % 1000)) / 1000,
          Math.random() * 1.2 + 0.5,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "#fff"
        ctx.fill()
        ctx.restore()
      }

      // Astronauts (float gently)
      ASTRONAUTS.forEach((a, idx) => {
        const floatY = Math.sin(t * 0.008 + idx * 2) * 12
        const floatX = Math.cos(t * 0.008 + idx * 2) * 8
        drawAstronaut(
          ctx,
          canvas.width * a.x + floatX,
          canvas.height * a.y + floatY,
          Math.min(canvas.width, canvas.height) * a.size,
          a.angle + Math.sin(t * 0.006 + idx) * 4,
          a.flip
        )
      })

      animationId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (animationId.current) cancelAnimationFrame(animationId.current)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}