'use client';

import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

type TabType = 'filosofi' | 'warna' | 'material' | 'inovasi';

interface MotifSpec {
  label: { ID: string; EN: string };
  value: { ID: string; EN: string };
}

interface Motif {
  id: string;
  name: { ID: string; EN: string };
  number?: string;
  series: { ID: string; EN: string };
  images: {
    motif: string;
    story: string;
  };
  tabContent: {
    filosofi: {
      title: { ID: string; EN: string };
      content: { ID: string; EN: string };
    };
    warna: {
      title: { ID: string; EN: string };
      content: { ID: string; EN: string };
    };
    material: {
      title: { ID: string; EN: string };
      specs: MotifSpec[];
    };
    inovasi: {
      title: { ID: string; EN: string };
      content: { ID: string; EN: string };
    };
  };
  zIndex: number;
  bgClass: string;
  contentBgClass: string;
  imageOrderFirst: boolean;
}

const motifsData: Motif[] = [
  {
    id: 'kelubut',
    name: {
      ID: 'Royal Kelubut',
      EN: 'Royal Kelubut',
    },
    number: '1.',
    series: {
      ID: 'Seri Eksplorasi Bangkirai 2026',
      EN: 'Bangkirai Exploration Series 2026',
    },
    images: {
      motif: '/images/motif-royal-kelubut.avif',
      story: '/images/story-royal-kelubut.avif',
    },
    tabContent: {
      filosofi: {
        title: { ID: 'Filosofi Motif', EN: 'Motif Philosophy' },
        content: {
          ID: 'Royal Kelubut merupakan eksplorasi visual Batik Zahro yang mentransformasikan ornamen khas Dayak Kalimantan Timur dalam komposisi batik kontemporer yang adaptif. Melalui stilasi sulur etnik dan elemen floral, motif ini merepresentasikan kemuliaan budaya, pertumbuhan, serta kesinambungan nilai lokal dalam estetika modern, menjadikannya identitas wastra yang elegan sekaligus relevan untuk lintas generasi.',
          EN: 'Royal Kelubut is a visual exploration of Batik Zahro that transforms the traditional ornaments of East Kalimantan Dayak into an adaptive contemporary batik composition. Through the stylization of ethnic vines and floral elements, this motif represents cultural nobility, growth, and the continuity of local values in modern aesthetics, making it an elegant yet relevant textile identity for generations.',
        },
      },
      warna: {
        title: { ID: 'Eksplorasi Warna', EN: 'Color Exploration' },
        content: {
          ID: 'Pewarna diperoleh dari ekstraksi limbah serbuk kayu bangkirai melalui proses pencelupan bertahap untuk menghadirkan karakter warna alami yang menjadi bagian dari eksplorasi wastra kontemporer Batik Zahro.',
          EN: 'The dye is obtained from the extraction of bangkirai wood waste sawdust through a gradual dipping process to present a natural color character that is part of Batik Zahro\'s contemporary textile exploration.',
        },
      },
      material: {
        title: { ID: 'Material & Teknik Wastra', EN: 'Material & Techniques' },
        specs: [
          {
            label: { ID: 'Kain', EN: 'Fabric' },
            value: { ID: 'Katun / Premium Cotton', EN: 'Premium Cotton' },
          },
          {
            label: { ID: 'Teknik', EN: 'Technique' },
            value: { ID: 'Batik tulis layering', EN: 'Layered hand-drawn batik (Batik Tulis)' },
          },
          {
            label: { ID: 'Pewarna', EN: 'Dye Source' },
            value: {
              ID: 'Ekstraksi limbah serbuk kayu Bangkirai Kalimantan Timur',
              EN: 'Extraction of East Kalimantan Bangkirai wood waste sawdust',
            },
          },
          {
            label: { ID: 'Layering Warna', EN: 'Color Baths' },
            value: { ID: '12 kali celup', EN: '12 color baths' },
          },
          {
            label: { ID: 'Fiksasi', EN: 'Mordant' },
            value: { ID: 'Tawas & Kapur', EN: 'Alum & Lime' },
          },
        ],
      },
      inovasi: {
        title: { ID: 'Nilai Inovasi', EN: 'Innovation Value' },
        content: {
          ID: 'Pengembangan motif Royal Kelubut sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.',
          EN: 'Development of the Royal Kelubut motif as an adaptive pattern on various textile mediums, combined with the exploration of natural dyes from East Kalimantan Bangkirai wood sawdust waste as an effort for sustainable local color development.',
        },
      },
    },
    zIndex: 20,
    bgClass: 'bg-white',
    contentBgClass: 'bg-surface-tan/40',
    imageOrderFirst: true,
  },
  {
    id: 'lelana',
    name: {
      ID: 'Lelana Rotan Dayak',
      EN: 'Lelana Rotan Dayak',
    },
    number: '2.',
    series: {
      ID: 'Seri Eksplorasi Bangkirai 2026',
      EN: 'Bangkirai Exploration Series 2026',
    },
    images: {
      motif: '/images/motif-lelana-rotan-dayak.avif',
      story: '/images/story-lelana-rotan-dayak.avif',
    },
    tabContent: {
      filosofi: {
        title: { ID: 'Filosofi Motif', EN: 'Motif Philosophy' },
        content: {
          ID: '“Lelana Rotan Dayak merepresentasikan perjalanan hidup yang lentur namun kuat, terinspirasi dari rotan Kalimantan sebagai simbol ketahanan, persatuan, dan akar budaya Dayak. Dipadukan ornamen etnik serta elemen floral, motif ini menjadi representasi harmoni antara tradisi, pertumbuhan, dan semangat masa depan Kalimantan Timur.”',
          EN: '"Lelana Rotan Dayak represents a life journey that is flexible yet strong, inspired by Borneo rattan as a symbol of resilience, unity, and Dayak cultural roots. Combined with ethnic ornaments and floral elements, this motif represents harmony between tradition, growth, and the future spirit of East Kalimantan."',
        },
      },
      warna: {
        title: { ID: 'Eksplorasi Warna', EN: 'Color Exploration' },
        content: {
          ID: 'Warna dikembangkan melalui proses layering antara ekstrak bangkirai dan lapisan akhir ulin untuk menghadirkan kedalaman warna alami sebagai interpretasi karakter hutan tropis Kalimantan Timur.',
          EN: 'The color is developed through a layering process between bangkirai extract and a final coat of ironwood (ulin) to present natural color depth as an interpretation of the East Kalimantan tropical rainforest character.',
        },
      },
      material: {
        title: { ID: 'Material & Teknik Wastra', EN: 'Material & Techniques' },
        specs: [
          {
            label: { ID: 'Kain', EN: 'Fabric' },
            value: { ID: 'Katun / Premium Cotton', EN: 'Premium Cotton' },
          },
          {
            label: { ID: 'Teknik', EN: 'Technique' },
            value: { ID: 'Batik cap mix tulis', EN: 'Stamped mixed with hand-drawn batik (Cap & Tulis)' },
          },
          {
            label: { ID: 'Pewarna', EN: 'Dye Source' },
            value: {
              ID: 'Ekstraksi limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur',
              EN: 'Extraction of East Kalimantan Bangkirai and Ironwood sawdust waste',
            },
          },
          {
            label: { ID: 'Layering Warna', EN: 'Color Baths' },
            value: { ID: '15 kali celup', EN: '15 color baths' },
          },
          {
            label: { ID: 'Fiksasi', EN: 'Mordant' },
            value: { ID: 'Tawas & Kapur', EN: 'Alum & Lime' },
          },
        ],
      },
      inovasi: {
        title: { ID: 'Nilai Inovasi', EN: 'Innovation Value' },
        content: {
          ID: 'Pengembangan motif Lelana Rotan Dayak sebagai motif adaptif pada berbagai medium wastra, dipadukan dengan eksplorasi pewarna alami dari limbah serbuk kayu Bangkirai dan Ulin Kalimantan Timur sebagai upaya pengembangan warna lokal berkelanjutan.',
          EN: 'Development of the Lelana Rotan Dayak motif as an adaptive pattern on various textile mediums, combined with the exploration of natural dyes from East Kalimantan Bangkirai and Ironwood sawdust waste as an effort for sustainable local color development.',
        },
      },
    },
    zIndex: 30,
    bgClass: 'bg-surface-tan',
    contentBgClass: 'bg-white luxury-shadow',
    imageOrderFirst: false,
  },
  {
    id: 'buah-tipah',
    name: {
      ID: 'Buah Tipah',
      EN: 'Buah Tipah',
    },
    number: '3.',
    series: {
      ID: 'Seri Pesisir Balikpapan 2026',
      EN: 'Balikpapan Coastal Series 2026',
    },
    images: {
      motif: '/images/motif-buah-tipah.avif',
      story: '/images/story-buah-tipah.avif',
    },
    tabContent: {
      filosofi: {
        title: { ID: 'Filosofi Motif', EN: 'Motif Philosophy' },
        content: {
          ID: 'Melambangkan ketangguhan, pertumbuhan, dan harmoni antara manusia dengan alam pesisir. Terinspirasi dari pohon nipah yang menjadi bagian penting ekosistem mangrove Balikpapan, motif ini merepresentasikan semangat menjaga kelestarian lingkungan sekaligus mengangkat potensi lokal sebagai identitas budaya yang bernilai dan berkelanjutan.',
          EN: 'Symbolizing resilience, growth, and harmony between humans and the coastal environment. Inspired by the nipah tree, which is a vital part of Balikpapan\'s mangrove ecosystem, this motif represents the spirit of environmental conservation while elevating local potential as a valuable and sustainable cultural identity.',
        },
      },
      warna: {
        title: { ID: 'Eksplorasi Warna', EN: 'Color Exploration' },
        content: {
          ID: 'Hadir dengan kombinasi warna khas Batik Zahro yaitu Terracotta, Orange, dan Peach yang hangat, mencerminkan pesona alam pesisir Balikpapan.',
          EN: 'Comes in Batik Zahro\'s signature warm color combination of Terracotta, Orange, and Peach, reflecting the natural charm of Balikpapan\'s coast.',
        },
      },
      material: {
        title: { ID: 'Material & Teknik Wastra', EN: 'Material & Techniques' },
        specs: [
          {
            label: { ID: 'Kain', EN: 'Fabric' },
            value: { ID: 'Katun / Premium Cotton', EN: 'Premium Cotton' },
          },
          {
            label: { ID: 'Teknik', EN: 'Technique' },
            value: { ID: 'Batik tulis', EN: 'Hand-drawn batik (Batik Tulis)' },
          },
          {
            label: { ID: 'Pewarna', EN: 'Dye Source' },
            value: {
              ID: 'Ekstraksi pewarna alam ramah lingkungan pesisir Balikpapan',
              EN: 'Eco-friendly natural dye extraction from Balikpapan coast',
            },
          },
          {
            label: { ID: 'Layering Warna', EN: 'Colors' },
            value: { ID: 'Terracotta, Orange, Peach', EN: 'Terracotta, Orange, Peach' },
          },
          {
            label: { ID: 'Fiksasi', EN: 'Mordant' },
            value: { ID: 'Tawas & Kapur', EN: 'Alum & Lime' },
          },
        ],
      },
      inovasi: {
        title: { ID: 'Nilai Inovasi', EN: 'Innovation Value' },
        content: {
          ID: 'Pengembangan motif Buah Tipah sebagai motif kontemporer berbasis flora pesisir Balikpapan, diwarnai menggunakan teknik pewarnaan alam yang ramah lingkungan.',
          EN: 'Development of the Buah Tipah motif as a contemporary pattern based on Balikpapan coastal flora, colored using eco-friendly natural dyeing techniques.',
        },
      },
    },
    zIndex: 40,
    bgClass: 'bg-background-cream',
    contentBgClass: 'bg-white luxury-shadow',
    imageOrderFirst: true,
  }
];

export default function OurStoryPage() {
  const { t, language } = useLanguage();

  // State maps to handle multiple motifs dynamically
  const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({});
  const [activeImages, setActiveImages] = useState<Record<string, 'motif' | 'story'>>({});

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Initialize default state
    const initialTabs: Record<string, TabType> = {};
    const initialImages: Record<string, 'motif' | 'story'> = {};
    motifsData.forEach((motif) => {
      initialTabs[motif.id] = 'filosofi';
      initialImages[motif.id] = 'motif';
    });
    setActiveTabs(initialTabs);
    setActiveImages(initialImages);

    // Auto-toggle images every 4 seconds
    const interval = setInterval(() => {
      setActiveImages((prev) => {
        const nextState: Record<string, 'motif' | 'story'> = {};
        motifsData.forEach((motif) => {
          nextState[motif.id] = prev[motif.id] === 'motif' ? 'story' : 'motif';
        });
        return { ...prev, ...nextState };
      });
    }, 4000);

    return () => clearInterval(interval);
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
      <section className="bg-surface-tan pt-20 pb-36 md:pt-28 md:pb-48 border-b border-outline-variant/30 relative z-0">
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
      <div className="relative z-10 -mt-[15vh]">
        {motifsData.map((motif, index) => {
          const currentTab = activeTabs[motif.id] || 'filosofi';
          const currentImage = activeImages[motif.id] || 'motif';

          const imagePanel = (
            <ScrollReveal className="lg:col-span-6">
              <div
                ref={(el) => {
                  sectionRefs.current[motif.id] = el;
                }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] luxury-shadow border border-outline-variant/20 bg-surface-tan transition-all duration-500"
              >
                <img
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${currentImage === 'motif' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  alt={`${motif.name[language]} Motif Detail`}
                  src={motif.images.motif}
                />
                <img
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${currentImage === 'story' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  alt={`${motif.name[language]} Natural Inspiration`}
                  src={motif.images.story}
                />
              </div>
            </ScrollReveal>
          );

          const infoContent = (
            <ScrollReveal className="lg:col-span-6 space-y-6" delay={150}>
              <div>
                <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-bold">
                  {motif.series[language]}
                </span>
                <h2 className="font-headline text-headline-xl text-on-surface mt-2 leading-tight">
                  {motif.name[language]}
                </h2>
              </div>

              {/* Sub-tabs Selection */}
              <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-2">
                {(['filosofi', 'warna', 'material', 'inovasi'] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabs((prev) => ({ ...prev, [motif.id]: tab }))}
                    className={`px-4 py-2 font-label text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${currentTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-body-text/60 hover:text-on-surface'
                      }`}
                  >
                    {tab === 'filosofi' && (language === 'ID' ? 'filosofi' : 'philosophy')}
                    {tab === 'warna' && (language === 'ID' ? 'warna' : 'color')}
                    {tab === 'material' && (language === 'ID' ? 'material' : 'material')}
                    {tab === 'inovasi' && (language === 'ID' ? 'inovasi' : 'innovation')}
                  </button>
                ))}
              </div>

              {/* Tab content display */}
              <div className={`min-h-[200px] flex items-center p-6 rounded-xl border border-outline-variant/30 ${motif.contentBgClass}`}>
                {currentTab === 'filosofi' && (
                  <div className="space-y-3">
                    <h4 className="font-title text-lg text-primary font-semibold">
                      {motif.tabContent.filosofi.title[language]}
                    </h4>
                    <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                      {motif.tabContent.filosofi.content[language]}
                    </p>
                  </div>
                )}

                {currentTab === 'warna' && (
                  <div className="space-y-3">
                    <h4 className="font-title text-lg text-primary font-semibold">
                      {motif.tabContent.warna.title[language]}
                    </h4>
                    <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                      {motif.tabContent.warna.content[language]}
                    </p>
                  </div>
                )}

                {currentTab === 'material' && (
                  <div className="space-y-3 w-full">
                    <h4 className="font-title text-lg text-primary font-semibold mb-3">
                      {motif.tabContent.material.title[language]}
                    </h4>
                    <table className="w-full text-left font-body text-body-sm text-body-text border-collapse">
                      <tbody>
                        {motif.tabContent.material.specs.map((spec, index) => (
                          <tr
                            key={index}
                            className={`border-b border-outline-variant/20 py-2 ${index === motif.tabContent.material.specs.length - 1 ? 'border-none' : ''
                              }`}
                          >
                            <td className="font-bold pr-4 py-2">{spec.label[language]}</td>
                            <td className="py-2">{spec.value[language]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {currentTab === 'inovasi' && (
                  <div className="space-y-3">
                    <h4 className="font-title text-lg text-primary font-semibold">
                      {motif.tabContent.inovasi.title[language]}
                    </h4>
                    <p className="font-body text-body-lg text-body-text leading-relaxed text-justify">
                      {motif.tabContent.inovasi.content[language]}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );

          return (
            <section
              key={motif.id}
              className={`sticky min-h-[calc(100vh-64px)] py-12 md:py-20 flex flex-col justify-center border-b border-outline-variant/30 shadow-[0_-15px_30px_rgba(0,0,0,0.06)] rounded-t-[2.5rem] md:rounded-t-[4rem] ${motif.bgClass}`}
              style={{ zIndex: motif.zIndex, top: `calc(64px - ${index * 25}vh)` }}
            >
              <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {motif.imageOrderFirst ? (
                    <>
                      {imagePanel}
                      <div className="lg:col-span-6 lg:col-start-7">
                        {infoContent}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:col-span-6 lg:order-1">
                        {infoContent}
                      </div>
                      <div className="lg:col-span-6 lg:order-2">
                        {imagePanel}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* SECTION 1: PROSES ALKIMIA PEWARNAAN ALAMI (Sticky Level 5 - Stacked over Section 4) */}
        <section
          className="sticky min-h-[calc(100vh-64px)] py-12 md:py-20 bg-surface-tan flex flex-col justify-center border-b border-outline-variant/30 rounded-t-[2.5rem] md:rounded-t-[4rem]"
          style={{ zIndex: 50, top: `calc(64px - ${motifsData.length * 25}vh)` }}
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
