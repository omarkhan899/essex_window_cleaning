import Link from 'next/link';
import { Comparison } from '@/components/comparison';
import { FamilyStory } from '@/components/family-story';
import { CallLink } from '@/components/interactive';
import { ClosingQuote, PhotoFrame, QuoteButton, WhatsAppLink } from '@/components/site';
import { business, description } from '@/lib/business';
import { comparisons, fasciaComparison, photos } from '@/lib/photos';
import { pageMetadata } from '@/lib/seo';
import { services } from '@/lib/services';

export const metadata = pageMetadata('Window Cleaners Braintree | Essex Window Cleaning Company', description, '/');

export default function Home() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    description,
    areaServed: { '@type': 'Place', name: 'Braintree, Essex' },
    sameAs: business.socials.length ? business.socials : undefined,
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Cleaning services', itemListElement: services.map(service => ({
      '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name },
    })) },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }} />
    <section className="hero">
      <PhotoFrame photo={photos.generatedHero} className="hero-photo" sizes="100vw" priority />
      <div className="wrap hero-copy"><div>
        <p className="eyebrow hero-eyebrow">Local. Family-run. Proud to serve Braintree.</p>
        <h1>PROFESSIONAL WINDOW CLEANING <span>IN BRAINTREE &amp; ACROSS ESSEX</span></h1>
        <p className="hero-description">Reliable domestic and commercial window cleaning from a local, family-run business. From traditional window cleaning to hard-to-reach windows and exterior cleaning, we&apos;re here to help keep your property looking its best.</p>
        <div className="actions"><QuoteButton /><CallLink className="button outline">Call Aaron</CallLink><WhatsAppLink className="button whatsapp" /></div>
      </div></div>
    </section>
    <div className="feature-strip"><ul className="wrap"><li><span aria-hidden="true">◇</span> Family-run business</li><li><span aria-hidden="true">◇</span> Homes &amp; businesses</li><li><span aria-hidden="true">◇</span> Traditional &amp; water-fed pole</li></ul></div>
    <section className="wrap block story home-intro">
      <PhotoFrame photo={photos.equipment} className="home-intro-photo" sizes="(max-width: 820px) 90vw, (max-width: 1454px) 39vw, 560px" />
      <div>
        <p className="eyebrow">Your local window cleaner</p>
        <h2>A local cleaning company that cares about the details.</h2>
        <p>Based in Braintree, Aaron helps homeowners and businesses look after their windows and exterior surfaces. Speak to him directly about what needs cleaning, from a ground-floor window to glass that&apos;s harder to reach.</p>
      </div>
    </section>
    <section className="services-section block"><div className="wrap">
      <p className="eyebrow">Our services</p><h2>Window and exterior cleaning</h2>
      <div className="service-grid home-services">{services.map(service => <article key={service.slug} className="service-card">
        <PhotoFrame photo={service.photo} className={'service-photo ' + service.slug} sizes="(max-width: 820px) 90vw, (max-width: 1454px) 28vw, 410px" />
        <div className="service-card-copy"><h3><Link href={'/' + service.slug + '/'}>{service.name} <span aria-hidden="true">↗</span></Link></h3><p>{service.summary}</p></div>
      </article>)}</div>
    </div></section>
    <section className="wrap block split-intro">
      <div><p className="eyebrow">Why choose us</p><h2>Speak directly to the person doing the work.</h2></div>
      <ul className="checks"><li>Local, family-run and based in Braintree</li><li>Cleaning for homes and commercial premises</li><li>Traditional and water-fed pole methods</li><li>Experience with high-level and awkward windows</li></ul>
    </section>
    <section className="block services-section"><div className="wrap">
      <div className="section-head"><div><p className="eyebrow">Before &amp; after</p><h2>See the difference</h2></div><Link className="text-link" href="/our-work/">See more of our work ↗</Link></div>
      <div className="comparison-grid">{[...comparisons, fasciaComparison].map(pair => <Comparison key={pair.title} pair={pair} />)}</div>
    </div></section>
    <FamilyStory>
      <Link href="/about/" className="text-link">Meet Aaron ↗</Link>
    </FamilyStory>
    <section className="area block"><div className="wrap split-intro"><div><p className="eyebrow">Areas we cover</p><h2>Braintree and the surrounding area</h2></div><p>Based in Braintree, Essex, Aaron works with local households and businesses. Share your postcode when you enquire and he&apos;ll confirm whether he can help.</p></div></section>
    <ClosingQuote />
  </>;
}
