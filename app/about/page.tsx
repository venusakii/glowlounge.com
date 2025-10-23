import { Sparkles, Heart, Shield, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About GlowLounge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Where Light Meets Emotion
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              GlowLounge was born from a simple belief: lighting is not just about illumination—it's about creating
              atmosphere, emotion, and experiences. We curate the finest LED lighting solutions that transform spaces
              into living, breathing environments.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              From smart LED strips to enchanting fairy lights, every product we feature is carefully selected to bring
              magic into your home, office, or creative space.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop"
              alt="LED ambient lighting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-gray-800">Why Choose GlowLounge</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Curated Selection",
                description: "Only the best LED products from trusted brands like Govee, Philips Hue, and Nanoleaf",
              },
              {
                icon: Heart,
                title: "Passion for Light",
                description: "We don't just sell lights—we help you create emotional experiences through illumination",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Every product is vetted for quality, durability, and stunning visual impact",
              },
              {
                icon: Zap,
                title: "Smart Solutions",
                description: "App-controlled, voice-activated, and energy-efficient lighting for modern living",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <h2 className="font-serif text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            To illuminate lives by making premium LED lighting accessible, inspiring, and transformative. We believe
            everyone deserves to live in spaces that reflect their mood, enhance their creativity, and bring joy to
            their daily lives.
          </p>
        </div>
      </div>
    </main>
  )
}
