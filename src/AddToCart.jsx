import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus } from 'lucide-react'

export function AddToCart({ quantity, onIncrement, onDecrement }) {
    return (
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 md:flex-1">
          <Button variant="ghost" size="icon" onClick={onDecrement}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-bold">{quantity}</span>
          <Button variant="ghost" size="icon" onClick={onIncrement}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full md:flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4">
          <ShoppingCart className="mr-2 h-5 w-5" /> Add to cart
        </Button>
      </div>
    )
  }