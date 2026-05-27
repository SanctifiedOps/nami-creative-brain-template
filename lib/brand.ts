/**
 * ─────────────────────────────────────────────────────────────────────────
 * BRAND CONFIG - the single swap-point for a new client site.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * This file holds the brand's textual identity + links. Editing it (plus the
 * three sibling swap points below) re-skins the whole template:
 *
 *   1. lib/brand.ts        ← you are here  (name, domain, email, socials, copy)
 *   2. app/globals.css     → the @theme block  (colours, surfaces, accents)
 *   3. lib/fonts.ts        → the typeface(s)
 *   4. public/ + lib/content/* → logo, OG image, favicon, and the content
 *                                modules (services, work, faq, testimonials)
 *
 * The values below are neutral placeholders. Run the discovery flow in
 * CONTEXT/discovery.md to source a client's real values, then replace them.
 * See CONTEXT/build-spec.md for the full re-skin checklist.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Icon key. Wire to your icon set in components/icons/socials.tsx */
  icon: "linkedin" | "instagram" | "youtube" | "facebook" | "x" | "tiktok";
};

export const brand = {
  /** Display name used in copy + metadata. */
  name: "Studio",
  /** Legal/trading name, for footer + legal pages. */
  legalName: "Studio Ltd",
  /** Short name for tight spaces. */
  shortName: "Studio",

  /** Production domain (no protocol) + full URL (with protocol). */
  domain: "yourstudio.com",
  url: "https://yourstudio.com",

  /** Primary contact inbox. */
  email: "hello@yourstudio.com",

  /** Where the studio is based + market served. */
  location: "Your City, Country",
  servesText: "Working with clients everywhere",

  /** One-line positioning + the brand promise. */
  tagline: "Your one-line positioning goes here.",
  promise: "The promise your brand makes, in one line.",

  /** Default <meta description>. Keep ~150 to 160 chars. */
  description:
    "A creative studio template. Replace this with your studio's positioning across brand, design, websites, and growth.",

  /** Locale for openGraph + html lang. */
  locale: "en_GB",
  lang: "en",

  /** Social profiles rendered in the footer. Set real URLs per client. */
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "Facebook", href: "#", icon: "facebook" },
  ] satisfies SocialLink[],
} as const;

export type Brand = typeof brand;
