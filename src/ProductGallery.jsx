import React, { useState } from 'react';
import Thumbnails from './Thumbnails';

import product1 from './imgs/product1.jpg';
import product2 from './imgs/product2.jpg';
import product3 from './imgs/product3.jpg';
import product4 from './imgs/product4.jpg';

function ProductGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    product1,
    product2,
    product3,
    product4
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
