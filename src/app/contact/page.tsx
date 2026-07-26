'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const hubs = [
    {
      city: 'Jakarta Atelier',
      address: 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan',
      phone: '+62 21 555 0192',
      email: 'jakarta@batikzahro.com',
      hours: 'Mon - Sat: 10:00 - 19:00 WIB',
    },
    {
      city: 'Samarinda Heritage Flagship',
      address: 'Jl. Gajah Mada No. 12, Samarinda, Kalimantan Timur',
      phone: '+62 541 789 203',
      email: 'samarinda@batikzahro.com',
      hours: 'Mon - Sun: 09:00 - 20:00 WITA',
    },
    {
      city: 'Tokyo Showroom',
      address: 'Ginza 5-Chome 9-1, Chuo-ku, Tokyo 104-0061',
      phone: '+81 3 4567 8901',
      email: 'tokyo@batikzahro.com',
      hours: 'Tue - Sun: 11:00 - 19:00 JST',
    },
  ];

  return (
    <>
      {/* CONTACT HERO */}
      <section className="bg-surface-tan py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal>
            <span className="font-label text-xs uppercase tracking-[0.35em] text-primary font-bold block mb-4">
              {t.contact.badge}
            </span>
            <h1 className="font-headline text-display-lg text-4xl sm:text-6xl md:text-7xl text-on-surface mb-6">
              {t.contact.title}
            </h1>
            <p className="font-body text-body-lg text-lg text-body-text max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM & ATELIER INFO */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <ScrollReveal className="lg:col-span-7 bg-white p-8 md:p-14 rounded-2xl border border-border-muted luxury-shadow">
            <h2 className="font-headline text-3xl text-on-surface mb-2">
              {t.contact.formTitle}
            </h2>
            <p className="font-body text-body-sm text-body-text mb-8">
              {t.contact.formDesc}
            </p>

            {submitted ? (
              <div className="p-8 bg-surface-container rounded-xl text-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">
                  check_circle
                </span>
                <h3 className="font-title text-2xl text-on-surface mb-2">{t.contact.thankTitle}</h3>
                <p className="font-body text-body-sm text-body-text">
                  {t.contact.thankMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                    />
                  </div>

                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. elena@boutique.com"
                      className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                    {t.contact.typeLabel}
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40">
                    <option>Bespoke Custom Order</option>
                    <option>Wholesale & Retail Partner</option>
                    <option>Press & Editorial Styling</option>
                    <option>Private Atelier Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface mb-2 font-bold">
                    {t.contact.msgLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, quantity, or desired motif design..."
                    className="w-full px-4 py-3.5 rounded-lg border border-outline-variant/60 focus:border-primary focus:outline-none font-body text-body-sm bg-background-cream/40"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all luxury-shadow"
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Boutique Hubs Side */}
          <ScrollReveal delay={200} className="lg:col-span-5 space-y-6">
            <div className="bg-surface-tan p-8 rounded-2xl border border-outline-variant/30">
              <h3 className="font-headline text-2xl text-on-surface mb-4">{t.contact.shippingTitle}</h3>
              <p className="font-body text-body-sm text-body-text leading-relaxed">
                {t.contact.shippingDesc}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-2xl text-on-surface px-2">{t.contact.hubsTitle}</h3>
              {hubs.map((hub) => (
                <div key={hub.city} className="bg-white p-6 rounded-xl border border-border-muted luxury-shadow">
                  <h4 className="font-title text-xl text-primary mb-2">{hub.city}</h4>
                  <p className="font-body text-body-sm text-body-text mb-3 leading-snug">{hub.address}</p>
                  <div className="font-label text-xs text-on-surface-variant space-y-1">
                    <p>Phone: <span className="font-semibold text-on-surface">{hub.phone}</span></p>
                    <p>Email: <span className="font-semibold text-on-surface">{hub.email}</span></p>
                    <p className="opacity-70 mt-2">{hub.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
