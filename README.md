<div align="center">

# NAMI Creative Big Brain

### Drop in a client. Get a brand, a website, and the marketing engine that runs it.

A full creative agency packed into one repo. 93 Claude skills plus a structured workflow that turns one paragraph about a client into research, positioning, a custom-built site, and the ongoing marketing operation that runs underneath it. Every build a fresh build. Every site looks like its client.

*Creative systems built for real-world momentum.*

</div>

---

## The pitch

You hand Claude a client. Name, sector, what they want. Claude researches them, profiles their competitors, lands on positioning, designs a brand and a stack that fit *this specific client*, builds the site, ships it, then offers to run the SEO, content, ads, email, and CRO that turn the launch into recurring revenue.

You stay the decision-maker. The workflow holds explicit approval gates at the brief and at the stack choice, so nothing ships you didn't sign off on. The 93 skills do the heavy lifting underneath, from senior-grade design polish to copy that doesn't read as AI-made.

Same operator. Different industries. A tradesperson's site, a fintech SaaS, a luxury wellness brand, and a community PFP project come out of the same repo looking nothing alike.

## Who this is for

- **Website designers** who want every build to start from real research about *this* client, with the polish and motion of a senior studio.
- **Vibe coders** who ship fast with AI and want a system that takes them the last 10% to senior-bar quality.
- **Freelancers and solo operators** who want to offer a full agency menu without becoming an agency.
- **Small studios** that want every new project to start at a higher floor than a blank file.

If you can give Claude a paragraph about a client, you can ship their site this weekend and put them on a marketing retainer next month.

## What you can sell with it

A normal freelance build is a one-time invoice. This toolkit turns one client into recurring revenue, because the skills that built the site also run everything that comes after it.

| You sell | Skills behind it | Why it sticks |
|----------|------------------|---------------|
| The website build | the design + frontend skills, guided by the workflow | Premium output at speed. Higher ticket, faster delivery. |
| SEO + content retainer | `seo-audit`, `ai-seo`, `programmatic-seo`, `content-strategy`, `copywriting` | Compounds monthly. Easiest recurring line to justify. |
| Conversion optimization | `page-cro`, `form-cro`, `ab-test-setup`, `experiment-designer` | You prove lift with their own numbers. Pays for itself. |
| Paid ads + creative | `paid-ads`, `ad-creative`, `landing-page-generator` | New campaigns and pages on demand. |
| Lifecycle + outreach email | `email-sequence`, `cold-email`, `email-template-builder` | Owned channel. High margin. |
| Social + community | `social-content`, `community-marketing`, `referral-program` | Always-on deliverable. |
| Competitive + pricing strategy | `competitive-teardown`, `competitor-profiling`, `pricing-strategy`, `revops` | Advisory work at advisory rates. |

One repo. One operator. A full-service offer. You decide the prices; the toolkit holds the quality bar.

## The launch flow

1. **You paste a launch prompt** about the client (template below). Claude reads the workflow and starts.
2. **Research** runs autonomously: current presence, voice in the wild, three direct competitors, the sector reflex to avoid, market read.
3. **Discovery** asks only the questions research couldn't answer: voice axes, real prices, refusals, real proof.
4. **Brief gate.** Claude fills the brand brief from research + discovery and presents it for your explicit approval.
5. **Strategy + stack gate.** Concrete decisions (positioning, voice, colour strategy, theme, type, motion, page set), then a stack recommendation with reasoning. You sign off before any code lands.
6. **Build.** A design system gets set first, then pages render from it. Senior-bar craft using the right skill for each step.
7. **Verify.** Typecheck, build, accessibility, performance, leak grep, AI-slop test.
8. **Deploy.** Per `DEPLOY.md`.
9. **Marketing, optional.** Only if you ask. SEO, content, ads, email, CRO, all running on the same skills.

## Quick start

```powershell
mkdir D:\Clients\acme
cd D:\Clients\acme
git clone https://github.com/SanctifiedOps/nami-creative-brain.git .
Remove-Item -Recurse -Force .git
git init
```

Now open Claude inside the folder and paste this:

```text
I just cloned the NAMI Creative Big Brain into this folder for a new client.

Client: [name]
URL: [their current site, or "none yet"]
Sector: [industry / niche]
Location: [where they're based, who they serve]
What they want: [new site / marketing setup / both]
Timeline: [target ship date if any]
Notes: [anything else relevant; can be blank]

Read CLAUDE.md and follow the workflow in CONTEXT/workflow.md.
```

Fill in what you know, leave blanks where you don't. Claude researches the gaps and asks you only what it couldn't find. The brief is the first approval gate; stop, sign off, and then it builds.

## What's inside

- **`.claude/skills/`** — 93 Claude skills, auto-active. Full catalog below.
- **`CLAUDE.md`** — the launch rules Claude reads first.
- **`CONTEXT/workflow.md`** — the nine-phase workflow Claude follows on every launch.
- **`CONTEXT/discovery.md`** — the discovery question bank, used after autonomous research.
- **`CONTEXT/brand-brief.template.md`** — the brief shape; user approval gate.
- **`CONTEXT/build-spec.md`** — the stack-agnostic quality bar every build ships against.
- **`DEPLOY.md`** — deployment guidance for whatever stack the build settles on.
- **`CREDITS.md`** — attribution for the bundled third-party skills.

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
- **The design fits the sector.** Category reflex is the slop test. Avoid it.

## Security

No real secrets in this repo, ever. When Claude scaffolds a stack into the folder, real keys live in your local `.env.local` (gitignored) and the hosting platform's environment variables. Full guidance in `DEPLOY.md`.

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
