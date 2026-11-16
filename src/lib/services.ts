import { photos } from './photos';

export const services = [
  {
    slug: 'window-cleaning', name: 'Domestic window cleaning', title: 'Domestic window cleaning in Braintree',
    summary: 'Clear glass and clean frames and sills, with traditional and water-fed pole methods.',
    photo: photos.hero, imageLabel: 'Aaron cleaning a residential window',
    intro: 'From front windows to upstairs glass, Aaron helps households in Braintree and the surrounding area keep their windows looking their best.',
    detail: 'A water-fed pole can reach many upper windows from ground level. Traditional hand cleaning uses a washer and squeegee where access allows. Tell Aaron about conservatories, extensions or awkward windows when you enquire so he can assess access before quoting.',
    faqs: [
      ['Can you clean upstairs windows?', 'A water-fed pole can reach many upper windows. Aaron will confirm what can be reached once he knows the layout and access.'],
      ['Can I include frames and sills?', 'Yes. Let Aaron know what you want cleaned so he can include it in your quote.'],
    ],
  },
  {
    slug: 'commercial-window-cleaning', name: 'Commercial window cleaning', title: 'Commercial window cleaning in Braintree',
    summary: 'Window cleaning for business premises, including high-level and hard-to-reach glass.',
    photo: photos.pole, imageLabel: 'High-level window cleaning with a water-fed pole',
    intro: 'Clean glazing helps keep an entrance presentable. Aaron works with businesses in and around Braintree, from street-level frontages to commercial properties with harder-to-reach windows.',
    detail: 'For a quote, describe the glazing, approximate height and access around the building. If entrances or shared areas need to stay clear during the clean, include that in your enquiry so Aaron can discuss what is practical.',
    faqs: [
      ['Do you take on high-level windows?', 'Yes, where suitable access is available. Tell Aaron the approximate height and any obstructions so he can assess the work.'],
      ['Can I ask about regular cleaning?', 'Yes. Share the frequency you have in mind and any access or timing requirements when you request a quote.'],
    ],
  },
  {
    slug: 'pressure-washing', name: 'Pressure washing', title: 'Pressure washing and driveway cleaning in Braintree',
    summary: 'Jet washing for driveways and other suitable exterior hard surfaces.',
    photo: photos.pressure, imageLabel: 'Pressure washing equipment on a commercial job',
    intro: 'Aaron offers jet washing for driveways and suitable outdoor hard surfaces in and around Braintree. If dirt and build-up are hiding the finish, send a description of the area for a quote.',
    detail: 'The material, condition and access all affect how the job can be approached. Mention loose joints, damaged areas or coatings before booking, along with the approximate size of the area and where water can drain.',
    faqs: [
      ['What should I include in a driveway enquiry?', 'Include your postcode, the driveway material, its approximate size and any access restrictions.'],
      ['Can you quote for a commercial forecourt?', 'Yes. Describe the surface, how the site is used and any restrictions around access or operating hours.'],
    ],
  },
] as const;

export type Service = typeof services[number];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/our-work/', label: 'Our Work' },
  { href: '/about/', label: 'About Us' },
  { href: '/contact/', label: 'Contact' },
];
