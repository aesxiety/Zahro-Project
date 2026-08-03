'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  material: string;
  whatsapp_number: string;
  motif_name: string;
};

export default function ProdukPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (!slug) {
      setLoading(false);
      return;
    }

    async function load() {
      const api = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(
        `${api}/products.php?slug=${slug}`
      );

      const json = await res.json();

      if (json.success) {
        setProduct(json.data);
      }

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Memuat...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        Produk tidak ditemukan.

        <Link
          href="/collection"
          className="mt-6 border px-5 py-3"
        >
          Kembali
        </Link>
      </div>
    );
  }

  const wa = product.whatsapp_number.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-background-cream">

      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="relative aspect-[4/5]">

            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-primary uppercase">
              Koleksi Batik
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-8 whitespace-pre-line">
              {product.description}
            </p>

            <div className="mt-8">

              <p>
                <b>Bahan :</b> {product.material}
              </p>

              <p className="mt-2">
                <b>Motif :</b> {product.motif_name}
              </p>

            </div>

            <div className="mt-10 flex gap-4">

              <Link
                href="/our-story"
                className="border border-primary px-6 py-4"
              >
                CERITA MOTIF
              </Link>

              <a
                href={`https://wa.me/${wa}?text=Halo saya tertarik dengan ${product.name}`}
                target="_blank"
                className="bg-primary px-6 py-4 text-white"
              >
                BELI VIA WHATSAPP
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}