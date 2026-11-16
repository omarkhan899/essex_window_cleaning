import { CallLink } from '@/components/interactive';
import { QuoteForm } from '@/components/quote-form';
import { PageIntro, WhatsAppLink } from '@/components/site';
import { business } from '@/lib/business';
import { quoteSettings } from '@/lib/quote';
import { pageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';
export const metadata = pageMetadata('Contact Aaron | Free Cleaning Quote in Braintree', 'Call Aaron or request a free quote for window cleaning or pressure washing in Braintree, Essex.', '/contact/');

export default function Contact() {
  return <>
    <PageIntro label="Contact" title="Get a free quote" text="Tell Aaron what you need cleaned and where the property is. He’ll be in touch to discuss the job." />
    <section className="wrap block contact-grid" id="quote">
      <aside><p className="eyebrow">Get in touch</p><h2>Call or message Aaron</h2><CallLink className="contact-number">{business.phone}</CallLink><p>Based in Braintree, Essex.</p><div className="actions contact-actions"><WhatsAppLink className="button whatsapp" /></div></aside>
      <div><h2>Request a quote online</h2><QuoteForm available={Boolean(quoteSettings())} /></div>
    </section>
  </>;
}
