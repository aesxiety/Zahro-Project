'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const awards = [
    { type: 'text', content: 'UNESCO Heritage Partner' },
    { type: 'text', content: 'Sustainable Fashion Award 2023' },
    { type: 'text', content: 'Vogue Editorial Feature' },
    { type: 'text', content: 'Artisan Heritage Grant' },
    { type: 'text', content: "Harper's Bazaar Edit" },
    { type: 'text', content: 'Tatler Asia Craft Award' },
  ];

  const collections = [
    {
      id: 1,
      title: 'Urban Nomad Coat',
      category: 'Hand-drawn Silk Batik',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
      aspect: 'aspect-[0.55]',
      delay: 100,
    },
    {
      id: 2,
      title: 'Street Heritage Vest',
      category: 'Natural Dye Indigo & Bangkirai',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDgNKduK3o9hMPNC4vMUFSi-lCceOIaFipHyf7VwFKQUK7anhprehrgh_Aw_Zh7TvR-n8EcAu26avOd93qU2T09Heggdpuzd-R6TqUu5PpYDdxEH8tijxJdAg3gKiTLlsqPVKF_VG5vs_u4n0RjCpeEHCZmV7NMP4lgqFQXrWD2S9HaWy6wsscxeQdBUD3T32MvKu71aCn6Xnaf38HAx3Ht-3EwWBBqtVjX4qZ1SFZkp4QTazQ3xO_eAfxNrzuM6KCeeW4QACoIJMo',
      aspect: 'aspect-[0.53]',
      delay: 200,
      extraPadding: 'md:pt-12',
    },
    {
      id: 3,
      title: 'Ancestral Shawl',
      category: 'Masterwork Collection',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
      aspect: 'aspect-[0.58]',
      delay: 300,
    },
  ];

  const faqs = [
    { q: t.home.faq1Q, a: t.home.faq1A },
    { q: t.home.faq2Q, a: t.home.faq2A },
    { q: t.home.faq3Q, a: t.home.faq3A },
  ];

  return (
    <>
      {/* SECTION 1: HERO VIDEO */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source
              src="https://res.cloudinary.com/vz8eipnq/video/upload/main_hero_video_o2tdga.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative text-center px-margin-mobile pt-20 pb-12 max-w-4xl mx-auto z-20">
          <ScrollReveal>
            <span className="inline-block font-label text-xs uppercase tracking-[0.35em] text-primary-fixed-dim bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              {t.home.badge}
            </span>
            <h1 className="font-headline text-display-lg text-white text-4xl sm:text-6xl md:text-7xl mb-8 tracking-tight leading-[1.1] drop-shadow-md">
              {t.home.titleLine1} <br className="hidden sm:inline" />
              <span className="italic font-light">{t.home.titleLine2}</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-body font-light leading-relaxed tracking-wide">
              {t.home.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/collection"
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all luxury-shadow font-bold text-center"
              >
                {t.home.btnExplore}
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-1.5 border-white text-white px-10 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-white/10 transition-all font-bold text-center"
              >
                {t.home.btnContact}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: PRESTASI & PENGAKUAN (AWARDS MARQUEE) */}
      <section className="bg-surface-tan py-12 overflow-hidden border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile mb-6 text-center">
          <span className="font-label text-primary/70 text-xs uppercase tracking-[0.4em] font-bold">
            {t.home.awardsTitle}
          </span>
        </div>
        <div className="relative flex overflow-hidden group py-4">
          <div className="animate-scroll flex items-center gap-16 whitespace-nowrap">
            {/* First Set */}
            <div className="flex items-center gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="font-headline italic text-on-surface text-2xl md:text-3xl">
                    {award.content}
                  </span>
                  <span className="text-primary font-bold opacity-40">•</span>
                </div>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {awards.map((award, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-16">
                  <span className="font-headline italic text-on-surface text-2xl md:text-3xl">
                    {award.content}
                  </span>
                  <span className="text-primary font-bold opacity-40">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HERITAGE & CRAFT */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <ScrollReveal className="md:col-span-5">
            <span className="font-label text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
              {t.home.craftSubtitle}
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface mb-8 leading-tight">
              {t.home.craftTitle}
            </h2>
            <p className="font-body text-body-lg text-body-text mb-6 leading-relaxed">
              {t.home.craftDesc1}
            </p>
            <p className="font-body text-body-lg text-body-text mb-10 leading-relaxed">
              {t.home.craftDesc2}
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-4 text-primary font-label text-xs uppercase tracking-widest font-bold group cursor-pointer border-b border-primary/30 pb-2 hover:border-primary transition-colors"
            >
              <span>{t.home.craftBtn}</span>
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-lg">
                arrow_right_alt
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6 md:col-start-7 relative mt-8 md:mt-0" delay={200}>
            <div className="aspect-square rounded-xl overflow-hidden luxury-shadow">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Batik Artisan Crafting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-1/2 aspect-[4/5] hidden lg:block rounded-lg overflow-hidden border-8 border-background-cream luxury-shadow">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Borneo Natural Textile Detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: EDITORIAL COLLECTION GRID */}
      <section className="bg-surface-tan py-section-gap border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold">
              {t.home.curatedCategory}
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface mt-4">
              {t.home.curatedTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((item) => (
              <ScrollReveal key={item.id} delay={item.delay} className={item.extraPadding || ''}>
                <div className="group relative overflow-hidden rounded-xl bg-white luxury-shadow transition-all duration-500 hover:-translate-y-2">
                  <div className={`${item.aspect} overflow-hidden`}>
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-title text-title-md text-on-surface mb-2">{item.title}</h3>
                    <p className="font-body text-body-sm text-body-text">{item.category}</p>
                    <Link
                      href="/collection"
                      className="inline-block mt-4 font-label text-xs uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {t.home.viewPiece} →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-section-gap max-w-3xl mx-auto px-margin-mobile">
        <ScrollReveal className="text-center mb-16">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold">
            {t.home.faqBadge}
          </span>
          <h2 className="font-headline text-headline-xl text-on-surface mt-4">
            {t.home.faqTitle}
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <details className="group border-b border-outline-variant/50 pb-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none py-4 font-title text-xl text-on-surface select-none">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <div className="pt-2 pb-4 text-body-text font-body text-body-lg leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: GLOBAL VISION (DARK BANNER) */}
      <section className="bg-inverse-surface text-inverse-on-surface py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary-fixed-dim mb-4 block font-bold">
              {t.home.visionBadge}
            </span>
            <h2 className="font-headline text-headline-xl text-white mb-8">{t.home.visionTitle}</h2>
            <p className="font-body text-lg opacity-80 mb-16 leading-relaxed">
              {t.home.visionDesc}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <ScrollReveal delay={100} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                public
              </span>
              <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                {t.home.stat1}
              </h4>
            </ScrollReveal>

            <ScrollReveal delay={200} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                verified
              </span>
              <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                {t.home.stat2}
              </h4>
            </ScrollReveal>

            <ScrollReveal delay={300} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                eco
              </span>
              <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                {t.home.stat3}
              </h4>
            </ScrollReveal>

            <ScrollReveal delay={400} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                handshake
              </span>
              <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                {t.home.stat4}
              </h4>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500} className="mt-20">
            <a
              href="mailto:concierge@batikzahro.com"
              className="inline-block border-b border-primary-fixed-dim pb-2 text-primary-fixed-dim font-label text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
            >
              {t.home.wholesaleLink} →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
