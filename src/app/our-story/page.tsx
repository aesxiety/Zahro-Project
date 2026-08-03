'use client';

import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

type TabType = 'filosofi' | 'warna' | 'material' | 'inovasi';

interface MotifDetail {
  title: string;
  series: string;
  filosofiTitle: string;
  filosofiContent: string;
  warnaTitle: string;
  warnaContent: string;
  materialTitle: string;
  materialSpecs: { label: string; value: string }[];
  inovasiTitle: string;
  inovasiContent: string;
}

interface MotifData {
  id: string;
  slug: string;
  imageMotif: string;
  imageStory: string;
  order: 'left' | 'right';
  bgClass: string;
  tabContentBgClass: string;
  zIndexClass: string;
  translations: {
    ID: MotifDetail;
    EN: MotifDetail;
  };
}

const motifsData: MotifData[] = [
  {
    id: 'royal-kelubut-1',
    slug: 'royal-kelubut',
    imageMotif: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
    imageStory: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
    order: 'left',
    bgClass: 'bg-white',
    tabContentBgClass: 'bg-surface-tan/40',
    zIndexClass: 'z-20',
    translations: {
      ID: {
        title: 'Royal Kelubut',
        series: 'Seri Eksplorasi Bangkirai 2026',
        filosofiTitle: 'Filosofi Motif',
        filosofiContent: 'Royal Kelubut merupakan eksplorasi visual Batik Zahro yang mentransformasikan ornamen khas Dayak Kalimantan Timur dalam komposisi batik kontemporer yang adaptif. Melalui stilasi sulur etnik dan elemen floral, motif ini merepresentasikan kemuliaan budaya, pertumbuhan, serta kesinambungan nilai lokal dalam estetika modern, menjadikannya identitas wastra yang elegan sekaligus relevan untuk lintas generasi.',
        warnaTitle: 'Eksplorasi Warna',
        warnaContent: 'Pewarna diperoleh dari ekstraksi limbah serbuk kayu bangkirai melalui proses pencelupan bertahap untuk menghadirkan karakter warna alami yang menjadi bagian dari eksplorasi wastra kontemporer Batik Zahro.',
        materialTitle: 'Material & Teknik Wastra',
        materialSpecs: [
          { label: 'Kain', value: 'Katun / Premium Cotton' },
          { label: 'Teknik', value: 'Batik tulis layering' },
          { label: 'Pewarna', value: 'Ekstraksi limbah serbuk kayu Bangkirai Kalimantan Timur' },
          { label: 'Layering Warna', value: '12 kali celup' },
          { label: 'Fiksasi', value: 'Tawas & Kapur' }
        ],
        inovasiTitle: 'Nilai Inovasi',
        inovasiContent: 'Pengembangan motif Royal Kelubut sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.'
      },
      EN: {
        title: 'Royal Kelubut',
        series: 'Bangkirai Exploration Series 2026',
        filosofiTitle: 'Motif Philosophy',
        filosofiContent: 'Royal Kelubut is a visual exploration by Batik Zahro that transforms the signature ethnic ornaments of East Kalimantan Dayak into an adaptive contemporary batik composition. Through stylized ethnic vines and floral elements, this motif represents cultural nobility, growth, and the continuity of local values in a modern aesthetic, making it an elegant and relevant textile identity across generations.',
        warnaTitle: 'Color Exploration',
        warnaContent: 'The dye is obtained from the extraction of Bangkirai wood sawdust waste through a gradual dyeing process to present the natural color character that is part of Batik Zahro\'s contemporary textile exploration.',
        materialTitle: 'Material & Techniques',
        materialSpecs: [
          { label: 'Fabric', value: 'Premium Cotton' },
          { label: 'Technique', value: 'Hand-drawn layered batik' },
          { label: 'Dye Source', value: 'East Kalimantan Bangkirai wood sawdust waste extraction' },
          { label: 'Color Baths', value: '12 dye baths' },
          { label: 'Mordant', value: 'Alum & Lime' }
        ],
        inovasiTitle: 'Innovation Value',
        inovasiContent: 'The development of the Royal Kelubut motif as an adaptive motif across various textile mediums, combined with the exploration of natural dyes from East Kalimantan Bangkirai wood sawdust waste as an effort to develop sustainable local colors.'
      }
    }
  },
  {
    id: 'lelana-rotan-dayak',
    slug: 'lelana-rotan-dayak',
    imageMotif: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
    imageStory: 'https://res.cloudinary.com/vz8eipnq/image/upload/v1785707308/Pemberdayaan_Pekerja_Disalbilitas_abpquo.avif',
    order: 'right',
    bgClass: 'bg-surface-tan',
    tabContentBgClass: 'bg-white luxury-shadow',
    zIndexClass: 'z-30',
    translations: {
      ID: {
        title: 'Lelana Rotan Dayak',
        series: 'Seri Eksplorasi Bangkirai 2026',
        filosofiTitle: 'Filosofi Motif',
        filosofiContent: '“Lelana Rotan Dayak merepresentasikan perjalanan hidup yang lentur namun kuat, terinspirasi dari rotan Kalimantan sebagai simbol ketahanan, persatuan, dan akar budaya Dayak. Dipadukan ornamen etnik serta elemen floral, motif ini menjadi representasi harmoni antara tradisi, pertumbuhan, dan semangat masa depan Kalimantan Timur.”',
        warnaTitle: 'Eksplorasi Warna',
        warnaContent: 'Warna dikembangkan melalui proses layering antara ekstrak bangkirai dan lapisan akhir ulin untuk menghadirkan kedalaman warna alami sebagai interpretasi karakter hutan tropis Kalimantan Timur.',
        materialTitle: 'Material & Teknik Wastra',
        materialSpecs: [
          { label: 'Kain', value: 'Katun / Premium Cotton' },
          { label: 'Teknik', value: 'Batik cap mix tulis' },
          { label: 'Pewarna', value: 'Ekstraksi limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur' },
          { label: 'Layering Warna', value: '15 kali celup' },
          { label: 'Fiksasi', value: 'Tawas & Kapur' }
        ],
        inovasiTitle: 'Nilai Inovasi',
        inovasiContent: 'Pengembangan motif Lelana Rotan Dayak sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.'
      },
      EN: {
        title: 'Lelana Rotan Dayak',
        series: 'Bangkirai Exploration Series 2026',
        filosofiTitle: 'Motif Philosophy',
        filosofiContent: '"Lelana Rotan Dayak represents a life journey that is flexible yet strong, inspired by Borneo rattan as a symbol of resilience, unity, and the roots of Dayak culture. Combined with ethnic ornaments and floral elements, this motif represents harmony between tradition, growth, and the future spirit of East Kalimantan."',
        warnaTitle: 'Color Exploration',
        warnaContent: 'The color is developed through a layering process between bangkirai extract and a final coat of ironwood (ulin) to present a natural depth of color as an interpretation of the tropical rainforest character of East Kalimantan.',
        materialTitle: 'Material & Techniques',
        materialSpecs: [
          { label: 'Fabric', value: 'Premium Cotton' },
          { label: 'Technique', value: 'Hand-drawn mixed stamped batik' },
          { label: 'Dye Source', value: 'East Kalimantan Bangkirai and Ulin wood sawdust waste extraction' },
          { label: 'Color Baths', value: '15 dye baths' },
          { label: 'Mordant', value: 'Alum & Lime' }
        ],
        inovasiTitle: 'Innovation Value',
        inovasiContent: 'The development of the Lelana Rotan Dayak motif as an adaptive motif across various textile mediums, combined with the exploration of natural dyes from East Kalimantan Bangkirai and Ironwood (Ulin) sawdust waste as an effort to develop sustainable local colors.'
      }
    }
  },
  {
    id: 'royal-kelubut-2',
    slug: 'royal-kelubut',
    imageMotif: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
    imageStory: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
    order: 'left',
    bgClass: 'bg-background-cream',
    tabContentBgClass: 'bg-white luxury-shadow',
    zIndexClass: 'z-40',
    translations: {
      ID: {
        title: '1. Royal Kelubut',
        series: 'Seri Eksplorasi Bangkirai 2026',
        filosofiTitle: 'Filosofi Motif',
        filosofiContent: 'Royal Kelubut merupakan eksplorasi visual Batik Zahro yang mentransformasikan ornamen khas Dayak Kalimantan Timur dalam komposisi batik kontemporer yang adaptif. Melalui stilasi sulur etnik dan elemen floral, motif ini merepresentasikan kemuliaan budaya, pertumbuhan, serta kesinambungan nilai lokal dalam estetika modern, menjadikannya identitas wastra yang elegan sekaligus relevan untuk lintas generasi.',
        warnaTitle: 'Eksplorasi Warna',
        warnaContent: 'Pewarna diperoleh dari ekstraksi limbah serbuk kayu bangkirai melalui proses pencelupan bertahap untuk menghadirkan karakter warna alami yang menjadi bagian dari eksplorasi wastra kontemporer Batik Zahro.',
        materialTitle: 'Material & Teknik Wastra',
        materialSpecs: [
          { label: 'Kain', value: 'Katun / Premium Cotton' },
          { label: 'Teknik', value: 'Batik tulis layering' },
          { label: 'Pewarna', value: 'Ekstraksi limbah serbuk kayu Bangkirai Kalimantan Timur' },
          { label: 'Layering Warna', value: '12 kali celup' },
          { label: 'Fiksasi', value: 'Tawas & Kapur' }
        ],
        inovasiTitle: 'Nilai Inovasi',
        inovasiContent: 'Pengembangan motif Royal Kelubut sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.'
      },
      EN: {
        title: '1. Royal Kelubut',
        series: 'Bangkirai Exploration Series 2026',
        filosofiTitle: 'Motif Philosophy',
        filosofiContent: 'Royal Kelubut is a visual exploration by Batik Zahro that transforms the signature ethnic ornaments of East Kalimantan Dayak into an adaptive contemporary batik composition. Through stylized ethnic vines and floral elements, this motif represents cultural nobility, growth, and the continuity of local values in a modern aesthetic, making it an elegant and relevant textile identity across generations.',
        warnaTitle: 'Color Exploration',
        warnaContent: 'The dye is obtained from the extraction of Bangkirai wood sawdust waste through a gradual dyeing process to present the natural color character that is part of Batik Zahro\'s contemporary textile exploration.',
        materialTitle: 'Material & Techniques',
        materialSpecs: [
          { label: 'Fabric', value: 'Premium Cotton' },
          { label: 'Technique', value: 'Hand-drawn layered batik' },
          { label: 'Dye Source', value: 'East Kalimantan Bangkirai wood sawdust waste extraction' },
          { label: 'Color Baths', value: '12 dye baths' },
          { label: 'Mordant', value: 'Alum & Lime' }
        ],
        inovasiTitle: 'Innovation Value',
        inovasiContent: 'The development of the Royal Kelubut motif as an adaptive motif across various textile mediums, combined with the exploration of natural dyes from East Kalimantan Bangkirai wood sawdust waste as an effort to develop sustainable local colors.'
      }
    }
  }
];

export default function OurStoryPage() {
  const { t, language } = useLanguage();
  
  // State for active sub-tabs of each motif
  const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({
    'royal-kelubut-1': 'filosofi',
    'lelana-rotan-dayak': 'filosofi',
    'royal-kelubut-2': 'filosofi',
  });

  // State for image swapping of each motif
  const [activeImages, setActiveImages] = useState<Record<string, 'motif' | 'story'>>({});

  // Dynamic references mapping for scroll tracking
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;
      const newActiveImages: Record<string, 'motif' | 'story'> = {};

      Object.entries(sectionRefs.current).forEach(([id, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < viewHeight * 0.45) {
            newActiveImages[id] = 'story';
          } else {
            newActiveImages[id] = 'motif';
          }
        }
      });

      setActiveImages((prev) => ({ ...prev, ...newActiveImages }));
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

      {/* STICKY CONTAINER FOR STACKING SECTIONS */}
      <div className="relative">
        
        {/* DYNAMIC BILINGUAL MOTIFS */}
        {motifsData.map((motif, index) => {
          const content = motif.translations[language as 'ID' | 'EN'] || motif.translations.ID;
          const activeTab = activeTabs[motif.id] || 'filosofi';
          const activeImage = activeImages[motif.id] || 'motif';

          return (
            <section
              key={motif.id}
              style={{ top: `calc(64px - ${index * 30}vh)` }}
              className={`sticky ${motif.zIndexClass} min-h-[calc(100vh-64px)] py-12 md:py-20 ${motif.bgClass} flex flex-col justify-center border-b border-outline-variant/30 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] rounded-t-[2.5rem] md:rounded-t-[4rem]`}
            >
              <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Image Panel (Left or Right based on Layout Order) */}
                  <ScrollReveal className={`lg:col-span-6 ${motif.order === 'right' ? 'lg:order-2' : ''}`}>
                    <div
                      ref={(el) => {
                        sectionRefs.current[motif.id] = el;
                      }}
                      className="relative rounded-2xl overflow-hidden aspect-[4/3] luxury-shadow border border-outline-variant/20 bg-surface-tan transition-all duration-500"
                    >
                      <img
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          activeImage === 'motif' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                        alt={`${content.title} Motif Detail`}
                        src={motif.imageMotif}
                      />
                      <img
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          activeImage === 'story' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                        alt={`${content.title} Story`}
                        src={motif.imageStory}
                      />
                    </div>
                  </ScrollReveal>

                  {/* Info Content Panel */}
                  <ScrollReveal
                    className={`lg:col-span-6 space-y-6 ${
                      motif.order === 'left' ? 'lg:col-start-7' : 'lg:order-1'
                    }`}
                    delay={150}
                  >
                    <div>
                      <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-bold">
                        {content.series}
                      </span>
                      <h2 className="font-headline text-headline-xl text-on-surface mt-2 leading-tight">
                        {content.title}
                      </h2>
                    </div>

                    {/* Sub-tabs Selection */}
                    <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-2">
                      {(['filosofi', 'warna', 'material', 'inovasi'] as TabType[]).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTabs((prev) => ({ ...prev, [motif.id]: tab }))}
                          className={`px-4 py-2 font-label text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${
                            activeTab === tab
                              ? 'border-primary text-primary'
                              : 'border-transparent text-body-text/60 hover:text-on-surface'
                          }`}
                        >
                          {language === 'ID' ? tab : tab === 'warna' ? 'color' : tab === 'inovasi' ? 'innovation' : tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab content display */}
                    <div className={`min-h-[200px] flex items-center p-6 rounded-xl border border-outline-variant/30 ${motif.tabContentBgClass}`}>
                      {activeTab === 'filosofi' && (
                        <div className="space-y-3">
                          <h4 className="font-title text-lg text-primary font-semibold">{content.filosofiTitle}</h4>
                          <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                            {content.filosofiContent}
                          </p>
                        </div>
                      )}

                      {activeTab === 'warna' && (
                        <div className="space-y-3">
                          <h4 className="font-title text-lg text-primary font-semibold">{content.warnaTitle}</h4>
                          <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                            {content.warnaContent}
                          </p>
                        </div>
                      )}

                      {activeTab === 'material' && (
                        <div className="space-y-3 w-full">
                          <h4 className="font-title text-lg text-primary font-semibold mb-3">{content.materialTitle}</h4>
                          <table className="w-full text-left font-body text-body-sm text-body-text border-collapse">
                            <tbody>
                              {content.materialSpecs.map((spec, index) => (
                                <tr
                                  key={index}
                                  className={`${
                                    index < content.materialSpecs.length - 1 ? 'border-b border-outline-variant/20' : ''
                                  } py-2`}
                                >
                                  <td className="font-bold pr-4 py-2">{spec.label}</td>
                                  <td className="py-2">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {activeTab === 'inovasi' && (
                        <div className="space-y-3">
                          <h4 className="font-title text-lg text-primary font-semibold">{content.inovasiTitle}</h4>
                          <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                            {content.inovasiContent}
                          </p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>

                </div>
              </div>
            </section>
          );
        })}

        {/* SECTION 1: PROSES ALKIMIA PEWARNAAN ALAMI (Sticky Level 5 - Stacked over Section 4) */}
        <section
          style={{ top: `calc(64px - ${motifsData.length * 30}vh)` }}
          className="sticky z-50 min-h-[calc(100vh-64px)] py-12 md:py-20 bg-surface-tan flex flex-col justify-center border-b border-outline-variant/30 rounded-t-[2.5rem] md:rounded-t-[4rem]"
        >
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
        </section>
      </div>
    </>
  );
}
