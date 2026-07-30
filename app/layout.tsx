import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ClientNavbarWrapper from './components/ClientNavbarWrapper';

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://explore3.live';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Explore 3 | Case Competition',
    template: '%s | Explore 3 Case Competition',
  },
  description: 'A student-led case competition bridging the gap between education and real-world professional challenges in Law, Medicine, and Finance.',
  keywords: [
    'Explore 3',
    'Explore 3 Case Competition',
    'explore3.live',
    'case competition',
    'student competition',
    'high school case competition',
    'law competition',
    'medicine competition',
    'finance competition',
    'youth education',
    'Peel District School Board',
    'Adil Mukhi',
    'Dr. Interested',
    'healthcare education',
    'medical innovation',
    'youth leadership',
    'student-led organization',
    'pre-law competition',
    'pre-med competition',
    'business case competition',
  ],
  authors: [{ name: 'Explore 3 Executive Team', url: siteUrl }],
  creator: 'Explore 3 Case Competition',
  publisher: 'Explore 3 Case Competition',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Explore 3 | Case Competition',
    description: 'A student-led case competition bridging the gap between education and real-world professional challenges in Law, Medicine, and Finance.',
    url: siteUrl,
    siteName: 'Explore 3 Case Competition',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Explore 3 Case Competition Banner - Law, Medicine, and Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore 3 | Case Competition',
    description: 'A student-led case competition bridging the gap between education and real-world professional challenges in Law, Medicine, and Finance.',
    images: ['/og-image.png'],
    creator: '@explore3cc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Explore 3 Case Competition',
    url: siteUrl,
    logo: `${siteUrl}/images/ex3logo-nobg.png`,
    image: `${siteUrl}/og-image.png`,
    description: 'A student-led case competition bridging the gap between education and real-world professional challenges in Law, Medicine, and Finance.',
    sameAs: [],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-18X5HZG4JZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-18X5HZG4JZ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Explore 3 Case Competition RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientNavbarWrapper>
          {children}
        </ClientNavbarWrapper>
      </body>
    </html>
  );
}

