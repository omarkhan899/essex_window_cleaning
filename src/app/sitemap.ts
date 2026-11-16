import type { MetadataRoute } from 'next';
import { business } from '@/lib/business';
import { navigation, services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  if (!base) return [];
  return [...navigation.map(item => item.href), ...services.map(item => '/' + item.slug + '/'), '/privacy-policy/']
    .map(path => ({ url: new URL(path, base).href }));
}
