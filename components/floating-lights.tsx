"use client"

import { useEffect, useState } from "react"

export function FloatingLights() {
  const [lights, setLights] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const newLights = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setLights(newLights)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute w-3 h-3 rounded-full bg-white/30 blur-sm animate-float-up"
          style={{
            left: `${light.x}%`,
            bottom: "-20px",
            animationDelay: `${light.delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}
