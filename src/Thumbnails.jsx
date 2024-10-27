export function Thumbnails({ images, currentIndex, onThumbnailClick }) {
    return (
      <div className="hidden md:flex md:justify-between mt-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            width={80}
            height={80}
            className={`rounded-lg cursor-pointer ${index === currentIndex ? 'border-2 border-orange-500' : ''}`}
            onClick={() => onThumbnailClick(index)}
          />
        ))}
      </div>
    )
  }