import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-96" style={{height:700}}>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-l-full focus:outline-none z-10"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r-full focus:outline-none z-10"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="h-full flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-full w-full flex flex-col items-center justify-center ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img
              src={image.src}
              alt={`slide-${index}`}
              className={`h-full w-fit opacity-100 brightness-75 ${index === currentIndex ? 'block' : 'hidden'}`}
              style={{opacity:0.9}}
            />
           <div className='relative bottom-80'>
           <p className="text-center text-white font-bold text-5xl  ">{image.text}</p>
            <p className='text-center text-white mt-12 platypi text-lg '>{image.smtxt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ImageCarousel;
