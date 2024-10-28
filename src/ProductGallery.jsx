import React, { useState } from 'react';
import Thumbnails from './Thumbnails';

function ProductGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/product-1.jpg',
    '/product-2.jpg',
    '/product-3.jpg',
    '/product-4.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Fall Limited Edition Sneakers"
          className="main-image"
        />
        <button 
          onClick={prevImage}
          className="gallery-button prev-button"
          aria-label="Previous image"
        >
          ←
        </button>
        <button 
          onClick={nextImage}
          className="gallery-button next-button"
          aria-label="Next image"
        >
          →
        </button>
      </div>
      <Thumbnails 
        images={images}
        currentIndex={currentImageIndex}
        onSelect={setCurrentImageIndex}
      />
    </div>
  );
}

export default ProductGallery;
