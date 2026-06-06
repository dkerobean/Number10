# DESIGN.md: Number10 Barbershop Demo

## Source
- Reference URL: https://therazorbrothers.framer.website/?via=johnny_redbeard
- Capture date: 2026-06-06
- Evidence: browser snapshot, full-page screenshot, source routes for Home, Services, About, Gallery, Contact, and source video media inspection.

## Reference Screenshot
![Razor Brothers reference homepage](./docs/design-references/razor-source-home.png)

Use this screenshot as the visual reference for rhythm, section order, density, and motion feel. The implementation must use Number10 Barbershop branding and original demo content, not proprietary source copy or images.

## Design Summary
The source site uses an editorial luxury barbershop style: large confident headings, restrained neutral backgrounds, high-contrast black and cream surfaces, photographic grooming imagery, compact metadata blocks, and uppercase CTA buttons with sliding hover text. Sections are spacious, vertically stacked, and motion-led, with imagery used as proof of craft.

## Design Tokens

### Colors
- Ink: `#10100F`
- Deep navy accent: `#081A33`
- Warm cream background: `#F4EFE6`
- Paper: `#FBF8F1`
- Muted text: `#69645C`
- Hairline border: `rgba(16, 16, 15, 0.14)`
- Gold accent: `#B88746`
- Dark panel: `#141311`

### Typography
- Display: `Bebas Neue`, uppercase, tight but readable tracking, used for hero and section titles.
- Body: `Manrope`, clean sans-serif, 15-18px body copy, 1.55 line-height.
- Labels: uppercase, 11-13px, medium weight, wide tracking.

### Spacing And Layout
- Max content width: 1180-1240px.
- Section padding: 80-120px desktop, 52-76px mobile.
- Grid gaps: 18-32px.
- Corners: mostly square or very small radius; product cards can use 18-24px radius for ecommerce clarity.
- Borders: thin, low-opacity, often as separators between metadata blocks.

## Components
- Header: fixed top navigation, compact brand mark, uppercase links, outline booking button.
- Hero: full-screen autoplay video background, large headline, short eyebrow, address/hours/phone metadata, and booking CTA layered over a dark gradient.
- Buttons: uppercase text, pill or squared pill, duplicated sliding label on hover.
- Cards: service/product/testimonial cards with thin borders and image hover zoom.
- Gallery: masonry-style image grid with staggered image heights.
- Forms: dark panel or cream fields, strong CTA, minimal explanatory text.
- Footer: multi-column navigation, address, hours, social links, newsletter/contact strip.

## Page Patterns
- Home order: autoplay video hero, testimonial, about preview, service preview, video showcase, shop preview, gallery preview, footer.
- Services: grouped pricing cards with category labels.
- About: story, team cards, quality statement, testimonials.
- Gallery: image-led grid with minimal copy.
- Contact: booking form, contact cards, location/hours.
- Shop: ecommerce-ready product grid for razor blades, barber machines, and grooming creams, cart summary, checkout CTA.

## Motion And Interaction
- Page load: staggered fade-up for headings, labels, cards, and metadata.
- Scroll: sections reveal with y-offset and opacity.
- Hover: image scale, button text slide, card border darkening, link underline movement.
- Route feel: pages should enter smoothly and preserve the source site's polished Framer-like movement.

## Agent Build Instructions
- Build with Next.js App Router, TypeScript, Framer Motion, and Tailwind entry CSS.
- Use shared data files for services, products, testimonials, gallery, and contact details.
- Keep all visible client branding as Number10 Barbershop.
- Use placeholder licensed remote images, not the source template images.
- Homepage video uses the downloaded source MP4 as a local autoplaying muted loop: `/media/number10-home-reel.mp4` with poster `/media/number10-home-reel-poster.webp`.
- Ecommerce is demo-only: local cart UI, no payment gateway, no persistent inventory.

## Rerun Inputs
workflow: firecrawl-website-design-clone
source_url: https://therazorbrothers.framer.website/?via=johnny_redbeard
target_stack: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion
output: design.md
