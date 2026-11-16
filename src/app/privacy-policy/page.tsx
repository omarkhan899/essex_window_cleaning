import { CallLink } from '@/components/interactive';
import { AnalyticsPreference } from '@/components/analytics';
import { PageIntro } from '@/components/site';
import { business } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Privacy Policy | Essex Window Cleaning Company', 'How Essex window cleaning company uses the details you share when contacting Aaron.', '/privacy-policy/');

export default function PrivacyPolicy() {
  return <>
    <PageIntro label="Essex window cleaning company" title="Privacy Policy" text="How we use the information you share when you get in touch." />
    <article className="wrap block prose">
      <h2>When you contact us</h2><p>Essex window cleaning company uses your name, phone number, optional email address, postcode or town and job details to respond to your enquiry, prepare a quote and arrange work if you choose to go ahead.</p>
      <h2>How the form works</h2><p>When online enquiries are available, the form passes your details through our email delivery provider, Resend, to Aaron’s enquiry inbox.</p>
      <h2>Your information</h2><p>For questions about how your information is used, or to request access, correction or deletion, call Aaron on <CallLink>{business.phone}</CallLink>. You can also raise concerns with the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
      {process.env.NEXT_PUBLIC_GA_ID && <div id="analytics"><h2>Optional analytics</h2><p>If you allow analytics, Google Analytics uses cookies to measure visits and actions such as tapping our phone link or sending an enquiry. Your form answers are kept out of these analytics events.</p><AnalyticsPreference /></div>}
    </article>
  </>;
}
