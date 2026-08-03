import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Mengambil slug dari URL
    const slug =
      request.nextUrl.searchParams.get('slug');

    // Jika ada slug, ambil satu produk
    if (slug) {
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
        rows as Array<Record<string, unknown>>;

      // Jika produk tidak ditemukan
      if (products.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: 'Produk tidak ditemukan',
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json({
        success: true,
        data: products[0],
      });
    }

    // Jika tidak ada slug, ambil semua produk
    const [rows] = await db.query(`
      SELECT
        products.id,
        products.name,
        products.slug,
        products.image,
        products.description,
        products.material,

        motifs.name AS motif_name,
        motifs.slug AS motif_slug

      FROM products

      INNER JOIN motifs
        ON products.motif_id = motifs.id

      WHERE products.is_active = 1

      ORDER BY products.id DESC
    `);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error(
      'Gagal mengambil data produk:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          'Terjadi kesalahan pada server',
      },
      {
        status: 500,
      }
    );
  }
}