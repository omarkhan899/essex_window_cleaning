import { business } from '@/lib/business';
import { quoteSettings } from '@/lib/quote';
import { services } from '@/lib/services';

const unavailable = 'Online enquiries are unavailable. Please call Aaron on ' + business.phone + '.';
const deliveryError = 'Your enquiry could not be confirmed. Please try again or call Aaron on ' + business.phone + '.';

export async function POST(request: Request) {
  const fail = (error: string, status: number) => Response.json({ error }, { status });
  if (!request.headers.get('content-type')?.startsWith('application/json')) return fail('Invalid enquiry format.', 415);
  if (Number(request.headers.get('content-length')) > 16000) return fail('Please shorten your message.', 413);

  const raw = await request.text();
  if (raw.length > 16000) return fail('Please shorten your message.', 413);
  let input: unknown;
  try { input = JSON.parse(raw); } catch { return fail('Invalid enquiry format.', 400); }
  if (!input || typeof input !== 'object' || Array.isArray(input)) return fail('Invalid enquiry format.', 400);

  const data = input as Record<string, unknown>;
  const field = (key: string) => typeof data[key] === 'string' ? data[key].trim() : '';
  const name = field('name');
  const phone = field('phone');
  const email = field('email');
  const area = field('area');
  const message = field('message');
  const service = field('service');
  const serviceName = services.find(item => item.slug === service)?.name ?? (service === 'other' ? 'Other or unsure' : '');

  if (field('website')) return fail('The enquiry could not be submitted.', 400);
  if (name.length < 2 || name.length > 100 || area.length < 2 || area.length > 100 ||
      !/^[+\d\s().-]{7,30}$/.test(phone) || phone.replace(/\D/g, '').length < 7 ||
      email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
      message.length > 2000 || !serviceName) {
    return fail('Please check your name, phone, service, postcode or town, and email if supplied.', 400);
  }

  const settings = quoteSettings();
  if (!settings) return fail(unavailable, 503);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + settings.apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: settings.from,
        to: [settings.to],
        reply_to: email || undefined,
        subject: 'Website quote enquiry',
        text: ['Name: ' + name, 'Phone: ' + phone, 'Email: ' + (email || 'Not supplied'),
          'Service: ' + serviceName, 'Postcode / town: ' + area, '', message].join('\n'),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error('Quote mail provider returned status', response.status);
      return fail(deliveryError, 502);
    }
    return Response.json({ received: true });
  } catch {
    console.error('Quote mail provider request failed');
    return fail(deliveryError, 502);
  }
}
