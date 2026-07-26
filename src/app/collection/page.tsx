'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

interface Product {
  id: number;
  title: string;
  category: 'HERITAGE' | 'READY-TO-WEAR' | 'ACCESSORIES' | 'MASTERWORK';
  tag: string;
  price: string;
  image: string;
  desc: string;
}

export default function CollectionPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { key: 'ALL', label: t.collection.tabs.ALL },
    { key: 'HERITAGE', label: t.collection.tabs.HERITAGE },
    { key: 'READY-TO-WEAR', label: t.collection.tabs['READY-TO-WEAR'] },
    { key: 'ACCESSORIES', label: t.collection.tabs.ACCESSORIES },
    { key: 'MASTERWORK', label: t.collection.tabs.MASTERWORK },
  ];

  const products: Product[] = [
    {
      id: 1,
      title: 'Urban Nomad Silk Coat',
      category: 'READY-TO-WEAR',
      tag: 'Hand-Drawn Silk',
      price: '$1,250 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIcPUankbJaODyqkvl2v8dpz8wFPly50q-j_ZYknyyVJoMNe4Q3THm172u8rNCvIRI4LkWWrSxI0FQD1heHtv2adeL4BTQ3is4rtnwIuRrzPP0EN9zUbHHoYZvX4cFsfhOg9dDLbW9i5HMdk3C9sG0flBnF0lcRSVhX2_M8mSYVMvKsXRKYj-3xAuLMlImSLpObXFRGKItECl2GK0kQ-4pxxsOBJ3ldDQQaJBOGSHPso6c5HiS1bQBd8UuJbx5BJ5lfKzHrPvhIg',
      desc: 'Crafted from 100% natural silk dyed with Bangkirai bark extract. Tailored modern silhouette with high collar and natural horn buttons.',
    },
    {
      id: 2,
      title: 'Street Heritage Vest',
      category: 'READY-TO-WEAR',
      tag: 'Indigo & Bangkirai',
      price: '$890 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDgNKduK3o9hMPNC4vMUFSi-lCceOIaFipHyf7VwFKQUK7anhprehrgh_Aw_Zh7TvR-n8EcAu26avOd93qU2T09Heggdpuzd-R6TqUu5PpYDdxEH8tijxJdAg3gKiTLlsqPVKF_VG5vs_u4n0RjCpeEHCZmV7NMP4lgqFQXrWD2S9HaWy6wsscxeQdBUD3T32MvKu71aCn6Xnaf38HAx3Ht-3EwWBBqtVjX4qZ1SFZkp4QTazQ3xO_eAfxNrzuM6KCeeW4QACoIJMo',
      desc: 'Dual-toned vest blending organic Kalimantan indigo with golden Bangkirai earth dye. Features intricate canting border detailing.',
    },
    {
      id: 3,
      title: 'Ancestral Silk Shawl',
      category: 'MASTERWORK',
      tag: 'Limited Edition 1/1',
      price: '$2,100 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO6yJKKAMBoyXD4lm7LSckZ2YQGyLo-q5YA7bNBaJwar-OLhHTsmVe4u3XKRRlqyxQUCZoBqquplUsWAbIA7MkHaXF6BL1CCzLHkGkOdFI_wceU6a2S2Dgok-Zrak-p2J7xMbSiK0qsE4oiDFiM3RUYbXjL7IhW5yYKh8DKH6BE4q_RZjRONa67Ji_wBsu_whqTFV7xj9tm9JD5j4XPOfePLmLultibJjXFuVwJfJjhCEtxKyOeZseKzt_ZGJLqOOVelzIfRD2KA',
      desc: 'Over 90 days of hand-canting wax application. Displays the sacred Batang Garing Tree of Life motif on weightless mulberry silk.',
    },
    {
      id: 4,
      title: 'Bangkirai Terracotta Kimono',
      category: 'HERITAGE',
      tag: 'Natural Dye',
      price: '$1,480 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCCk53x0_q54u--ZvblitKtF2YiHZuel4-VnBROY7rqbOwx3n36goiUhzXIi4KmSGdpIa4hgXk5kz4pyODps_OU_F33vMZSl1oZwBWP5ZklNNaWkeFASJSS8K9_oHHzbzquQUND7unM4rdnMt13cslU5KCG7qKKYpNQYU5_HdzzYuDGHAwBjsr_nbk7lSzFgrolxoI6UcuLcSwpdhNY2zdZEChsfR-FHNTyowpS_Z1kvjUpg4YRXL5l10wS-ai2EQGz4MxvyfVTuCc',
      desc: 'Flowing open-front kimono coat dyed with organic forest bark. Smooth linen lining and hand-stitched hemline.',
    },
    {
      id: 5,
      title: 'Kutai Dynasty Scarf',
      category: 'ACCESSORIES',
      tag: 'Silk Twill',
      price: '$450 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-C4aPoq1pjO8KWMsTg1Ce1RZeYKpCeUZVOQ5VKdCwOVw4RreV3ge06o3hF8ESNnE_51L1x23gJP62xYsxpZnMH9RVLfI7X_UgDjZ5tLBvonf0sZuAtGulIVPoxnZmiBxI73QVfHW0jtx4S3RjhVfZw5p6ilWFw3f3iXcR6LhNDAjgON4xW7c5flMugxAcfhcsUD5POReu81nKvQjXHK40ouaEqEaaqb53zkwkTHmEprOCUMOYgj9aje_8r0Q8-zfCmm7T6sT64M',
      desc: 'Square silk twill scarf printed with hand-painted Kutai royal motifs. Rolled edges finished by hand.',
    },
    {
      id: 6,
      title: 'Mahakam River Artisan Wrap',
      category: 'HERITAGE',
      tag: 'Masterwork',
      price: '$1,750 USD',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWftdFhrnHrJQ_fAsMils4RHP6S0LlVTzJnt7WdqaAEqLvH8EZhQJcxTpemgsdGLggzk_xucecplaMgO3J_ZjK0BR6iESSF8Dx1BTlf8xUSdk4_HwRiXCQ-NSZ8tnTrvVq8ErcVZc_erkKP0LIGySUn8YZH4j-Il6o5tWsXTdfp_dDPuv8LbCUyWjiF6FUvYSaRm75gSnzwvHcFOG7jJbhkQVTq74TG21ldcbyeWSonvcc63fOGB2z8MfCdBaifusQ4dZAcUgyCw',
      desc: 'Intricate river-flow wax batik representing the majestic Mahakam river ecosystem. 100% natural organic cotton-silk blend.',
    },
  ];

  const filteredProducts =
    activeTab === 'ALL' ? products : products.filter((p) => p.category === activeTab);

  return (
    <>
      {/* COLLECTION HERO */}
      <section className="bg-surface-tan py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary font-bold block mb-4">
              {t.collection.badge}
            </span>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {t.collection.title}
            </h1>
            <p className="font-body text-body-lg text-lg text-body-text max-w-2xl mx-auto">
              {t.collection.subtitle}
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
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white/60 text-on-surface-variant hover:bg-white hover:text-primary border border-outline-variant/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 80}>
              <div className="group bg-white rounded-xl overflow-hidden luxury-shadow border border-border-muted flex flex-col justify-between h-full transition-transform duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-tan/30">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={product.title}
                    src={product.image}
                  />
                  <span className="absolute top-4 left-4 bg-background-cream/90 backdrop-blur-md text-primary text-[11px] font-label uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-primary/20">
                    {product.tag}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow text-center">
                  <div>
                    <h3 className="font-title text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-body text-body-sm text-body-text mb-4 opacity-80">
                      {product.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between mt-4">
                    <span className="font-headline text-xl text-primary font-semibold">
                      {product.price}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="font-label text-xs uppercase tracking-widest text-on-surface hover:text-primary font-bold flex items-center gap-1"
                    >
                      {t.collection.inquireBtn} →
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* PRODUCT MODAL PREVIEW */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin-mobile">
          <div className="bg-background-cream rounded-2xl max-w-2xl w-full p-8 md:p-12 relative luxury-shadow border border-outline-variant/40 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary material-symbols-outlined text-2xl"
            >
              close
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={selectedProduct.title}
                  src={selectedProduct.image}
                />
              </div>
              <div>
                <span className="text-primary font-label text-xs uppercase tracking-widest font-bold">
                  {selectedProduct.tag}
                </span>
                <h2 className="font-headline text-3xl text-on-surface mt-2 mb-3">
                  {selectedProduct.title}
                </h2>
                <p className="font-body text-body-sm text-body-text mb-6">
                  {selectedProduct.desc}
                </p>
                <div className="font-headline text-2xl text-primary mb-8 font-semibold">
                  {selectedProduct.price}
                </div>
                <a
                  href={`/contact?piece=${encodeURIComponent(selectedProduct.title)}`}
                  className="block text-center bg-primary text-white py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-colors"
                >
                  {t.collection.modalBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
