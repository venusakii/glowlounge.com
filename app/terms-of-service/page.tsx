export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-900">
            <p className="text-sm text-gray-700">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using GlowLounge, you agree to be bound by these Terms of Service and all applicable
                laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on GlowLounge for personal, non-commercial use
                only. This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
                descriptions or other content is accurate, complete, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All prices are in USD unless otherwise stated</li>
                <li>We reserve the right to change prices at any time</li>
                <li>Payment must be received before order processing</li>
                <li>We accept major credit cards and secure payment methods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amazon Affiliate Disclosure</h2>
              <p>
                GlowLounge is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                GlowLounge shall not be liable for any damages arising from the use or inability to use our products or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of Florida,
                United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the site after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <p className="mt-2">1294 Locust Court, Jacksonville, FL 32255</p>
              <p>Phone: +1 562-497-4858</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
