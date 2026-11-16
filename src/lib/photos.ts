export const photos = {
  generatedHero: { src: '/images/hero/aaron-window-cleaning-hero.webp', alt: 'AI-edited image based on a photo of Aaron, showing him in orange gloves cleaning an exterior window' },
  hero: { src: '/images/hero/aaron-window-cleaning.webp', alt: 'Aaron using a water-fed pole to clean a ground-floor window at a brick house' },
  aaron: { src: '/images/about/aaron-at-work.webp', alt: 'Aaron looking up as he guides a window-cleaning pole' },
  aaronSon: { src: '/images/about/aaron-son-window-cleaning.webp', alt: 'Aaron’s son trying a window-cleaning pole' },
  pole: { src: '/images/services/water-fed-pole.webp', alt: 'Aaron extending a water-fed pole towards upper windows from ground level' },
  van: { src: '/images/services/cleaning-van.webp', alt: 'Aaron’s red van with a water system, hose reel and window cleaning caution signs' },
  pressure: { src: '/images/services/pressure-washing-site.webp', alt: 'Pressure washing equipment and caution signs outside a commercial property' },
  residential: { src: '/images/gallery/residential-cleaning.webp', alt: 'Water-fed pole and portable tank beside the windows of a two-storey brick home' },
  equipment: { src: '/images/gallery/cleaning-equipment.webp', alt: 'Window cleaning poles, hoses and tools laid out by the work van' },
};

export const fasciaComparison: ComparisonPair = {
  title: 'Fascia cleaning',
  caption: 'The same section of fascia and gutter exterior before and after cleaning, photographed from different angles.',
  alignment: 'fascia',
  before: { src: '/images/services/fascia-cleaning-before.webp', alt: 'Dark grime on the outside of the gutter and on the fascia above a brick wall' },
  after: { src: '/images/services/fascia-cleaning-after.webp', alt: 'The cleaned section of white fascia and gutter beside the matching bracket' },
};

export const comparisons: ComparisonPair[] = [
  {
    title: 'Window, frame and sill',
    caption: 'The same red-brick window from two angles, with clear differences along the white frame and sill.',
    before: { src: '/images/gallery/window-before.webp', alt: 'Before cleaning, with grime along the white frame and grit on the sill' },
    after: { src: '/images/gallery/window-after.webp', alt: 'The same window after cleaning, showing a clearer white frame and sill' },
  },
  {
    title: 'uPVC sill detail',
    caption: 'The butterfly-patterned curtain and matching brickwork identify the same window in both photographs.',
    before: { src: '/images/gallery/sill-before.webp', alt: 'Before cleaning, with dark deposits on the uPVC window frame and sill' },
    after: { src: '/images/gallery/sill-after.webp', alt: 'The same butterfly-curtained window after cleaning, with most deposits removed' },
  },
];

export type Photo = { src: string; alt: string };
export type ComparisonPair = { title: string; caption: string; before: Photo; after: Photo; alignment?: 'fascia' };

