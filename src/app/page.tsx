'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t, language } = useLanguage();

  const awards = [
    { type: 'text', content: t.home.award1, link: '/our-story' },
    // { type: 'text', content: t.home.award2, link: '/about' },
    { type: 'text', content: t.home.award3, link: '/about' },
    { type: 'text', content: t.home.award4, link: '/gallery' },
    { type: 'text', content: t.home.award5, link: '/gallery' },
    { type: 'text', content: t.home.award6, link: 'https://rri.co.id/samarinda/umkm/1922938/batik-zahro-mengukir-cerita-alam-dan-budaya' },
  ];

  const collections = [
    {
      id: 1,
      title: 'Motif Buah Tipah',
      category: 'Hand-drawn Bangkirai Natural Dye',
      image: '/images/motif-buah-tipah.avif',
      aspect: 'aspect-[4/5]',
      delay: 100,
    },
    {
      id: 2,
      title: 'Royal Kelubut',
      category: 'Bangkirai Exploration Series',
      image: '/images/motif-royal-kelubut.avif',
      aspect: 'aspect-[4/5]',
      delay: 200,

      extraPadding: 'md:pt-12',
    },
    {
      id: 3,
      title: 'Lelana Rotan Dayak',
      category: 'Natural Dye Indigo & Bangkirai',
      image: '/images/motif-lelana-rotan-dayak.avif',
      aspect: 'aspect-[4/5]',
      delay: 300,
    },
  ];

  const faqs = [
    {
      q: language === 'ID' ? 'Apa yang membedakan Zahro Batik?' : 'What makes Zahro Batik unique?',
      a: language === 'ID'
        ? 'Zahro Batik memadukan keahlian batik tradisional Indonesia dengan pewarna alami serta proses produksi yang inklusif bersama pembatik disabilitas.'
        : 'Zahro Batik combines traditional Indonesian batik craftsmanship with natural dyes and an inclusive production process involving artisans with disabilities.'
    },
    {
      q: language === 'ID' ? 'Apakah semua produk dibuat secara handmade?' : 'Are all products handmade?',
      a: language === 'ID'
        ? 'Ya. Setiap produk dibuat secara manual oleh perajin berpengalaman sehingga memiliki karakter yang unik.'
        : 'Yes. Every product is handcrafted by skilled artisans, giving each piece its own unique character and detail.'
    },
    {
      q: language === 'ID' ? 'Apakah Zahro Batik melayani pengiriman internasional?' : 'Do you offer international shipping?',
      a: language === 'ID'
        ? 'Ya. Kami melayani pengiriman ke berbagai negara melalui mitra logistik terpercaya.'
        : 'Yes. We ship to various countries through trusted international logistics partners.'
    },
    {
      q: language === 'ID' ? 'Apakah saya dapat memesan dalam jumlah besar atau custom?' : 'Can I place bulk or custom orders?',
      a: language === 'ID'
        ? 'Ya. Kami menerima pemesanan grosir, corporate gift, serta pengembangan produk sesuai kebutuhan.'
        : 'Yes. We accept wholesale, corporate gift, and custom orders tailored to your requirements.'
    },
    {
      q: language === 'ID' ? 'Bahan apa yang digunakan?' : 'What materials do you use?',
      a: language === 'ID'
        ? 'Kami menggunakan kain berkualitas seperti katun, rayon, dan sutra, tergantung pada koleksinya.'
        : 'Our collections are crafted from premium fabrics such as cotton, rayon, and silk, depending on the product.'
    },
    {
      q: language === 'ID' ? 'Bagaimana cara merawat batik?' : 'How should I care for my batik?',
      a: language === 'ID'
        ? 'Cuci dengan tangan menggunakan deterjen lembut, hindari pemutih, dan jemur di tempat yang teduh.'
        : 'Hand wash with a mild detergent, avoid bleach, and dry in the shade to preserve the fabric and its colors.'
    },
    {
      q: language === 'ID' ? 'Apakah Zahro Batik menggunakan pewarna alami?' : 'Do you use natural dyes?',
      a: language === 'ID'
        ? 'Ya. Sebagian besar koleksi menggunakan pewarna alami yang dikembangkan melalui proses yang lebih ramah lingkungan.'
        : 'Yes. Many of our collections are colored using natural dyes developed through environmentally responsible processes.'
    },
    {
      q: language === 'ID' ? 'Bagaimana cara menghubungi Zahro Batik?' : 'How can I contact Zahro Batik?',
      a: language === 'ID'
        ? 'Anda dapat menghubungi kami melalui halaman Kontak, email, atau WhatsApp untuk pertanyaan maupun kerja sama.'
        : 'You can contact us through our Contact page, email, or WhatsApp for product inquiries and partnership opportunities.'
    }
  ];

  return (
    <>
      {/* SECTION 1: HERO VIDEO */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=vz8eipnq&public_id=zahro-batik-hero-video&autoplay=true&loop=true&muted=true&controls=false"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full border-0 pointer-events-none"
            allow="autoplay; fullscreen; encrypted-media"
            title="Batik Journey Hero Video"
          ></iframe>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative text-center px-margin-mobile pt-20 pb-12 max-w-4xl mx-auto z-20">
          <ScrollReveal>
            <h1 className="font-headline text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.15] drop-shadow-md">
              {t.home.titleLine1} <br className="hidden sm:inline" />
              <span className="italic font-light">{t.home.titleLine2}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed tracking-wide">
              {t.home.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto sm:max-w-none">
              <Link
                href="/collection"
                className="w-full sm:w-auto bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all luxury-shadow font-bold text-center"
              >
                {t.home.btnExplore}
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-1.5 border-white text-white px-6 py-3.5 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-white/10 transition-all font-bold text-center"
              >
                {t.home.btnContact}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* SECTION 2: PRESTASI & PENGAKUAN (AWARDS MARQUEE) */}
      <section className="bg-surface-tan py-5 md:py-6 overflow-hidden border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile mb-2 md:mb-3 text-center">
          <span className="font-label text-primary/70 text-xs uppercase tracking-[0.4em] font-bold">
            {t.home.awardsTitle}
          </span>
        </div>
        <div className="relative flex overflow-hidden group py-1.5 md:py-2">
          <div className="animate-scroll flex items-center gap-16 whitespace-nowrap">
            {/* First Set */}
            <div className="flex items-center gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-16">
                  {award.link ? (
                    <Link
                      href={award.link}
                      target={award.link.startsWith('http') ? '_blank' : undefined}
                      rel={award.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-headline italic text-on-surface hover:text-primary hover:underline transition-all text-lg md:text-2xl"
                    >
                      {award.content}
                    </Link>
                  ) : (
                    <span className="font-headline italic text-on-surface text-lg md:text-2xl">
                      {award.content}
                    </span>
                  )}
                  <span className="text-primary font-bold opacity-40">•</span>
                </div>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {awards.map((award, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-16">
                  {award.link ? (
                    <Link
                      href={award.link}
                      target={award.link.startsWith('http') ? '_blank' : undefined}
                      rel={award.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-headline italic text-on-surface hover:text-primary hover:underline transition-all text-lg md:text-2xl"
                    >
                      {award.content}
                    </Link>
                  ) : (
                    <span className="font-headline italic text-on-surface text-lg md:text-2xl">
                      {award.content}
                    </span>
                  )}
                  <span className="text-primary font-bold opacity-40">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BRAND ENTITY */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <ScrollReveal className="text-center mb-8">
          <span className="font-label text-primary text-xs uppercase tracking-[0.3em] font-bold mb-3 block">
            {t.home.brandEntitySubtitle}
          </span>
          <h2 className="font-headline text-headline-xl text-on-surface leading-tight">
            {t.home.brandEntityTitle}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          {/* GROUP 1: Inovasi Pewarnaan (Card 1 & Text 1) */}
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch bg-white/40 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-outline-variant/30">
            {/* Card 1 */}
            <div className="md:col-span-1 flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[200px] rounded-xl overflow-hidden luxury-shadow">
                <img
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Borneo Natural Textile Detail"
                  src="/images/inovasi-pewarnaan-alami.avif"
                />
              </div>
            </div>

            {/* Text 1 */}
            <div className="md:col-span-2 flex flex-col justify-between pl-0 md:pl-3 py-1">
              <div>
                <h3 className="font-title text-lg md:text-xl text-on-surface mb-2 leading-snug font-bold">
                  {t.home.brandEntityTitle1}
                </h3>
                <p className="font-body text-xs md:text-sm text-body-text/90 leading-relaxed mb-3 text-justify">
                  {t.home.brandEntityDesc1}
                </p>
              </div>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-primary font-label text-[10px] md:text-xs uppercase tracking-widest font-bold group hover:text-primary-container transition-colors"
              >
                <span>{t.home.brandEntityBtn}</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* GROUP 2: Pemberdayaan Disabilitas (Card 2 & Text 2) */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch bg-white/40 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-outline-variant/30">
            {/* Card 2 */}
            <div className="md:col-span-1 flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[200px] rounded-xl overflow-hidden luxury-shadow">
                <img
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Batik Artisan Crafting"
                  src="https://res.cloudinary.com/vz8eipnq/image/upload/v1785707308/Pemberdayaan_Pekerja_Disalbilitas_abpquo.avif"
                />
              </div>
            </div>

            {/* Text 2 */}
            <div className="md:col-span-2 flex flex-col justify-between pl-0 md:pl-3 py-1">
              <div>
                <h3 className="font-title text-lg md:text-xl text-on-surface mb-2 leading-snug font-bold">
                  {t.home.brandEntityTitle2}
                </h3>
                <p className="font-body text-xs md:text-sm text-body-text/90 leading-relaxed mb-3 text-justify">
                  {t.home.brandEntityDesc2}
                </p>
              </div>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-primary font-label text-[10px] md:text-xs uppercase tracking-widest font-bold group hover:text-primary-container transition-colors"
              >
                <span>{t.home.brandEntityBtn}</span>
              </Link>
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

      {/* SECTION 5: READY TO EXPORT */}
      <section className="bg-inverse-surface text-inverse-on-surface py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary-fixed-dim mb-4 block font-bold">
              {t.home.exportSubtitle}
            </span>
            <h2 className="font-headline text-headline-xl text-white mb-8">{t.home.exportTitle}</h2>
            <p className="font-body text-lg opacity-80 mb-12 leading-relaxed">
              {t.home.exportDesc}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-16">
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

              <Link href="/gallery?category=SERTIFIKAT">
                <ScrollReveal
                  delay={300}
                  className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                    eco
                  </span>

                  <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                    {t.home.stat3}
                  </h4>
                </ScrollReveal>
              </Link>

            <ScrollReveal delay={400} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-4">
                handshake
              </span>
              <h4 className="font-label uppercase tracking-widest text-xs font-bold text-white">
                {t.home.stat4}
              </h4>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <a
              href="/documents/Batik_Zahro_Catalog.pdf"
              download="Batik_Zahro_Catalog.pdf"
              className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all luxury-shadow font-bold text-center"
            >
              <span>{t.home.exportBtn}</span>
              <span className="material-symbols-outlined text-lg">
                download
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6: ZAHRO ROYAL COMMUNITY */}
      <section className="bg-surface-tan py-section-gap border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <ScrollReveal className="lg:col-span-5">
              <span className="font-label text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                {t.home.royalSubtitle}
              </span>
              <h2 className="font-headline text-headline-xl text-on-surface mb-6 leading-tight">
                {t.home.royalTitle}
              </h2>
              <p className="font-body text-body-lg text-body-text mb-10 leading-relaxed">
                {t.home.royalDesc}
              </p>
              <Link
                href="https://chat.whatsapp.com/IJJEhP61Xe58dn5CEp5eI1"
                className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all luxury-shadow font-bold text-center"
              >
                <span>{t.home.royalBtn}</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_right_alt
                </span>
              </Link>
            </ScrollReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
              <ScrollReveal delay={100} className="p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-outline-variant/30 hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  workspace_premium
                </span>
                <h4 className="font-title text-xl text-on-surface mb-2 font-bold">
                  {t.home.royalBenefit1Title}
                </h4>
                <p className="font-body text-body-sm text-body-text">
                  {t.home.royalBenefit1Desc}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-outline-variant/30 hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  draw
                </span>
                <h4 className="font-title text-xl text-on-surface mb-2 font-bold">
                  {t.home.royalBenefit2Title}
                </h4>
                <p className="font-body text-body-sm text-body-text">
                  {t.home.royalBenefit2Desc}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} className="p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-outline-variant/30 hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  confirmation_number
                </span>
                <h4 className="font-title text-xl text-on-surface mb-2 font-bold">
                  {t.home.royalBenefit3Title}
                </h4>
                <p className="font-body text-body-sm text-body-text">
                  {t.home.royalBenefit3Desc}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400} className="p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-outline-variant/30 hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  redeem
                </span>
                <h4 className="font-title text-xl text-on-surface mb-2 font-bold">
                  {t.home.royalBenefit4Title}
                </h4>
                <p className="font-body text-body-sm text-body-text">
                  {t.home.royalBenefit4Desc}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 md:py-16 max-w-3xl mx-auto px-margin-mobile">
        <ScrollReveal className="text-center mb-10">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold">
            {t.home.faqBadge}
          </span>
          <h2 className="font-headline text-headline-xl text-on-surface mt-4">
            {t.home.faqTitle}
          </h2>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <details className="group border-b border-outline-variant/50 pb-2 cursor-pointer">
                <summary className="flex justify-between items-center list-none py-2.5 font-title text-lg text-on-surface select-none">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <div className="pt-1 pb-3 text-body-text font-body text-body-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
