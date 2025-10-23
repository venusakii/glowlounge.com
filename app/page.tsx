"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CookieBanner } from "@/components/cookie-banner"
import { FloatingLights } from "@/components/floating-lights"
import { MoodChanger } from "@/components/mood-changer"
import { ProductCard } from "@/components/product-card"
import { ReviewBubble } from "@/components/review-bubble"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { ComparisonTable } from "@/components/comparison-table"
import { InspirationGrid } from "@/components/inspiration-grid"

export default function Home() {
  const [mood, setMood] = useState<"calm" | "focus" | "party">("calm")
  const [dreamMode, setDreamMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getMoodGradient = () => {
    if (dreamMode) {
      return "from-[#4A148C] via-[#7B1FA2] to-[#E91E63]"
    }
    switch (mood) {
      case "calm":
        return "from-[#D8F2FF] via-[#E6F3FF] to-[#F0F8FF]"
      case "focus":
        return "from-[#E6E6FA] via-[#D8BFD8] to-[#87CEEB]"
      case "party":
        return "from-[#FFB6C1] via-[#FFD700] to-[#FFA07A]"
      default:
        return "from-[#F2E6FF] via-[#FFDDF6] to-[#D8F2FF]"
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div
        className={`fixed inset-0 bg-gradient-to-br ${getMoodGradient()} transition-all duration-[3000ms] ease-in-out animate-gradient-shift`}
      />

      {/* Floating light elements */}
      <FloatingLights />

      {/* Custom cursor trail */}
      <div
        className="pointer-events-none fixed w-8 h-8 rounded-full bg-white/20 blur-xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E6E6FA" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[...Array(20)].map((_, i) => (
                <line
                  key={i}
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="url(#lightGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#6A5ACD] mb-6 text-balance animate-fade-in">
            Your Light Journey
            <br />
            Begins Here
          </h1>
          <p className="text-2xl md:text-3xl text-[#404040] mb-12 max-w-2xl text-pretty">
            Transform Your Space with Light.
            <br />
            Explore smart, aesthetic LED creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-[#6A5ACD] hover:bg-white/30 hover:shadow-[0_0_30px_rgba(106,90,205,0.3)] transition-all duration-300 text-lg px-8"
            >
              Shop Lights ✨
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent backdrop-blur-md border-2 border-white/40 text-[#6A5ACD] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 text-lg px-8"
            >
              View Inspirations →
            </Button>
          </div>

          {/* Dream Mode Toggle */}
          <button
            onClick={() => setDreamMode(!dreamMode)}
            className="mt-12 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-[#6A5ACD] hover:bg-white/30 transition-all duration-300"
          >
            {dreamMode ? "☀️ Day Mode" : "🌙 Dream Mode"}
          </button>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6A5ACD] to-[#9370DB] bg-clip-text text-transparent">
                We Design Glow
              </h2>
              <p className="text-xl text-[#404040] leading-relaxed">
                GlowLounge brings harmony, mood, and magic to everyday lighting. We believe that light is not just
                illumination—it's emotion, atmosphere, and art.
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-[#6A5ACD] to-transparent animate-pulse" />
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="LED strip lights creating ambient glow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        

        {/* Interactive Mood Changer */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold text-[#6A5ACD] mb-8">Mood Changer</h2>
            <p className="text-xl text-[#404040] mb-12">Experience how light transforms atmosphere</p>
            <MoodChanger currentMood={mood} onMoodChange={setMood} />
          </div>
        </section>

        {/* Why Choose GlowLounge */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-[#6A5ACD] mb-16">Why Choose GlowLounge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🌤️", title: "Smart Control", desc: "Control your lights from anywhere with intuitive apps" },
                { icon: "🎨", title: "Endless Color Flow", desc: "Millions of colors to match any mood or moment" },
                { icon: "🕊️", title: "Elegant Design", desc: "Beautiful fixtures that complement your aesthetic" },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#6A5ACD] mb-3">{item.title}</h3>
                  <p className="text-[#404040] leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-[#6A5ACD] mb-16">Light Moments</h2>
            <GalleryCarousel />
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-4 relative min-h-[600px]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-[#6A5ACD] mb-16">What Our Customers Feel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewBubble text="The colors shift like a dream — my home feels alive." author="Sarah M." />
              <ReviewBubble text="These lights make me feel calm and creative." author="James K." />
              <ReviewBubble text="Absolutely magical. The ambiance is perfect for any mood." author="Emily R." />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-[#6A5ACD] mb-16">Find Your Perfect Light</h2>
            <ComparisonTable />
          </div>
        </section>

        {/* Inspiration Feed */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-[#6A5ACD] mb-16">Glow Moodboards</h2>
            <InspirationGrid />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA] via-[#FFB6C1] to-[#DDA0DD] animate-gradient-shift" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-6xl md:text-7xl font-bold text-[#6A5ACD] mb-8 text-balance">
              Make Your Space Glow
            </h2>
            <p className="text-2xl text-[#404040] mb-12">Light up your life with GlowLounge.</p>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-[#6A5ACD] hover:bg-white/30 hover:shadow-[0_0_50px_rgba(219,112,147,0.5)] transition-all duration-300 text-xl px-12 py-6"
            >
              Shop Now →
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-[#6A5ACD] mb-4 [text-shadow:0_0_20px_rgba(106,90,205,0.3)]">
                GlowLounge
              </h3>
              <div className="flex justify-center gap-6 text-[#404040] mb-6">
                <a href="#" className="hover:text-[#6A5ACD] transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-[#6A5ACD] transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-[#6A5ACD] transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-[#6A5ACD] transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="text-center text-sm text-[#404040] space-y-2">
              <p>© 2025 GlowLounge.com — All Rights Reserved.</p>
              <p className="text-xs">
                Amazon Affiliate Partner 🛒 As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
