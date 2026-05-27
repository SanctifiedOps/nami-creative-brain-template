/**
 * ─────────────────────────────────────────────────────────────────────────
 * BRAND CONFIG — the single swap-point for a new client site.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * This file holds the brand's textual identity + links. Editing it (plus the
 * three sibling swap points below) re-skins the whole template:
 *
 *   1. lib/brand.ts        ← you are here  (name, domain, email, socials, copy)
 *   2. app/globals.css      → the @theme block  (colours, surfaces, accents)
 *   3. lib/fonts.ts         → the typeface(s)
 *   4. public/ + lib/content/* → logo, OG image, favicon, and the content
 *                                modules (services, work, faq, testimonials…)
 *
 * The values below are NAMI Creative's, kept as the worked example. Run the
 * discovery flow in CONTEXT/discovery.md to source a client's real values,
 * then replace them. See CONTEXT/build-spec.md for the full re-skin checklist.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Icon key — wire to your icon set in components/icons/socials.tsx */
  icon: "linkedin" | "instagram" | "youtube" | "facebook" | "x" | "tiktok";
};

export const brand = {
  /** Display name used in copy + metadata. */
  name: "NAMI Creative",
  /** Legal/trading name, for footer + legal pages. */
  legalName: "NAMI Creative",
  /** Short name for tight spaces. */
  shortName: "NAMI",

  /** Production domain (no protocol) + full URL (with protocol). */
  domain: "namicreative.co.uk",
  url: "https://namicreative.co.uk",

  /** Primary contact inbox. */
  email: "hello@namicreative.co.uk",

  /** Where the studio is based + market served. */
  location: "Newcastle upon Tyne, UK",
  servesText: "Working globally",

  /** One-line positioning + the brand promise. */
  tagline: "Creative systems built for real-world momentum.",
  promise: "We Build Brands That Move With Meaning.",

  /** Default <meta description> — keep ~150–160 chars. */
  description:
    "Independent creative studio for founders, working globally. One creative partner across brand strategy, content systems, websites, visual direction, and growth automation.",

  /** Locale for openGraph + html lang. */
  locale: "en_GB",
  lang: "en",

  /** Social profiles rendered in the footer. */
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/98101073", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/namicreativeuk/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/@namiupcreative", icon: "youtube" },
    { label: "Facebook", href: "https://facebook.com/namicreativeuk", icon: "facebook" },
  ] satisfies SocialLink[],
} as const;

export type Brand = typeof brand;
