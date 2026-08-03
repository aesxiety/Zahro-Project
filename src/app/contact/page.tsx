'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* CONTACT HERO */}
      <section className="bg-surface-tan py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {language === 'ID' ? 'Hubungi Kami' : 'Contact Us'}
            </h1>
            <p className="font-body text-body-lg text-lg text-body-text max-w-2xl mx-auto leading-relaxed">
              {language === 'ID'
                ? 'Kami siap melayani pesanan kustom bespoke, kemitraan wholesale internasional, dan janji temu privat.'
                : 'We welcome inquiries for custom artisan commissions, international wholesale, and private appointments.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: CONTACT CHANNELS & MAPS */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal className="space-y-6">
              <h2 className="font-headline text-3xl text-on-surface">
                {language === 'ID' ? 'Saluran Kontak Direct' : 'Direct Contact Channels'}
              </h2>
              <p className="font-body text-body-sm text-body-text">
                {language === 'ID'
                  ? 'Pilih metode komunikasi yang paling nyaman bagi Anda. Tim kami akan merespons sesegera mungkin.'
                  : 'Choose the communication method that suits you best. Our team will respond as soon as possible.'}
              </p>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/62811550192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/40 bg-white hover:bg-primary-container/10 hover:border-primary transition-all duration-300 luxury-shadow group"
                >
                  <span className="material-symbols-outlined text-3xl text-emerald-600 group-hover:scale-110 transition-transform">
                    chat
                  </span>
                  <div>
                    <h4 className="font-title text-sm font-bold text-on-surface">WhatsApp Chat</h4>
                    <p className="font-body text-xs text-body-text opacity-85">+62 811-550-192</p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:batikzahro@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/40 bg-white hover:bg-primary-container/10 hover:border-primary transition-all duration-300 luxury-shadow group"
                >
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                    mail
                  </span>
                  <div>
                    <h4 className="font-title text-sm font-bold text-on-surface">Email</h4>
                    <p className="font-body text-xs text-body-text opacity-85">batikzahro@gmail.com</p>
                  </div>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/batikzahro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/40 bg-white hover:bg-primary-container/10 hover:border-primary transition-all duration-300 luxury-shadow group sm:col-span-2"
                >
                  <span className="material-symbols-outlined text-3xl text-rose-600 group-hover:scale-110 transition-transform">
                    photo_camera
                  </span>
                  <div>
                    <h4 className="font-title text-sm font-bold text-on-surface">Instagram</h4>
                    <p className="font-body text-xs text-body-text opacity-85">@batikzahro</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* MAP & OFFICE LOCATION */}
            <ScrollReveal delay={100} className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-border-muted luxury-shadow space-y-4">
                <div>
                  <h3 className="font-title text-xl text-primary font-bold">
                    {language === 'ID' ? 'Lokasi Workshop Kami' : 'Our Workshop Location'}
                  </h3>
                  <p className="font-body text-body-sm text-body-text mt-1 leading-snug">
                    Teritip, Kec. Balikpapan Tim., Kota Balikpapan, Kalimantan Timur 76118
                  </p>
                  <p className="font-label text-[11px] text-on-surface-variant/70 mt-1 uppercase tracking-widest font-bold">
                    {language === 'ID' ? 'Senin - Minggu: 09:00 - 20:00 WITA' : 'Mon - Sun: 09:00 - 20:00 WITA'}
                  </p>
                </div>

                {/* GOOGLE MAPS IFRAME */}
                <div className="relative w-full h-[280px] rounded-xl overflow-hidden border border-outline-variant/40 bg-surface-tan">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.802115162489!2d116.9996582!3d-1.1578332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6f100769e867f%3A0xf57a061f3e86880b!2sBatik%20Zahro!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Batik Zahro Office Location Map"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: DIRECT CONTACT FORM */}
          <ScrollReveal delay={200} className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-border-muted luxury-shadow">
            <h2 className="font-headline text-3xl text-on-surface mb-2">
              {language === 'ID' ? 'Formulir Pertanyaan Direct' : 'Direct Inquiry Form'}
            </h2>
            <p className="font-body text-body-sm text-body-text mb-8">
              {language === 'ID'
                ? 'Kirim pertanyaan Anda secara langsung ke kurator kami. Kami akan merespons dalam 24 jam.'
                : 'Send your inquiry directly to our curators. We will respond within 24 hours.'}
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                <span className="material-symbols-outlined text-emerald-600 text-5xl mb-4">
                  check_circle
                </span>
                <h3 className="font-title text-2xl text-on-surface mb-2">
                  {language === 'ID' ? 'Terima Kasih' : 'Thank You'}
                </h3>
                <p className="font-body text-body-sm text-body-text">
                  {language === 'ID'
                    ? 'Pertanyaan Anda telah kami terima. Tim konsjerge kami akan menghubungi Anda segera.'
                    : 'We have received your message. Our concierge team will connect with you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                    {language === 'ID' ? 'Nama Lengkap *' : 'Full Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'ID' ? 'Contoh: Ahmad Fauzi' : 'e.g. John Doe'}
                    className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                  />
                </div>

                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                    {language === 'ID' ? 'Alamat Email *' : 'Email Address *'}
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ID' ? 'Contoh: fauzi@email.com' : 'e.g. johndoe@email.com'}
                    className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                  />
                </div>

                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                    {language === 'ID' ? 'Pertanyaan Anda *' : 'Your Question *'}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={language === 'ID' ? 'Tuliskan pertanyaan langsung Anda mengenai pesanan, motif, atau kerja sama...' : 'Type your direct question here regarding orders, motifs, or partnership...'}
                    className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all luxury-shadow"
                >
                  {language === 'ID' ? 'Kirim Pertanyaan Direct' : 'Submit Direct Inquiry'}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
