'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import { registrationFormUrl } from '../lib/event-info';

const highlights = [
  {
    icon: '🏆', // Competition
    title: 'Competition',
    description: 'Three competitive tracks: Pre-Medicine, Pre-Law, and Pre-Finance with prizes and recognition.',
    image: '/images/abouts/about1.png',
  },
  {
    icon: '🤝', // Networking
    title: 'Networking',
    description: 'Connect with like-minded peers, industry professionals, and expert judges.',
    image: '/images/abouts/about2.png',
  },
  {
    icon: '🕒', // Full-day event
    title: 'Full-Day Event',
    description: 'Opening ceremonies, competition rounds, lunch networking, and awards ceremony.',
    image: '/images/abouts/about3.png',
  },
  {
    icon: '📍', // Location
    title: 'Location',
    description: 'Professional Setting at Humber Polytechnic Downtown Toronto Campus',
    image: '/images/abouts/about4.png',
  },
];

const focusAreas = [
  {
    title: 'Pre-Law',
    description: 'Legal case analysis, argumentation, and constitutional law challenges..',
    color: 'bg-ex-blue',
  },
  {
    title: 'Pre-Medicine',
    description: 'Medical ethics, healthcare policy, and clinical decision-making scenarios.',
    color: 'bg-ex-red',
  },
  {
    title: 'Pre-Finance',
    description: 'Financial analysis, investment strategies, and business case studies.',
    color: 'bg-slate-800',
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-ex-blue to-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Explore 3
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Explore3 brings together high school students passionate about Medicine, Law, and Finance 
              for a day of competition in Toronto on August 29, 9:00 AM to 4:00 PM.
            </motion.p>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Highlights</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Discover what makes Explore3 a unique and transformative experience for students.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="bg-gray-800 rounded-xl overflow-hidden h-full border border-gray-700 hover:border-ex-blue transition-colors flex flex-col items-center">
                    {/* Image with black overlay and icon */}
                    <div className="w-full h-32 relative flex items-center justify-center">
                      <Image 
                        src={item.image} 
                        alt={`Explore 3 Case Competition ${item.title} Highlight`} 
                        fill
                        className="object-cover rounded-t-xl" 
                      />
                      {/* Black overlay to dim image */}
                      <div className="absolute inset-0 bg-black opacity-40 rounded-t-xl"></div>
                      {/* Icon overlay */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <span className="text-4xl drop-shadow-lg">{item.icon}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Focus Areas</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our competition spans three critical professional disciplines, 
                offering diverse opportunities for students to explore and excel.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-2xl">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    whileHover={{ scale: 1.02 }}
                    className={`${area.color} p-8 md:p-10 text-white relative group`}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{area.title}</h3>
                      <p className="text-white/90 leading-relaxed">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-ex-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take the Challenge?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Join hundreds of ambitious students in this transformative competition experience. Secure your spot in the GTA's premier case competition. 
              </p>
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-ex-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Register Now
              </a>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
