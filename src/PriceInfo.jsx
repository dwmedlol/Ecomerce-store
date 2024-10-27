export function PriceInfo() {
    return (
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded font-bold">50%</span>
        </div>
        <span className="text-gray-400 line-through">$250.00</span>
      </div>
    )
  }