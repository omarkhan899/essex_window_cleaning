'use client';

import Link from 'next/link';
import { useId, useState, type ReactNode } from 'react';
import { business, quoteLink } from '@/lib/business';
import { navigation, services } from '@/lib/services';
import { analyticsAllowed } from './analytics';

export function trackConversion(event: string) {
  if (!process.env.NEXT_PUBLIC_GA_ID || !analyticsAllowed()) return;
  const analytics = window as Window & { gtag?: (...args: string[]) => void };
  analytics.gtag?.('event', event);
}

export function CallLink({ children, className }: { children: ReactNode; className?: string }) {
  return <a href={'tel:' + business.telephone} className={className} onClick={() => trackConversion('click_to_call')}>
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.26a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
    </svg>
    {children}
  </a>;
}

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuId = useId();
  const servicesId = useId();
  function close() { setOpen(false); setServicesOpen(false); }
  return <div className="menu" onKeyDown={event => {
    if (event.key === 'Escape' && servicesOpen) {
      setServicesOpen(false);
      document.getElementById(servicesId + '-button')?.focus();
    } else if (event.key === 'Escape' && open) {
      close();
      document.getElementById(menuId + '-button')?.focus();
    }
  }}>
    <button type="button" className="menu-toggle" id={menuId + '-button'} aria-controls={menuId} aria-expanded={open} onClick={() => open ? close() : setOpen(true)}>{open ? 'Close' : 'Menu'}</button>
    <nav id={menuId} aria-label="Main navigation" className={'nav-links' + (open ? ' is-open' : '')}>
      <Link href="/" onClick={close}>Home</Link>
      <div className="services-menu">
        <button type="button" id={servicesId + '-button'} aria-expanded={servicesOpen} aria-controls={servicesId} onClick={() => setServicesOpen(!servicesOpen)}>Services <span aria-hidden="true">⌄</span></button>
        <div id={servicesId} className="dropdown" hidden={!servicesOpen}>
          {services.map(service => <Link key={service.slug} href={'/' + service.slug + '/'} onClick={close}>{service.name}</Link>)}
        </div>
      </div>
      {navigation.slice(1).map(item => <Link key={item.href} href={item.href} onClick={close}>{item.label}</Link>)}
      <Link className="nav-quote" href={quoteLink} onClick={close}>Free quote <span aria-hidden="true">↗</span></Link>
    </nav>
  </div>;
}
