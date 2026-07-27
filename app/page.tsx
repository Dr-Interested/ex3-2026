'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';
import {
  prizeTiers,
  registrationFormUrl,
  registrationTypes,
  etransferEmail,
} from './lib/event-info';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/images/ex3logo-nobg.png"
              alt="Explore 3 Logo"
              width={300}
              height={150}
              className="mx-auto h-auto w-auto max-w-[300px] md:max-w-[400px]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Explore3 Case Competition
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              August 29 · 9:00 AM to 4:00 PM
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Humber Polytechnic Downtown
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mt-6 mb-10 max-w-2xl mx-auto"
          >
            Where high school visionaries compete in interdisciplinary challenges across Medicine, Law, and Finance.
            Join students for a full day of intellectual excellence and professional networking in Toronto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about" className="btn-outline">
              About EX3
            </Link>
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Snapshot</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything participants need to know before registering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { label: 'Date', value: 'August 29' },
              { label: 'Time', value: '9:00 AM to 4:00 PM' },
              { label: 'Location', value: 'Humber Polytechnic Downtown' },
              { label: 'Register', value: 'Google Form' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">{item.label}</p>
                <p className="text-xl font-semibold text-white leading-tight">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-gray-300">
            <span className="font-semibold text-white">Payment:</span> E-Transfer to {etransferEmail}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Enter</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Choose the registration type that fits your team, complete the form, and submit payment by e-transfer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {registrationTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
              >
                <div className="mb-3 inline-flex rounded-full bg-ex-blue/15 px-3 py-1 text-sm font-semibold text-ex-blue-light">
                  {item.title}
                </div>
                <p className="text-lg font-semibold text-white">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prizes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recognition for top teams and strong performances throughout the competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {prizeTiers.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-gray-800 bg-gray-900/70 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">{item.title}</p>
                <p className="text-lg font-semibold text-white">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
