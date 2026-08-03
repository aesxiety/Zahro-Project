'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

type TabType = 'filosofi' | 'warna' | 'material' | 'inovasi';

export default function OurStoryPage() {
  const { t, language } = useLanguage();
  const [kelubutTab, setKelubutTab] = useState<TabType>('filosofi');
  const [lelanaTab, setLelanaTab] = useState<TabType>('filosofi');
  const [kelubutActiveImage, setKelubutActiveImage] = useState<'motif' | 'story'>('motif');
  const [lelanaActiveImage, setLelanaActiveImage] = useState<'motif' | 'story'>('motif');

  const kelubutRef = useRef<HTMLDivElement>(null);
  const lelanaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;

      if (kelubutRef.current) {
        const rect = kelubutRef.current.getBoundingClientRect();
        if (rect.top < viewHeight * 0.45) {
          setKelubutActiveImage('story');
        } else {
          setKelubutActiveImage('motif');
        }
      }

      if (lelanaRef.current) {
        const rect = lelanaRef.current.getBoundingClientRect();
        if (rect.top < viewHeight * 0.45) {
          setLelanaActiveImage('story');
        } else {
          setLelanaActiveImage('motif');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section className="bg-surface-tan py-20 md:py-28 border-b border-outline-variant/30 relative z-0">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary font-bold block mb-4">
              {language === 'ID' ? 'Kisah & Filosofi Wastra' : 'Heritage & Motif Stories'}
            </span>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {language === 'ID' ? 'Cerita Motif Batik' : 'The Stories Behind Our Motifs'}
            </h1>
            <p className="font-body text-body-lg text-lg md:text-xl text-body-text max-w-3xl mx-auto leading-relaxed">
              {language === 'ID'
                ? 'Menjelajahi makna mendalam dibalik motif Kalimantan kontemporer yang dipadukan dengan kearifan lokal pewarnaan alami kayu Bangkirai.'
                : 'Explore the profound meanings behind our contemporary Borneo motifs, married with natural Bangkirai wood dyes.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STICKY CONTAINER FOR STACKING SECTIONS */}
      <div className="relative">

        {/* SECTION 1: PROSES ALKIMIA PEWARNAAN ALAMI (Sticky Level 1) */}
        {/* <section className="sticky top-[64px] z-10 min-h-[calc(100vh-64px)] py-12 md:py-20 bg-background-cream flex flex-col justify-center border-b border-outline-variant/30 rounded-t-[2.5rem] md:rounded-t-[4rem]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <ScrollReveal className="text-center mb-12">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold block mb-3">
                {t.story.timelineBadge}
              </span>
              <h2 className="font-headline text-headline-xl text-on-surface">
                {t.story.timelineTitle}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <ScrollReveal key={step.num} delay={parseInt(step.num) * 100} className="bg-white p-6 md:p-8 rounded-xl border border-border-muted luxury-shadow relative flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-headline text-3xl text-primary/40 italic font-bold">
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
        </section> */}

        {/* SECTION 2: ROYAL KELUBUT (Sticky Level 2 - Stacked over Section 1) */}
        <section className="sticky top-[64px] z-20 min-h-[calc(100vh-64px)] py-12 md:py-20 bg-white flex flex-col justify-center border-b border-outline-variant/30 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] rounded-t-[2.5rem] md:rounded-t-[4rem]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Interactive Image Panel */}
              <ScrollReveal className="lg:col-span-6">
                <div ref={kelubutRef} className="relative rounded-2xl overflow-hidden aspect-[4/3] luxury-shadow border border-outline-variant/20 bg-surface-tan transition-all duration-500">
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${kelubutActiveImage === 'motif' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Royal Kelubut Motif Detail"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA"
                  />
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${kelubutActiveImage === 'story' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Royal Kelubut Natural Inspiration"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc"
                  />
                </div>
              </ScrollReveal>

              {/* Interactive Info Content */}
              <ScrollReveal className="lg:col-span-6 lg:col-start-7 space-y-6" delay={150}>
                <div>
                  <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-bold">
                    {language === 'ID' ? 'Seri Eksplorasi Bangkirai 2026' : 'Bangkirai Exploration Series 2026'}
                  </span>
                  <h2 className="font-headline text-headline-xl text-on-surface mt-2 leading-tight">
                    1. Royal Kelubut
                  </h2>
                </div>

                {/* Sub-tabs Selection */}
                <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-2">
                  {(['filosofi', 'warna', 'material', 'inovasi'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setKelubutTab(tab)}
                      className={`px-4 py-2 font-label text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${kelubutTab === tab ? 'border-primary text-primary' : 'border-transparent text-body-text/60 hover:text-on-surface'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content display */}
                <div className="min-h-[200px] flex items-center bg-surface-tan/40 p-6 rounded-xl border border-outline-variant/30">
                  {kelubutTab === 'filosofi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Filosofi Motif' : 'Motif Philosophy'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Royal Kelubut merupakan eksplorasi visual Batik Zahro yang mentransformasikan ornamen khas Dayak Kalimantan Timur dalam komposisi batik kontemporer yang adaptif. Melalui stilasi sulur etnik dan elemen floral, motif ini merepresentasikan kemuliaan budaya, pertumbuhan, serta kesinambungan nilai lokal dalam estetika modern, menjadikannya identitas wastra yang elegan sekaligus relevan untuk lintas generasi.
                      </p>
                    </div>
                  )}

                  {kelubutTab === 'warna' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Eksplorasi Warna' : 'Color Exploration'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Pewarna diperoleh dari ekstraksi limbah serbuk kayu bangkirai melalui proses pencelupan bertahap untuk menghadirkan karakter warna alami yang menjadi bagian dari eksplorasi wastra kontemporer Batik Zahro.
                      </p>
                    </div>
                  )}

                  {kelubutTab === 'material' && (
                    <div className="space-y-3 w-full">
                      <h4 className="font-title text-lg text-primary font-semibold mb-3">{language === 'ID' ? 'Material & Teknik Wastra' : 'Material & Techniques'}</h4>
                      <table className="w-full text-left font-body text-body-sm text-body-text border-collapse">
                        <tbody>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Kain' : 'Fabric'}</td>
                            <td className="py-2">Katun / Premium Cotton</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Teknik' : 'Technique'}</td>
                            <td className="py-2">Batik tulis layering</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Pewarna' : 'Dye Source'}</td>
                            <td className="py-2">Ekstraksi limbah serbuk kayu Bangkirai Kalimantan Timur</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Layering Warna' : 'Color Baths'}</td>
                            <td className="py-2">12 kali celup</td>
                          </tr>
                          <tr className="py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Fiksasi' : 'Mordant'}</td>
                            <td className="py-2">Tawas & Kapur</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {kelubutTab === 'inovasi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Nilai Inovasi' : 'Innovation Value'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Pengembangan motif Royal Kelubut sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 3: LELANA ROTAN DAYAK (Sticky Level 3 - Stacked over Section 2) */}
        <section className="sticky top-[64px] z-30 min-h-[calc(100vh-64px)] py-12 md:py-20 bg-surface-tan flex flex-col justify-center border-b border-outline-variant/30 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] rounded-t-[2.5rem] md:rounded-t-[4rem]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Interactive Info Content */}
              <ScrollReveal className="lg:col-span-6 lg:order-1 space-y-6">
                <div>
                  <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-bold">
                    {language === 'ID' ? 'Seri Eksplorasi Bangkirai 2026' : 'Bangkirai Exploration Series 2026'}
                  </span>
                  <h2 className="font-headline text-headline-xl text-on-surface mt-2 leading-tight">
                    2. Lelana Rotan Dayak
                  </h2>
                </div>

                {/* Sub-tabs Selection */}
                <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-2">
                  {(['filosofi', 'warna', 'material', 'inovasi'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setLelanaTab(tab)}
                      className={`px-4 py-2 font-label text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${lelanaTab === tab ? 'border-primary text-primary' : 'border-transparent text-body-text/60 hover:text-on-surface'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content display */}
                <div className="min-h-[200px] flex items-center bg-white p-6 rounded-xl border border-outline-variant/30 luxury-shadow">
                  {lelanaTab === 'filosofi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Filosofi Motif' : 'Motif Philosophy'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        “Lelana Rotan Dayak merepresentasikan perjalanan hidup yang lentur namun kuat, terinspirasi dari rotan Kalimantan sebagai simbol ketahanan, persatuan, dan akar budaya Dayak. Dipadukan ornamen etnik serta elemen floral, motif ini menjadi representasi harmoni antara tradisi, pertumbuhan, dan semangat masa depan Kalimantan Timur.”
                      </p>
                    </div>
                  )}

                  {lelanaTab === 'warna' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Eksplorasi Warna' : 'Color Exploration'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Warna dikembangkan melalui proses layering antara ekstrak bangkirai dan lapisan akhir ulin untuk menghadirkan kedalaman warna alami sebagai interpretasi karakter hutan tropis Kalimantan Timur.
                      </p>
                    </div>
                  )}

                  {lelanaTab === 'material' && (
                    <div className="space-y-3 w-full">
                      <h4 className="font-title text-lg text-primary font-semibold mb-3">{language === 'ID' ? 'Material & Teknik Wastra' : 'Material & Techniques'}</h4>
                      <table className="w-full text-left font-body text-body-sm text-body-text border-collapse">
                        <tbody>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Kain' : 'Fabric'}</td>
                            <td className="py-2">Katun / Premium Cotton</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Teknik' : 'Technique'}</td>
                            <td className="py-2">Batik cap mix tulis</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Pewarna' : 'Dye Source'}</td>
                            <td className="py-2">Ekstraksi limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Layering Warna' : 'Color Baths'}</td>
                            <td className="py-2">15 kali celup</td>
                          </tr>
                          <tr className="py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Fiksasi' : 'Mordant'}</td>
                            <td className="py-2">Tawas & Kapur</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {lelanaTab === 'inovasi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Nilai Inovasi' : 'Innovation Value'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Pengembangan motif Lelana Rotan Dayak sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* Interactive Image Panel */}
              <ScrollReveal className="lg:col-span-6 lg:order-2">
                <div ref={lelanaRef} className="relative rounded-2xl overflow-hidden aspect-[4/3] luxury-shadow border border-outline-variant/20 bg-surface-tan transition-all duration-500">
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${lelanaActiveImage === 'motif' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Lelana Rotan Dayak Motif Detail"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg"
                  />
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${lelanaActiveImage === 'story' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Lelana Rotan Dayak Cultural Inspiration"
                    src="https://res.cloudinary.com/vz8eipnq/image/upload/v1785707308/Pemberdayaan_Pekerja_Disalbilitas_abpquo.avif"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: ROYAL KELUBUT (Sticky Level 2 - Stacked over Section 1) */}
        <section className="sticky top-[64px] z-20 min-h-[calc(100vh-64px)] py-12 md:py-20 bg-white flex flex-col justify-center border-b border-outline-variant/30 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] rounded-t-[2.5rem] md:rounded-t-[4rem]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Interactive Image Panel */}
              <ScrollReveal className="lg:col-span-6">
                <div ref={kelubutRef} className="relative rounded-2xl overflow-hidden aspect-[4/3] luxury-shadow border border-outline-variant/20 bg-surface-tan transition-all duration-500">
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${kelubutActiveImage === 'motif' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Royal Kelubut Motif Detail"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA"
                  />
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${kelubutActiveImage === 'story' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    alt="Royal Kelubut Natural Inspiration"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc"
                  />
                </div>
              </ScrollReveal>

              {/* Interactive Info Content */}
              <ScrollReveal className="lg:col-span-6 lg:col-start-7 space-y-6" delay={150}>
                <div>
                  <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-bold">
                    {language === 'ID' ? 'Seri Eksplorasi Bangkirai 2026' : 'Bangkirai Exploration Series 2026'}
                  </span>
                  <h2 className="font-headline text-headline-xl text-on-surface mt-2 leading-tight">
                    1. Royal Kelubut
                  </h2>
                </div>

                {/* Sub-tabs Selection */}
                <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-2">
                  {(['filosofi', 'warna', 'material', 'inovasi'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setKelubutTab(tab)}
                      className={`px-4 py-2 font-label text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${kelubutTab === tab ? 'border-primary text-primary' : 'border-transparent text-body-text/60 hover:text-on-surface'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content display */}
                <div className="min-h-[200px] flex items-center bg-surface-tan/40 p-6 rounded-xl border border-outline-variant/30">
                  {kelubutTab === 'filosofi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Filosofi Motif' : 'Motif Philosophy'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Royal Kelubut merupakan eksplorasi visual Batik Zahro yang mentransformasikan ornamen khas Dayak Kalimantan Timur dalam komposisi batik kontemporer yang adaptif. Melalui stilasi sulur etnik dan elemen floral, motif ini merepresentasikan kemuliaan budaya, pertumbuhan, serta kesinambungan nilai lokal dalam estetika modern, menjadikannya identitas wastra yang elegan sekaligus relevan untuk lintas generasi.
                      </p>
                    </div>
                  )}

                  {kelubutTab === 'warna' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Eksplorasi Warna' : 'Color Exploration'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Pewarna diperoleh dari ekstraksi limbah serbuk kayu bangkirai melalui proses pencelupan bertahap untuk menghadirkan karakter warna alami yang menjadi bagian dari eksplorasi wastra kontemporer Batik Zahro.
                      </p>
                    </div>
                  )}

                  {kelubutTab === 'material' && (
                    <div className="space-y-3 w-full">
                      <h4 className="font-title text-lg text-primary font-semibold mb-3">{language === 'ID' ? 'Material & Teknik Wastra' : 'Material & Techniques'}</h4>
                      <table className="w-full text-left font-body text-body-sm text-body-text border-collapse">
                        <tbody>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Kain' : 'Fabric'}</td>
                            <td className="py-2">Katun / Premium Cotton</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Teknik' : 'Technique'}</td>
                            <td className="py-2">Batik tulis layering</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Pewarna' : 'Dye Source'}</td>
                            <td className="py-2">Ekstraksi limbah serbuk kayu Bangkirai Kalimantan Timur</td>
                          </tr>
                          <tr className="border-b border-outline-variant/20 py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Layering Warna' : 'Color Baths'}</td>
                            <td className="py-2">12 kali celup</td>
                          </tr>
                          <tr className="py-2">
                            <td className="font-bold pr-4 py-2">{language === 'ID' ? 'Fiksasi' : 'Mordant'}</td>
                            <td className="py-2">Tawas & Kapur</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {kelubutTab === 'inovasi' && (
                    <div className="space-y-3">
                      <h4 className="font-title text-lg text-primary font-semibold">{language === 'ID' ? 'Nilai Inovasi' : 'Innovation Value'}</h4>
                      <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                        Pengembangan motif Royal Kelubut sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </div>

      {/* ARTISAN COMMITMENT BANNER (Sticky overlay ends here, normally scrolling) */}
      <section className="relative z-40 py-section-gap bg-inverse-surface text-white shadow-[0_-15px_30px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] md:rounded-t-[4rem]">
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
