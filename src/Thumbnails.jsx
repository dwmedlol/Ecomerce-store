import React from 'react';

function Thumbnails({ images, currentIndex, onSelect }) {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <button
          key={index}
          className={`thumbnail-button ${index === currentIndex ? 'active' : ''}`}
          onClick={() => onSelect(index)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail-image"
          />
        </button>
      ))}
    </div>
  );
}

export default Thumbnails;