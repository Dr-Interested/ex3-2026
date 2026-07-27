'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

const sponsorBenefits = [
  {
    icon: '📢',
    title: 'Brand Exposure',
    description: 'Gain visibility among hundreds of ambitious students, future professionals, and industry leaders through our marketing channels and event presence.',
  },
  {
    icon: '🎓',
    title: 'Youth Engagement',
    description: 'Connect directly with motivated, talented students who are passionate about making a difference in Law, Medicine, and Finance.',
  },
  {
    icon: '🌟',
    title: 'Talent Pipeline',
    description: 'Access a pool of exceptional candidates for internships, mentorship programs, and future employment opportunities.',
  },
  {
    icon: '🤝',
    title: 'Community Impact',
    description: 'Support educational initiatives that empower the next generation of professionals and contribute to community development.',
  },
];

const sponsorshipPackages = [
  {
    name: 'Bronze',
    color: 'from-amber-600 to-amber-800',
    benefits: [
      'Logo on event materials',
      'Social media recognition',
      'Certificate of appreciation',
      '2 event passes',
    ],
    featured: false,
  },
  {
    name: 'Silver',
    color: 'from-gray-400 to-gray-600',
    benefits: [
      'All Bronze benefits',
      'Logo on website homepage',
      'Booth at networking event',
      'Speaking opportunity (5 min)',
      '4 event passes',
      'Featured in email newsletter',
    ],
    featured: false,
  },
  {
    name: 'Gold',
    color: 'from-yellow-400 to-yellow-600',
    benefits: [
      'All Silver benefits',
      'Title sponsor recognition',
      'Prime logo placement',
      'Keynote speaking slot (15 min)',
      '8 VIP event passes',
      'Exclusive networking session',
      'First access to participant resumes',
      'Custom promotional content',
    ],
    featured: true,
  },
];

export default function SponsorshipsPage() {
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
              Partner With Explore 3
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Support the next generation of leaders in law, medicine, and science while growing your brand 
            </motion.p>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Sponsor Explore 3?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Partnering with Explore 3 offers unique opportunities to engage with 
                future professionals while making a positive community impact.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorBenefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={index * 0.1}>
                  <div className="bg-gray-800 rounded-xl p-6 text-center h-full border border-gray-700 hover:border-ex-blue transition-colors">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose a sponsorship level that aligns with your organization&apos;s goals 
                and budget. Custom packages are also available.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {sponsorshipPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`relative rounded-2xl overflow-hidden ${
                      pkg.featured ? 'ring-2 ring-yellow-400' : ''
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-yellow-900 text-center py-1 font-semibold text-sm z-10">
                        Most Popular
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${pkg.color} p-8 text-center ${pkg.featured ? 'pt-10' : ''}`}>
                      <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-white/80">Sponsor Package</p>
                    </div>
                    
                    {/* Benefits */}
                    <div className="bg-gray-800 p-8">
                      <ul className="space-y-3 mb-8">
                        {pkg.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href="/contact"
                        className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                          pkg.featured
                            ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-900'
                            : 'bg-ex-blue hover:bg-ex-blue-light text-white'
                        }`}
                      >
                        Contact Us
                      </a>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Sponsorship CTA */}
        <section className="py-16 bg-ex-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Looking for Something Custom?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We&apos;re happy to create a tailored sponsorship package that meets your 
                organization&apos;s specific needs and objectives.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-ex-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Past Sponsors */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Valued Partners</h2>
              <p className="text-gray-400 mb-12">
                We&apos;re grateful for the support of organizations that believe in our mission.
              </p>
              
              {/* Placeholder for sponsor logos */}
              <div className="flex flex-wrap justify-center items-center gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-32 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-500 text-sm">Sponsor {i}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
