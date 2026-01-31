"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  type: "bot" | "workflow" | "data" | "ai" | "receptionist"
  rotation: number
  rotationSpeed: number
  pulsePhase: number
}

interface Connection {
  from: number
  to: number
  progress: number
  speed: number
  active: boolean
  particles: { progress: number; speed: number }[]
}

interface FloatingIcon {
  x: number
  y: number
  vx: number
  vy: number
  type: "bot" | "phone" | "chat" | "gear" | "brain"
  scale: number
  opacity: number
  rotation: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nodes: Node[] = []
    let connections: Connection[] = []
    let floatingIcons: FloatingIcon[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = []
      connections = []
      floatingIcons = []
      const nodeCount = Math.floor((canvas.width * canvas.height) / 40000)

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 3 + 2,
          type: ["bot", "workflow", "data", "ai", "receptionist"][
            Math.floor(Math.random() * 5)
          ] as Node["type"],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }

      // Create connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 250 && Math.random() > 0.6) {
            connections.push({
              from: i,
              to: j,
              progress: Math.random(),
              speed: 0.003 + Math.random() * 0.004,
              active: Math.random() > 0.4,
              particles: Array.from({ length: 3 }, () => ({
                progress: Math.random(),
                speed: 0.002 + Math.random() * 0.003,
              })),
            })
          }
        }
      }

      // Create floating AI icons
      const iconCount = Math.floor((canvas.width * canvas.height) / 200000)
      for (let i = 0; i < iconCount; i++) {
        floatingIcons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          type: ["bot", "phone", "chat", "gear", "brain"][
            Math.floor(Math.random() * 5)
          ] as FloatingIcon["type"],
          scale: 0.6 + Math.random() * 0.4,
          opacity: 0.15 + Math.random() * 0.15,
          rotation: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawIcon = (icon: FloatingIcon) => {
      const isDark = document.documentElement.classList.contains("dark")
      const baseColor = isDark ? "96, 165, 250" : "37, 99, 235"
      
      ctx.save()
      ctx.translate(icon.x, icon.y)
      ctx.rotate(icon.rotation)
      ctx.scale(icon.scale, icon.scale)
      ctx.globalAlpha = icon.opacity
      ctx.strokeStyle = `rgba(${baseColor}, 0.6)`
      ctx.lineWidth = 1.5
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      const size = 24

      switch (icon.type) {
        case "bot":
          // Robot head
          ctx.beginPath()
          ctx.roundRect(-size / 2, -size / 2 + 4, size, size - 4, 4)
          ctx.stroke()
          // Eyes
          ctx.beginPath()
          ctx.arc(-size / 4, 0, 3, 0, Math.PI * 2)
          ctx.arc(size / 4, 0, 3, 0, Math.PI * 2)
          ctx.stroke()
          // Antenna
          ctx.beginPath()
          ctx.moveTo(0, -size / 2 + 4)
          ctx.lineTo(0, -size / 2 - 4)
          ctx.arc(0, -size / 2 - 6, 3, 0, Math.PI * 2)
          ctx.stroke()
          break

        case "phone":
          // Phone receiver
          ctx.beginPath()
          ctx.moveTo(-size / 2, -size / 3)
          ctx.quadraticCurveTo(-size / 2, size / 3, -size / 4, size / 3)
          ctx.moveTo(size / 2, -size / 3)
          ctx.quadraticCurveTo(size / 2, size / 3, size / 4, size / 3)
          ctx.moveTo(-size / 4, size / 3)
          ctx.lineTo(size / 4, size / 3)
          ctx.stroke()
          // Sound waves
          ctx.beginPath()
          ctx.arc(0, 0, size / 4, -Math.PI / 4, Math.PI / 4)
          ctx.moveTo(0, 0)
          ctx.arc(0, 0, size / 2.5, -Math.PI / 4, Math.PI / 4)
          ctx.stroke()
          break

        case "chat":
          // Chat bubble
          ctx.beginPath()
          ctx.roundRect(-size / 2, -size / 2, size, size * 0.7, 4)
          ctx.stroke()
          // Tail
          ctx.beginPath()
          ctx.moveTo(-size / 4, size * 0.2)
          ctx.lineTo(-size / 3, size / 2)
          ctx.lineTo(0, size * 0.2)
          ctx.stroke()
          // Dots
          ctx.beginPath()
          ctx.arc(-size / 4, -size / 6, 2, 0, Math.PI * 2)
          ctx.arc(0, -size / 6, 2, 0, Math.PI * 2)
          ctx.arc(size / 4, -size / 6, 2, 0, Math.PI * 2)
          ctx.fill()
          break

        case "gear":
          // Gear
          const teeth = 6
          ctx.beginPath()
          for (let i = 0; i < teeth * 2; i++) {
            const angle = (i * Math.PI) / teeth
            const r = i % 2 === 0 ? size / 2.2 : size / 3
            const x = Math.cos(angle) * r
            const y = Math.sin(angle) * r
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(0, 0, size / 6, 0, Math.PI * 2)
          ctx.stroke()
          break

        case "brain":
          // Brain shape
          ctx.beginPath()
          ctx.arc(-size / 4, -size / 6, size / 4, Math.PI * 0.5, Math.PI * 1.5)
          ctx.arc(size / 4, -size / 6, size / 4, -Math.PI * 0.5, Math.PI * 0.5)
          ctx.arc(-size / 4, size / 6, size / 4, Math.PI * 0.5, Math.PI * 1.5)
          ctx.arc(size / 4, size / 6, size / 4, -Math.PI * 0.5, Math.PI * 0.5)
          ctx.stroke()
          // Neural connections
          ctx.beginPath()
          ctx.moveTo(-size / 4, 0)
          ctx.lineTo(size / 4, 0)
          ctx.moveTo(0, -size / 4)
          ctx.lineTo(0, size / 4)
          ctx.stroke()
          break
      }

      ctx.restore()
    }

    const drawNode = (node: Node) => {
      const isDark = document.documentElement.classList.contains("dark")
      const pulse = Math.sin(time * 0.003 + node.pulsePhase) * 0.3 + 0.7

      ctx.save()
      ctx.translate(node.x, node.y)
      ctx.rotate(node.rotation)

      // Node glow
      const glowRadius = node.radius * 4 * pulse
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius)
      
      let color: string
      if (node.type === "bot") {
        color = isDark ? "96, 165, 250" : "37, 99, 235"
      } else if (node.type === "workflow") {
        color = isDark ? "167, 139, 250" : "124, 58, 237"
      } else if (node.type === "ai") {
        color = isDark ? "52, 211, 153" : "16, 185, 129"
      } else if (node.type === "receptionist") {
        color = isDark ? "251, 191, 36" : "245, 158, 11"
      } else {
        color = isDark ? "147, 197, 253" : "59, 130, 246"
      }

      gradient.addColorStop(0, `rgba(${color}, ${0.4 * pulse})`)
      gradient.addColorStop(0.5, `rgba(${color}, ${0.1 * pulse})`)
      gradient.addColorStop(1, `rgba(${color}, 0)`)
      
      ctx.beginPath()
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Core node
      ctx.beginPath()
      ctx.arc(0, 0, node.radius * pulse, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color}, ${0.8 * pulse})`
      ctx.fill()

      // Inner bright core
      ctx.beginPath()
      ctx.arc(0, 0, node.radius * 0.4 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * pulse})`
      ctx.fill()

      ctx.restore()
    }

    const drawConnection = (conn: Connection) => {
      const isDark = document.documentElement.classList.contains("dark")
      const from = nodes[conn.from]
      const to = nodes[conn.to]
      const baseColor = isDark ? "96, 165, 250" : "37, 99, 235"

      // Calculate distance for opacity falloff
      const dx = to.x - from.x
      const dy = to.y - from.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const opacity = Math.max(0, 1 - distance / 300)

      // Draw curved connection line
      const midX = (from.x + to.x) / 2
      const midY = (from.y + to.y) / 2 - 20
      
      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      ctx.quadraticCurveTo(midX, midY, to.x, to.y)
      ctx.strokeStyle = `rgba(${baseColor}, ${0.08 * opacity})`
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw animated data particles along the curve
      if (conn.active) {
        conn.particles.forEach((particle) => {
          const t = particle.progress
          // Quadratic bezier formula
          const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * midX + t * t * to.x
          const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * midY + t * t * to.y

          // Particle glow
          const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
          particleGradient.addColorStop(0, `rgba(${baseColor}, ${0.8 * opacity})`)
          particleGradient.addColorStop(0.5, `rgba(${baseColor}, ${0.3 * opacity})`)
          particleGradient.addColorStop(1, `rgba(${baseColor}, 0)`)
          
          ctx.beginPath()
          ctx.arc(x, y, 8, 0, Math.PI * 2)
          ctx.fillStyle = particleGradient
          ctx.fill()

          // Bright core
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * opacity})`
          ctx.fill()
        })
      }
    }

    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw floating icons (background layer)
      floatingIcons.forEach((icon) => {
        icon.x += icon.vx
        icon.y += icon.vy
        icon.rotation += 0.002

        // Wrap around edges
        if (icon.x < -50) icon.x = canvas.width + 50
        if (icon.x > canvas.width + 50) icon.x = -50
        if (icon.y < -50) icon.y = canvas.height + 50
        if (icon.y > canvas.height + 50) icon.y = -50

        drawIcon(icon)
      })

      // Update and draw connections
      connections.forEach((conn) => {
        if (conn.active) {
          conn.particles.forEach((particle) => {
            particle.progress += particle.speed
            if (particle.progress > 1) {
              particle.progress = 0
            }
          })
        }
        if (!conn.active && Math.random() > 0.997) {
          conn.active = true
        }
        drawConnection(conn)
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.rotation += node.rotationSpeed

        // Bounce off edges with padding
        if (node.x < 20 || node.x > canvas.width - 20) node.vx *= -1
        if (node.y < 20 || node.y > canvas.height - 20) node.vy *= -1

        drawNode(node)
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  )
}
