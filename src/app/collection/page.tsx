'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  material: string;

  motif_name: string;
  motif_slug: string;
};

type ApiResponse = {
  success: boolean;
  data?: Product[];
  message?: string;
};

export default function CollectionPage() {
  const { t } = useLanguage();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState('ALL');

  // Mengambil semua produk dari API
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products', {
          cache: 'no-store',
        });

        const result: ApiResponse = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              `Gagal mengambil data produk. Status: ${response.status}`
          );
        }

        if (!result.success || !result.data) {
          throw new Error(
            result.message ||
              'Data produk tidak ditemukan'
          );
        }

        setProducts(result.data);
      } catch (error) {
        console.error(
          'Gagal mengambil data produk:',
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : 'Data produk tidak dapat dimuat.'
        );
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  /*
   * Filter sementara.
   * Karena tabel products belum memiliki
   * kolom category, saat ini hanya ALL
   * dan MOTIF BATIK.
   */
  const categories = [
    {
      key: 'ALL',
      label: t.collection.tabs.ALL,
    },
    {
      key: 'MOTIF',
      label: 'MOTIF BATIK',
    },
  ];

  const filteredProducts =
    activeTab === 'ALL'
      ? products
      : products.filter(
          (product) =>
            product.motif_name
              .trim()
              .length > 0
        );

  return (
    <>
      {/* ================================================= */}
      {/* HERO COLLECTION */}
      {/* ================================================= */}

      <section className="border-b border-outline-variant/30 bg-surface-tan py-16 md:py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">

          <ScrollReveal>
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.35em] text-primary">
              {t.collection.badge}
            </span>

            <h1 className="mb-6 font-headline text-4xl text-on-surface sm:text-6xl md:text-7xl">
              {t.collection.title}
            </h1>

            <p className="mx-auto max-w-2xl font-body text-lg leading-8 text-body-text">
              {t.collection.subtitle}
            </p>
          </ScrollReveal>

          {/* FILTER */}

          <div className="mt-12 flex flex-wrap justify-center gap-3 font-label text-xs font-bold tracking-widest md:gap-4">

            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() =>
                  setActiveTab(category.key)
                }
                className={`rounded-full px-6 py-3 transition-all duration-300 ${
                  activeTab === category.key
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'border border-outline-variant/30 bg-white/60 text-on-surface-variant hover:bg-white hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* DAFTAR PRODUK */}
      {/* ================================================= */}

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">

        {/* LOADING */}

        {loading && (
          <div className="py-24 text-center">

            <p className="font-body text-body-lg text-body-text">
              Memuat koleksi batik...
            </p>

          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="py-24 text-center">

            <p className="font-body text-body-lg text-error">
              {error}
            </p>

          </div>
        )}

        {/* DATA KOSONG */}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="py-24 text-center">

              <p className="font-body text-body-lg text-body-text">
                Belum ada produk yang tersedia.
              </p>

            </div>
          )}

        {/* GRID PRODUK */}

        {!loading &&
          !error &&
          filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProducts.map(
                (product, index) => (
                  <ScrollReveal
                    key={product.id}
                    delay={index * 80}
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-container-lowest shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                      {/* FOTO PRODUK */}

                      <div className="relative aspect-[3/4] overflow-hidden bg-surface-tan/30">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* LABEL MOTIF */}

                        <span className="absolute left-4 top-4 rounded-full border border-primary/20 bg-background-cream/90 px-3 py-1 font-label text-[11px] font-bold uppercase tracking-widest text-primary backdrop-blur-md">

                          {product.motif_name}

                        </span>

                      </div>

                      {/* INFORMASI PRODUK */}

                      <div className="flex flex-grow flex-col justify-between p-8 text-center">

                        <div>

                          {/* NAMA PRODUK */}

                          <h2 className="mb-3 font-headline text-2xl text-on-surface transition-colors duration-300 group-hover:text-primary">

                            {product.name}

                          </h2>

                          {/* DESKRIPSI */}

                          <p className="line-clamp-3 font-body text-body-sm leading-7 text-body-text">

                            {product.description}

                          </p>

                        </div>

                        {/* DETAIL BAWAH */}

                        <div className="mt-6 flex items-center justify-between border-t border-outline-variant/30 pt-5">

                          {/* BAHAN */}

                          <span className="font-headline text-lg font-semibold text-primary">

                            {product.material}

                          </span>

                          {/* LANGSUNG KE HALAMAN DETAIL */}

                          <Link
                            href={`/produk/${product.slug}`}
                            className="flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface transition-colors duration-300 hover:text-primary"
                          >
                            DETAIL

                            <span className="text-base">
                              →
                            </span>
                          </Link>

                        </div>

                      </div>

                    </article>
                  </ScrollReveal>
                )
              )}

            </div>
          )}

      </section>
    </>
  );
}