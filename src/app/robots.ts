import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Jika nanti ada rute API privat
    },
    sitemap: 'https://batikzahro.com/sitemap.xml',
  };
}
