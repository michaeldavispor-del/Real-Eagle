import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Royal Eagle Real Estate | Premium Properties in Dubai',
  description: 'Your Premium Real-Estate Partner in Dubai. Discover luxury penthouses, villas, and apartments in the heart of the UAE.',
  openGraph: {
    title: 'Royal Eagle Real Estate',
    description: 'Your Premium Real-Estate Partner in Dubai.',
    type: 'website',
    locale: 'en_AE',
    url: 'https://royaleagle.ae',
    siteName: 'Royal Eagle Real Estate',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Royal Eagle Real Estate",
  "image": "https://royaleagle.ae/logo.png",
  "url": "https://royaleagle.ae",
  "telephone": "+971525013034",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1001 Sheikh Zayed Rd",
    "addressLocality": "Business Bay",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-gray-900 bg-white dark:bg-gray-950 dark:text-gray-100 transition-colors selection:bg-primary/30 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow flex flex-col relative pt-[80px] lg:pt-[88px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
