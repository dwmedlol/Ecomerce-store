'use client'
import { Header } from '@/components/layout/Header'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'

export default function ProductPage() {
  const images = [
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=400&width=400'
  ]

  return (
    <div className="max-w-7xl mx-auto bg-white">
      <Header />
      <main className="md:flex md:items-start md:space-x-8 md:p-8">
        <ProductGallery images={images} />
        <ProductInfo />
      </main>
    </div>
  )
}