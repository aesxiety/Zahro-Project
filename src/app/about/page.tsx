'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.about.p1Title,
      desc: t.about.p1Desc,
      icon: 'palette',
    },
    {
      title: t.about.p2Title,
      desc: t.about.p2Desc,
      icon: 'eco',
    },
    {
      title: t.about.p3Title,
      desc: t.about.p3Desc,
      icon: 'recycling',
    },
    {
      title: t.about.p4Title,
      desc: t.about.p4Desc,
      icon: 'front_hand',
    },
    {
      title: t.about.p5Title,
      desc: t.about.p5Desc,
      icon: 'groups',
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            className="w-full h-full object-cover"
            alt="Artisan applying canting wax to silk"
            src="/images/Contact Us.avif"
          />
        </div>
        <div className="relative z-20 text-center text-white px-margin-mobile max-w-4xl">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary-fixed-dim bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 inline-block">
              {t.about.badge}
            </span>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl mb-6 drop-shadow-lg">
              {t.about.title}
            </h1>
            <p className="font-body text-body-lg text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              {t.about.desc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-4 block">
              {t.about.since}
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface mb-8 leading-tight">
              {t.about.storyTitle}
            </h2>
            <div className="space-y-6 font-body text-body-lg text-body-text leading-relaxed">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                alt="Borneo Open-air Batik Workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWftdFhrnHrJQ_fAsMils4RHP6S0LlVTzJnt7WdqaAEqLvH8EZhQJcxTpemgsdGLggzk_xucecplaMgO3J_ZjK0BR6iESSF8Dx1BTlf8xUSdk4_HwRiXCQ-NSZ8tnTrvVq8ErcVZc_erkKP0LIGySUn8YZH4j-Il6o5tWsXTdfp_dDPuv8LbCUyWjiF6FUvYSaRm75gSnzwvHcFOG7jJbhkQVTq74TG21ldcbyeWSonvcc63fOGB2z8MfCdBaifusQ4dZAcUgyCw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-section-gap bg-surface-tan/40 batik-pattern-overlay border-y border-outline-variant/30">
        <div className="max-w-3xl mx-auto px-margin-mobile text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold block mb-3">
              {t.about.ethosBadge}
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface mb-6">
              {t.about.ethosTitle}
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-10"></div>
            <p className="font-headline text-2xl text-body-text italic mb-12 leading-relaxed">
              {t.about.ethosQuote}
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {['Beauty', 'Authenticity', 'Heritage', 'Craftsmanship', 'Preservation'].map((keyword) => (
                <span key={keyword} className="font-label text-xs uppercase tracking-widest text-primary font-bold border border-primary/20 px-4 py-2 rounded-full bg-white/50">
                  {keyword}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal className="bg-white p-12 md:p-16 rounded-xl border border-border-muted luxury-shadow">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">
              visibility
            </span>
            <h3 className="font-headline text-headline-lg text-on-surface mb-4">{t.about.visionTitle}</h3>
            <p className="font-body text-body-lg text-body-text leading-relaxed">
              {t.about.visionDesc}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="bg-white p-12 md:p-16 rounded-xl border border-border-muted luxury-shadow">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">
              public
            </span>
            <h3 className="font-headline text-headline-lg text-on-surface mb-4">{t.about.missionTitle}</h3>
            <p className="font-body text-body-lg text-body-text leading-relaxed">
              {t.about.missionDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE VALUES / PILLARS OF CRAFT */}
      <section className="py-section-gap bg-inverse-surface text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-headline text-headline-xl text-white">{t.about.pillarsTitle}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  {pillar.icon}
                </span>
                <h4 className="font-title text-title-md mb-2 text-white">{pillar.title}</h4>
                <p className="font-body text-body-sm opacity-70 leading-relaxed">{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="mt-16 text-center">
            <Link
              href="/our-story"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all"
            >
              {t.home.craftBtn} →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
