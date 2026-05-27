# Discovery — sourcing the client brand and forming the brief

This is the intake. Work through it with the client, do the research you can do without them, and fill out `CONTEXT/brand-brief.md` (copy from `brand-brief.template.md`). The brief is the contract; everything downstream renders from it.

Two ground rules:

1. **Research before you ask.** Don't make the client answer what you can find. Pull their current site, socials, reviews, and three competitors first. Arrive with observations, not a blank form. People correct a draft faster than they fill a void.
2. **Decisions, not vibes.** "Modern and clean" is not a brief. Push every answer until it forces a build decision: a colour, a font register, a section that lives or dies, a sentence of copy. If an answer can't change the build, keep digging.

---

## Phase 0 — Research you run yourself (before the call)

Source these without bothering the client. Bring them to the conversation.

- **Current presence.** Their existing site (if any), every social profile, Google Business / reviews, any press. Screenshot what works and what doesn't.
- **Voice in the wild.** How do they already talk? Pull five real sentences from their captions, bio, or emails. The brand voice is often already there, just inconsistent.
- **Three competitors.** Direct ones. Note what is saturated in the sector (the category-reflex look) so you can deliberately avoid it. See the AI-slop "category reflex" test in the `impeccable` skill.
- **Visual inventory.** Existing logo, colours, fonts, photography. What is reusable, what is holding them back.
- **The market.** Who actually buys from them, in what context, at what price tier. Reviews and testimonials tell you this faster than the client will.

Write your read of all this into the brief's "Research notes" section before the call. You'll be wrong on some of it; that's the point. Being wrong out loud gets you corrected fast.

---

## Phase 1 — The business

Get the spine of the company before any aesthetics.

1. **What do you actually sell, in one sentence a stranger would understand?** Not the mission. The transaction.
2. **Who buys it?** Be specific: role, business size, life stage, the moment they go looking. "Founders raising a seed round" beats "businesses."
3. **What are they hiring you instead of?** The real alternative, including "doing nothing" or "a cheaper competitor."
4. **What's the one thing you do better than anyone in your space?** And the proof that it's true.
5. **Price tier.** Premium, mid, accessible, or it depends. This drives the entire visual register; a budget brand and a luxury brand cannot share a design language.
6. **What does a win look like after this site ships?** More qualified enquiries? Higher-value clients? Credibility for a raise? Define the job the site is hired to do.

## Phase 2 — Positioning + voice

This becomes the copy register and the headline architecture.

7. **In the client's own words: what do you stand for, and what do you refuse to do?** The refusal is as load-bearing as the promise. NAMI refuses template flips; that sharpens everything else.
8. **Tagline + promise.** Do they have one? If not, draft three and let them react. (`lib/brand.ts` needs both.)
9. **Voice on a few axes.** Warm ↔ cool. Playful ↔ serious. Plain ↔ technical. Understated ↔ bold. Mark where they sit on each. Then pull a brand they admire and one they can't stand, and ask why.
10. **Words they love and words they ban.** Every brand has both. Capture them. (The em-dash and "no fluff" bans are inherited defaults; confirm and add the client's own.)
11. **Three real proof points.** Numbers, named clients (with permission), outcomes. No invented metrics. If they don't have them yet, the site leans on positioning, not stats, and you note that.

## Phase 3 — Visual direction

This sets the `@theme` block and `lib/fonts.ts`.

12. **Colour.** Existing brand colours? Hex or Pantone if they have them. If not, the mood: where on the spectrum, how saturated, how much contrast. Pick a colour *strategy* (restrained / committed / full-palette / drenched) per the `impeccable` design laws, not just a swatch.
13. **Light or dark?** Don't default. Write one sentence describing who views the site, where, in what light, in what mood. Let that sentence force the answer. (NAMI is dark-first because its work is cinematic and screen-native; a wellness brand might be the opposite.)
14. **Type personality.** Geometric, humanist, editorial-serif, mono-technical, grotesque. One font or a display + body pairing. Anchor it to a brand they showed you in Q9.
15. **Imagery + motion.** What's the visual metaphor? NAMI is water and motion. Does the client have one, or do we build one? How much movement is *them* (energetic, restrained, still)?
16. **Logo + assets.** What exists, what's usable, what we need to make or commission. Get the highest-res files now.

## Phase 4 — Structure + content

This decides which pages and sections live, and fills `lib/content/*.ts`.

17. **What does the visitor need to believe to act?** Reverse-engineer the page set from that, not from "every site has an about page." Cut ruthlessly.
18. **Services / offers.** The real list, in priority order, each with a one-line "what it is" and the outcome it buys. (Maps to `lib/content/services.ts` / `offers.ts`.)
19. **Proof / work.** Case studies, client logos, testimonials. What can we show, with permission, with real detail? (Maps to `work.ts`, `testimonials.ts`.)
20. **Process.** How do they actually work with a client, in phases? (Maps to `process.ts`.)
21. **Engagement models + pricing.** How do people buy: project, retainer, productised? Are prices public? (Maps to `engagement.ts`, the pricing page.)
22. **The one action.** What's the single most important thing a visitor does? Everything points at it. Usually a contact form or a booking; wire it in `/api/contact`.
23. **Insights / content engine.** Are they publishing? If yes, seed three real article angles into `content/insights/`. If no, leave the route but de-emphasise it.

## Phase 5 — Logistics

The boring bits that block launch if missed.

24. **Domain.** Owned? Registrar? Pointing where now? (Sets `lib/brand.ts` domain/url and the Netlify domain.)
25. **Integrations.** Newsletter (Mailchimp?), CRM, booking, analytics. Which exist, which we set up. Get the accounts, never the raw keys in chat. (See `DEPLOY.md` + `.env.example`.)
26. **Inbox.** Where do form submissions go? A real monitored address.
27. **Legal.** Company name, registered address, privacy/terms basis. Fills the legal pages and `lib/brand.ts` `legalName`.
28. **Timeline + decision-maker.** When does it ship, and who signs off? One named approver beats a committee.

---

## Turning answers into the brief

Once you've worked the phases:

1. Copy `brand-brief.template.md` to `brand-brief.md` and fill every section. Mark anything still assumed as `ASSUMED:` so it's visible.
2. Write the positioning, tagline, promise, and voice axes first. Get the client to confirm those before anything visual. Wrong positioning makes beautiful pixels worthless.
3. Translate visual direction into concrete token values: real hex for the `@theme` block, a real font in `lib/fonts.ts`. Decisions, not adjectives.
4. List the final page + section set, with anything cut struck through and why. The cut list is as valuable as the keep list.
5. Only then start the four swap points in `CONTEXT/build-spec.md`.

A good brief makes the build mechanical. That's the goal: the thinking happens here, so the build is execution, not invention.
