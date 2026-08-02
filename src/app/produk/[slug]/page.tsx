import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import db from '@/lib/db';

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  material: string;
  whatsapp_number: string;

  motif_name: string;
  motif_slug: string;
  motif_story: string;
  motif_meaning: string | null;
  motif_image: string | null;
};

type ProdukPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProduct(
  slug: string
): Promise<Product | null> {
  try {
    const [rows] = await db.query(
      `
        SELECT
          products.id,
          products.name,
          products.slug,
          products.image,
          products.description,
          products.material,
          products.whatsapp_number,

          motifs.name AS motif_name,
          motifs.slug AS motif_slug,
          motifs.story AS motif_story,
          motifs.meaning AS motif_meaning,
          motifs.image AS motif_image

        FROM products

        INNER JOIN motifs
          ON products.motif_id = motifs.id

        WHERE products.slug = ?
          AND products.is_active = 1

        LIMIT 1
      `,
      [slug]
    );

    const products =
      rows as Product[];

    if (products.length === 0) {
      return null;
    }

    return products[0];
  } catch (error) {
    console.error(
      'Gagal mengambil produk dari database:',
      error
    );

    return null;
  }
}

export default async function ProdukPage({
  params,
}: ProdukPageProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const whatsappNumber =
    product.whatsapp_number.replace(
      /\D/g,
      ''
    );

  const whatsappMessage =
    encodeURIComponent(
      `Halo, saya tertarik dengan produk ${product.name}.`
    );

  return (
    <main className="min-h-screen bg-background-cream font-body">
      <section className="mx-auto max-w-[1320px] px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-container-lowest shadow-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* FOTO PRODUK */}
            <div className="relative min-h-[420px] overflow-hidden bg-surface-container md:min-h-[560px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute left-5 top-5 bg-surface-container-lowest/90 px-4 py-3 backdrop-blur-sm md:left-7 md:top-7">
                <p className="text-label-caps text-primary">
                  KOLEKSI BATIK
                </p>
              </div>
            </div>

            {/* INFORMASI PRODUK */}
            <div className="flex flex-col justify-center bg-surface-container-lowest px-6 py-10 sm:px-9 md:px-12 md:py-14 lg:px-14">

              <p className="text-label-caps text-secondary">
                KOLEKSI MOTIF
              </p>

              <h1 className="mt-4 font-display text-headline-lg text-on-surface md:text-headline-xl">
                {product.name}
              </h1>

              <div className="mt-6 h-[2px] w-16 bg-primary" />

              <p className="mt-7 max-w-xl whitespace-pre-line text-body-sm leading-7 text-body-text">
                {product.description}
              </p>

              {/* DETAIL PRODUK */}
              <div className="mt-9 grid grid-cols-1 gap-7 border-y border-border-muted py-7 sm:grid-cols-2">

                <div>
                  <p className="text-label-caps text-primary">
                    JENIS BAHAN
                  </p>

                  <p className="mt-2 text-body-lg text-on-surface">
                    {product.material}
                  </p>
                </div>

                <div className="sm:border-l sm:border-border-muted sm:pl-7">
                  <p className="text-label-caps text-primary">
                    JENIS MOTIF
                  </p>

                  <p className="mt-2 text-body-lg text-on-surface">
                    {product.motif_name}
                  </p>
                </div>
              </div>

              {/* TOMBOL */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link
                  href={`/cerita-motif/${product.motif_slug}`}
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center border border-primary px-6 text-sm font-semibold tracking-wide text-primary transition duration-300 hover:bg-primary hover:text-on-primary"
                >
                  CERITA MOTIF

                  <span className="ml-3 text-lg">
                    →
                  </span>
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center bg-primary px-6 text-sm font-semibold tracking-wide text-on-primary transition duration-300 hover:bg-primary-container hover:shadow-md"
                >
                  BELI VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}