import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { Footer, Header } from '@/components/site';
import { business, description } from '@/lib/business';
import './globals.css';

const sora = Sora({ subsets: ['latin'], display: 'swap', variable: '--font-sora' });
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: business.url ? new URL(business.url) : undefined,
  title: business.name,
  description,
  robots: business.url ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB" className={sora.variable}><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">{children}</main>
    <Footer />
    {gaId && /^G-[A-Z0-9]+$/.test(gaId) && <Analytics id={gaId} />}
  </body></html>;
}
