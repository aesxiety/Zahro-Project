'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full pt-section-gap pb-12 bg-surface-tan border-t border-outline-variant/30 relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Column 1: Brand Info */}
        <div className="col-span-1">
          <Link href="/" className="font-headline text-4xl text-primary mb-6 italic block">
            {t.nav.brand}
          </Link>
          <p className="font-body text-body-sm text-body-text max-w-xs leading-relaxed mb-6">
            {t.footer.desc}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary font-bold bg-primary/10 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {t.footer.dyesBadge}
          </div>
        </div>

        {/* Column 2: Collections */}
        <div>
          <h5 className="font-label text-sm uppercase tracking-widest text-on-surface mb-6 font-bold">
            {t.footer.colTitle}
          </h5>
          <ul className="space-y-4 font-body text-body-sm text-body-text">
            <li>
              <Link href="/collection" className="hover:text-primary transition-all">
                {t.footer.col1}
              </Link>
            </li>
            <li>
              <Link href="/collection" className="hover:text-primary transition-all">
                {t.footer.col2}
              </Link>
            </li>
            <li>
              <Link href="/collection" className="hover:text-primary transition-all">
                {t.footer.col3}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-all">
                {t.footer.col4}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Ethos & Sustainability */}
        <div>
          <h5 className="font-label text-sm uppercase tracking-widest text-on-surface mb-6 font-bold">
            {t.footer.ethosTitle}
          </h5>
          <ul className="space-y-4 font-body text-body-sm text-body-text">
            <li>
              <Link href="/our-story" className="hover:text-primary transition-all">
                {t.footer.ethos1}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-all">
                {t.footer.ethos2}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-all">
                {t.footer.ethos3}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-all">
                {t.footer.ethos4}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Global Hubs & Connect */}
        <div>
          <h5 className="font-label text-sm uppercase tracking-widest text-on-surface mb-6 font-bold">
            {t.footer.connectTitle}
          </h5>
          <div className="flex gap-4 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-lg">camera_alt</span>
            </a>
            <a
              href="mailto:concierge@batikzahro.com"
              className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
          <p className="font-body text-body-sm text-body-text italic">
            {t.footer.hubs}
          </p>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-outline-variant/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-body-sm text-body-text opacity-70">
          © {new Date().getFullYear()} Batik Zahro. Borneo Artisan Heritage. {t.footer.rights}
        </p>
        <div className="flex gap-8 font-body text-body-sm text-body-text opacity-70">
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Ethical Sourcing
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
