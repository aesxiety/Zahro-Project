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
  const isHome = pathname === '/';
  const isTransparent = !isScrolled && isHome;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isTransparent
            ? 'bg-background-cream/95 nav-blur luxury-shadow border-b border-outline-variant/30 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className={`font-headline tracking-tighter text-3xl italic flex items-center gap-3 group transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-on-surface'
              }`}
          >
            <img
              src="/images/logo.png"
              alt="Zahro Batik"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback to text circle if logo is not loaded
                e.currentTarget.style.display = 'none';
              }}
            />
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
                  className={`transition-all duration-300 relative py-1 ${isActive
                      ? 'text-primary border-b-2 border-primary font-bold'
                      : isTransparent
                        ? 'text-white/85 hover:text-white'
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
            {/* Membership Button */}
            <Link
              href="/membership"
              className={`hidden md:flex items-center gap-2 font-label text-xs uppercase tracking-widest rounded-full border transition-all duration-300 px-3 py-1.5 font-bold ${isTransparent
                  ? 'text-white bg-white/10 border-white/20 hover:bg-white/20'
                  : 'text-on-surface-variant bg-white/50 border-outline-variant/30 hover:text-primary hover:border-primary/50'
                }`}
            >
              <span className="material-symbols-outlined text-[14px] leading-none">
                diamond
              </span>
              <span>{t.nav.membership}</span>
            </Link>

            {/* Language Switcher Button */}
            <button
              onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
              className={`hidden sm:flex items-center gap-2 font-label text-xs uppercase tracking-widest rounded-full border transition-all duration-300 px-3 py-1.5 font-bold ${isTransparent
                  ? 'text-white bg-white/10 border-white/20 hover:bg-white/20'
                  : 'text-on-surface-variant bg-white/50 border-outline-variant/30 hover:text-primary hover:border-primary/50'
                }`}
              title={language === 'ID' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
            >
              <span className="material-symbols-outlined text-[14px] leading-none">
                language
              </span>
              <span>{language}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center focus:outline-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary'
                }`}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
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
                className={`hover:text-primary transition-colors italic ${pathname === link.href ? 'text-primary font-semibold underline' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Membership Link in Mobile Menu */}
            <Link
              href="/membership"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 font-label text-xs uppercase tracking-wider rounded-full border border-primary/20 bg-primary/5 text-primary px-6 py-2.5 max-w-[200px] w-full mx-auto font-bold hover:bg-primary/10 transition-all"
            >
              <span className="material-symbols-outlined text-[14px] leading-none font-bold">
                diamond
              </span>
              <span>{t.nav.membership}</span>
            </Link>
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
