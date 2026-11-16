# Essex window cleaning company

A Next.js App Router website for Aaron’s window and exterior cleaning business in Braintree, Essex.

## Run locally

Use Node.js 22 and npm. Run `npm ci`, then `npm run dev` and open the printed local URL. Sora is self-hosted by Next.js, which fetches the font from Google Fonts while compiling. Use `npm run lint`, `npm run typecheck`, and `npm run build` for verification. Run `npm start` to serve the production build.

## Configure and deploy on Vercel

Import the repository as a Next.js project and use the default build command. Add the variables below in the project’s environment settings, or copy `.env.example` to `.env.local` for local testing. Keep mail credentials server-side. Add the production domain in Vercel, follow the DNS instructions there and redeploy after changing build-time variables.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Confirmed production HTTPS origin. It supplies canonical URLs, sitemap entries and absolute sharing URLs. Leave it empty in preview environments to block indexing. |
| `RESEND_API_KEY` | Resend key authorised to send email. |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend. |
| `QUOTE_TO_EMAIL` | Aaron’s confirmed enquiry inbox. |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID. Visitors can enable or decline analytics and change their preference on the Privacy Policy page. |

The quote endpoint validates fields and uses a honeypot. The form displays a call link when email setup is incomplete and reports success after Resend accepts the message. After setup, send a test from the actual domain and confirm that it arrives in the enquiry inbox. Incoming quote details are used for delivery, and analytics events contain only the actions `click_to_call` and `generate_lead`. If you enable GA4, verify both events after consent and mark them as key events as appropriate.

## Launch details to confirm

- Confirm the production domain, enquiry inbox, sender identity and telephone number. The number currently comes from the supplied business materials. Shared business identity and contact settings are in `src/lib/business.ts`.
- Review the privacy notice with Aaron and complete it with his retention periods, lawful basis, applicable rights, provider and transfer details, and confirmed contact information before accepting online enquiries. Review analytics disclosures if enabling GA4.
- Confirm service coverage, social profile links, and whether gutter cleaning is offered. The current pages describe Braintree and the surrounding area, and the services list excludes gutter cleaning.

## Photography

The source files were supplied as attachments and were available at their attachment paths. WebP derivatives retain each selected source’s proportions. Next.js serves responsive sizes and prioritises the homepage hero. The original files remain at their source locations. Keep original and unpublished assets outside `public/` when deploying, as Next.js serves files in that directory directly.

| Optimised asset under `public/images/` | Source filename |
| --- | --- |
| `hero/aaron-window-cleaning-hero.webp` | AI-edited homepage hero using the supplied photograph of Aaron in a black beanie and orange gloves as the reference |
| `hero/aaron-window-cleaning.webp` | `codex-clipboard-b70ddf04-1826-4644-9df9-d89f791fb7fe.png` (brief’s `image(1).png`, used for domestic services) |
| `hero/aaron-social.jpg` | 1200 × 630 sharing crop of the same hero source |
| `about/aaron-at-work.webp` | `codex-clipboard-c2180123-9a44-4ab5-852e-5b80b5cd03e8.png` |
| `about/aaron-son-window-cleaning.webp` | `WhatsApp Image 2026-11-16 at 5.13.34 PM (1).jpeg`, approved for Our Story on the homepage and About page |
| `services/water-fed-pole.webp` | `codex-clipboard-4d832d04-cb1f-4ec7-9f3f-e7e6438afc9d.png` |
| `services/pressure-washing-site.webp` | `WhatsApp Image 2026-11-15 at 10.21.07 PM.jpeg` |
| `services/cleaning-van.webp` | `WhatsApp Image 2026-11-15 at 10.21.08 PM.jpeg` |
| `services/fascia-cleaning-before.webp` | `codex-clipboard-373e555f-ed7e-4448-90c2-fba7e11ce4ad.jpg` |
| `services/fascia-cleaning-after.webp` | `codex-clipboard-9549e88a-55c8-4cc5-abfd-dc91caeae9bb.jpg` |
| `gallery/window-before.webp` | `codex-clipboard-e27f7f60-4c31-4d0f-8080-52f69eeb455f.png` (brief’s `image(3).png`) |
| `gallery/window-after.webp` | `codex-clipboard-32de0b53-7788-44d1-ae8b-aea2c5fd2029.png` (brief’s `image(2).png`) |
| `gallery/sill-before.webp` | `211212121212.jpeg` |
| `gallery/sill-after.webp` | `2133333.jpeg` |
| `gallery/residential-cleaning.webp` | `WhatsApp Image 2026-11-16 at 5.13.35 PM.jpeg` |
| `gallery/cleaning-equipment.webp` | `WhatsApp Image 2026-11-16 at 5.13.36 PM.jpeg` |

The two comparison pairs show the same windows at different angles. The red-brick pair matches by the distinctive lintel, glazing bars and flowers behind the glass. The sill pair matches by the butterfly curtain, seal and adjacent brickwork. Each comparison offers a side-by-side view of the uncropped frames.

The fascia photos show the same trim, bracket and screw. The homepage comparison shows the cleaned section from two angles. The commercial forecourt photos match by the shopfront, barriers and bay markings, but the angles and wet paving make a completed result harder to establish. The gallery uses an equipment-on-site view of that job.

The other house and ladder views, business flyer photo, forecourt collage, and social screenshot were reviewed. The selected images give clearer views of Aaron’s methods and the results.
