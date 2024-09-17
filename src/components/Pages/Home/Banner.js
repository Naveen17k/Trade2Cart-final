import React, { useState, useEffect } from 'react';
import {  FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const images = [
    { 
      src: '/banner1.png', 
      alt: 'Exciting Deals on Electronics', 
      cta: 'Shop Now', 
      description: 'Get the best deals on the latest electronics!' 
    },
    { 
      src: '/banner2.png', 
      alt: 'Fashion Fiesta - Up to 70% Off', 
      cta: 'Explore Fashion', 
      description: 'Upgrade your wardrobe with huge discounts.' 
    },
    { 
      src: '/banner3.png', 
      alt: 'Grocery Essentials on Discount', 
      cta: 'Shop Groceries', 
      description: 'Best prices on daily essentials.' 
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handlePausePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative ">
      <div
        className="overflow-hidden h-64 sm:h-80 md:h-96 shadow-lg relative"
        onMouseEnter={() => setIsPlaying(false)} // Pause on hover
        onMouseLeave={() => setIsPlaying(true)} // Resume on mouse leave
      >
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.7 }}
            className="w-full h-full relative"
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover "
              loading="lazy"
            />
            {/* Gradient overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

            {/* Dynamic Text with Animation */}
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 text-white space-y-4">
              <motion.h2
                className="text-2xl md:text-4xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {images[current].alt}
              </motion.h2>
              <motion.p
                className="text-sm md:text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                {images[current].description}
              </motion.p>
              <motion.button
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {images[current].cta}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slide Navigation */}
      <div className="absolute inset-0   flex justify-between  items-center px-4">
        <button
          onClick={prevSlide}
          className="text-white p-2  bg-black bg-opacity-60 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
        >

        </button>
        <button
          onClick={nextSlide}
          className="text-white p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide Indicators with Animation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              current === index ? 'bg-green-500' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
            initial={{ scale: 0.8 }}
            animate={{ scale: current === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      
      {/* Play/Pause Button */}
      <div className="absolute top-2 right-4 ">
        <button
          onClick={handlePausePlay}
          className="text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition-opacity duration-300"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Banner;
