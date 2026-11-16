import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ClosingQuote, PageIntro, QuoteButton } from '@/components/site';
import { pageMetadata } from '@/lib/seo';
import { services } from '@/lib/services';

type Props = { params: Promise<{ service: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(item => ({ service: item.slug }));
}

async function getService(params: Props['params']) {
  const { service } = await params;
  return services.find(item => item.slug === service) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const item = await getService(params);
  return pageMetadata(item.title + ' | Essex Window Cleaning', item.summary + ' Request a free quote from Aaron in Braintree, Essex.', '/' + item.slug + '/');
}

export default async function ServicePage({ params }: Props) {
  const item = await getService(params);
  return <>
    <PageIntro label="Cleaning services · Braintree, Essex" title={item.title} text={item.intro} photo={item.photo} imageLabel={item.imageLabel} />
    <section className="wrap block split-intro">
      <div><p className="eyebrow">What to expect</p><h2>Getting a quote</h2></div>
      <div><p>{item.detail}</p><p>Include your postcode so Aaron can confirm coverage for your property.</p><QuoteButton /></div>
    </section>
    <section className="block services-section"><div className="wrap split-intro">
      <div><p className="eyebrow">{item.name}</p><h2>Common questions</h2></div>
      <div className="faqs">{item.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </div></section>
    <section className="wrap block related"><h2>Other cleaning services</h2>{services.filter(service => service.slug !== item.slug).map(service => <Link key={service.slug} href={'/' + service.slug + '/'} className="text-link">{service.name} ↗</Link>)}</section>
    <ClosingQuote />
  </>;
}
