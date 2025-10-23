import { ReviewBubble } from "@/components/review-bubble"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "The Govee LED strips completely transformed my bedroom! The colors are vibrant and the app control is so easy to use.",
      rating: 5,
      product: "Govee Smart LED Strip",
    },
    {
      name: "Michael R.",
      text: "Philips Hue is worth every penny. The quality of light and the ecosystem integration is unmatched.",
      rating: 5,
      product: "Philips Hue Starter Kit",
    },
    {
      name: "Emma L.",
      text: "Nanoleaf panels are like art on my wall. They create the perfect ambiance for movie nights and parties.",
      rating: 5,
      product: "Nanoleaf Shapes",
    },
    {
      name: "David K.",
      text: "Twinkly lights made my holiday decorations magical. The app effects are stunning!",
      rating: 4,
      product: "Twinkly String Lights",
    },
    {
      name: "Jessica T.",
      text: "LIFX bulbs are incredibly bright and the color range is amazing. No hub needed is a huge plus!",
      rating: 5,
      product: "LIFX Color Bulb",
    },
    {
      name: "Ryan P.",
      text: "The Govee Glide Wall Light is a game changer for my gaming setup. Love the flowing effects!",
      rating: 5,
      product: "Govee Glide",
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            See what our customers are saying about their LED lighting experiences
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-800">4.8</span>
          <span className="text-gray-600 font-light">out of 5 stars</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewBubble key={i} {...review} />
          ))}
        </div>
      </div>
    </main>
  )
}
