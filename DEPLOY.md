# Deploy

How to take a finished build live on Netlify, and where every secret goes.

> **Golden rule: no real secrets in git.** This repo is also published as a public lead magnet. `.env.example` holds placeholders only. Real keys live in two places and nowhere else: your local `.env.local` (gitignored) and the Netlify project's environment variables. If a key ever lands in a commit, rotate it.

---

## 1. Local setup

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
```

The site runs with **no** env vars set. The newsletter and contact integrations degrade gracefully (they no-op or log) so you can build and preview before the client's accounts exist. Fill the keys in when you wire the integrations.

## 2. Environment variables

Every variable, what it's for, and where to get it. All optional for local dev; set the ones the client uses before launch.

| Variable | Used by | Where to get it |
|----------|---------|-----------------|
| `MAILCHIMP_API_KEY` | `/api/subscribe`, `/api/contact` | Mailchimp → Account & billing → Extras → API keys. Suffix after the dash is the data-centre (e.g. `-us21`) and is required. |
| `MAILCHIMP_AUDIENCE_ID` | newsletter + contact upsert | Mailchimp → Audience → Settings → Audience name and defaults → Audience ID. |
| `CONTACT_WEBHOOK_URL` | `/api/contact` | Make.com custom-webhook trigger URL. Fires on each successful contact submission. |
| `NEXT_PUBLIC_GA_ID` | analytics | GA4 → Admin → Data streams → Web stream (`G-XXXXXXXXXX`). Public by design; unset = no analytics in dev. |

## 3. Netlify

The repo ships with `netlify.toml` and `@netlify/plugin-nextjs` configured.

1. **Connect the repo.** Netlify → Add new site → Import from Git → pick the client's repo.
2. **Build settings** are read from `netlify.toml`. Confirm build command `npm run build` and the Next plugin is active.
3. **Environment variables.** Netlify → Site configuration → Environment variables. Add the same keys from the table above with the client's real values. Set scope to all (build + runtime). **This is the only place production secrets live.**
4. **Domain.** Netlify → Domain management → add the client's custom domain. Point DNS per Netlify's instructions. Update `lib/brand.ts` `domain` + `url` to match, and re-check `app/sitemap.ts` / `app/robots.ts`.
5. **Deploy.** Push to the production branch; Netlify builds automatically. Verify the build log shows all static pages generated.

## 4. Pre-launch checklist

- [ ] `.env.local` filled locally; the same keys set in Netlify env (never committed)
- [ ] Custom domain live, HTTPS provisioned
- [ ] `lib/brand.ts` domain/url match the live domain
- [ ] Contact form submits end to end (test a real submission lands in the inbox + CRM)
- [ ] Newsletter double opt-in works (or the section is removed if unused)
- [ ] GA4 firing on the live domain
- [ ] OG image renders in a link-preview debugger (LinkedIn / Facebook / X). Version the filename if a cache holds an old image.
- [ ] `npx next build` clean; Lighthouse pass (LCP, no layout shift, a11y)
- [ ] `grep -r "—"` returns nothing; no stale NAMI references

## 5. If you rotate or leak a key

1. Rotate it at the source (Mailchimp / Make / GA).
2. Update Netlify env and your local `.env.local`.
3. If it was ever committed, scrub history or, faster, treat the repo as compromised and rotate everything. Prevention beats cleanup: keep secrets out of git.

---

## Builder's note (Netlify CLI + GitHub, for NAMI internal use)

Tokens for the Netlify CLI (`NETLIFY_AUTH_TOKEN`) and `gh` live in your **local shell environment / OS credential store**, not in this repo. Authenticate the CLIs once on your machine:

```bash
gh auth login          # GitHub
netlify login          # Netlify (opens browser)
```

These authenticate the *tooling*, not the *site*, so they never belong in `.env.example` or any committed file.
