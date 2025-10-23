import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "GlowLounge - Where Light Meets Emotion",
  description:
    "Transform your space with smart, aesthetic LED lighting. Explore our curated collection of premium LED strips, smart bulbs, and ambient lighting solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
