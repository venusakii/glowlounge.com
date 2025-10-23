"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: string
  rating: number
  image: string
  slug: string
}

export function ProductCard({ name, price, rating, image, slug }: ProductCardProps) {
  return (
    <Card className="group p-0 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-balance">{name}</h3>

        

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}>
              ⭐
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-700">{rating}</span>
        </div>

        <Button
          variant="outline"
          className="w-full bg-gradient-to-r from-[#E6E6FA] to-[#DDA0DD] border-0 text-gray-900 hover:opacity-90 transition-all duration-300"
          asChild
        >
          <Link href={`/products/${slug}`}>View Details →</Link>
        </Button>
      </div>
    </Card>
  )
}
