import Image from 'next/image';
import Link from 'next/link';
import { business, quoteLink } from '@/lib/business';
import type { Photo } from '@/lib/photos';
import { navigation, services } from '@/lib/services';
import { CallLink, HeaderMenu } from './interactive';

export function Brand() {
  return <Link href="/" className="brand" aria-label={business.name}>
    <Image className="brand-logo" src="/images/brand/essex-window-cleaning-logo.webp" alt="" width={68} height={68} sizes="(max-width: 980px) 48px, 68px" />
    <span>ESSEX<span className="brand-small">WINDOW CLEANING COMPANY</span></span>
  </Link>;
}

export function Header() {
  return <header className="site-header">
    <div className="location-bar"><div className="wrap"><span className="location-dot" /> Braintree, Essex <span className="location-divider" /> Family-run exterior cleaning</div></div>
    <div className="wrap nav-row">
      <Brand />
      <HeaderMenu />
      <CallLink className="button nav-call"><span className="nav-call-number">{business.phone}</span></CallLink>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap">
    <div className="footer-grid">
      <div><Brand /><p>Local window and exterior cleaning<br />in Braintree, Essex.</p></div>
      <div><h2>Services</h2>{services.map(service => <Link href={'/' + service.slug + '/'} key={service.slug}>{service.name}</Link>)}</div>
      <div><h2>Company</h2>{navigation.slice(1).map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      <div><h2>Get in touch</h2><CallLink>{business.phone}</CallLink><WhatsAppLink /><Link href={quoteLink}>Request a free quote</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><Link href="/privacy-policy/">Privacy Policy</Link></div>
  </div></footer>;
}

export function PhotoFrame({ photo, className = '', sizes = '(max-width: 820px) 100vw, 50vw', priority = false }: { photo: Photo; className?: string; sizes?: string; priority?: boolean }) {
  return <div className={'photo ' + className}>
    <Image src={photo.src} alt={photo.alt} fill sizes={sizes} loading={priority ? 'eager' : undefined} fetchPriority={priority ? 'high' : undefined} />
  </div>;
}

export function QuoteButton({ children = 'Get a free quote' }: { children?: string }) {
  return <Link href={quoteLink} className="button primary">{children} <span aria-hidden="true">↗</span></Link>;
}

export function WhatsAppLink({ className }: { className?: string }) {
  return <a href={'https://wa.me/' + business.whatsapp} className={className}>
    <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.28-1.39A9.94 9.94 0 1 0 12.04 2Zm0 18.19a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.13.82.84-3.04-.2-.31a8.24 8.24 0 1 1 6.99 3.86Z" />
      <path d="M9.49 7.7c-.16-.36-.33-.37-.48-.37h-.4c-.14 0-.36.05-.55.26-.2.2-.73.71-.73 1.73s.75 2.01.85 2.15c.1.14 1.45 2.3 3.6 3.13 1.78.7 2.15.56 2.54.53.38-.04 1.24-.51 1.41-1 .18-.48.18-.9.13-1-.05-.08-.19-.13-.4-.24l-1.4-.66c-.2-.08-.34-.11-.48.1-.14.2-.54.67-.66.81-.12.14-.24.16-.45.06-.2-.1-.87-.33-1.66-1.03a6.16 6.16 0 0 1-1.15-1.44c-.12-.2-.01-.31.09-.41l.31-.36c.1-.12.14-.21.21-.35.07-.14.04-.26-.01-.37L9.49 7.7Z" />
    </svg>
    Message on WhatsApp
  </a>;
}

export function ClosingQuote() {
  return <section className="closing"><div className="wrap closing-inner">
    <div><p className="eyebrow">Free quotes</p><h2>READY FOR CLEANER WINDOWS?</h2><p>Get in touch with Aaron to discuss your property and request a free quote.</p></div>
    <div className="actions"><QuoteButton /><CallLink className="button outline">Call now</CallLink></div>
  </div></section>;
}

export function PageIntro({ label, title, text, photo, imageLabel }: { label: string; title: string; text: string; photo?: Photo; imageLabel?: string }) {
  return <section className={'page-intro' + (photo ? ' has-photo' : '')}>
    <div className="wrap intro-inner"><div><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro-copy">{text}</p></div>
      {photo && <figure><PhotoFrame photo={photo} priority />{imageLabel && <figcaption>{imageLabel}</figcaption>}</figure>}
    </div>
  </section>;
}
