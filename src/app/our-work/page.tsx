import { Comparison } from '@/components/comparison';
import { ClosingQuote, PageIntro, PhotoFrame } from '@/components/site';
import { comparisons, photos } from '@/lib/photos';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Our Work | Window Cleaning Before and After', 'See real window cleaning before-and-after photographs and examples of Aaron’s exterior cleaning work.', '/our-work/');

const work = [
  { photo: photos.pole, title: 'Reaching upper windows' },
  { photo: photos.pressure, title: 'Commercial pressure washing site' },
  { photo: photos.residential, title: 'Residential water-fed pole setup' },
  { photo: photos.van, title: 'Inside the window cleaning van' },
];

export default function OurWork() {
  return <>
    <PageIntro label="Our work" title="Real work, photographed on site" text="See windows before and after cleaning, along with the equipment and setup Aaron uses on domestic and commercial jobs." />
    <section className="wrap block"><h2>Before and after</h2><div className="comparison-grid">{comparisons.map(pair => <Comparison key={pair.title} pair={pair} />)}</div></section>
    <section className="block services-section"><div className="wrap"><h2>Out on the job</h2><div className="service-grid">{work.map(item => <figure className="work-card" key={item.title}><PhotoFrame photo={item.photo} /><figcaption>{item.title}</figcaption></figure>)}</div></div></section>
    <ClosingQuote />
  </>;
}
