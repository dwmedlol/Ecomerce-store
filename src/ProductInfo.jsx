'use client'
import { useState } from 'react'
import { PriceInfo } from './PriceInfo'

export function ProductInfo() {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(0, prev - 1))

  return (
    <div className="p-6 md:w-1/2 lg:w-1/3 space-y-4">
      <h2 className="text-sm font-bold text-orange-500">SNEAKER COMPANY</h2>
      <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-500">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <PriceInfo />
      <AddToCart 
        quantity={quantity} 
        onIncrement={incrementQuantity} 
        onDecrement={decrementQuantity} 
      />
    </div>
  )
}