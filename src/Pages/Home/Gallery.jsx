import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, src: 'avenger.png', alt: 'Image 1' },
    { id: 2, src: 'avenger.png', alt: 'Image 2' },
    { id: 3, src: 'avenger.png', alt: 'Image 3' },
    { id: 4, src: 'avenger.png', alt: 'Image 4' },
    { id: 5, src: 'avenger.png', alt: 'Image 4' },
    { id: 5, src: 'avenger.png', alt: 'Image 4' },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className='text-center mb-4 text-2xl font-bold text-purple-500'>Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300">
              {/* Add any additional overlay content here */}
              <h1 className='text-white'>hello</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
