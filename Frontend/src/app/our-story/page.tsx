'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function OurStoryPage() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.story.step1Title,
      desc: t.story.step1Desc,
      icon: 'nature_people',
    },
    {
      num: '02',
      title: t.story.step2Title,
      desc: t.story.step2Desc,
      icon: 'water_drop',
    },
    {
      num: '03',
      title: t.story.step3Title,
      desc: t.story.step3Desc,
      icon: 'edit',
    },
    {
      num: '04',
      title: t.story.step4Title,
      desc: t.story.step4Desc,
      icon: 'palette',
    },
  ];

  return (
    <>
      {/* HERO BANNER */}
      <section className="bg-surface-tan py-20 md:py-28 border-b border-outline-variant/30 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary font-bold block mb-4">
              {t.story.badge}
            </span>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {t.story.title}
            </h1>
            <p className="font-body text-body-lg text-lg md:text-xl text-body-text max-w-3xl mx-auto leading-relaxed">
              {t.story.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MOTIF MYTHOLOGY SECTION */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <ScrollReveal className="md:col-span-6">
            <div className="relative rounded-xl overflow-hidden luxury-shadow aspect-[4/3]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Borneo Motif Patterns"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6 md:col-start-7" delay={150}>
            <h2 className="font-headline text-headline-xl text-on-surface mb-6 leading-tight">
              {t.story.mythologyTitle}
            </h2>
            <p className="font-body text-body-lg text-body-text mb-6 leading-relaxed">
              {t.story.mythologyP1}
            </p>
            <p className="font-body text-body-lg text-body-text mb-8 leading-relaxed">
              {t.story.mythologyP2}
            </p>
            <div className="flex gap-4">
              <Link
                href="/collection"
                className="bg-primary text-white px-8 py-3.5 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all"
              >
                {t.home.btnExplore}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DYE PROCESS TIMELINE / STEPS */}
      <section className="py-section-gap bg-background-cream border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold block mb-3">
              {t.story.timelineBadge}
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface">
              {t.story.timelineTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <ScrollReveal key={step.num} delay={parseInt(step.num) * 100} className="bg-white p-8 rounded-xl border border-border-muted luxury-shadow relative flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-headline text-4xl text-primary/40 italic font-bold">
                      {step.num}
                    </span>
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-title text-title-md text-on-surface mb-3">{step.title}</h3>
                  <p className="font-body text-body-sm text-body-text leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 text-xs font-label text-primary font-bold uppercase tracking-wider">
                  Zero Synthetic Chemicals
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISAN COMMITMENT BANNER */}
      <section className="py-section-gap bg-inverse-surface text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <h2 className="font-headline text-headline-xl text-white mb-6">
              {t.story.artisanTitle}
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed mb-10">
              {t.story.artisanDesc}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all"
            >
              {t.home.btnContact} →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
