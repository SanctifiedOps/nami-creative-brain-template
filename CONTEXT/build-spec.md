# Build spec — the quality bar

Stack-agnostic quality bar for every site built with this toolkit. Phase 6 + 7 of `CONTEXT/workflow.md` ship against this.

The standard: it should be hard to tell a person used an AI to design and build the site.

---

## Craft (every build, every stack)

- **The design system is set BEFORE the pages.** Tokens (colour, type, motion, spacing, shadow, radius) live in one place. Pages render from tokens and content modules; nothing hardcoded inline. Change a token, the whole site moves with it.
- **The design fits the SECTOR.** A tradesperson's site is not a SaaS dashboard is not a luxury brand. Avoid the category-reflex defaults (the `impeccable` skill's reflex-reject lanes catch the obvious traps).
- **Nothing reads as templated.** Same toolkit, totally different site every time. If two sites built from this toolkit could be spotted as siblings, the build failed.
- **Motion is purposeful and physical.** Ease-out exponential curves. No bounce, no elastic. Animation carries meaning (reveal, hierarchy, state), never decoration. Every animation honours `prefers-reduced-motion`.
- **Mobile-first with real polish on small screens.** Built narrow up. Touch targets, safe areas, no layout shift. Test on a phone before a desktop.
- **Performance is part of the design.** Fast LCP. Offscreen motion pauses. Heavy decoration (particles, expensive text animation) drops on mobile and slow links while the core experience stays intact.
- **Accessibility is not optional.** Visible focus rings, real semantic structure, colour contrast that passes, motion that can be turned off.

## Copy

- Every word earns its place. No restated headings, no intros that repeat the title.
- Voice matches the client's brief, holding the inherited rules:
  - **Zero em dashes (—).** Commas, colons, semicolons, periods, or restructure.
  - **No AI tells.** No "leverage", "synergy", "in today's fast-paced world", "bespoke solutions", "in summary".
  - **No exclamation marks.**
  - **No "no fluff" / "no filler".** Make the positive claim instead.
- Real facts only. No invented clients, metrics, or testimonials.

## Color (`impeccable` colour laws)

- OKLCH preferred. Reduce chroma as lightness approaches 0 or 100.
- Never use pure `#000` or `#fff`. Tint every neutral toward the brand hue.
- Pick a **colour strategy** explicitly before picking colours:
  - **Restrained:** tinted neutrals + one accent ≤ 10%.
  - **Committed:** one saturated colour carries 30 to 60% of the surface.
  - **Full palette:** 3 to 4 named roles, each used deliberately.
  - **Drenched:** the surface IS the colour.
- Match strategy to brand register, not to reflex.

## Theme (dark vs light)

Never a default. Write one sentence of physical scene: who uses this, where, under what ambient light, in what mood. If the sentence does not force the answer, add detail until it does.

---

## The acceptance checklist (phase 7)

- [ ] Typecheck clean (`tsc --noEmit` or stack equivalent).
- [ ] Production build green; every page generates.
- [ ] `impeccable polish` + `impeccable audit` pass.
- [ ] `stop-slop` run on every content module.
- [ ] Grep for em dashes returns zero hits.
- [ ] Grep for placeholder leftovers (`Client name`, `Project One`, `Lorem`, `TODO`, `FIXME`, `Replace this`) returns zero hits.
- [ ] Lighthouse on home + one inner page: LCP fast, no CLS, accessibility passing.
- [ ] Narrow viewport tested first; `prefers-reduced-motion` honoured.
- [ ] No real secrets committed anywhere.
- [ ] OG image + favicon present, meta description set, sitemap + robots correct.

## The AI-slop test

If someone could look at this interface and confidently say "AI made that", it's failed.

Run two altitudes (from `impeccable`):

- **First-order:** could someone guess the theme + palette from the category alone? ("observability → dark blue", "healthcare → white + teal", "finance → navy + gold", "crypto → neon on black"). If yes, rework.
- **Second-order:** could someone guess the aesthetic family from category-plus-anti-references? If yes, the first reflex was avoided but the next one wasn't. Rework until both are non-obvious.

If both pass, ship.
