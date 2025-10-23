"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
    // Create light wave effect
    const wave = document.createElement("div")
    wave.className = "fixed inset-0 pointer-events-none z-50"
    wave.innerHTML = '<div class="absolute inset-0 bg-white/20 animate-ping"></div>'
    document.body.appendChild(wave)
    setTimeout(() => wave.remove(), 1000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
        <p className="text-[#404040] mb-4 leading-relaxed">
          This website uses cookies to enhance your browsing experience. By continuing, you consent to our use of
          cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-[#6A5ACD] hover:bg-white/30 hover:shadow-[0_0_30px_rgba(106,90,205,0.3)] transition-all duration-300"
        >
          Accept Glow ✨
        </Button>
      </div>
    </div>
  )
}
