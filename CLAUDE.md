# NAMI Creative Brain — build context for Claude

This is a **base template** for building client websites at NAMI Creative quality. You are reading this because someone cloned `nami-creative-brain`, renamed it, and wants a new client site built. Your job is to take it from "NAMI's worked example" to "the client's finished site" without losing the craft baked in here.

Read this file first. Then read the three files in `CONTEXT/`:

- `CONTEXT/discovery.md` — the questions you ask (and the research you run) to source everything about the client brand and form a brief.
- `CONTEXT/build-spec.md` — what "the perfect build" means here, plus the full re-skin checklist.
- `CONTEXT/brand-brief.template.md` — copy this to `CONTEXT/brand-brief.md` and fill it in. It becomes the single source of truth for the client.

> The site currently renders NAMI Creative end to end. That is deliberate. It is a working demo of the quality bar, not boilerplate to delete blindly. Re-skin it; don't gut it.

---

## What this template is

A production Next.js 15 site with a real design system, motion language, content architecture, and a full library of design + engineering skills in `.claude/skills/`. It was extracted from namicreative.co.uk, a site built to a high bar deliberately. Everything that made that site feel bespoke is here: the liquid hero, the scroll-reveal type, the spotlight cards, the route transitions, the glass-refractive surfaces, the hairline grids.

You inherit all of it. You do not rebuild it. You re-point it at a new brand.

## The build philosophy (non-negotiable)

NAMI sells the opposite of template flips. So the irony of a template is not lost: the rule here is that **the output must never read as templated.** Same engine, different soul, every time. If a stranger could look at two sites built from this base and tell they share a skeleton, the re-skin failed.

Three principles carry through every build:

1. **Branding is infrastructure.** The identity system is load-bearing. Colours, type, motion, and voice are decided up front in discovery and then everything sits on top. Don't design page by page; design the system, then let pages render from it.
2. **Clarity over volume.** Sharp positioning beats more sections. Cut anything that doesn't earn its scroll. A five-section site that lands beats a twelve-section site that wanders.
3. **Systems compound.** Content lives in `lib/content/*.ts` and `content/insights/*.mdx`, never hardcoded in pages. Tokens live in `app/globals.css` `@theme`, never inline. Change the system, and the change propagates everywhere. This is how the next site gets faster without getting cheaper.

## The voice rules that travel with the engine

These were burned in for NAMI and they are good defaults for any client unless their brand voice explicitly says otherwise. Confirm in discovery.

- **Zero em dashes (—). Anywhere.** Site copy, testimonials, FAQs, case studies, insights, email, social. Replace with periods, commas, colons, semicolons, or restructure. En dashes (–) and hyphens (-) are fine. Before saving any copy, grep for `—` and clear it.
- **No "no fluff" / "no filler."** Banned phrases. Make the positive claim instead.
- **No generic agency-speak, AI-tells, or hedging.** No "leverage", "synergy", "in today's fast-paced world", "bespoke solutions", "in summary". No exclamation marks. No emojis unless the client's brand calls for them.
- **Match the client's energy, not NAMI's.** NAMI's voice is confident, direct, water-and-motion. Your client may be warmer, drier, more playful. The *rules* above stay; the *personality* comes from the brand brief.

The `stop-slop` skill enforces the AI-tell rules. Run it on copy before shipping.

## The four swap points (this is the whole job, mechanically)

Re-skinning is four edits that cascade. `CONTEXT/build-spec.md` has the exhaustive checklist; this is the map:

| # | File | What changes |
|---|------|--------------|
| 1 | `lib/brand.ts` | Name, domain, email, location, tagline, promise, description, socials. The textual identity. |
| 2 | `app/globals.css` → `@theme` block | Colours, surfaces, accents, shadows, fonts binding. The visual identity. |
| 3 | `lib/fonts.ts` | The typeface(s). Bound into `--font-sans` (and any display font) in the theme. |
| 4 | `public/` + `lib/content/*.ts` + `content/insights/*.mdx` | Logo, OG image, favicon, and all copy: services, work, process, engagement, values, faq, testimonials, offers, insights. |

Edit those four and the site is the client's. Everything between them (components, layout, motion, API routes) is engine you keep.

## Stack (what you're working in)

- **Next.js 15** App Router + Turbopack, **React 19**, **Tailwind v4** (`@theme` tokens, no config file), **TypeScript strict**.
- **Motion** (`motion/react`) for animation, **Lenis** for smooth scroll, **MDX** for insights.
- **Hosting:** Netlify via `@netlify/plugin-nextjs`. See `DEPLOY.md`.
- **Forms/email:** `/api/subscribe` (Mailchimp newsletter, double opt-in) and `/api/contact` (Mailchimp upsert + Make.com webhook). Both degrade gracefully if env vars are unset, so the site builds and runs before the client's integrations exist.
- **Analytics:** GA4 via `NEXT_PUBLIC_GA_ID`. Unset = no analytics fire (fine for dev).

## Skills (`.claude/skills/`)

The full library is committed because it is the point of this template. Lean on them:

- **`impeccable`** — the design system skill. `polish`, `critique`, `audit`, `bolder`, `animate`, `layout`, `typeset`, and more. Its design laws (OKLCH colour, committed colour strategy, motion easing, the absolute bans) shaped this engine. Run `impeccable critique` and `impeccable audit` before shipping any client site. Note: NAMI's gradient text + glass are deliberate identity choices that the skill flags as bans; for a *new* client, follow the skill's bans by default unless the client brand makes a deliberate exception.
- **`stop-slop`** — kills AI writing tells in copy. Run on every content module before ship.
- **Engineering skills** (senior-frontend, focused-fix, and the rest) — for the harder build work.

When a task matches a skill, invoke it. That is what keeps each site at the bar without redoing this conversation every time.

## How to run a new build (the happy path)

1. **Discovery.** Open `CONTEXT/discovery.md`. Ask the client the questions. Research what you can (their current site, socials, competitors, sector). Don't guess brand decisions; source them.
2. **Brief.** Fill `CONTEXT/brand-brief.md` from the template. Get the client to confirm positioning, voice, and visual direction before you touch code. This is the one gate that matters.
3. **System.** Set the four swap points: `lib/brand.ts`, the `@theme` block, `lib/fonts.ts`, then logo/OG/favicon. Get colour + type + name landing together before any page work.
4. **Content.** Rewrite `lib/content/*.ts` and the insights MDX to the client's real services, work, and voice. Delete NAMI's example data; don't leave it half-swapped.
5. **Build + cut.** Render the pages. Cut sections that don't earn their place for this client. Add only what the brief demands.
6. **Polish.** `impeccable polish`, `impeccable critique`, `impeccable audit`, `stop-slop` on copy. Grep for `—`. Test narrow viewports first (mobile-first) and `prefers-reduced-motion`.
7. **Ship.** `DEPLOY.md` covers Netlify + env vars. Real secrets go in Netlify env + local `.env.local`, never in git.

## Hard rules

- **Never commit real secrets.** `.env.example` holds placeholders only. Real keys live in `.env.local` (gitignored) and Netlify env vars. This template is also published as a public lead magnet; a leaked key would land in a public repo.
- **Edit content in `lib/content/*.ts`, not page components.** Pages render from those modules.
- **Mobile-first, with `prefers-reduced-motion` respected.** Motion is informational, never decorative noise.
- **Don't invent the client's facts.** No fake clients, metrics, or testimonials. If you don't have it, ask for it in discovery.
- **Confirm before destructive or outward-facing ops** — pushes, repo creation, anything touching a live integration.

---

*Built by NAMI Creative. The studio that builds brands that move with meaning. namicreative.co.uk*
