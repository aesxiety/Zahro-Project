'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  useEffect,
  useState,
} from 'react';


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

  motif_meaning:
    string | null;

  motif_image:
    string | null;

};


type ApiResponse = {

  success: boolean;

  data?:
    Product[];

  message?:
    string;

};


export default function CollectionPage() {


  const [

    products,

    setProducts,

  ] = useState<Product[]>([]);


  const [

    loading,

    setLoading,

  ] = useState(true);


  const [

    error,

    setError,

  ] = useState<
    string | null
  >(null);


  useEffect(() => {


    async function getProducts() {


      try {


        const apiUrl =

          process.env
            .NEXT_PUBLIC_API_URL;


        if (
          !apiUrl
        ) {

          throw new Error(

            'NEXT_PUBLIC_API_URL belum diatur'

          );

        }


        const response =

          await fetch(

            `${apiUrl}/products.php`,

            {

              cache:
                'no-store',

            }

          );


        const result:

          ApiResponse =

          await response.json();


        if (

          !response.ok

          ||

          !result.success

        ) {

          throw new Error(

            result.message

            ||

            'Gagal mengambil data produk'

          );

        }


        setProducts(

          result.data

          ||

          []

        );


      } catch (

        error

      ) {


        console.error(

          'Gagal mengambil produk:',

          error

        );


        setError(

          error instanceof Error

            ?

            error.message

            :

            'Gagal mengambil produk'

        );


      } finally {


        setLoading(

          false

        );


      }


    }


    getProducts();


  }, []);


  if (
    loading
  ) {

    return (

      <main className="min-h-screen bg-background-cream font-body">

        <div className="flex min-h-[500px] items-center justify-center">

          Memuat koleksi...

        </div>

      </main>

    );

  }


  if (
    error
  ) {

    return (

      <main className="min-h-screen bg-background-cream font-body">

        <div className="flex min-h-[500px] flex-col items-center justify-center">

          <p>

            {error}

          </p>

        </div>

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-background-cream font-body">


      <section className="mx-auto max-w-[1320px] px-5 py-12 md:px-10 lg:px-16">


        <div>


          <p className="text-label-caps text-secondary">

            KOLEKSI BATIK

          </p>


          <h1 className="mt-4 font-display text-headline-xl text-on-surface">

            Koleksi Batik Zahro

          </h1>


          <div className="mt-6 h-[2px] w-16 bg-primary" />


        </div>


        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">


          {

            products.map(

              (
                product
              ) => (

                <article

                  key={
                    product.id
                  }

                  className="overflow-hidden rounded-xl border border-border-muted bg-surface-container-lowest"

                >


                  <div className="relative aspect-[4/5]">


                    <Image

                      src={
                        product.image
                      }

                      alt={
                        product.name
                      }

                      fill

                      unoptimized

                      className="object-cover"

                    />


                  </div>


                  <div className="p-6">


                    <p className="text-label-caps text-secondary">

                      {

                        product.motif_name

                      }

                    </p>


                    <h2 className="mt-3 font-display text-headline-sm">

                      {

                        product.name

                      }

                    </h2>


                    <p className="mt-4 line-clamp-3">

                      {

                        product.description

                      }

                    </p>


                <Link
                  href={`/produk?slug=${product.slug}`}
                  className="mt-6 inline-flex border border-primary px-5 py-3"
                >
                  DETAIL
                  <span className="ml-2">→</span>
                </Link>


                  </div>


                </article>

              )

            )

          }


        </div>


      </section>


    </main>

  );

}