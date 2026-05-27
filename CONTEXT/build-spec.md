# Build spec — the perfect build + the re-skin checklist

Two halves. First, what "perfect" means here so you know the bar you're hitting. Second, the exhaustive checklist that turns NAMI's demo into the client's site.

---

## Part 1 — What "the perfect build" means

The site this template came from was built so it would be hard to tell a person used Claude to design it. That is the standard. A perfect build off this base clears every bar below.

### Craft

- **The system is decided before the pages.** Colour, type, motion, and spacing rhythm are set in `@theme` and `lib/fonts.ts` first. Pages render from tokens and content modules, never from hardcoded values. Change a token, the whole site moves with it.
- **Nothing reads as templated.** Same engine, different soul. The motion language, section structure, and copy register are tuned per client. If this site and NAMI's could be spotted as siblings, it isn't done.
- **Motion is purposeful and physical.** Ease-out exponential curves, no bounce, no elastic. Animation carries meaning (reveal, hierarchy, state), never decoration for its own sake. Every animation respects `prefers-reduced-motion`.
- **Mobile-first, with real polish on small screens.** Built narrow-up. Touch targets, safe areas, no layout shift. Test the phone before the desktop.
- **Performance is part of the design.** The hero paints instantly (poster image as the LCP base, video streams over it). Offscreen motion pauses. Heavy decoration (particles, expensive text animation) drops on mobile and slow links while the core experience stays intact.
- **Accessibility is not optional.** Visible focus rings, real semantic structure, colour contrast that passes, motion that can be turned off.

### Copy

- Every word earns its place. No restated headings, no intros that repeat the title, no filler.
- Voice matches the client's brief, holding the inherited rules (zero em dashes, no "no fluff", no AI-tells, no exclamation marks).
- Real facts only. No invented clients, metrics, or testimonials.

### The test

Run the `impeccable` AI-slop test and the `stop-slop` copy audit. If either flags the site as obviously machine-made, it isn't shippable. The whole point of this template is that the floor is high; don't ship beneath it.

---

## Part 2 — The re-skin checklist

Work top to bottom. Don't ship a half-swap (NAMI copy next to client colours reads worse than either alone).

### Swap point 1 — `lib/brand.ts`

The textual identity. One file, cascades into metadata, footer, legal pages, and structured data.

- [ ] `name`, `legalName`, `shortName`
- [ ] `domain`, `url`
- [ ] `email`
- [ ] `location`, `servesText`
- [ ] `tagline`, `promise`
- [ ] `description` (keep ~150–160 chars for the meta description)
- [ ] `locale`, `lang`
- [ ] `socials[]` — real profiles, correct icon keys
- [ ] grep the repo for `namicreative`, `NAMI`, `Joe Wilson`, `hello@namicreative` and confirm every hit now reads from `brand.ts` or is intentionally the client's

### Swap point 2 — `app/globals.css` `@theme` block

The visual identity. Set real values; don't leave NAMI's magenta.

- [ ] `--color-surface-0…4` — the dark-first (or light) surface scale
- [ ] `--color-fg`, `--color-fg-muted`, `--color-fg-subtle`
- [ ] `--color-accent`, `--color-accent-soft`, `--color-accent-deep`, `--color-accent-2`
- [ ] `--color-line`, `--color-line-strong`, `--color-glass`, `--color-glass-strong`
- [ ] `--shadow-glow`, `--shadow-glow-lg` — these encode the accent RGB; update to the new accent
- [ ] If switching to a light theme: re-check the base `html` background, `::selection`, and every overlay/vignette in the hero and cards
- [ ] Use OKLCH or tinted neutrals per the `impeccable` colour laws. Never pure `#000`/`#fff`. Pick a deliberate colour strategy.
- [ ] grep `globals.css` for hardcoded `rgb(255 0 188` / `#ff00bc` / `100 200 255` accent literals in component-level styles (hero overlays, particles, glow shadows) and re-point them

### Swap point 3 — `lib/fonts.ts`

The typeface(s).

- [ ] Replace `Instrument_Sans` with the client's body font (`next/font/google` or `next/font/local`)
- [ ] If adding a display font, export it too and bind it in the `@theme` block (`--font-display`) and the `h1…h6` rule
- [ ] Confirm the CSS variable name in `fonts.ts` matches what `--font-sans` references in `@theme`
- [ ] Check weights actually used; drop unused weights to keep the bundle lean

### Swap point 4 — assets + content

#### Assets (`public/`)

- [ ] Logo (`public/Nami-Logo.png` → client logo; update the reference in the header/footer)
- [ ] OG share image (`public/assets/images/` → client OG, 1200×630; update the path in `lib/brand.ts`/metadata)
- [ ] Favicon / app icons
- [ ] Hero video + poster (`public/assets/videos/`) or replace the video hero with the client's chosen treatment. Keep the poster-as-LCP pattern whatever you choose.
- [ ] Case-study imagery (`public/case-study/`)
- [ ] Delete every NAMI-specific asset you didn't replace, so nothing stale ships

#### Content modules (`lib/content/*.ts`)

Rewrite each to the client's real data from the brief. Delete NAMI's example entries; don't leave them.

- [ ] `services.ts` — the client's service pillars
- [ ] `offers.ts` — productised offers / packages
- [ ] `work.ts` — real case studies, with permission and real detail
- [ ] `testimonials.ts` — real quotes, attributed
- [ ] `process.ts` — the client's actual phases
- [ ] `engagement.ts` — how clients buy (project / retainer / productised)
- [ ] `values.ts` — the client's principles, in their voice
- [ ] `faq.ts` — real questions, varied openers (the `stop-slop` skill flags formulaic ones)

#### Insights (`content/insights/*.mdx`)

- [ ] Replace the three NAMI articles with the client's seeded angles, or remove and de-emphasise the route if they aren't publishing yet
- [ ] Update `lib/content/insights.ts` metadata to match

### Pages + structure (`app/`)

- [ ] Confirm the page set matches the brief. Routes present: `/`, `/work`, `/work/[slug]`, `/services`, `/services/[slug]`, `/process`, `/pricing`, `/offers`, `/insights`, `/insights/[slug]`, `/about`, `/contact`, `/thank-you`, `/privacy`, `/terms`.
- [ ] Cut routes the client doesn't need (remove the route folder + its nav entry in `lib/nav.ts`).
- [ ] Rewrite `/about` to the client's real story.
- [ ] Update `app/sitemap.ts` and `app/robots.ts` if routes changed.
- [ ] Tune which homepage sections live. Cut anything that doesn't earn its scroll for this client.

### Integrations + config

- [ ] `.env.example` is the menu; copy to `.env.local` and fill real values locally (see `DEPLOY.md`)
- [ ] Mailchimp: audience + API key, or disable the newsletter section if unused
- [ ] Make.com / contact webhook: point `/api/contact` at the client's intake
- [ ] GA4 measurement ID
- [ ] `netlify.toml` + Netlify project name + domain
- [ ] `package.json` `name` field → client slug

### Final pass before ship

- [ ] `grep -r "—"` across the repo — zero em dashes
- [ ] `grep -ri "nami\|joe wilson\|namicreative"` — zero stale NAMI references (unless intentionally crediting the builder in a hidden comment)
- [ ] `npm run typecheck` clean
- [ ] `npx next build` — all static pages generate, no errors
- [ ] `impeccable polish`, `impeccable critique`, `impeccable audit`
- [ ] `stop-slop` on every content module
- [ ] Test narrow viewport first, then up. Test `prefers-reduced-motion`.
- [ ] Lighthouse: hero LCP fast, no layout shift, accessibility passing
- [ ] No real secrets committed anywhere

When every box is ticked, the site is the client's, built to the bar, and it ships.
