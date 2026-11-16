import Link from 'next/link';
import { PageIntro } from '@/components/site';

export default function NotFound() {
  return <>
    <PageIntro label="Page unavailable" title="We couldn’t find that page" text="You can return home to find the cleaning services or get in touch with Aaron." />
    <div className="wrap block"><Link className="button primary" href="/">Back to homepage ↗</Link></div>
  </>;
}
