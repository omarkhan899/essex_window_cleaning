'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { business } from '@/lib/business';
import { services } from '@/lib/services';
import { CallLink, trackConversion } from './interactive';

export function QuoteForm({ available }: { available: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!available || state === 'sending' || state === 'sent') return;
    const form = event.currentTarget;
    setState('sending');
    setMessage('Sending your enquiry…');
    try {
      const response = await fetch('/api/quote/', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok || result.received !== true) throw new Error(result.error);
      form.reset();
      setState('sent');
      setMessage('Thanks. Your enquiry was sent to Aaron.');
      trackConversion('generate_lead');
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error && error.message && error.message.startsWith('Please')
        ? error.message : 'Your enquiry could not be confirmed. Please try again or call Aaron on ' + business.phone + '.');
    }
  }

  return <form className="quote-form" onSubmit={submit} aria-busy={state === 'sending'}>
    {!available && <p className="form-notice">Online enquiries are currently unavailable. Call Aaron on <CallLink>{business.phone}</CallLink> for a free quote.</p>}
    <fieldset disabled={!available || state === 'sending' || state === 'sent'}>
      <legend className="sr-only">Your details</legend>
      <div className="field-grid">
        <label>Full name <span>(required)</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Phone <span>(required)</span><input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} /></label>
        <label>Email <span>(optional)</span><input name="email" type="email" autoComplete="email" maxLength={254} /></label>
        <label>Postcode or town <span>(required)</span><input name="area" autoComplete="off" required minLength={2} maxLength={100} /></label>
        <label className="full-field">Service required <span>(required)</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.name}</option>)}<option value="other">Other or unsure</option></select></label>
        <label className="full-field">Tell us about the job <span>(optional)</span><textarea name="message" rows={5} maxLength={2000} /></label>
        <div hidden><label>Leave this empty<input name="website" autoComplete="off" tabIndex={-1} /></label></div>
      </div>
    </fieldset>
    <p className="form-privacy">Aaron uses these details to respond to your enquiry. <Link href="/privacy-policy/">Privacy Policy</Link></p>
    <button type="submit" className="button primary" disabled={!available || state === 'sending' || state === 'sent'}>{state === 'sending' ? 'Sending…' : 'Send quote enquiry'} <span aria-hidden="true">↗</span></button>
    <p className="form-feedback" role={state === 'error' ? 'alert' : 'status'}>{message}</p>
  </form>;
}
