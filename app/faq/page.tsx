export default function FAQPage() {
  const faqs = [
    {
      question: "What types of LED lights do you offer?",
      answer:
        "We offer a wide range including LED strip lights, smart bulbs, decorative string lights, panel lights, and specialty lighting from brands like Govee, Philips Hue, Nanoleaf, and Twinkly.",
    },
    {
      question: "Are these products compatible with smart home systems?",
      answer:
        "Yes! Many of our products work with Alexa, Google Home, and Apple HomeKit. Check individual product descriptions for specific compatibility.",
    },
    {
      question: "How long do LED lights last?",
      answer:
        "Quality LED lights typically last 25,000-50,000 hours, which is 25-50 times longer than traditional incandescent bulbs.",
    },
    {
      question: "Can I cut LED strip lights to size?",
      answer:
        "Most LED strips have designated cutting points marked every few inches. Always check the product specifications before cutting.",
    },
    {
      question: "Do you offer installation support?",
      answer:
        "While we don't provide installation services, all products come with detailed instructions. Our customer service team is available to answer any questions.",
    },
    {
      question: "What's your warranty policy?",
      answer:
        "Most products come with a manufacturer's warranty ranging from 1-3 years. Specific warranty details are listed on each product page.",
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-900">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-900 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#DDA0DD]/50 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
