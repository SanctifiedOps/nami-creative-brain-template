import type { LucideIcon } from "lucide-react";
import { Compass, Layers, Globe, Eye, Zap } from "lucide-react";

export type Service = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  pillar: "Brand" | "Content" | "Systems";
  deliverables: string[];
  outcome: string;
};

/**
 * Placeholder service pillars. Edit titles, copy, and deliverables to match
 * the studio's real offer. Slugs here must match the footer links in
 * lib/nav.ts and the serviceFaq keys in lib/content/faq.ts.
 */
export const services: Service[] = [
  {
    slug: "brand-strategy",
    index: "01",
    title: "Brand strategy + identity",
    tagline: "Positioning and identity the whole business can run on.",
    description:
      "Placeholder description for your brand offering: positioning, messaging, tone of voice, and visual direction, assembled into a framework the team uses day to day.",
    icon: Compass,
    pillar: "Brand",
    deliverables: [
      "Positioning + audience definition",
      "Messaging hierarchy + tone of voice",
      "Visual identity direction",
      "Applied brand guidelines",
      "Brand book",
    ],
    outcome:
      "A brand that holds together everywhere it appears. Replace with the specific outcome this service delivers.",
  },
  {
    slug: "content-systems",
    index: "02",
    title: "Content systems",
    tagline: "A repeatable content engine, not a stream of one-off posts.",
    description:
      "Placeholder description for your content offering: formats, platform strategy, and a production workflow designed so every output supports the next.",
    icon: Layers,
    pillar: "Content",
    deliverables: [
      "Content pillars + format library",
      "Platform strategy",
      "Editorial calendar + workflow",
      "Production templates",
      "Performance review",
    ],
    outcome:
      "Content that compounds instead of resetting each week. Replace with your real outcome.",
  },
  {
    slug: "website-design",
    index: "03",
    title: "Website design + build",
    tagline: "Websites built as conversion environments, not brochures.",
    description:
      "Placeholder description for your website offering: architecture, messaging hierarchy, and a performant build designed around the action you want visitors to take.",
    icon: Globe,
    pillar: "Brand",
    deliverables: [
      "Site architecture + user flow",
      "Conversion-led copywriting",
      "Design system",
      "Performant build",
      "Analytics setup",
    ],
    outcome:
      "Traffic that turns into action. Replace with the specific result this delivers.",
  },
  {
    slug: "visual-direction",
    index: "04",
    title: "Visual direction",
    tagline: "Make the brand recognisable everywhere it shows up.",
    description:
      "Placeholder description for your creative direction offering: a cohesive visual language across content, product, and campaign, directed for consistency.",
    icon: Eye,
    pillar: "Brand",
    deliverables: [
      "Creative + art direction",
      "Visual systems + asset libraries",
      "Photography + video direction",
      "Campaign concepts",
      "Cross-platform style guides",
    ],
    outcome:
      "Recognition before recall. Replace with your real outcome.",
  },
  {
    slug: "automation-growth",
    index: "05",
    title: "Automation + growth",
    tagline: "The systems that let the brand keep up with the business.",
    description:
      "Placeholder description for your systems offering: lifecycle email, lead-capture pipelines, and automations that keep the brand consistent as it scales.",
    icon: Zap,
    pillar: "Systems",
    deliverables: [
      "Lead-capture + nurture pipelines",
      "CRM + operations stack",
      "Content automation",
      "Lifecycle email",
      "Reporting + dashboards",
    ],
    outcome:
      "Less manual work, more leverage. Replace with the specific result this delivers.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
