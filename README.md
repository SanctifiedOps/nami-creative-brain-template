<div align="center">

# NAMI Creative Brain

### An entire creative agency, in one repo.

Clone it. Run discovery. Swap four files. Ship a client site that looks like it cost £10k and doesn't read as AI-made. Then keep billing the same client every month: SEO, content, ads, email, CRO, all run from the same codebase by the same 93 skills that built the site.

This is how one person sells premium websites *and* marketing retainers without hiring a team.

*Creative systems built for real-world momentum.*

</div>

---

## Read this first

Most starter templates make every site look the same, and they stop at the build. You ship a site once, get paid once, and move on.

This is the opposite. It is the **production engine** behind [namicreative.co.uk](https://namicreative.co.uk), a site built so it would be hard to tell a person used an AI to design it, packaged with the full toolkit and the captured thinking so you hit that bar on every build without redoing the work. Same engine, different soul, every time. The repo ships as a clean, unbranded starter, not a copy of any existing site.

Then it goes further than any template has any right to. Bundled in `.claude/skills/` are **93 Claude skills** covering design, frontend engineering, copy, SEO, conversion optimization, paid ads, email, social, competitive research, and pricing. So once the site is live, you are not done. You are set up to run the client's entire marketing operation from the same repo.

**Build the site. Then build the retainer.** That is the whole pitch.

## Who this is for

- **Website designers** who can design but watch their sites come out looking generic, and who only ever sell the build.
- **Vibe coders** who ship fast with AI but can't get to that last 10% of polish that lets them charge premium money.
- **Freelancers and solo operators** who want to offer a full agency menu without becoming an agency.
- **Small studios** that want every project to start at a senior bar instead of from a blank file.

If you can describe a brand, you can ship its site this weekend. If you can send an email, you can sell that client a marketing retainer next month.

## What this unlocks (the money part, spelled out)

A normal freelance build is a one-time invoice. This repo turns one client into a recurring relationship, because the skills that built the site also run everything that comes after it.

| You sell | Built with | Why it sticks |
|----------|-----------|---------------|
| The website build | the engine + design/frontend skills | Premium output at speed. Higher ticket, faster delivery. |
| SEO + content retainer | `seo-audit`, `ai-seo`, `programmatic-seo`, `content-strategy`, `copywriting` | Compounds monthly. Easiest recurring line to justify. |
| Conversion optimization | `page-cro`, `form-cro`, `ab-test-setup`, `experiment-designer` | You prove lift with their own numbers. Pays for itself. |
| Paid ads + creative | `paid-ads`, `ad-creative`, `landing-page-generator` | New campaigns and pages on demand. |
| Lifecycle + outreach email | `email-sequence`, `cold-email`, `email-template-builder` | Owned channel. High margin. |
| Social + community | `social-content`, `community-marketing`, `referral-program` | Always-on deliverable. |
| Competitive + pricing strategy | `competitive-teardown`, `competitor-profiling`, `pricing-strategy`, `revops` | Advisory work at advisory rates. |

One repo. One operator. A full-service offer. You decide the prices; the engine decides the quality.

## What's inside

- **A complete Next.js 15 site**, shipped as a neutral premium starter. Every page built and wired: home, work, services, process, pricing, insights, about, contact, and legal. No demo content to rip out, just placeholders to fill.
- **A real design system** in `app/globals.css` (`@theme` tokens) and `lib/brand.ts`: surfaces, accents, type, motion easings, shadows, spacing rhythm. Change a token, the whole site moves with it.
- **A bespoke motion language**: liquid video hero with instant-paint poster LCP, scroll-reveal type, spotlight cards, crafted route transitions, glass-refractive surfaces, hairline grids. All respecting `prefers-reduced-motion`, all tuned for mobile.
- **Content architecture** in `lib/content/*.ts` and `content/insights/*.mdx`. Copy lives in modules, never hardcoded in pages, so edits propagate everywhere.
- **Working integrations** that degrade gracefully: Mailchimp newsletter (double opt-in), Make.com contact intake, GA4. The site builds and runs before any of them are wired.
- **93 Claude skills** in `.claude/skills/`, the full catalog below.
- **The brain** in `CLAUDE.md` + `CONTEXT/`: discovery questionnaire, the perfect-build spec, the re-skin checklist, and a brand-brief template. The part you cannot get from a normal starter.

## The skills library (all 93)

This is the engine room. Point Claude at a task and it reaches for the right one. Grouped by what they do for you.

### Design + frontend (build the site itself)

| Skill | What it does |
|-------|--------------|
| `impeccable` | The flagship design system skill. Polish, critique, audit, animate, harden, and bolden interfaces to a senior bar. |
| `frontend-design` | Distinctive, non-generic frontend design from a brief. |
| `design-taste-frontend` | Anti-slop landing pages that do not look AI-made. |
| `design-taste-frontend-v1` | The original taste engine, kept for backward compatibility. |
| `senior-frontend` | React, Next.js, and Tailwind built to a senior engineer's standard. |
| `ui-ux-pro-max` | Deep UI/UX design intelligence for web and mobile. *by nextlevelbuilder* |
| `ui-styling` | Considered, beautiful styling systems. *(Apache 2.0)* |
| `ui-design-system` | Design-token generation and a full UI system toolkit. |
| `design-system` | Three-layer token architecture (primitive to semantic to component) plus component specs. |
| `high-end-visual-design` | Design like a high-end agency, not a freelancer. |
| `gpt-taste` | Elite UX/UI with advanced GSAP motion engineering. |
| `emil-design-eng` | UI polish in the philosophy of Emil Kowalski: micro-interaction and detail. |
| `minimalist-ui` | Clean, editorial, restrained interfaces. |
| `industrial-brutalist-ui` | Raw mechanical interfaces: Swiss type meets terminal aesthetics. |
| `image-to-code` | Turn a design image into production frontend code. |
| `landing-page-generator` | Complete, high-converting Next.js landing pages. |
| `redesign-existing-projects` | Upgrade an existing site or app to premium quality. |
| `design` | Comprehensive design: brand identity through execution. |
| `stitch-design-taste` | Semantic design system for Google Stitch. |
| `full-page-screenshot` | Capture full-page screenshots for review and QA. |

### Visual + media generation

| Skill | What it does |
|-------|--------------|
| `brandkit` | Premium brand-guideline boards, logo systems, and identity decks. |
| `banner-design` | Social, ad, hero, and print banners with art-directed options. |
| `image` | Generate and direct imagery. |
| `imagegen-frontend-web` | Premium web imagery direction. |
| `imagegen-frontend-mobile` | Premium mobile-app imagery direction. |
| `video` | Create video assets. |
| `slides` | Strategic HTML presentations with charts. |
| `brand` | Brand voice, visual identity, messaging frameworks, and consistency. |

### Engineering + code quality (ship it right)

| Skill | What it does |
|-------|--------------|
| `code-reviewer` | Automated PR review across TS, JS, Python, Go, Swift, Kotlin. |
| `api-design-reviewer` | Review API design for quality, security, and consistency. |
| `database-schema-designer` | ERDs, normalization, relationships, migration planning. |
| `sql-database-assistant` | Write and reason about SQL queries. |
| `focused-fix` | Surgical, scoped bug fixes with no collateral damage. |
| `systematic-debugging` | A root-cause debugging method for any bug. *by obra* |
| `test-driven-development` | TDD discipline for features and bugfixes. *by obra* |
| `tdd-guide` | Practical unit-testing guidance. |
| `verification-before-completion` | Verify work is actually done before claiming it. *by obra* |
| `migration-architect` | Plan and execute safe migrations with rollback. |
| `email-template-builder` | Robust, client-safe HTML email templates. |

### Agent workflow + orchestration (run the build)

*Most of this set ships from [obra's Superpowers](https://github.com/obra/superpowers).*

| Skill | What it does |
|-------|--------------|
| `using-superpowers` | The meta-skill: how to find and use the right skill. *by obra* |
| `brainstorming` | Explore intent and requirements before building anything. *by obra* |
| `writing-plans` | Turn a spec into a reviewable implementation plan. *by obra* |
| `executing-plans` | Execute a plan with review checkpoints. *by obra* |
| `subagent-driven-development` | Run independent tasks via subagents in one session. *by obra* |
| `dispatching-parallel-agents` | Fan out two or more independent tasks in parallel. *by obra* |
| `using-git-worktrees` | Isolated workspaces for parallel feature work. *by obra* |
| `writing-skills` | Author new skills for the library. *by obra* |
| `requesting-code-review` | Request structured review on completed work. *by obra* |
| `receiving-code-review` | Act on review feedback properly. *by obra* |
| `finishing-a-development-branch` | Clean branch wrap-up and handoff. *by obra* |
| `full-output-enforcement` | Stop the model truncating long output. |

### Copy + content (fill the site, run the blog)

| Skill | What it does |
|-------|--------------|
| `copywriting` | Persuasive page copy: homepage, landing, pricing, features. |
| `copy-editing` | Sharpen, tighten, and refresh existing copy. |
| `stop-slop` | Strip AI writing tells out of any prose. *by Hardik Pandya (MIT)* |
| `content-strategy` | Decide what to publish: pillars, clusters, calendar. |
| `social-content` | Platform-specific social content that performs. |

### Marketing + growth (the agency brain)

| Skill | What it does |
|-------|--------------|
| `marketing-ideas` | On-demand marketing ideas for any goal. |
| `marketing-psychology` | Apply persuasion and behavioural principles. |
| `product-marketing-context` | Build the product-marketing context doc everything else reads from. |
| `launch-strategy` | Plan a product or feature launch end to end. |
| `pricing-strategy` | Set and structure pricing. |
| `revops` | Revenue operations: pipeline, process, systems. |
| `sales-enablement` | Battle cards, one-pagers, and sales collateral. |
| `lead-magnets` | Design lead magnets that capture demand. |
| `free-tool-strategy` | Plan free tools as a growth channel. |
| `co-marketing` | Find partners and run joint campaigns. |
| `community-marketing` | Build and grow Discord, Slack, and forum communities. |
| `referral-program` | Design referral and word-of-mouth loops. |
| `email-sequence` | Lifecycle and nurture email sequences. |
| `cold-email` | B2B cold outreach that gets replies. |
| `ad-creative` | Ad copy and creative at scale for any platform. |
| `paid-ads` | Plan and run paid campaigns on Google, Meta, and LinkedIn. |

### SEO + discovery (get the site found)

| Skill | What it does |
|-------|--------------|
| `seo-audit` | Technical and on-page SEO audits. |
| `ai-seo` | Get cited by ChatGPT, Perplexity, and AI Overviews. |
| `schema-markup` | Structured data for rich results. |
| `programmatic-seo` | SEO pages at scale from templates and data. |
| `site-architecture` | Plan information architecture and URL structure. |
| `directory-submissions` | Submit to startup and product directories. |
| `aso-audit` | App Store and Play Store listing optimization. |
| `analytics-tracking` | GA4, event tracking, UTMs, attribution, tag manager. |

### Conversion optimization (make the site sell)

| Skill | What it does |
|-------|--------------|
| `page-cro` | Optimize any page for conversion. |
| `form-cro` | Optimize lead-capture forms. |
| `signup-flow-cro` | Optimize signup and registration. |
| `onboarding-cro` | Optimize post-signup onboarding and activation. |
| `popup-cro` | Build and optimize popups. |
| `paywall-upgrade-cro` | In-app paywalls and upgrade prompts. |
| `ab-test-setup` | Plan and run A/B tests with real statistics. |
| `experiment-designer` | Design a systematic experimentation program. |
| `churn-prevention` | Cancel flows, save offers, dunning, and win-back. |

### Research + competitive intelligence (know the market)

| Skill | What it does |
|-------|--------------|
| `customer-research` | ICP, interviews, review mining, personas, jobs-to-be-done. |
| `competitor-profiling` | Build structured competitor dossiers from URLs. |
| `competitive-teardown` | Deep competitor teardowns scored across 12 dimensions. |
| `competitor-alternatives` | Build "vs" and "alternative" comparison pages. |

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

The whole method lives in `CLAUDE.md` and the three files in `CONTEXT/`. The shape:

1. **Discovery.** `CONTEXT/discovery.md` walks you through sourcing everything about the client brand: business, positioning, voice, visual direction, structure, logistics. Research first, ask second.
2. **Brief.** Fill `CONTEXT/brand-brief.md` from the template. Confirm positioning and voice before any code. This is the gate that matters.
3. **Re-skin.** Four swap points cascade into the whole site:

   | # | File | What changes |
   |---|------|--------------|
   | 1 | `lib/brand.ts` | name, domain, email, tagline, promise, socials |
   | 2 | `app/globals.css` → `@theme` | colours, surfaces, accents, fonts binding |
   | 3 | `lib/fonts.ts` | the typeface(s) |
   | 4 | `public/` + `lib/content/*` | logo, OG, favicon, and all copy |

4. **Build and cut.** Render the pages, cut what does not earn its scroll, add only what the brief demands.
5. **Polish.** `impeccable polish`, `critique`, and `audit`, then `stop-slop` on copy, grep for em dashes, test mobile-first and reduced-motion.
6. **Ship.** `DEPLOY.md` covers Netlify and env vars.
7. **Then sell the retainer.** The site is live. Now reach for the marketing, SEO, and CRO skills above and put the client on a monthly.

`CONTEXT/build-spec.md` has the exhaustive re-skin checklist and the definition of "perfect" you are building to.

## The rules that travel with the engine

Defaults from NAMI's house style. Good for any client unless the brief overrides the personality. The bans stay regardless.

- **Zero em dashes.** Anywhere. Commas, colons, semicolons, periods, or restructure.
- **No AI-tells.** No "leverage", no "synergy", no "in today's fast-paced world", no "bespoke solutions". No filler.
- **Real facts only.** No invented clients, metrics, or testimonials.
- **Mobile-first, accessible, motion that can be turned off.**
- **Never read as templated.** If two sites built from this base look like siblings, the re-skin failed.

## Security

No real secrets in this repo, ever. `.env.example` is placeholders only. Real keys live in your local `.env.local` (gitignored) and the Netlify project's environment variables. Full detail in `DEPLOY.md`.

## Creators + credits

The engine, design system, motion language, and the `CONTEXT/` build IP are NAMI Creative's. The skills library stands on the shoulders of the open-source community. Named credits:

- **[obra / Superpowers](https://github.com/obra/superpowers)**: the agent-workflow and engineering-discipline skills (`using-superpowers`, `brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `dispatching-parallel-agents`, `using-git-worktrees`, `writing-skills`, `requesting-code-review`, `receiving-code-review`, `finishing-a-development-branch`, `systematic-debugging`, `test-driven-development`, `verification-before-completion`).
- **[Hardik Pandya](https://github.com/hardikpandya/stop-slop)**: `stop-slop` (MIT).
- **[nextlevelbuilder](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)**: `ui-ux-pro-max`.
- **Emil Kowalski**: the UI-polish philosophy behind `emil-design-eng`.
- The marketing, SEO, CRO, research, and design skill packs come from the wider open-source community. Each skill retains any licence its author shipped inside its directory.

Full attribution and a corrections path are in [`CREDITS.md`](CREDITS.md). If you authored a skill bundled here and want different attribution or removal, open an issue or email hello@namicreative.co.uk.

---

<div align="center">

**Built by NAMI Creative.** Brand, content, websites, visual direction, and growth automation, built by the same hands.

[namicreative.co.uk](https://namicreative.co.uk) · hello@namicreative.co.uk

*We Build Brands That Move With Meaning.*

</div>
