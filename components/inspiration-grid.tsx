"use client"

export function InspirationGrid() {
  const inspirations = [
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      alt: "LED strip lights bedroom",
    },
    {
      url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
      alt: "Fairy string lights cozy room",
    },
    {
      url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
      alt: "RGB LED gaming setup",
    },
    {
      url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=400&fit=crop",
      alt: "Smart LED bulbs living room",
    },
    {
      url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop",
      alt: "LED string lights decoration",
    },
    {
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=400&fit=crop",
      alt: "LED light panels wall art",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {inspirations.map((item, i) => (
        <div
          key={i}
          className="group relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        >
          <img src={item.url || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  )
}
