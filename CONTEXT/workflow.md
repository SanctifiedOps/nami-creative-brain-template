# Master workflow

This is the step-by-step you follow every time the toolkit is launched in a new client folder. Do not skip phases. Each phase has a clear entry condition and exit condition; the brief and the stack are explicit user-approval gates.

The toolkit's job is to make Claude useful for a stranger's client, in a sector Claude has never built for before. The skills do the work; this workflow tells you which one to reach for and when.

---

## Phase 1 — Intake

**Entry:** the user has just opened Claude in the cloned toolkit folder and given you a launch prompt. The prompt might be detailed or might be one line.

**What you do:**

1. Parse whatever the user gave you. Pull out everything you can: client name, URL (if any), sector / industry, location, what they want (site, marketing, both), timeline, any constraints they named.
2. Read it back to the user in 5 short lines so they can correct any misread.
3. Ask up to 3 clarifying questions, only if research genuinely cannot answer them. Good targets: the *job* this engagement is hired to do, who actually buys from this client, the timeline / decision-maker. Bad targets: "what colour do you want" (decided later from the brief) or anything you can find by reading their site.
4. If the user only gave you a name and nothing else, do NOT start asking 28 questions. Ask for: the client's URL (or "they don't have one yet"), what they sell in one sentence, and what success looks like. That is enough to start research.

**Exit:** you can answer "who is this client, what do they sell, and what do they want from this engagement?" in three sentences.

---

## Phase 2 — Research

**Entry:** intake done.

**What you do (autonomously, do not pepper the user with questions during this):**

Use `WebSearch` and `WebFetch`. Use the research skills: `competitor-profiling`, `competitive-teardown`, `customer-research`, `competitor-alternatives`. Build a written read of the client and their world. Save your findings inline in the brief draft as you go.

Pull:

- **Current presence.** The client's current site (if any), every social profile you can find, Google Business / reviews, any press or interviews. Note what works, what is broken, and what is holding them back.
- **Voice in the wild.** Pull five real sentences from their own captions, bios, emails, About page. The brand voice is often already there, just inconsistent. Note it.
- **Three competitors.** Direct ones in the same sector and price tier. Profile each briefly. Crucially: note what is *saturated* in the sector (the category-reflex look) so you can deliberately AVOID it later. See the `impeccable` skill's reflex-reject lanes.
- **Sector + market read.** What the sector's audience actually buys, in what context, at what tier. Reviews and forums tell you this faster than the client will. Note conventions: do successful sites in this sector use video, photography, illustration; long-form copy or short; trust signals heavy or light; pricing public or gated.
- **Visual inventory.** Existing client logo, colours, fonts, photography. What is reusable, what should be retired.

**Exit:** you have a written research read of ~6 to 12 short paragraphs covering the bullets above, with quotes and sources. You also have a clear hypothesis about positioning + visual direction that you will test against the user in discovery.

---

## Phase 3 — Discovery

**Entry:** research is on paper.

**What you do:**

Open `CONTEXT/discovery.md`. Ask ONLY the questions in there that research could not answer. Typical "research can't answer this" questions: voice axes (warm vs cool, plain vs technical), explicit refusals ("we never do X"), real prices, real proof points (numbers, named clients with permission), the decision-maker, the budget.

Do NOT re-ask things you already know from research. Lead with your research findings ("I see you currently sell X, your top three competitors are Y, your reviews lean Z, your current site reads as W") and ask the user to correct or extend.

Save answers as you go. Convert any relative dates to absolute dates.

**Exit:** you have enough to fill every section of `CONTEXT/brand-brief.template.md` without an `ASSUMED:` marker.

---

## Phase 4 — Brief (GATE)

**Entry:** discovery answers are in.

**What you do:**

1. Copy `CONTEXT/brand-brief.template.md` to `CONTEXT/brand-brief.md`.
2. Fill every section from research + discovery. Mark any remaining assumptions `ASSUMED:` so the user can correct them.
3. Present the brief to the user and ask for explicit approval. Be specific about what you are asking them to confirm: positioning, tagline, promise, voice axes, visual direction (committed colour strategy + theme + type personality), page set, the one most-important visitor action.

**Exit:** user has typed back "approved" (or equivalent) on the brief. **Do not move to strategy or code without this.**

---

## Phase 5 — Strategy + stack

**Entry:** brief approved.

**What you do:**

1. **Visual + tonal strategy.** Concrete decisions, not adjectives:
   - Colour strategy per the `impeccable` colour laws (restrained / committed / full-palette / drenched) + real OKLCH or hex values.
   - Light vs dark, with one sentence of physical scene that forces the choice.
   - Type personality. Real font names. One font or display + body pairing.
   - Motion level (still / restrained / balanced / energetic) with a physical metaphor if you have one.
2. **Site architecture.** Work backwards from "what does the visitor need to believe to act?" Cut ruthlessly. A tradesperson does not need an Insights blog. A SaaS does not need a Process page. Tailor the page set to the sector and the brief; do not default to a standard agency page set.
3. **Stack recommendation.** Stack-agnostic by design, so pick what fits:
   - Brochure / marketing site, no auth, no app: Next.js static export, Astro, or a Framer / Webflow handoff are all defensible. Recommend with a one-line reason.
   - Dynamic site with forms, lifecycle email, dashboards: Next.js App Router.
   - Productised tool / app: pick the stack that fits the product, not the marketing site.
   - For most cases, default to a modern stack the user can self-host on Netlify or Vercel. Recommended when relevant: Next.js 15 + Tailwind v4 + Motion + TypeScript on Netlify, with Mailchimp + Make.com for forms/email if those integrations are needed. But this is a default to deviate from, not a default to obey.
4. Surface the strategy + stack to the user. **GATE: get explicit approval before scaffolding.**

**Exit:** stack chosen and approved.

---

## Phase 6 — Build

**Entry:** stack approved.

**What you do:**

1. Scaffold the chosen stack INTO this folder (e.g. `npx create-next-app@latest .` or equivalent). It coexists with `.claude/`, `CONTEXT/`, and the docs.
2. Set up the design system FIRST (tokens, type, motion) from the strategy decisions. Then build pages. Pages render from content modules; never hardcode copy in JSX if you can avoid it.
3. Use the skills aggressively. The right skill for each step:
   - Design system + tokens + critique: `impeccable`, `design-system`, `ui-design-system`, `ui-styling`.
   - Components + frontend: `frontend-design`, `senior-frontend`, `design-taste-frontend`, `landing-page-generator`.
   - Copy: `copywriting`, `copy-editing`, `stop-slop` (run on every content module before ship).
   - SEO + schema + sitemap: `seo-audit`, `schema-markup`, `site-architecture`.
   - Animation / motion: `impeccable animate`.
   - Forms + conversion: `form-cro`, `page-cro`.
4. Hold the house voice rules unless the client's brief explicitly overrides personality (the bans always stay).
5. Match the design to the SECTOR, not to "what looked good on the last project." Avoid category reflexes (see `impeccable`'s reflex-reject list).

**Exit:** every page in the brief is built, content is real (or marked clearly as pending real assets), the site builds clean.

---

## Phase 7 — Verify

**Entry:** build complete.

**What you do:**

- Typecheck clean (`tsc --noEmit` or stack equivalent).
- Production build green; every page generates.
- Run `impeccable polish` and `impeccable audit`.
- Run `stop-slop` on every piece of copy.
- Grep for em dashes; zero hits.
- Grep for placeholders you left behind (`Client name`, `Project One`, `Lorem`, `TODO`, `FIXME`, etc.).
- Test narrow viewports first; test `prefers-reduced-motion`.
- Lighthouse on the home + one inner page: LCP fast, no CLS, a11y passing.

**Exit:** every check passes. Report results to the user.

---

## Phase 8 — Deploy

**Entry:** verify green.

**What you do:**

Follow `DEPLOY.md`. Stack-aware: Netlify for Next.js / Astro, Vercel as alternative, etc. Wire env vars in the hosting dashboard, NEVER in git. Test the form end-to-end against a real inbox.

**Exit:** site is live at the client's domain (or staging URL if domain is pending).

---

## Phase 9 — Marketing (optional)

**Entry:** site is live AND the user has asked to keep going. Do not push into this phase without an invitation.

**What you do:**

The 93 skills cover the rest of the agency surface. Common follow-ons:

- SEO: `seo-audit`, `ai-seo`, `programmatic-seo`, `analytics-tracking`.
- Content: `content-strategy`, `social-content`, `copywriting`.
- Email: `email-sequence`, `cold-email`, `email-template-builder`.
- Paid: `paid-ads`, `ad-creative`, `landing-page-generator`.
- CRO: `page-cro`, `form-cro`, `ab-test-setup`, `experiment-designer`.
- Pricing + sales: `pricing-strategy`, `sales-enablement`, `revops`.
- Research + intel: `customer-research`, `competitive-teardown`.

Pick what the client actually needs. Do not push a 12-month playbook on someone who hired you for a one-page launch.

---

## Throughout, defaults that travel

- **No invented facts.** Never write a metric, client name, or testimonial that isn't real.
- **Mobile-first.** Build narrow up. Test on a phone before a desktop.
- **`prefers-reduced-motion`.** Honour it.
- **Accessibility is not optional.** Visible focus rings, real semantic structure, colour contrast that passes.
- **Real secrets stay out of git.** Always. `.env.local` is gitignored; production keys live in the hosting platform env.
