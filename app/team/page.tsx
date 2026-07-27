'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  email?: string;
  website?: string; // personal website only
}

interface Organization {
  name: string;
  description: string;
  color: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  members: TeamMember[];
}

const organizations: Organization[] = [
  {
    name: 'Dr. Interested',
    description: 'Leading medical education and healthcare innovation club',
    color: 'from-green-700 to-green-900',
    website: 'https://drinterested.org',
    linkedin: 'https://www.linkedin.com/company/dr-interested/',
    instagram: 'https://instagram.com/youthlawadvocacy',
    members: [
      {
        name: 'Adil Mukhi',
        role: 'Executive Director',
        bio: 'Technology, Venue & Finance Lead',
        linkedin: 'https://www.linkedin.com/in/adil-mukhi/',
        email: 'adil@drinterested.org',
        website: 'https://adilmukhi.vercel.app/', 
      },
      {
        name: 'Kishan Suhirthan',
        role: 'Deputy Executive Director',
        bio: 'Operations & Logistics Lead',
        linkedin: '#',
        email: 'kishan@drinterested.org',
        website: 'https://kishansuhi.ca',
      },
      {
        name: 'Velan Mangai Sivakumar',
        role: 'Deputy Executive Director',
        bio: 'Education Lead.',
        linkedin: '#',
        email: 'velan@drinterested.org',
        website: '',
      },
      {
        name: 'Arghya Vyas',
        role: 'Director of Technology',
        bio: 'Technology & Infrastructure Lead.',
        linkedin: 'https://www.linkedin.com/in/arghya-vyas-2a40a72b1/',
        email: 'arghya@tech.drinterested.org',
        website: 'https://arghyavyas.ca',
      },
      {
        name: 'Ali Salman',
        role: 'Director of Events',
        bio: 'Operations & Outreach Coordinator.',
        linkedin: 'https://www.linkedin.com/in/alisalman-/',
        email: 'ali@events.drinterested.org',
        website: '',
      },
    ],
  },
  {
    name: 'Hope in Every Hand',
    description: 'Community-focused organization creating positive social impact',
    color: 'from-amber-600 to-yellow-700',
    website: 'https://hopeineveryhand.tech',
    linkedin: '#',
    instagram: 'https://www.instagram.com/hope_in_every_hand',
    members: [
      {
        name: 'Nivriti Jain',
        role: 'President',
        bio: 'Operations & Outreach Lead',
        linkedin: '#',
        email: 'emily@example.com',
        website: '',
      },
      {
        name: 'Devanshi Satapathy',
        role: 'President',
        bio: 'Volunteer Coordination Lead',
        linkedin: '#',
        email: 'david@example.com',
        website: '',
      },
      {
        name: 'Rhea Addepalli',
        role: 'Director of Operations',
        bio: 'Social Media & Communications',
        linkedin: '#',
        email: 'priya@example.com',
        website: '',
      },
      {
        name: 'Riva Siroya',
        role: 'Director of Public Relations',
        bio: 'Social Media & Communications',
        linkedin: '#',
        email: 'ryan@example.com',
        website: '',
      },
      {
        name: 'Anushka Bhati',
        role: 'Coordinator of Finance',
        bio: 'Financial Lead',
        linkedin: '#',
        email: 'maya@example.com',
        website: '',
      },
    ],
  },
  {
    name: 'Youth Law Advocacy',
    description: 'Empowering young voices in legal advocacy and justice education',
    color: 'from-red-600 to-red-800',
    website: 'https://youthlawadvocacy.org',
    linkedin: 'https://www.linkedin.com/company/youth-law-advocacy/',
    instagram: 'https://instagram.com/youthlawadvocacy',
    members: [
      {
        name: 'Plaksha Panwar',
        role: 'President',
        bio: 'Operation, Outreach, and Event Coordinator',
        linkedin: '#',
        email: 'jordan@example.com',
        website: '',
      },
      {
        name: 'Hiya Mali',
        role: 'Director',
        bio: 'Event and Marketing Coordinator',
        linkedin: '#',
        email: 'amanda@example.com',
        website: '',
      },
      {
        name: 'Monica Paudel',
        role: 'Coordinator',
        bio: 'Marketing Coordinator',
        linkedin: '#',
        email: 'chris@example.com',
        website: '',
      },
    ],
  },
];

function TeamMemberCard({ member, colorClass }: { member: TeamMember; colorClass: string }) {
  // Only show website icon if website is a non-empty string
  const websiteUrl = member.website && member.website.trim() !== '' ? member.website : undefined;
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="bg-gray-800 rounded-lg overflow-hidden flex border border-gray-700 hover:border-gray-600 transition-colors h-[88px]"
    >
      {/* Profile Image Placeholder - Fixed Square */}
      <div className={`w-[88px] h-[88px] flex-shrink-0 bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
        <span className="text-xl font-bold text-white">
          {member.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div className="p-3 flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white truncate">{member.name}</h4>
            <p className="text-xs text-ex-blue-light">{member.role}</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-1 flex-shrink-0">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-ex-blue transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-ex-red transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-ex-blue transition-colors"
                aria-label={`${member.name}'s Website`}
              >
                {/* Website icon */}
                <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-400 line-clamp-2">{member.bio}</p>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
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
              Meet Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Explore 3 is powered by three passionate student organizations working together 
              to create an unforgettable competition experience.
            </motion.p>
          </div>
        </section>

        {/* Three Column Team Layout */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {organizations.map((org) => (
                <div key={org.name} className="flex flex-col">
                  {/* Organization Header */}
                    <div className={`bg-gradient-to-r ${org.color} rounded-t-xl p-4 text-center`}>
                      <h2 className="text-xl font-bold text-white">{org.name}</h2>
                      <p className="text-sm text-white/80 mb-2">{org.description}</p>
                      <div className="flex justify-center gap-3 mt-2">
                        <a href={org.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-ex-blue transition-colors">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                          </svg>
                        </a>
                        <a href={org.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-ex-blue transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        {org.instagram && (
                          <a href={org.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-pink-500 transition-colors">
                            {/* Standard Instagram logo icon */}
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  
                  {/* Team Members */}
                  <div className="bg-gray-900 rounded-b-xl p-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      {org.members.map((member) => (
                        <TeamMemberCard
                          key={member.name}
                          member={member}
                          colorClass={org.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-ex-blue to-blue-800 rounded-2xl p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Connected with Our Team
                </h2>
                <p className="text-blue-100 mb-8">
                  Sign up for our weekly newsletter to receive updates, event announcements, 
                  and exclusive content from Explore 3.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                  <button type="button" className="bg-white text-ex-blue font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-blue-200 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
