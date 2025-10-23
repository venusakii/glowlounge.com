"use client"

import { useState } from "react"

export function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { label: "Bedroom Glow", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=400&fit=crop" },
    { label: "Studio Mood", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop" },
    { label: "Cozy Corners", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=400&fit=crop" },
    { label: "Gaming Setup", url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=400&fit=crop" },
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, i) => (
            <div key={i} className="min-w-full relative h-96">
              <img src={image.url || "/placeholder.svg"} alt={image.label} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-[#6A5ACD] w-8 shadow-[0_0_10px_rgba(106,90,205,0.5)]"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
