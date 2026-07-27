'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
}

const galleryItems: GalleryItem[] = [
  // Introduction
  { id: 1, src: '/images/gallery/1. Introduction/1. Introduction/IMG_3592.MOV', alt: 'Explore 3 Case Competition Opening Remarks and Welcome Ceremony Video', category: 'introduction', type: 'video' },

  // Networking / Get to Know Activity
  { id: 2, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_0033.JPG', alt: 'Explore 3 High School Student Delegates Networking Activity', category: 'networking', type: 'image' },
  { id: 3, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_0034.JPG', alt: 'Students Collaborating in Explore 3 Team Icebreaker Session', category: 'networking', type: 'image' },
  { id: 4, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_0035.MOV', alt: 'Explore 3 Networking Activity Highlights Video', category: 'networking', type: 'video' },
  { id: 5, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_3594.MOV', alt: 'Students Participating in Explore 3 Icebreaker Challenge Video', category: 'networking', type: 'video' },
  { id: 6, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_5963.MOV', alt: 'Explore 3 Delegates Interacting in Group Session Video', category: 'networking', type: 'video' },
  { id: 7, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_5964.MOV', alt: 'Explore 3 Case Competition Team Building Video', category: 'networking', type: 'video' },
  { id: 8, src: '/images/gallery/2. Networking/2. Get to Know Activity/IMG_5965.MOV', alt: 'Explore 3 Student Networking Event Video', category: 'networking', type: 'video' },

  // Judges
  { id: 9, src: '/images/gallery/3. Judges/3. Judge Intros/IMG_5969.MOV', alt: 'Explore 3 Case Competition Professional Judge Panel Introductions Video', category: 'judges', type: 'video' },

  // Cases / Competition
  { id: 11, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6021.JPG', alt: 'Explore 3 Pre-Law Case Presentation to Executive Judges', category: 'cases', type: 'image' },
  { id: 12, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6022.JPG', alt: 'Explore 3 Pre-Medicine Case Solution Presentation', category: 'cases', type: 'image' },
  { id: 13, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6023.JPG', alt: 'Explore 3 Pre-Finance Business Challenge Presentation', category: 'cases', type: 'image' },
  { id: 14, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6024.JPG', alt: 'Explore 3 Case Competition Student Delegates Presenting', category: 'cases', type: 'image' },
  { id: 15, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6025.JPG', alt: 'Explore 3 Case Analysis Q&A with Industry Judges', category: 'cases', type: 'image' },
  { id: 16, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6026.JPG', alt: 'High School Team Presenting Interdisciplinary Solution at Explore 3', category: 'cases', type: 'image' },
  { id: 17, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6027.JPG', alt: 'Explore 3 Delegate Team Presenting Pitch Deck', category: 'cases', type: 'image' },
  { id: 18, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_5967.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 1', category: 'cases', type: 'video' },
  { id: 19, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_5972.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 2', category: 'cases', type: 'video' },
  { id: 20, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_5973.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 3', category: 'cases', type: 'video' },
  { id: 21, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_5974.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 4', category: 'cases', type: 'video' },
  { id: 22, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6029.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 5', category: 'cases', type: 'video' },
  { id: 23, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6033.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 6', category: 'cases', type: 'video' },
  { id: 24, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6034.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 7', category: 'cases', type: 'video' },
  { id: 25, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6035.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 8', category: 'cases', type: 'video' },
  { id: 26, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_6036.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 9', category: 'cases', type: 'video' },
  { id: 27, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_9925.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 10', category: 'cases', type: 'video' },
  { id: 28, src: '/images/gallery/4. Cases/4. and 7. Cases 1 & 2/IMG_9928.MOV', alt: 'Explore 3 Case Competition Live Presentation Video 11', category: 'cases', type: 'video' },

  // Fonseca / VIP Guest
  { id: 29, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_3586.JPG', alt: 'Councillor and MP Fonseca Keynote at Explore 3 Case Competition', category: 'fonseca', type: 'image' },
  { id: 30, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_3587.JPG', alt: 'MP Fonseca Addressing Explore 3 High School Delegates', category: 'fonseca', type: 'image' },
  { id: 31, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5980.JPG', alt: 'Councillor Fonseca Presenting Certificate at Explore 3', category: 'fonseca', type: 'image' },
  { id: 32, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5981.JPG', alt: 'VIP Guest Address at Explore 3 Case Competition', category: 'fonseca', type: 'image' },
  { id: 33, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5982.JPG', alt: 'MP Fonseca Meeting Explore 3 Student Executive Organizers', category: 'fonseca', type: 'image' },
  { id: 34, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5993.JPG', alt: 'Explore 3 Student Leaders with Councillor Fonseca', category: 'fonseca', type: 'image' },
  { id: 35, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_0041.MOV', alt: 'Councillor Fonseca Address Video at Explore 3', category: 'fonseca', type: 'video' },
  { id: 36, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5985.MOV', alt: 'MP Fonseca Speech Video at Explore 3', category: 'fonseca', type: 'video' },
  { id: 37, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5986.MOV', alt: 'Special VIP Address Video 1', category: 'fonseca', type: 'video' },
  { id: 38, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_5987.MOV', alt: 'Special VIP Address Video 2', category: 'fonseca', type: 'video' },
  { id: 39, src: '/images/gallery/6. Fonseca/6. Councillor & MP Fonseca/IMG_9933.MOV', alt: 'Special VIP Address Video 3', category: 'fonseca', type: 'video' },

  // Awards Ceremony
  { id: 40, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_0044.JPG', alt: 'Explore 3 Case Competition Trophy and Certificate Presentation', category: 'awards', type: 'image' },
  { id: 41, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_0045.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 1', category: 'awards', type: 'video' },
  { id: 42, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3603.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 2', category: 'awards', type: 'video' },
  { id: 43, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3604.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 3', category: 'awards', type: 'video' },
  { id: 44, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3605.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 4', category: 'awards', type: 'video' },
  { id: 45, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3606.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 5', category: 'awards', type: 'video' },
  { id: 46, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3608.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 6', category: 'awards', type: 'video' },
  { id: 47, src: '/images/gallery/6. Awards/7. Awards Ceremony/IMG_3609.MOV', alt: 'Explore 3 Case Competition Winner Announcement Video 7', category: 'awards', type: 'video' },

  // Closing Ceremony
  { id: 48, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9969.JPG', alt: 'Explore 3 Case Competition Closing Ceremony Address', category: 'closing', type: 'image' },
  { id: 49, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9970.JPG', alt: 'Explore 3 Executive Committee Closing Remarks', category: 'closing', type: 'image' },
  { id: 50, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9971.JPG', alt: 'Explore 3 Student Organizers Closing Assembly', category: 'closing', type: 'image' },
  { id: 51, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9972.JPG', alt: 'Explore 3 Case Competition Closing Celebration', category: 'closing', type: 'image' },
  { id: 52, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9968.MOV', alt: 'Explore 3 Closing Remarks Video 1', category: 'closing', type: 'video' },
  { id: 53, src: '/images/gallery/7. Closing Ceremony/8. Closing/IMG_9973.MOV', alt: 'Explore 3 Closing Remarks Video 2', category: 'closing', type: 'video' },

  // Group Photos
  { id: 54, src: '/images/gallery/8. Group Photos/10. Group Photos/Copy of IMG_3587.JPG', alt: 'Explore 3 Case Competition All Delegates and Organizers Group Photo', category: 'group-photos', type: 'image' },
  { id: 55, src: '/images/gallery/8. Group Photos/10. Group Photos/Untitled design.png', alt: 'Explore 3 Executive Team Commemorative Group Photo', category: 'group-photos', type: 'image' },
];

const categories = [
  { id: 'introduction', title: 'Introduction', description: 'Opening moments and welcome to Explore 3' },
  { id: 'networking', title: 'Networking', description: 'Building connections that last beyond the competition using games' },
  { id: 'judges', title: 'Judges', description: 'Meet our expert panel of judges' },
  { id: 'cases', title: 'Case Competition', description: 'Students presenting innovative solutions to real-world challenges' },
  { id: 'fonseca', title: 'Special Guests', description: 'Councillor & MP Fonseca visit' },
  { id: 'awards', title: 'Awards Ceremony', description: 'Celebrating excellence and outstanding achievements' },
  { id: 'closing', title: 'Closing Ceremony', description: 'Wrapping up an amazing event' },
  { id: 'group-photos', title: 'Group Photos', description: 'Memorable group shots from the event' },
];

// Placeholder colors for gallery items
const placeholderColors = [
  'from-blue-600 to-blue-800',
  'from-indigo-600 to-indigo-800',
  'from-slate-600 to-slate-800',
  'from-blue-700 to-indigo-800',
  'from-slate-700 to-blue-800',
  'from-indigo-700 to-slate-800',
];

const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Account for fixed navbar + mini nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="pt-20 bg-gray-950 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-ex-blue to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Event Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Relive the excitement and inspiration from past Explore 3 events through 
              our collection of memorable moments.
            </motion.p>
          </div>
        </section>

        {/* Sidebar Navigation for Gallery Sections - starts after hero */}
        {/* Mobile horizontal nav stays sticky at top */}
        <div className="lg:hidden sticky top-20 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-4 py-4 scrollbar-thin scrollbar-thumb-gray-700">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="flex-shrink-0 px-4 py-2 rounded text-gray-300 hover:bg-ex-blue/20 hover:text-white font-medium transition-colors text-sm md:text-base"
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop sidebar nav starts below hero */}
        <div className="relative">
          <aside className="hidden lg:block absolute left-0 top-0 h-full w-56 bg-gray-900/95 border-r border-gray-800 z-40 py-8 px-4 overflow-y-auto" style={{marginTop: '0'}}>
            <nav className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="text-left px-4 py-2 rounded text-gray-300 hover:bg-ex-blue/20 hover:text-white font-medium transition-colors"
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </aside>
          <div className="lg:pl-60">
            {/* Gallery Sections */}
            {categories.map((category) => {
              const categoryItems = galleryItems.filter((item) => item.category === category.id);
              const isExpanded = expandedCategories[category.id];
              const displayedItems = isExpanded ? categoryItems : categoryItems.slice(0, ITEMS_PER_PAGE);
              const hasMore = categoryItems.length > ITEMS_PER_PAGE;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="py-12 bg-gray-950"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {displayedItems.map((item, index) => (
                        <AnimatedSection key={item.id} delay={index * 0.05}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedItem(item)}
                            className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg border border-gray-800 relative"
                          >
                            {item.type === 'video' ? (
                              <div className={`w-full h-full bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]} flex items-center justify-center relative`}>
                                <video
                                  src={item.src}
                                  className="w-full h-full object-cover absolute inset-0"
                                  muted
                                  playsInline
                                  preload="none"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                  <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                                <p className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">{item.alt}</p>
                              </div>
                            ) : (
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover"
                              />
                            )}
                          </motion.div>
                        </AnimatedSection>
                      ))}
                    </div>

                    {hasMore && (
                      <div className="text-center mt-8">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="px-6 py-3 bg-ex-blue hover:bg-ex-blue/80 text-white font-semibold rounded-lg transition-colors"
                        >
                          {isExpanded ? 'Show Less' : `Show More (${categoryItems.length - ITEMS_PER_PAGE} more)`}
                        </button>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-xl overflow-hidden"
              >
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] object-contain bg-black"
                  />
                ) : (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    width={1200}
                    height={800}
                    className="w-full max-h-[80vh] object-contain"
                  />
                )}
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
