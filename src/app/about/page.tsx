import { FamilyStory } from '@/components/family-story';
import { ClosingQuote, PageIntro, PhotoFrame } from '@/components/site';
import { photos } from '@/lib/photos';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('About Aaron | Essex Window Cleaning Company', 'Meet Aaron, the owner of a family-run window and exterior cleaning business based in Braintree, Essex.', '/about/');

export default function AboutPage() {
  return <>
    <PageIntro label="About us" title="I’m Aaron, your local window cleaner" text="I run Essex window cleaning company, a family business based in Braintree. When you call about a job, you’ll speak directly to me, and I’ll be the one who comes to do the work." />
    <FamilyStory />
    <section className="services-section block"><div className="wrap story">
      <PhotoFrame photo={photos.equipment} className="about-equipment" />
      <div><p className="eyebrow">What you can expect</p><h2>A conversation before the clean</h2><p>Tell me what needs cleaning, where the property is and what&apos;s difficult to reach. We&apos;ll talk through access and what you want included so you know what your quote covers.</p></div>
    </div></section>
    <ClosingQuote />
  </>;
}
