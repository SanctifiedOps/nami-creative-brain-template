<div align="center">

# NAMI Creative Big Brain

### A full creative agency, packed into a toolkit you clone.

There is **no template site** in this repo. There is a structured workflow + 93 Claude skills that let you research a client from a single launch prompt, design their brand, build their website from scratch fit to their industry, then run the marketing operation that follows. One operator, premium output, every build a fresh build.

*Creative systems built for real-world momentum.*

</div>

---

## What this is (and what it is not)

**Not a template.** No pre-built site, no NAMI house design, no "Studio" placeholder pages sitting there waiting to be edited. Cloning this repo gives you no website. That is deliberate. Templates bias every project toward the template's aesthetic, and that is exactly the failure mode this toolkit was built to avoid.

**A toolkit.** Cloning this gives you (a) all 93 Claude skills that handle design, frontend engineering, copy, SEO, ads, email, CRO, research, and pricing, and (b) the structured workflow in `CONTEXT/` that Claude follows: intake → research → discovery → brief gate → strategy → stack choice → build → verify → marketing.

A homeowner's plumber site, a fintech SaaS, an Aesop-tier skincare brand, and a Solana memecoin community come out looking nothing alike. They should. The toolkit makes that easy, not the opposite.

## Who this is for

- **Website designers** who want every build to start from real research about the client, not a recycled template.
- **Vibe coders** who can ship fast with AI but watch every project drift toward the same look.
- **Freelancers and solo operators** who want to offer a full agency menu without becoming an agency.
- **Small studios** that want every new project to start at a senior bar instead of from a blank file.

If you can give Claude a one-paragraph brief about a client, you have everything you need to launch a build this weekend.

## What this unlocks (the money part, spelled out)

A normal freelance build is a one-time invoice. This toolkit turns one client into a recurring relationship, because the same skills that build the site also run everything that comes after it.

| You sell | Skills behind it | Why it sticks |
|----------|------------------|---------------|
| The website build | the design + frontend skills, guided by the workflow | Premium output at speed. Higher ticket, faster delivery. |
| SEO + content retainer | `seo-audit`, `ai-seo`, `programmatic-seo`, `content-strategy`, `copywriting` | Compounds monthly. Easiest recurring line to justify. |
| Conversion optimization | `page-cro`, `form-cro`, `ab-test-setup`, `experiment-designer` | You prove lift with their own numbers. Pays for itself. |
| Paid ads + creative | `paid-ads`, `ad-creative`, `landing-page-generator` | New campaigns and pages on demand. |
| Lifecycle + outreach email | `email-sequence`, `cold-email`, `email-template-builder` | Owned channel. High margin. |
| Social + community | `social-content`, `community-marketing`, `referral-program` | Always-on deliverable. |
| Competitive + pricing strategy | `competitive-teardown`, `competitor-profiling`, `pricing-strategy`, `revops` | Advisory work at advisory rates. |

One repo. One operator. A full-service offer. You decide the prices; the toolkit decides the quality.

## What's inside

- **`.claude/skills/`** — 93 Claude skills, auto-active. The full catalog below.
- **`CLAUDE.md`** — the launch rules Claude reads first. Hard rule: there is no template to build on top of.
- **`CONTEXT/workflow.md`** — the master nine-phase workflow Claude follows on every launch.
- **`CONTEXT/discovery.md`** — the discovery question bank. Used in phase 3, after autonomous research.
- **`CONTEXT/brand-brief.template.md`** — the brief shape. Phase 4 fills `brand-brief.md` from it; user approval is the gate.
- **`CONTEXT/build-spec.md`** — the stack-agnostic quality bar every build ships against.
- **`DEPLOY.md`** — deployment guidance for whatever stack the build settles on.
- **`CREDITS.md`** — attribution for the bundled third-party skills.

## Quick start (one launch prompt away from a real build)

```bash
# 1. Create a folder for the client and open Claude in it.
mkdir D:\SanctifiedOps\acme
cd D:\SanctifiedOps\acme

# 2. Clone the Big Brain into the folder.
git clone https://github.com/SanctifiedOps/nami-creative-brain.git .

# 3. Detach from the toolkit repo so the client gets a clean history.
#    (Windows PowerShell)
Remove-Item -Recurse -Force .git
git init
```

Now open Claude inside this folder and paste the launch prompt below. Replace the bracketed fields with whatever you know about the client; leave any field blank and Claude will research or ask for it. The brief gate stops Claude from writing any code until you approve.

### The launch prompt

```text
I just cloned the NAMI Creative Big Brain into this folder for a new client.

Client: [name]
URL: [their current site, or "none yet"]
Sector: [industry / niche]
Location: [where they're based, who they serve]
What they want: [new site / marketing setup / both]
Timeline: [target ship date if any]
Notes: [anything else relevant; can be blank]

Read CLAUDE.md and follow the workflow in CONTEXT/workflow.md. Do not write any site code before I approve the brand brief.
```

That's it. Claude will read the launch rules, research the client and three competitors, ask only the questions research could not answer, fill the brand brief, and stop at the brief gate for your approval. Once you approve, it proposes a stack with reasoning (stack-agnostic; whatever fits the client), gets your sign-off, scaffolds fresh, builds, verifies, and offers to run the marketing.

## The workflow at a glance

Detail lives in `CONTEXT/workflow.md`. The shape:

1. **Intake** — parse the launch prompt; ask only what's missing.
2. **Research** — autonomous: current presence, voice in the wild, three competitors, sector + market read, visual inventory.
3. **Discovery** — ask only the questions research can't answer (voice axes, refusals, real prices, real proof).
4. **Brief gate** — fill the brand brief from research + discovery. Get your explicit approval.
5. **Strategy + stack gate** — positioning, voice, visual direction, page set, stack recommendation. Get your sign-off.
6. **Build** — scaffold the chosen stack fresh, build pages to the quality bar in `build-spec.md`.
7. **Verify** — typecheck, build, accessibility, performance, leak grep.
8. **Deploy** — `DEPLOY.md` covers Netlify / Vercel / other.
9. **Marketing (optional)** — only if you invite it. SEO, content, ads, email, CRO using the skills.

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
| `landing-page-generator` | Complete, high-converting landing pages. |
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

## House rules that travel with the toolkit

Inherited NAMI defaults. Good for any client unless the brief overrides the personality. The bans stay regardless.

- **Zero em dashes (—).** Commas, colons, semicolons, periods, or restructure.
- **No AI tells.** No "leverage", "synergy", "in today's fast-paced world", "bespoke solutions". No exclamation marks. No filler.
- **Real facts only.** No invented clients, metrics, or testimonials.
- **Mobile-first, accessible, motion that can be turned off.**
- **The design fits the sector**, not "the usual" template look. Category reflex is the slop test.

## Security

No real secrets in this repo, ever. When Claude scaffolds a stack, real keys live in your local `.env.local` (gitignored) and the hosting platform's environment variables. Full guidance in `DEPLOY.md`.

## Creators + credits

The workflow, the `CONTEXT/` build IP, and the toolkit framing are NAMI Creative's. The skills library stands on the shoulders of the open-source community. Named credits:

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
