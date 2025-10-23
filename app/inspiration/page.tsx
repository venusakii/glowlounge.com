import { InspirationGrid } from "@/components/inspiration-grid"

export default function InspirationPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Get inspired by stunning LED lighting setups and creative ideas
          </p>
        </div>

        <InspirationGrid />
      </div>
    </main>
  )
}
