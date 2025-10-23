"use client"

interface ReviewBubbleProps {
  text: string
  author: string
}

export function ReviewBubble({ text, author }: ReviewBubbleProps) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-float">
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#E6E6FA] to-[#DDA0DD] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      <p className="text-lg text-[#404040] mb-4 italic leading-relaxed text-pretty">"{text}"</p>
      <p className="text-sm font-semibold text-[#6A5ACD]">— {author}</p>
    </div>
  )
}
