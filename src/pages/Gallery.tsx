import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('../gallery-images/*', { as: 'url', eager: true });
      const imageUrls = Object.values(imageModules);
      setImages(imageUrls);
    };
    
    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Recent Work</h1>
      
      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative break-inside-avoid cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-200">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-h-[90vh] max-w-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl p-2 hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 