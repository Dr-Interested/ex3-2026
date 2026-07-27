'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const images = [
  '/images/carousel/carouselimg1.png',
  '/images/carousel/carouselimg2.png',
  '/images/carousel/carouselimg3.png',
  '/images/carousel/carouselimg4.png',
  '/images/carousel/carouselimg5.png',
  '/images/carousel/carouselimg6.png',
];


// Placeholder colors for when images aren't available (optional, keep 6 for fallback)
const placeholderGradients = [
  'from-blue-900 to-slate-900',
  'from-indigo-900 to-blue-900',
  'from-slate-900 to-blue-900',
  'from-blue-950 to-indigo-900',
  'from-blue-900 to-indigo-900',
  'from-indigo-900 to-slate-900',
];

const carouselAlts = [
  'Explore 3 Case Competition Students Collaborating on Law, Medicine, and Finance Cases',
  'Explore 3 Case Competition Keynote Presentation and Delegate Assembly',
  'Students Presenting Case Solutions to Industry Professional Judges at Explore 3',
  'Explore 3 High School Case Competition Mentorship and Networking Session',
  'Explore 3 Delegate Teams Analyzing Real-World Case Challenges',
  'Explore 3 Case Competition Awards Ceremony and Winning Team Celebration',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Image background */}
          <Image
            src={images[currentIndex]}
            alt={carouselAlts[currentIndex] || `Explore 3 Event Photo ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
