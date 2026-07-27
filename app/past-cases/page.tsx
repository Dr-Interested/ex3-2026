'use client';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — edit this block to add / update cases
//
// Steps:
//   1. Drop your PDF into the `public/cases/` folder.
//   2. Set the `file` value below to the exact filename (e.g. 'medicine-2025.pdf').
//   3. Save — the download button appears automatically.
//
// Set `file` to null to show a "Coming soon" placeholder instead.
// ─────────────────────────────────────────────────────────────────────────────

const YEAR = '2025'; // Competition year shown in the heading

const streams = [
  {
    label: 'Pre-Medicine',
    color: 'bg-ex-red',
    textColor: 'text-ex-red',
    borderColor: 'border-ex-red/40',
    glowColor: 'shadow-ex-red/20',
    icon: '🩺',
    file: null as string | null, // e.g. 'medicine-2025.pdf'
    caseCount: 2,
  },
  {
    label: 'Pre-Law',
    color: 'bg-ex-blue',
    textColor: 'text-ex-blue-light',
    borderColor: 'border-ex-blue/40',
    glowColor: 'shadow-ex-blue/20',
    icon: '⚖️',
    file: null as string | null, // e.g. 'law-2025.pdf'
    caseCount: 2,
  },
  {
    label: 'Pre-Finance',
    color: 'bg-slate-600',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-600/40',
    glowColor: 'shadow-slate-500/20',
    icon: '📈',
    file: null as string | null, // e.g. 'finance-2025.pdf'
    caseCount: 2,
  },
];

// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

export default function PastCasesPage() {
  return (
    <>
      <div className="pt-20">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-6"
            >
              <span>📁</span>
              <span>Competition Archive</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {YEAR} Past Cases
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Download the original case packages from the EX3 {YEAR} competition — two cases per stream.
            </motion.p>
          </div>
        </section>

        {/* ── Cases Grid ───────────────────────────────────── */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download by Stream
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Each PDF contains both cases from that stream, exactly as given to competitors on the day.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {streams.map((stream, index) => (
                <AnimatedSection key={stream.label} delay={index * 0.12}>
                  <div
                    className={`relative rounded-2xl border ${stream.borderColor} bg-gray-900 p-8 flex flex-col items-center text-center shadow-xl ${stream.glowColor} h-full`}
                  >
                    {/* Coloured top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${stream.color} rounded-t-2xl`} />

                    {/* Icon */}
                    <span className="text-5xl mb-5 mt-2 drop-shadow-lg">{stream.icon}</span>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-2 ${stream.textColor}`}>
                      {stream.label}
                    </h3>

                    {/* Case count pill */}
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                      {stream.caseCount} Cases · {YEAR}
                    </span>

                    {/* Download button */}
                    {stream.file ? (
                      <a
                        href={`/cases/${stream.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto inline-flex items-center gap-2 ${stream.color} hover:opacity-90 active:scale-95 transition-all text-white font-semibold py-3 px-6 rounded-xl shadow-md w-full justify-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                          />
                        </svg>
                        Download PDF
                      </a>
                    ) : (
                      <div className="mt-auto w-full py-3 px-6 rounded-xl border border-dashed border-gray-700 text-gray-600 text-sm font-medium select-none">
                        Coming soon
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Info banner ─────────────────────────────────── */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8 flex flex-col sm:flex-row items-start gap-6">
                <span className="text-4xl shrink-0">💡</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Preparing for EX3 2026?</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These past cases are a great way to get a feel for the style and depth expected at the competition.
                    Use them to practise structuring arguments, building financial models, or forming clinical reasoning under time pressure.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block mt-4 text-ex-blue-light font-semibold hover:underline"
                  >
                    Learn more about EX3 →
                  </Link>
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
