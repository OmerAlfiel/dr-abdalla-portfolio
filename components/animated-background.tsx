"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0
    const waves: Array<{
      amplitude: number
      frequency: number
      phase: number
      speed: number
      color: string
      opacity: number
    }> = []

    const geometricShapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      type: "triangle" | "square" | "hexagon"
      color: string
    }> = []

    // Initialize waves
    for (let i = 0; i < 5; i++) {
      waves.push({
        amplitude: Math.random() * 50 + 30,
        frequency: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        color: i % 2 === 0 ? "21, 128, 61" : "132, 204, 22",
        opacity: Math.random() * 0.1 + 0.05,
      })
    }

    // Initialize geometric shapes
    for (let i = 0; i < 15; i++) {
      const types: ("triangle" | "square" | "hexagon")[] = ["triangle", "square", "hexagon"]
      geometricShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.1 + 0.02,
        type: types[Math.floor(Math.random() * types.length)],
        color: Math.random() > 0.5 ? "21, 128, 61" : "132, 204, 22",
      })
    }

    const drawShape = (shape: (typeof geometricShapes)[0]) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.globalAlpha = shape.opacity

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size)
      gradient.addColorStop(0, `rgba(${shape.color}, ${shape.opacity * 2})`)
      gradient.addColorStop(1, `rgba(${shape.color}, 0)`)
      ctx.fillStyle = gradient

      ctx.beginPath()
      switch (shape.type) {
        case "triangle":
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.closePath()
          break
        case "square":
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case "hexagon":
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const x = (Math.cos(angle) * shape.size) / 2
            const y = (Math.sin(angle) * shape.size) / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          break
      }
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Dynamic gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const bgOpacity = 0.02 + Math.sin(time * 0.5) * 0.01
      bgGradient.addColorStop(0, `rgba(21, 128, 61, ${bgOpacity})`)
      bgGradient.addColorStop(0.3, `rgba(34, 197, 94, ${bgOpacity * 0.5})`)
      bgGradient.addColorStop(0.7, `rgba(132, 204, 22, ${bgOpacity * 0.3})`)
      bgGradient.addColorStop(1, `rgba(21, 128, 61, ${bgOpacity})`)
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated waves
      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + wave.phase + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.5) * wave.amplitude * 0.3
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const waveGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        waveGradient.addColorStop(0, `rgba(${wave.color}, 0)`)
        waveGradient.addColorStop(0.5, `rgba(${wave.color}, ${wave.opacity})`)
        waveGradient.addColorStop(1, `rgba(${wave.color}, ${wave.opacity * 0.1})`)

        ctx.fillStyle = waveGradient
        ctx.fill()
      })

      // Update and draw geometric shapes
      geometricShapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed
        shape.x += Math.sin(time + shape.y * 0.001) * 0.5
        shape.y += Math.cos(time + shape.x * 0.001) * 0.3

        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        // Pulse opacity
        shape.opacity = (shape.opacity + Math.sin(time * 2 + shape.x * 0.01) * 0.02) * 0.98 + 0.02

        drawShape(shape)
      })

      // Add floating orbs
      for (let i = 0; i < 8; i++) {
        const orbX = canvas.width * 0.1 + (canvas.width * 0.8 * i) / 7 + Math.sin(time + i) * 50
        const orbY = canvas.height * 0.3 + Math.sin(time * 0.7 + i * 0.5) * 100
        const orbSize = 20 + Math.sin(time * 2 + i) * 10
        const orbOpacity = 0.05 + Math.sin(time + i * 0.3) * 0.03

        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize * 2)
        orbGradient.addColorStop(0, `rgba(132, 204, 22, ${orbOpacity})`)
        orbGradient.addColorStop(0.5, `rgba(21, 128, 61, ${orbOpacity * 0.5})`)
        orbGradient.addColorStop(1, `rgba(21, 128, 61, 0)`)

        ctx.beginPath()
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2)
        ctx.fillStyle = orbGradient
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
