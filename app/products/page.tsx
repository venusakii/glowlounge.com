import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  const products = [
    {
      name: "Govee TV Backlight 3 Lite",
      price: "$63.99",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/71MfcCcZzcL._AC_SX679_.jpg",
      slug: "govee-tv-backlight-3-lite",
    },
    {
      name: "Philips Hue Gradient LightStrip",
      price: "$199.99",
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/71fJ3cJekrL._AC_SX679_.jpg",
      slug: "philips-hue-gradient-lightstrip",
    },
    {
      name: "Philips Hue Bluetooth Lightstrip",
      price: "$79.99",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61CBFJoNuPL._AC_SX679_.jpg",
      slug: "philips-hue-bluetooth-lightstrip",
    },
    {
      name: "Nanoleaf Addressable Lightstrip",
      price: "$129.99",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/71XEIfEQM5L._AC_SX679_.jpg",
      slug: "nanoleaf-addressable-lightstrip",
    },
    {
      name: "Nanoleaf Multicolor Permanent Lightstrip",
      price: "$249.99",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/614-39E0RXL._AC_SX679_.jpg",
      slug: "nanoleaf-multicolor-permanent-lightstrip",
    },
    {
      name: "DAYBETTER Smart LED Strip Lights",
      price: "$29.99",
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/71Nj6dqjNsL._AC_SX679_.jpg",
      slug: "daybetter-smart-led-strip-lights",
    },
    {
      name: "KSIPZE LED Strip Lights",
      price: "$24.99",
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/81eZvunrmFL._AC_SX679_.jpg",
      slug: "ksipze-led-strip-lights",
    },
    {
      name: "Govee LED Strip Lights for Bedroom",
      price: "$59.99",
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/71tCsRGLV0L._AC_SX679_.jpg",
      slug: "govee-led-strip-lights-bedroom",
    },
    {
      name: "NOVOSTELLA Landscape Floodlights",
      price: "$89.99",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/71oWvXsXFNL._AC_SX679_.jpg",
      slug: "novostella-landscape-floodlights",
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover premium LED lighting solutions from the world's leading brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </main>
  )
}
