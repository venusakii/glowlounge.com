"use client"

export function ComparisonTable() {
  const products = [
    {
      name: "Govee Smart LED Strip",
      type: "LED Strip",
      smartApp: "Yes",
      length: "16ft",
      rating: 5,
    },
    {
      name: "Philips Hue Gradient",
      type: "Ambient",
      smartApp: "Yes",
      length: "6ft",
      rating: 4,
    },
    {
      name: "Twinkly Fairy Lights",
      type: "Decorative",
      smartApp: "Yes",
      length: "33ft",
      rating: 4,
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white/10 backdrop-blur-md border-2 border-white/30">
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Product</th>
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Type</th>
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Smart App</th>
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Length</th>
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Rating</th>
            <th className="p-4 text-left text-[#6A5ACD] font-bold">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={i}
              className="group border-b border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <td className="p-4 text-[#404040] font-semibold">{product.name}</td>
              <td className="p-4 text-[#404040]">{product.type}</td>
              <td className="p-4 text-[#404040]">{product.smartApp}</td>
              <td className="p-4 text-[#404040]">{product.length}</td>
              <td className="p-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={j < product.rating ? "text-yellow-400" : "text-gray-300"}>
                      ⭐
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <a href="#" className="text-[#6A5ACD] hover:text-[#9370DB] font-semibold transition-colors">
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
