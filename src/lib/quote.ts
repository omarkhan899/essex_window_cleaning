export function quoteSettings() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.QUOTE_FROM_EMAIL?.trim();
  const to = process.env.QUOTE_TO_EMAIL?.trim();
  return apiKey && from && to ? { apiKey, from, to } : null;
}
