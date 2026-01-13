import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Humble Band - Raw Energy & Soulful Melodies",
    template: "%s | Humble Band"
  },
  description: "Experience the raw energy and soulful melodies that define our sound. Join us on a musical journey that speaks to the heart.",
  keywords: ["humble band", "band", "live music", "rock band", "wheeling", "west virginia", "live shows", "music"],
  authors: [{ name: "Humble Band" }],
  creator: "Humble Band",
  publisher: "Humble Band",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://humble.band'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://humble.band',
    title: 'Humble Band - Raw Energy & Soulful Melodies',
    description: 'Experience the raw energy and soulful melodies that define our sound. Join us on a musical journey that speaks to the heart.',
    siteName: 'Humble Band',
    images: [
      {
        url: '/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Humble Band Logo',
      },
    ],
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
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}; 