'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';
import { eventDateText, etransferEmail, prizeTiers, registrationFormUrl, registrationTypes } from '../lib/event-info';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // General
  {
    question: 'What is EX3 and what does it stand for?',
    answer: 'EX3 (Explore3) is the Greater Toronto Area\'s premier interdisciplinary case competition for high school students. The name represents our three competition tracks: Pre-Medicine, Pre-Law, and Pre-Finance. It\'s also an acronym for our methodology: Challenge, Analyze, Solve, Execute.',
    category: 'general',
  },
  {
    question: 'Who can participate in the competition?',
    answer: 'EX3 is open to all high school students aged 13-18 in the Greater Toronto Area. No prior case competition experience is required - we welcome students from all academic backgrounds who are passionate about medicine, law, or finance.',
    category: 'general',
  },
  {
    question: 'Can I participate if I\'m unsure about my career path?',
    answer: 'EX3 is designed to help students explore different career paths. You can choose the track that interests you most, and the experience will provide valuable insights into each field while developing critical thinking and presentation skills.',
    category: 'general',
  },
  {
    question: 'How are the partner organizations involved?',
    answer: 'EX3 is a collaborative effort between Dr. Interested (medical focus), Youth Law Advocacy (legal focus), Hope in Every Hand (community service), and Liberation Scientifica (finance focus). Each organization contributes expertise, resources, and mentorship in their respective fields.',
    category: 'general',
  },
  // Registration
  {
    question: 'What is the registration fee?',
    answer: `Registration is available in multiple packages: ${registrationTypes.map((item) => `${item.title} (${item.details})`).join('; ')}. Submit the registration form and send payment by e-transfer to ${etransferEmail}.`,
    category: 'registration',
  },
  {
    question: 'When is the event?',
    answer: `The competition takes place on ${eventDateText}.`,
    category: 'general',
  },
  // Competition
  {
    question: 'How does the competition format work?',
    answer: 'The competition features three distinct tracks: Pre-Medicine (medical ethics and healthcare policy), Pre-Law (legal case analysis), and Pre-Finance (financial analysis and business cases). Participants compete in teams, analyze real-world case studies, and present solutions to expert judges.',
    category: 'competition',
  },
  {
    question: 'What should I expect on competition day?',
    answer: 'The full-day event includes check-in, opening ceremonies, introductions to partner organizations, case study distribution, preparation time, presentations, lunch networking, final rounds, and an awards ceremony. Professional attire is required.',
    category: 'competition',
  },
  {
    question: 'What kind of cases will we be analyzing?',
    answer: 'Cases are designed to be challenging yet accessible, covering real-world scenarios in each track. Pre-Medicine cases might involve healthcare policy dilemmas, Pre-Law cases could cover constitutional issues, and Pre-Finance cases might focus on investment strategies and business analysis.',
    category: 'competition',
  },
  // Prizes
  {
    question: 'What are the prizes and recognition opportunities?',
    answer: `${prizeTiers[0].title} receives a ${prizeTiers[0].details.toLowerCase()}. ${prizeTiers[1].title}, ${prizeTiers[2].title}, and ${prizeTiers[3].title.toLowerCase()} receive certificates.`,
    category: 'prizes',
  },
  // Preparation
  {
    question: 'How do I prepare for the competition?',
    answer: 'While no specific preparation is required, we recommend staying current with news in your chosen field, practicing presentation skills, and reviewing basic case analysis techniques. We\'ll provide all necessary materials and guidance on competition day.',
    category: 'preparation',
  },
];

const categories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'registration', name: 'Registration' },
  { id: 'competition', name: 'Competition' },
  { id: 'prizes', name: 'Prizes' },
  { id: 'preparation', name: 'Preparation' },
];

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-800 hover:bg-gray-750 transition-colors text-left"
      >
        <span className="font-medium text-white pr-4">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-850 border-t border-gray-700">
              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Everything you need to know about participating in EX3. Can't find what you're looking for? Contact us directly.
            </motion.p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-ex-blue text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <FAQAccordion
                  key={`${item.category}-${index}`}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
                <p className="text-gray-400 mb-6">
                  Can&apos;t find what you&apos;re looking for? Our team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-ex-blue hover:bg-ex-blue-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/about" className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors border border-gray-700 hover:border-ex-blue">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-lg font-bold text-white mb-2">About Explore 3</h3>
                <p className="text-gray-400 text-sm">Learn more about our mission and competition</p>
              </Link>

              <a href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors border border-gray-700 hover:border-ex-blue">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-lg font-bold text-white mb-2">Register Now</h3>
                <p className="text-gray-400 text-sm">Open the registration form and choose your package</p>
              </a>
              
              <Link href="/team" className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors border border-gray-700 hover:border-ex-blue">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-white mb-2">Meet the Team</h3>
                <p className="text-gray-400 text-sm">Get to know the organizations behind EX3</p>
              </Link>
              
              <Link href="/sponsorships" className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors border border-gray-700 hover:border-ex-blue">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg font-bold text-white mb-2">Become a Sponsor</h3>
                <p className="text-gray-400 text-sm">Partner with us to support future leaders</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
