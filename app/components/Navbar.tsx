'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { registrationFormUrl } from '../lib/event-info';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Past Cases', href: '/past-cases' },
  { name: 'Sponsorships', href: '/sponsorships' },
  { name: 'Contact', href: '/contact' },
];

interface NavbarProps {
  variant?: 'default' | 'colored' | 'transparent';
}

export default function Navbar({ variant }: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background style
  let navBg = '';
  if (variant === 'transparent') {
    navBg = 'bg-transparent';
  } else if (variant === 'colored') {
    navBg = 'bg-gray-900/95 backdrop-blur-md shadow-lg';
  } else {
    navBg = scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm';
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/ex3logo-nobg.png" 
              alt="Explore 3 Case Competition Logo" 
              width={140} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium transition-colors duration-200 text-gray-200 hover:text-ex-red"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-white ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-white ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-200 font-medium hover:text-ex-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary mt-4"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
