'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Category =
  | 'ALL'
  | 'MEMBATIK'
  | 'PEWARNAAN'
  | 'FASHION_SHOW'
  | 'PAMERAN'
  | 'PRODUKSI'
  | 'SERTIFIKAT';

  
interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, 'ALL'>;
  caption: string;
  span?: 'wide' | 'tall' | 'normal';
}

const photos: GalleryPhoto[] = [
  // MEMBATIK
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M',
    alt: 'Proses membatik canting',
    category: 'MEMBATIK',
    caption: 'Master pengrajin menorehkan malam panas dengan canting tembaga',
    span: 'tall',
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
    alt: 'Detail canting motif batik',
    category: 'MEMBATIK',
    caption: 'Detail motif Batang Garing yang dikerjakan secara presisi',
    span: 'normal',
  },
  {
    id: 3,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
    alt: 'Atelier membatik',
    category: 'MEMBATIK',
    caption: 'Suasana atelier di Samarinda saat proses membatik berlangsung',
    span: 'wide',
  },
  // PEWARNAAN
  {
    id: 4,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
    alt: 'Proses pencelupan pewarna alami',
    category: 'PEWARNAAN',
    caption: 'Pencelupan kain dengan ekstrak kayu Bangkirai selama 45 hari',
    span: 'tall',
  },
  {
    id: 5,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWftdFhrnHrJQ_fAsMils4RHP6S0LlVTzJnt7WdqaAEqLvH8EZhQJcxTpemgsdGLggzk_xucecplaMgO3J_ZjK0BR6iESSF8Dx1BTlf8xUSdk4_HwRiXCQ-NSZ8tnTrvVq8ErcVZc_erkKP0LIGySUn8YZH4j-Il6o5tWsXTdfp_dDPuv8LbCUyWjiF6FUvYSaRm75gSnzwvHcFOG7jJbhkQVTq74TG21ldcbyeWSonvcc63fOGB2z8MfCdBaifusQ4dZAcUgyCw',
    alt: 'Ekstraksi pewarna botani',
    category: 'PEWARNAAN',
    caption: 'Kulit kayu Bangkirai direbus untuk menghasilkan pigmen alami',
    span: 'normal',
  },
  {
    id: 6,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M',
    alt: 'Hasil pewarnaan indigo',
    category: 'PEWARNAAN',
    caption: 'Gradasi warna indigo organik Kalimantan yang kaya dan dalam',
    span: 'normal',
  },
  // FASHION SHOW
  {
    id: 7,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
    alt: 'Fashion show batik zahro',
    category: 'FASHION_SHOW',
    caption: 'Koleksi Heritage Series di panggung Jakarta Fashion Week',
    span: 'wide',
  },
  {
    id: 8,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
    alt: 'Model catwalk batik',
    category: 'FASHION_SHOW',
    caption: 'Siluet modern dari koleksi Urban Nomad di runway internasional',
    span: 'tall',
  },
  {
    id: 9,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
    alt: 'Backstage fashion show',
    category: 'FASHION_SHOW',
    caption: 'Momen backstage persiapan koleksi Ancestral Shawl',
    span: 'normal',
  },
  // PAMERAN
  {
    id: 10,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWftdFhrnHrJQ_fAsMils4RHP6S0LlVTzJnt7WdqaAEqLvH8EZhQJcxTpemgsdGLggzk_xucecplaMgO3J_ZjK0BR6iESSF8Dx1BTlf8xUSdk4_HwRiXCQ-NSZ8tnTrvVq8ErcVZc_erkKP0LIGySUn8YZH4j-Il6o5tWsXTdfp_dDPuv8LbCUyWjiF6FUvYSaRm75gSnzwvHcFOG7jJbhkQVTq74TG21ldcbyeWSonvcc63fOGB2z8MfCdBaifusQ4dZAcUgyCw',
    alt: 'Pameran batik internasional',
    category: 'PAMERAN',
    caption: 'Booth Batik Zahro di pameran tekstil internasional Tokyo',
    span: 'wide',
  },
  {
    id: 11,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M',
    alt: 'Koleksi di pameran seni',
    category: 'PAMERAN',
    caption: 'Karya Masterwork Series dipajang di galeri seni Jakarta',
    span: 'normal',
  },
  {
    id: 12,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
    alt: 'Penghargaan pameran',
    category: 'PAMERAN',
    caption: 'Momen penerimaan penghargaan UNESCO Heritage Partner 2023',
    span: 'tall',
  },
  // PROSES PRODUKSI
  {
    id: 13,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
    alt: 'Proses produksi kain',
    category: 'PRODUKSI',
    caption: 'Pemotongan dan penyiapan kain sutra mentah di atelier Samarinda',
    span: 'wide',
  },
  {
    id: 14,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
    alt: 'Quality control produksi',
    category: 'PRODUKSI',
    caption: 'Proses quality control setiap helai sebelum dikemas dan dikirim',
    span: 'normal',
  },
  {
    id: 15,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWftdFhrnHrJQ_fAsMils4RHP6S0LlVTzJnt7WdqaAEqLvH8EZhQJcxTpemgsdGLggzk_xucecplaMgO3J_ZjK0BR6iESSF8Dx1BTlf8xUSdk4_HwRiXCQ-NSZ8tnTrvVq8ErcVZc_erkKP0LIGySUn8YZH4j-Il6o5tWsXTdfp_dDPuv8LbCUyWjiF6FUvYSaRm75gSnzwvHcFOG7jJbhkQVTq74TG21ldcbyeWSonvcc63fOGB2z8MfCdBaifusQ4dZAcUgyCw',
    alt: 'Pengemasan premium',
    category: 'PRODUKSI',
    caption: 'Pengemasan premium dengan kotak kayu berukir untuk kolektor global',
    span: 'tall',
  },
  // SERTIFIKAT
      {
        id: 16,
        src: './images/gambar1.jpeg',
        alt: 'Sertifikat 1',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
        span: 'normal',
      },
      {
        id: 17,
        src: './images/gambar2.jpeg',
        alt: 'Sertifikat 2',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
        span: 'tall',
      },
      {
        id: 18,
        src: './images/gambar3.jpeg',
        alt: 'Sertifikat 3',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
        span: 'wide',
      },
      {
        id: 19,
        src: './images/gambar4.jpeg',
        alt: 'Sertifikat 4',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 20,
        src: './images/gambar5.jpeg',
        alt: 'Sertifikat 5',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 21,
        src: './images/gambar6.jpeg',
        alt: 'Sertifikat 6',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 22,
        src: './images/gambar7.jpeg',
        alt: 'Sertifikat 7',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 23,
        src: './images/gambar8.jpeg',
        alt: 'Sertifikat 8',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 24,
        src: './images/gambar9.jpeg',
        alt: 'Sertifikat 9',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 25,
        src: './images/gambar10.jpeg',
        alt: 'Sertifikat 10',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 26,
        src: './images/gambar11.jpeg',
        alt: 'Sertifikat 11',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      {
        id: 27,
        src: './images/gambar12.jpeg',
        alt: 'Sertifikat 12',
        category: 'SERTIFIKAT',
        caption: 'Sertifikat Batik Zahro',
      },
      ];

const categoryMap: Record<Category, Exclude<Category, 'ALL'> | null> = {
  ALL: null,
  MEMBATIK: 'MEMBATIK',
  PEWARNAAN: 'PEWARNAAN',
  FASHION_SHOW: 'FASHION_SHOW',
  PAMERAN: 'PAMERAN',
  PRODUKSI: 'PRODUKSI',
  SERTIFIKAT: 'SERTIFIKAT',
};

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Category>('ALL');
  const searchParams = useSearchParams();

useEffect(() => {
  const category = searchParams.get('category');

    if (
      category === 'MEMBATIK' ||
      category === 'PEWARNAAN' ||
      category === 'FASHION_SHOW' ||
      category === 'PAMERAN' ||
      category === 'PRODUKSI' ||
      category === 'SERTIFIKAT'
    ) {
      setActiveTab(category);
    }
  }, [searchParams]);
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  const categories: { key: Category; label: string }[] = [
    { key: 'ALL', label: t.gallery.all },
    { key: 'MEMBATIK', label: t.gallery.membatik },
    { key: 'PEWARNAAN', label: t.gallery.pewarnaan },
    { key: 'FASHION_SHOW', label: t.gallery.fashionShow },
    { key: 'PAMERAN', label: t.gallery.pameran },
    { key: 'PRODUKSI', label: t.gallery.produksi },
    { key: 'SERTIFIKAT', label: 'Sertifikat' },
  ];

  const filtered =
    activeTab === 'ALL' ? photos : photos.filter((p) => p.category === activeTab);

  const openLightbox = (photo: GalleryPhoto, idx: number) => {
    setLightbox(photo);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightbox(null);

  const prevPhoto = () => {
    const newIdx = (lightboxIdx - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  };

  const nextPhoto = () => {
    const newIdx = (lightboxIdx + 1) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  };

  // Category label helper
  const getCategoryLabel = (cat: Exclude<Category, 'ALL'>) => {
    const map: Record<Exclude<Category, 'ALL'>, string> = {
      MEMBATIK: t.gallery.membatik,
      PEWARNAAN: t.gallery.pewarnaan,
      FASHION_SHOW: t.gallery.fashionShow,
      PAMERAN: t.gallery.pameran,
      PRODUKSI: t.gallery.produksi,
      SERTIFIKAT: 'Sertifikat',
    };
    return map[cat];
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-surface-tan py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary font-bold block mb-4">
              {t.gallery.badge}
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {t.gallery.title}
            </h1>
            <p className="font-body text-lg text-body-text max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </ScrollReveal>

          {/* FILTER TABS */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4 font-label text-xs tracking-widest font-bold">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === cat.key
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-white/60 text-on-surface-variant hover:bg-white hover:text-primary border border-outline-variant/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
{filtered.map((photo, idx) => (
  <ScrollReveal
    key={photo.id}
    delay={idx * 60}
    className="break-inside-avoid"
  >
    <div
      className={`group relative rounded-xl luxury-shadow cursor-pointer overflow-hidden ${
        photo.category === 'SERTIFIKAT' ? 'bg-white' : ''
      }`}
      onClick={() => openLightbox(photo, idx)}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full transition-transform duration-700 ${
          photo.category === 'SERTIFIKAT'
            ? 'h-auto object-contain group-hover:scale-105'
            : `object-cover group-hover:scale-110 ${
                photo.span === 'tall'
                  ? 'aspect-[2/3]'
                  : photo.span === 'wide'
                    ? 'aspect-[4/3]'
                    : 'aspect-square'
              }`
        }`}
      />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <span className="inline-block font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 mb-2 self-start">
                  {getCategoryLabel(photo.category)}
                </span>

                <p className="font-body text-sm text-white leading-snug">
                  {photo.caption}
                </p>

                <span className="material-symbols-outlined text-white/60 text-lg mt-2 self-end">
                  open_in_full
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-body-text font-body">
            <span className="material-symbols-outlined text-6xl text-primary/20 block mb-4">
              image_not_supported
            </span>
            <p className="text-lg opacity-50">Tidak ada foto dalam kategori ini.</p>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white material-symbols-outlined text-3xl transition-colors z-10"
              aria-label="Close"
            >
              close
            </button>

            {/* Image */}
            <div className="relative w-full rounded-2xl overflow-hidden luxury-shadow">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[75vh] object-contain"
              />

              {/* Prev / Next */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Previous"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Next"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>

            {/* Caption */}
            <div className="mt-5 text-center">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim bg-white/10 px-3 py-1 rounded-full border border-white/20">
                {getCategoryLabel(lightbox.category)}
              </span>
              <p className="font-body text-white/80 text-sm mt-3 max-w-xl mx-auto">
                {lightbox.caption}
              </p>
              <p className="font-label text-white/30 text-xs mt-2">
                {lightboxIdx + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
