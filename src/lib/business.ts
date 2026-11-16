export const business = {
  name: 'Essex window cleaning company',
  owner: 'Aaron',
  phone: '07360 005412',
  telephone: '+447360005412',
  whatsapp: '447360005412',
  town: 'Braintree',
  region: 'Essex',
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined,
  email: null,
  socials: [] as string[],
};

export const description = 'Professional domestic and commercial window cleaning in Braintree, Essex. Local family-run service, with pressure washing and exterior cleaning available. Request a free quote.';
export const quoteLink = '/contact/#quote';
