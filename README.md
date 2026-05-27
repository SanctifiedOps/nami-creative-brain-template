<div align="center">

# NAMI Creative Brain

### The production base behind every site NAMI ships.

A Next.js 15 starter with a real design system, a cinematic motion language, a full content architecture, and the complete library of design + engineering skills that built [namicreative.co.uk](https://namicreative.co.uk). Clone it, run discovery, swap four files, ship a site that doesn't read as templated.

*Creative systems built for real-world momentum.*

</div>

---

## Why this exists

Most website templates make every site look the same. This one is built to do the opposite.

NAMI Creative builds brands as infrastructure, not decoration. The studio refuses template flips. So this isn't a theme you drop content into. It's the **engine** behind a high-craft site, with the thinking captured so the next build hits the same bar without redoing the work from scratch. Same engine, different soul, every time.

The site it came from was built so it would be hard to tell a person used an AI to design it. That standard travels with the template. The floor is high; you build up from there.

## What's inside

- **A complete Next.js 15 site**, rendering NAMI Creative end to end as a working demo of the quality bar. Not boilerplate to delete. Reference to re-skin.
- **A real design system** in `app/globals.css` (`@theme` tokens) and `lib/brand.ts`: surfaces, accents, type, motion easings, shadows, spacing rhythm. Change a token, the whole site moves.
- **A bespoke motion language**: liquid video hero with instant-paint poster LCP, scroll-reveal type, spotlight cards, crafted route transitions, glass-refractive surfaces, hairline grids. All respecting `prefers-reduced-motion`, all tuned for mobile.
- **Content architecture** in `lib/content/*.ts` and `content/insights/*.mdx`. Copy lives in modules, never hardcoded in pages, so edits propagate everywhere.
- **Working integrations** that degrade gracefully: Mailchimp newsletter (double opt-in), Make.com contact intake, GA4. The site builds and runs before any of them are wired.
- **The full skills library** in `.claude/skills/` — design (`impeccable`), copy (`stop-slop`), and engineering skills. Lean on them; they're how each site stays at the bar.
- **The brain** in `CLAUDE.md` + `CONTEXT/` — discovery questionnaire, the perfect-build spec, the re-skin checklist, and a brand-brief template. This is the part you can't get from a normal starter.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack), React 19 |
| Styling | Tailwind v4 (`@theme`, no config file) |
| Language | TypeScript (strict) |
| Motion | Motion (`motion/react`) + Lenis smooth scroll |
| Content | TypeScript content modules + MDX insights |
| Hosting | Netlify (`@netlify/plugin-nextjs`) |
| Forms | Mailchimp + Make.com, graceful no-op when unset |

## Quick start

```bash
git clone <this repo> my-client-site
cd my-client-site
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

Runs with zero env vars. Then point Claude at `CLAUDE.md` and start the build.

```bash
npm run dev          # dev server, Turbopack
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run start        # serve the production build
```

## How a build goes

The whole method is documented in `CLAUDE.md` and the three files in `CONTEXT/`. The shape:

1. **Discovery** — `CONTEXT/discovery.md` walks you through sourcing everything about the client brand: business, positioning, voice, visual direction, structure, logistics. Research first, ask second.
2. **Brief** — fill `CONTEXT/brand-brief.md` from the template. Confirm positioning and voice before any code. This is the gate that matters.
3. **Re-skin** — four swap points cascade into the whole site:

   | # | File | What changes |
   |---|------|--------------|
   | 1 | `lib/brand.ts` | name, domain, email, tagline, promise, socials |
   | 2 | `app/globals.css` → `@theme` | colours, surfaces, accents, fonts binding |
   | 3 | `lib/fonts.ts` | the typeface(s) |
   | 4 | `public/` + `lib/content/*` | logo, OG, favicon, and all copy |

4. **Build + cut** — render the pages, cut what doesn't earn its scroll, add only what the brief demands.
5. **Polish** — `impeccable polish` / `critique` / `audit`, `stop-slop` on copy, grep for em dashes, test mobile-first and reduced-motion.
6. **Ship** — `DEPLOY.md` covers Netlify + env vars.

`CONTEXT/build-spec.md` has the exhaustive re-skin checklist and the definition of "perfect" you're building to.

## The rules that travel with the engine

Defaults from NAMI's house style. Good for any client unless the brief overrides personality (the bans stay):

- **Zero em dashes.** Anywhere. Commas, colons, semicolons, periods, or restructure.
- **No AI-tells.** No "leverage", "synergy", "in today's fast-paced world", "bespoke solutions". No exclamation marks. No filler.
- **Real facts only.** No invented clients, metrics, or testimonials.
- **Mobile-first, accessible, motion that can be turned off.**
- **Never read as templated.** If two sites built from this base look like siblings, the re-skin failed.

## Security

No real secrets in this repo, ever. `.env.example` is placeholders only. Real keys live in your local `.env.local` (gitignored) and the Netlify project's environment variables. Full detail in `DEPLOY.md`.

## Credits + licence

Built by **NAMI Creative** — a one-person creative studio: brand, content, websites, visual direction, and growth automation, built by the same hands.

The `.claude/skills/` library bundles open-source skills from their respective authors; their individual licences apply within each skill directory. Full attribution is in [`CREDITS.md`](CREDITS.md). The NAMI template code, design system, and `CONTEXT/` build IP are NAMI Creative's.

---

<div align="center">

**Want a site built on this?**
[namicreative.co.uk](https://namicreative.co.uk) · hello@namicreative.co.uk

*We Build Brands That Move With Meaning.*

</div>
