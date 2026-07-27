'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const organizations = [
  {
    name: 'Dr. Interested',
    description: 'Inspiring future medical professionals',
    website: 'https://drinterested.org',
    linkedin: 'https://linkedin.com/company/dr-interested',
    email: 'general@drinterested.org',
  },
  {
    name: 'Hope in Every Hand',
    description: 'Empowering communities through service',
    website: 'https://hopeineveryhand.tech',
    linkedin: 'https://linkedin.com/company/hopeineveryhand',
    email: 'hopeineveryhand@gmail.com',
  },
  {
    name: 'Youth Law Advocacy',
    description: 'Promoting legal literacy among youth',
    website: 'https://yla.explore3.live',
    linkedin: 'https://linkedin.com/company/youthlawadvocacy',
    email: 'youthlawadvocacy@gmail.com',
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Image 
                src="/images/ex3logo-nobg.png" 
                alt="Explore 3 Case Competition Footer Logo" 
                width={180} 
                height={65} 
                className="h-14 w-auto object-contain"
              />
            </div>
            <h3 className="sr-only">Explore 3 Case Competition (EX III)</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-4">
              A student-led case competition bridging the gap between education and real-world 
              professional challenges in Law, Medicine, and Finance.
            </p>
            {!isHomePage && (
              <div className="mb-4">
                <Link
                  href="/faq"
                  className="inline-block bg-ex-blue hover:bg-ex-blue-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </div>
            )}
            <p className="text-gray-400">
              Contact us: <a href="mailto:contact@explore3.live" className="text-ex-blue-light hover:underline">contact@explore3.live</a>
            </p>
          </motion.div>
        </div>

        {/* Organization Columns */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg font-semibold mb-2 text-ex-blue-light">{org.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{org.description}</p>
              <div className="flex gap-3 justify-center md:justify-start mb-2">
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-ex-blue transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                </a>
                <a
                  href={org.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-ex-blue transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <a
                href={`mailto:${org.email}`}
                className="text-sm text-gray-400 hover:text-ex-blue-light transition-colors"
              >
                {org.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Explore3. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="https://www.drinterested.org/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="https://www.drinterested.org/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
