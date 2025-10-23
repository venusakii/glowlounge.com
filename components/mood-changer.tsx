"use client"

interface MoodChangerProps {
  currentMood: "calm" | "focus" | "party"
  onMoodChange: (mood: "calm" | "focus" | "party") => void
}

export function MoodChanger({ currentMood, onMoodChange }: MoodChangerProps) {
  const moods = [
    { id: "calm" as const, label: "Calm", emoji: "🌊", color: "from-[#D8F2FF] to-[#E6F3FF]" },
    { id: "focus" as const, label: "Focus", emoji: "🧘", color: "from-[#E6E6FA] to-[#D8BFD8]" },
    { id: "party" as const, label: "Party", emoji: "🎉", color: "from-[#FFB6C1] to-[#FFD700]" },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onMoodChange(mood.id)}
          className={`group relative w-32 h-32 rounded-full bg-gradient-to-br ${mood.color} backdrop-blur-md border-4 transition-all duration-500 ${
            currentMood === mood.id
              ? "border-white shadow-[0_0_40px_rgba(255,255,255,0.6)] scale-110"
              : "border-white/40 hover:border-white/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          }`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{mood.emoji}</span>
            <span className="text-sm font-semibold text-[#6A5ACD]">{mood.label}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
