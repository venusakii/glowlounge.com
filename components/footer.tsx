"use client"

import Link from "next/link"
import { Sparkles, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#1a1a2e] text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA]/10 via-[#DDA0DD]/10 to-[#87CEEB]/10 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-[#DDA0DD] group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 blur-xl bg-[#DDA0DD] opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] bg-clip-text text-transparent">
                GlowLounge
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Where Light Meets Emotion. Transform your space with premium LED lighting solutions.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Inspiration
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping-returns" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#DDA0DD] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-[#DDA0DD] flex-shrink-0 mt-0.5" />
                <span>support@glowlounge.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-[#DDA0DD] flex-shrink-0 mt-0.5" />
                <span>+1 562-497-4858</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-[#DDA0DD] flex-shrink-0 mt-0.5" />
                <span>1294 Locust Court, Jacksonville, Florida 32255, United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Amazon Affiliate Disclosure */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white/60 text-sm leading-relaxed text-center">
              <strong className="text-white/80">Amazon Affiliate Disclosure:</strong> GlowLounge is a participant in the
              Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for
              sites to earn advertising fees by advertising and linking to Amazon.com. We may earn a commission from
              qualifying purchases made through our links at no additional cost to you.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} GlowLounge. All rights reserved.</p>
          <p className="text-white/50 text-sm">
            Designed with <span className="text-[#DDA0DD]">✨</span> by GlowLounge Team
          </p>
        </div>
      </div>
    </footer>
  )
}
