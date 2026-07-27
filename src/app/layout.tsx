import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Batik Zahro | Contemporary Borneo Batik with Natural Dyes',
  description:
    'Menghadirkan batik tulis Kalimantan dengan inovasi pewarna alam dari limbah kayu Bangkirai, memadukan warisan budaya, keberlanjutan, dan desain kontemporer.',
  keywords: [
    'Batik Zahro',
    'Borneo Batik',
    'Natural Dye Batik',
    'Bangkirai Dye',
    'Indonesian Luxury Fashion',
    'Sustainable Textiles',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${cormorant.variable} ${manrope.variable}`}>
      <head>
        {/* Preconnect for faster Google Fonts loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols Outlined - Icon Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="font-body bg-background-cream text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative">
        <LanguageProvider>
          <div className="motif-overlay fixed inset-0 z-0 pointer-events-none"></div>
          <Navbar />
          <main className="relative z-10 min-h-screen pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
