export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#E6E6FA] via-[#DDA0DD] to-[#87CEEB] bg-clip-text text-transparent">
            Shipping & Returns
          </h1>

          <div className="space-y-6 text-gray-900">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
              <p className="mb-4">We offer fast and reliable shipping on all LED lighting products:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free standard shipping on orders over $50</li>
                <li>Express shipping available (2-3 business days)</li>
                <li>International shipping to select countries</li>
                <li>Order tracking provided for all shipments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Policy</h2>
              <p className="mb-4">We want you to love your LED lights! If you're not satisfied:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>30-day return window from delivery date</li>
                <li>Products must be unused and in original packaging</li>
                <li>Free return shipping on defective items</li>
                <li>Full refund processed within 5-7 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Return</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact our customer service team</li>
                <li>Receive your return authorization number</li>
                <li>Pack items securely in original packaging</li>
                <li>Ship to the provided return address</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
