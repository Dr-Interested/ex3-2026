'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';
import { eventDateText, eventLocationText, etransferEmail, registrationFormUrl, registrationTypes } from '../lib/event-info';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/explore3',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/explore3',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:contact@explore3.live',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const contactEmails = [
  { label: 'General Inquiries', email: 'general@explore3.live' },
  { label: 'Sponsorships', email: 'finance@explore3.live' },
  { label: 'Media & Press', email: 'media@explore3.live' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Have questions about Explore 3? We&apos;d love to hear from you. Reach out to our 
              team and we&apos;ll get back to you as soon as possible.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">We&apos;ll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ex-blue focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ex-blue focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ex-blue focus:border-transparent transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  {/* Social Links */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target={link.name !== 'Email' ? '_blank' : undefined}
                          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                          className="w-14 h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:bg-ex-blue hover:text-white hover:border-ex-blue transition-all duration-300"
                          aria-label={link.name}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact Emails */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Email Us Directly</h3>
                    <div className="space-y-4">
                      {contactEmails.map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-ex-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-ex-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-white">{item.label}</p>
                            <a href={`mailto:${item.email}`} className="text-ex-blue-light hover:underline">
                              {item.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ Teaser */}
                  <div className="bg-gradient-to-br from-ex-blue to-blue-800 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                    <p className="text-blue-100 mb-6">
                      Looking for quick answers? Check out our FAQ section for common questions 
                      about registration, competition format, and more.
                    </p>
                    <Link href="/faq" className="inline-block bg-white text-ex-blue font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                      View FAQ
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Event Location</h2>
              <p className="text-gray-400">
                {eventLocationText}
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <InteractiveMap />
              
              {/* Location Details */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-ex-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </h3>
                  <p className="text-white font-semibold mb-2">Humber Polytechnic Downtown Campus</p>
                  <p className="text-gray-300">
                    59 Hayden St Unit 400<br />
                    Toronto, ON M4Y 0E7<br />
                    Canada
                  </p>
                </div>
                
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-ex-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-4 0V7" />
                    </svg>
                    2026 Event Details
                  </h3>
                  <p className="text-gray-300">
                    • {eventDateText}<br />
                    • Register through the Google Form<br />
                    • E-Transfer payment to {etransferEmail}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Registration Form</h3>
                  <p className="text-gray-300 mb-4">
                    Submit your entry using the registration form and choose the package that matches your team.
                  </p>
                  <a
                    href={registrationFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ex-blue hover:bg-ex-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Open Registration Form
                  </a>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Registration Types</h3>
                  <div className="space-y-3">
                    {registrationTypes.map((item) => (
                      <p key={item.title} className="text-gray-300">
                        <span className="font-semibold text-white">{item.title}:</span> {item.details}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
