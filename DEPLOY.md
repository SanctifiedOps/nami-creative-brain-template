# Deploy

Stack-agnostic deployment guidance. Whatever Claude scaffolded in phase 6 of the workflow, the rules below apply.

> **Golden rule: no real secrets in git, ever.** This repo is the toolkit, not a website. When you scaffold a client site into the same folder, real secrets stay in `.env.local` (gitignored) and the hosting platform's environment variables. If a key ever lands in a commit, rotate it.

---

## 1. Local setup (after Claude scaffolds the stack)

Whatever stack got chosen, the routine is the same:

```bash
# install deps for whatever Claude scaffolded
npm install            # or pnpm install / yarn / bun

# create the env file from the example (if one was generated)
cp .env.example .env.local      # then fill in real values

# run the dev server (command depends on stack)
npm run dev            # typically http://localhost:3000
```

Most stacks should run with zero env vars set; integrations no-op until wired. If anything is required to even boot, Claude should have documented it in `CONTEXT/brand-brief.md`'s build decisions log.

## 2. Environment variables (the usual suspects)

These are the recurring ones NAMI sites use. Set the ones the client's build actually needs.

| Variable | Used by | Where to get it |
|----------|---------|-----------------|
| `MAILCHIMP_API_KEY` | newsletter, contact upsert | Mailchimp → Account & billing → Extras → API keys. The suffix after the dash is the data centre (e.g. `-us21`) and is required. |
| `MAILCHIMP_AUDIENCE_ID` | newsletter, contact upsert | Mailchimp → Audience → Settings → Audience name and defaults → Audience ID. |
| `CONTACT_WEBHOOK_URL` | contact form intake | Make.com custom-webhook trigger URL. Fires on each successful submission. |
| `NEXT_PUBLIC_GA_ID` | analytics | GA4 → Admin → Data streams → Web stream (`G-XXXXXXXXXX`). Public by design; unset = no analytics in dev. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster | Per-site verification token. Renders the meta tag only when set. |

Add or drop variables to fit the actual build. Keep `.env.example` in sync.

## 3. Hosting

Pick the platform that fits the stack Claude chose.

### Netlify (default for marketing + landing sites, Next.js + Astro)

1. **Connect the repo.** Netlify → Add new site → Import from Git.
2. **Build settings** are read from `netlify.toml` if Claude generated one; otherwise set the build command (`npm run build`) and publish directory by hand.
3. **Environment variables.** Netlify → Site configuration → Environment variables. Add the keys from the table above with real values, scope to all (build + runtime). **This is the only place production secrets live.**
4. **Domain.** Netlify → Domain management → add the client's custom domain. Point DNS per Netlify's instructions.
5. **Deploy.** Push to the production branch; Netlify builds automatically.

### Vercel (default for dynamic Next.js apps)

1. **Import the repo** at vercel.com.
2. Vercel auto-detects Next.js. Confirm framework + build command.
3. **Environment variables** in the project settings, scoped to production / preview / development.
4. **Domain** under the project's Settings → Domains.
5. **Deploy** auto-runs on push.

### Other (Framer / Webflow / Cloudflare Pages / self-host)

Use the platform's own pipeline. The toolkit doesn't constrain hosting; the brief decides.

## 4. Pre-launch checklist

- [ ] `.env.local` filled locally; the same keys set in the hosting platform env (never committed)
- [ ] Custom domain live, HTTPS provisioned
- [ ] `lib/brand.ts` (or equivalent config) domain/url match the live domain
- [ ] Contact form submits end to end (test a real submission lands in the inbox + CRM)
- [ ] Newsletter double opt-in works (or the section is removed if unused)
- [ ] GA4 firing on the live domain
- [ ] OG image renders in a link-preview debugger (LinkedIn / Facebook / X). Version the filename if a cache holds an old image.
- [ ] Production build clean; Lighthouse pass (LCP, no CLS, a11y)
- [ ] `grep -r "—"` returns nothing
- [ ] `grep -ri` for placeholder leftovers (`Client name`, `Project One`, `Lorem`, `TODO`) returns nothing

## 5. If you rotate or leak a key

1. Rotate it at the source (Mailchimp / Make / GA / wherever).
2. Update the hosting platform env and your local `.env.local`.
3. If it was ever committed, scrub history or, faster, treat the repo as compromised and rotate everything. Prevention beats cleanup: keep secrets out of git.

---

## Builder's note (CLI tokens for the operator)

Tokens for `netlify`, `vercel`, `gh`, etc. live in your **local shell environment / OS credential store**, not in this repo or any committed file. Authenticate the CLIs once on your machine:

```bash
gh auth login          # GitHub
netlify login          # Netlify (opens browser)
vercel login           # Vercel (opens browser)
```

These authenticate the *tooling*, not the site, so they never belong in `.env.example`.
