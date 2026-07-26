'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.story, href: '/our-story' },
    { name: t.nav.collection, href: '/collection' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background-cream/95 nav-blur luxury-shadow border-b border-outline-variant/30 py-3'
            : 'bg-background-cream/80 nav-blur border-b border-outline-variant/20 py-5'
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="font-headline tracking-tighter text-3xl text-on-surface italic flex items-center gap-3 group"
          >
            <span className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-lg not-italic font-semibold shadow-md group-hover:scale-105 transition-transform">
              Z
            </span>
            <span>{t.nav.brand}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 font-label text-xs uppercase tracking-widest font-bold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-6">
            {/* Language Switcher Button */}
            <div className="hidden sm:flex items-center gap-2 font-label text-xs tracking-widest text-on-surface-variant bg-white/50 px-3 py-1.5 rounded-full border border-outline-variant/30">
              <button
                onClick={() => setLanguage('ID')}
                className={`transition-colors ${
                  language === 'ID' ? 'text-primary font-black' : 'hover:text-primary opacity-60'
                }`}
              >
                ID
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLanguage('EN')}
                className={`transition-colors ${
                  language === 'EN' ? 'text-primary font-black' : 'hover:text-primary opacity-60'
                }`}
              >
                EN
              </button>
            </div>

            {/* Shopping Bag Button */}
            <button
              aria-label="Shopping Bag"
              className="material-symbols-outlined text-primary hover:opacity-75 transition-all text-2xl relative"
            >
              shopping_bag
              <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden material-symbols-outlined text-primary text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-cream flex flex-col justify-center px-margin-mobile lg:hidden pt-24 pb-12 transition-all duration-300">
          <div className="flex flex-col gap-6 font-headline text-3xl text-on-surface text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-primary transition-colors italic ${
                  pathname === link.href ? 'text-primary font-semibold underline' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center gap-4 font-label text-sm tracking-widest text-on-surface-variant">
            <button
              onClick={() => {
                setLanguage('ID');
                setMobileMenuOpen(false);
              }}
              className={language === 'ID' ? 'text-primary font-extrabold' : 'opacity-60'}
            >
              INDONESIA (ID)
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setLanguage('EN');
                setMobileMenuOpen(false);
              }}
              className={language === 'EN' ? 'text-primary font-extrabold' : 'opacity-60'}
            >
              ENGLISH (EN)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
