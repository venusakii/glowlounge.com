import { GalleryCarousel } from "@/components/gallery-carousel"
import Image from "next/image"

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            See how LED lighting transforms real spaces
          </p>
        </div>

        <div className="mb-20">
          <GalleryCarousel />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1550985616-10810253b84d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
          ].map((src, i) => (
            <div key={i} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
