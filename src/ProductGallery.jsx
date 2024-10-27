'use client'
import { useState } from 'react'


export function ProductGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="md:w-1/2 lg:w-2/3">
      <div className="relative">
        <Image
          src={images[currentImageIndex]}
          alt="Fall Limited Edition Sneakers"
          width={400}
          height={400}
          className="w-full md:rounded-2xl"
        />
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:hidden"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:hidden"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <Thumbnails 
        images={images} 
        currentIndex={currentImageIndex} 
        onThumbnailClick={setCurrentImageIndex} 
      />
    </div>
  )
}