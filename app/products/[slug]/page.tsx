import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart } from "lucide-react"

// Product data
const products = [
    {
        slug: "govee-tv-backlight-3-lite",
        name: "Govee TV Backlight 3 Lite",
        price: "$63.99",
        rating: 4.8,
        reviews: 12453,
        image: "https://m.media-amazon.com/images/I/71MfcCcZzcL._AC_SX679_.jpg",
        description:
            "Enhance your TV viewing with Govee TV Backlight 3 Lite. Features fish-eye correction and RGBICW technology for vivid, accurate colors synced to your screen, controlled via app or voice.",
        features: [
            "Fish-eye correction for accurate color matching",
            "RGBICW with warm white chip for purer tones",
            "App and voice control with Alexa & Google Assistant",
            "Govee DreamView syncing with other Govee lights",
            "Black bar elimination and blank screen detection",
            "Gravitational hanging design for easy installation"
        ],
        specs: {
            length: "11.8ft / 3.6m",
            voltage: "12V",
            power: "24W",
            connectivity: "WiFi 2.4GHz"
        },
        amazonLink: "https://www.amazon.com/Govee-Backlight-Fish-Eye-Correction-Function/dp/B0CHS2BGHY"
    },
    {
        slug: "philips-hue-gradient-lightstrip",
        name: "Philips Hue Gradient LightStrip",
        price: "$199.99",
        rating: 4.7,
        reviews: 8932,
        image: "https://m.media-amazon.com/images/I/71fJ3cJekrL._AC_SX679_.jpg",
        description:
            "Create immersive lighting with Philips Hue Gradient LightStrip. Offers dynamic color gradients and smart home integration for a seamless ambiance experience.",
        features: [
            "Dynamic color gradients for immersive effects",
            "Works with Alexa, Google, Apple HomeKit",
            "Sync with movies, music, and games",
            "Control from anywhere via app",
            "Flexible and cuttable design",
            "Long lifespan - up to 25,000 hours"
        ],
        specs: {
            length: "6.6ft / 2m",
            brightness: "1600 lumens",
            connectivity: "Bluetooth & Zigbee",
            power: "20W"
        },
        amazonLink: "https://www.amazon.com/Philips-Hue-Gradient-LightStrip-Assistant/dp/B08P2D215V"
    },
    {
        slug: "philips-hue-bluetooth-lightstrip",
        name: "Philips Hue Bluetooth Lightstrip",
        price: "$79.99",
        rating: 4.6,
        reviews: 5632,
        image: "https://m.media-amazon.com/images/I/61CBFJoNuPL._AC_SX679_.jpg",
        description:
            "Philips Hue Bluetooth Lightstrip offers vibrant colors and easy setup without a hub. Control via Bluetooth or integrate with your smart home for enhanced functionality.",
        features: [
            "Bluetooth-enabled for easy setup",
            "16 million colors and white tones",
            "Works with Alexa & Google Assistant",
            "Extendable up to 33ft",
            "Flexible and cuttable design",
            "App control for custom scenes"
        ],
        specs: {
            length: "6.6ft / 2m",
            brightness: "1600 lumens",
            connectivity: "Bluetooth & Zigbee",
            power: "20W"
        },
        amazonLink: "https://www.amazon.com/Philips-Hue-Bluetooth-Lightstrip-Compatible/dp/B08CKJWSFS"
    },
    {
        slug: "nanoleaf-addressable-lightstrip",
        name: "Nanoleaf Addressable Lightstrip",
        price: "$129.99",
        rating: 4.5,
        reviews: 3421,
        image: "https://m.media-amazon.com/images/I/71XEIfEQM5L._AC_SX679_.jpg",
        description:
            "Nanoleaf Addressable Lightstrip delivers immersive backlighting for TVs and monitors with individually addressable LEDs for stunning effects and smart home integration.",
        features: [
            "Individually addressable LEDs",
            "Screen mirroring for gaming and movies",
            "16M+ colors with dynamic scenes",
            "Voice control with Alexa, Google, Apple HomeKit",
            "Flexible installation for TVs/monitors",
            "App-controlled custom effects"
        ],
        specs: {
            length: "6.6ft / 2m",
            brightness: "2000 lumens",
            connectivity: "WiFi 2.4GHz",
            power: "30W"
        },
        amazonLink: "https://www.amazon.com/Nanoleaf-Addressable-Lightstrip-Immersive-Backlights/dp/B0FQQZK9M5"
    },
    {
        slug: "nanoleaf-multicolor-permanent-lightstrip",
        name: "Nanoleaf Multicolor Permanent Lightstrip",
        price: "$249.99",
        rating: 4.4,
        reviews: 2314,
        image: "https://m.media-amazon.com/images/I/614-39E0RXL._AC_SX679_.jpg",
        description:
            "Nanoleaf Multicolor Permanent Lightstrip offers durable, weatherproof lighting for indoor or outdoor use, with vibrant colors and smart control options.",
        features: [
            "Weatherproof for indoor/outdoor use",
            "16M+ colors with dynamic effects",
            "Voice control with Alexa, Google, Apple HomeKit",
            "Permanent adhesive for secure installation",
            "Customizable via Nanoleaf app",
            "Sync with music and scenes"
        ],
        specs: {
            length: "16.4ft / 5m",
            brightness: "2000 lumens",
            connectivity: "WiFi 2.4GHz & Bluetooth",
            power: "36W"
        },
        amazonLink: "https://www.amazon.com/Nanoleaf-Multicolor-Permanent-Addressable-Bluetooth/dp/B0DK9XGM44"
    },
    {
        slug: "daybetter-smart-led-strip-lights",
        name: "DAYBETTER Smart LED Strip Lights",
        price: "$29.99",
        rating: 4.3,
        reviews: 6543,
        image: "https://m.media-amazon.com/images/I/71Nj6dqjNsL._AC_SX679_.jpg",
        description:
            "Affordable DAYBETTER Smart LED Strip Lights offer vibrant colors, music sync, and app control for easy customization of your space.",
        features: [
            "Music sync with built-in microphone",
            "16 million colors and scene modes",
            "App control with schedule function",
            "Works with Alexa & Google Assistant",
            "Cuttable and flexible design",
            "Easy adhesive installation"
        ],
        specs: {
            length: "100ft / 30m",
            voltage: "12V",
            power: "36W",
            connectivity: "WiFi & Bluetooth"
        },
        amazonLink: "https://www.amazon.com/DAYBETTER-Controlled-Assistant-Schedule-Changing/dp/B08NP8WRJ9"
    },
    {
        slug: "ksipze-led-strip-lights",
        name: "KSIPZE LED Strip Lights",
        price: "$24.99",
        rating: 4.2,
        reviews: 7890,
        image: "https://m.media-amazon.com/images/I/81eZvunrmFL._AC_SX679_.jpg",
        description:
            "KSIPZE LED Strip Lights provide budget-friendly smart lighting with vibrant colors, music sync, and app control for any room.",
        features: [
            "16 million colors with app control",
            "Music sync for dynamic effects",
            "Works with Alexa & Google Assistant",
            "Flexible and cuttable design",
            "Timer and schedule settings",
            "Strong adhesive for easy setup"
        ],
        specs: {
            length: "32.8ft / 10m",
            voltage: "12V",
            power: "24W",
            connectivity: "Bluetooth"
        },
        amazonLink: "https://www.amazon.com/KSIPZE-Changing-Bluetooth-Lighting-Flexible/dp/B0CWGPG6RG"
    },
    {
        slug: "govee-led-strip-lights-bedroom",
        name: "Govee LED Strip Lights for Bedroom",
        price: "$59.99",
        rating: 4.7,
        reviews: 4231,
        image: "https://m.media-amazon.com/images/I/71tCsRGLV0L._AC_SX679_.jpg",
        description:
            "Govee LED Strip Lights for Bedroom create a cozy ambiance with vibrant colors, music sync, and smart control via app or voice assistants.",
        features: [
            "RGBIC technology for multiple colors",
            "Music sync with built-in mic",
            "Voice control with Alexa & Google",
            "Customizable via Govee Home app",
            "Flexible and cuttable design",
            "57+ preset scene modes"
        ],
        specs: {
            length: "16.4ft / 5m",
            voltage: "12V",
            power: "24W",
            connectivity: "WiFi 2.4GHz"
        },
        amazonLink: "https://www.amazon.com/Govee-Assistant-Bedroom-Mapping-Material/dp/B0CQN1B4JM"
    },
    {
        slug: "novostella-landscape-floodlights",
        name: "NOVOSTELLA Landscape Floodlights",
        price: "$89.99",
        rating: 4.6,
        reviews: 3124,
        image: "https://m.media-amazon.com/images/I/71oWvXsXFNL._AC_SX679_.jpg",
        description:
            "NOVOSTELLA Landscape Floodlights offer powerful, waterproof lighting with smart color-changing features for outdoor spaces, controlled via app or voice.",
        features: [
            "Waterproof design for outdoor use",
            "16 million colors and tunable white",
            "App control with scheduling",
            "Voice control with Alexa & Google",
            "High brightness for large areas",
            "Durable aluminum housing"
        ],
        specs: {
            brightness: "2000 lumens",
            voltage: "110-240V",
            power: "20W",
            connectivity: "WiFi 2.4GHz"
        },
        amazonLink: "https://www.amazon.com/NOVOSTELLA-Landscape-Floodlights-Waterproof-2700K-6500K/dp/B0D8T3HL1Q"
    }
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#DDA0DD] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] bg-clip-text text-transparent">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">{product.rating}</span>
              <span className="text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            

            {/* Description */}
            <p className="text-gray-800 text-lg leading-relaxed mb-8">{product.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-12">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-[#E6E6FA] to-[#DDA0DD] text-gray-900 hover:opacity-90 text-lg h-14"
                asChild
              >
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </a>
              </Button>
              
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800">
                    <span className="text-[#DDA0DD] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
              <dl className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-white/20 pb-2">
                    <dt className="text-gray-700 font-semibold capitalize">{key}:</dt>
                    <dd className="text-gray-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
