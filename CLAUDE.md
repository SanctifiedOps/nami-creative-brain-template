# NAMI Creative Big Brain — launch instructions for Claude

You have been launched in a folder that contains the **NAMI Creative Big Brain toolkit**. This is NOT a website template. There are no pre-built site files in this folder. There is no stack to edit. The toolkit is a skill library + a structured workflow that you use to research a client and then build their website from scratch, fit to their industry, brand, and goals.

## Hard rules — read these first, do not skip

1. **There is no template site.** Do not assume Next.js. Do not assume Tailwind. Do not assume any design language, palette, type, or layout. The stack, design system, and structure are all decisions that come OUT of the client brief, not into it.
2. **Do not edit "on top of" anything.** Any site files in this folder (other than the ones you scaffold for the active client) are the client's own work. Do not import from imagined components, paste from prior projects, or reach for "the usual" pattern. Start clean every time.
3. **The brief is a gate.** No code, no scaffolding, no design decisions before the brand brief is filled in and the user has explicitly approved it. Research and discovery come first.
4. **Stack-agnostic.** When the brief is approved, propose a stack with reasoning and get the user's sign-off before scaffolding. Default to whatever genuinely fits the client (a static brochure site for a tradesperson is not the same as a SaaS dashboard for a fintech).
5. **House voice rules (defaults; can be overridden by the client's voice once known):** zero em dashes anywhere; no AI tells (no "leverage", "synergy", "in today's fast-paced world", "bespoke solutions"); no exclamation marks; no invented clients, metrics, or testimonials.

## Your first action, every launch

Read `CONTEXT/workflow.md`. Follow it in order, phase by phase. Do not skip phases. The workflow is:

1. **Intake** — parse the user's launch prompt, ask what is missing.
2. **Research** — autonomously research the client, their sector, and three competitors.
3. **Discovery** — ask only the questions research could not answer (`CONTEXT/discovery.md`).
4. **Brief** — propose the brand brief filled in, against `CONTEXT/brand-brief.template.md`. **GATE: user must approve before you continue.**
5. **Strategy + stack** — positioning, voice, visual direction, page set. Then propose a stack. **GATE: user must approve the stack before scaffolding.**
6. **Build** — scaffold the chosen stack into THIS folder, build the site to `CONTEXT/build-spec.md`. The toolkit's `.claude/skills/` library is the engine room; reach for the right skill for each step (impeccable for design, copywriting for copy, senior-frontend for engineering, etc.).
7. **Verify** — typecheck, build, accessibility, performance, leak grep for any placeholder copy left behind.
8. **Marketing (optional)** — once the site is live, use the marketing/SEO/CRO/email/research skills to set up the client's ongoing operations.

## Where the workflow lives

- `CLAUDE.md` (this file) — the launch rules.
- `CONTEXT/workflow.md` — the master step-by-step.
- `CONTEXT/discovery.md` — the discovery question bank for phase 3.
- `CONTEXT/brand-brief.template.md` — the brief shape (you fill in `CONTEXT/brand-brief.md` from this).
- `CONTEXT/build-spec.md` — the quality bar for the build.
- `.claude/skills/` — 93 skills, auto-active. Lean on them. `using-superpowers` is the meta-skill for picking the right one.
- `README.md` — for the human; explains what the toolkit is.
- `DEPLOY.md` — generic deployment + integrations guidance, stack-agnostic.
- `CREDITS.md` — attribution for bundled third-party skills.

Now go and read `CONTEXT/workflow.md`.
