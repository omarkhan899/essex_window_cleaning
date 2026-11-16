import type { MetadataRoute } from 'next';
import { business } from '@/lib/business';

export default function robots(): MetadataRoute.Robots {
  return business.url
    ? { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: new URL('/sitemap.xml', business.url).href }
    : { rules: { userAgent: '*', disallow: '/' } };
}
