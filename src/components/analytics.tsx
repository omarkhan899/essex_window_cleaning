'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';

const preferenceKey = 'essex-analytics';
const changeEvent = 'essex-analytics-change';

function subscribe(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener('storage', callback);
  };
}

function preference() {
  try { return window.localStorage.getItem(preferenceKey); }
  catch { return 'unavailable'; }
}

function savePreference(value: string) {
  try { window.localStorage.setItem(preferenceKey, value); }
  catch { return; }
  window.dispatchEvent(new Event(changeEvent));
}

export function analyticsAllowed() {
  return preference() === 'yes';
}

export function Analytics({ id }: { id: string }) {
  const choice = useSyncExternalStore(subscribe, preference, () => 'pending');
  if (choice === 'yes') return <>
    <Script src={'https://www.googletagmanager.com/gtag/js?id=' + id} strategy="afterInteractive" />
    <Script id="ga" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`}</Script>
  </>;
  if (choice !== null) return null;
  return <section className="analytics-choice" aria-label="Analytics cookies">
    <p>We use optional Google Analytics cookies to measure visits and enquiries. <Link href="/privacy-policy/#analytics">Privacy Policy</Link></p>
    <div className="actions">
      <button className="button primary" onClick={() => savePreference('yes')}>Allow analytics</button>
      <button className="button" onClick={() => savePreference('no')}>Decline</button>
    </div>
  </section>;
}

export function AnalyticsPreference() {
  const choice = useSyncExternalStore(subscribe, preference, () => 'pending');
  if (choice === 'unavailable') return null;
  return <button className="button primary" type="button" onClick={() => {
    savePreference(choice === 'yes' ? 'no' : 'yes');
    if (choice === 'yes') window.location.reload();
  }}>{choice === 'yes' ? 'Turn off analytics' : 'Allow analytics'}</button>;
}
