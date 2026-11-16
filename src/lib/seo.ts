import type { Metadata } from 'next';
import { business } from './business';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = business.url ? new URL(path, business.url).href : undefined;
  const image = business.url ? {
    url: new URL('/images/hero/aaron-social.jpg', business.url).href,
    width: 1200,
    height: 630,
    alt: 'Aaron cleaning a window with a water-fed pole',
  } : undefined;
  return {
    title, description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { type: 'website', title, description, url, images: image ? [image] : undefined, locale: 'en_GB', siteName: business.name },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}
