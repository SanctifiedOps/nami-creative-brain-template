import type { LucideIcon } from "lucide-react";
import { Sparkles, Layers, Zap } from "lucide-react";

export type CaseStudyAccent = "magenta" | "cyan" | "amber" | "violet";

export type CaseStudy = {
  slug: string;
  index: string;
  client: string;
  sector: string;
  year: string;
  status: "Live" | "Ongoing" | "Recently shipped" | "In delivery";
  liveUrl: string;
  cover: string;
  pillars: string[];
  tagline: string;
  /** Hero-title split: lead in default colour, accent in gradient on a new line. */
  heroTitle: { lead: string; accent: string };
  oneLiner: string;
  brief: string;
  approach: string[];
  deliverables: string[];
  outcomes?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  icon: LucideIcon;
  accent: CaseStudyAccent;
  featured?: boolean;
};

/**
 * Placeholder case studies. Replace each with a real project once delivered.
 * Keep covers in /public and point `cover` at them. Set a real `liveUrl`.
 */
export const work: CaseStudy[] = [
  {
    slug: "project-one",
    index: "01",
    client: "Client name",
    sector: "Sector",
    year: "2025",
    status: "Live",
    liveUrl: "#",
    cover: "/placeholder-cover.svg",
    pillars: ["Brand", "Website", "Content"],
    tagline: "A short, memorable line about this project.",
    heroTitle: {
      lead: "A headline for the project,",
      accent: "split across two lines.",
    },
    oneLiner: "A one-line summary of what the studio built for this client.",
    brief:
      "Placeholder brief. Describe the client's situation, what they needed, and the constraints the work had to hold. Two or three sentences.",
    approach: [
      "First phase of the approach. Describe what was decided and why, in the studio's own voice.",
      "Second phase. What was designed or built, and how it connected to the goal.",
      "Third phase. How it shipped and what kept it running after launch.",
    ],
    deliverables: [
      "Deliverable one",
      "Deliverable two",
      "Deliverable three",
      "Deliverable four",
    ],
    outcomes: [
      { label: "Metric label", value: "00" },
      { label: "Metric label", value: "00" },
      { label: "Metric label", value: "00" },
    ],
    icon: Sparkles,
    accent: "magenta",
    featured: true,
  },
  {
    slug: "project-two",
    index: "02",
    client: "Client name",
    sector: "Sector",
    year: "2025",
    status: "Live",
    liveUrl: "#",
    cover: "/placeholder-cover.svg",
    pillars: ["Brand", "Content"],
    tagline: "A short, memorable line about this project.",
    heroTitle: {
      lead: "A second project",
      accent: "headline.",
    },
    oneLiner: "A one-line summary of the second placeholder project.",
    brief:
      "Placeholder brief for the second project. Replace with the real situation, need, and constraints.",
    approach: [
      "Phase one of the approach for this project.",
      "Phase two of the approach for this project.",
      "Phase three of the approach for this project.",
    ],
    deliverables: [
      "Deliverable one",
      "Deliverable two",
      "Deliverable three",
    ],
    outcomes: [
      { label: "Metric label", value: "00" },
      { label: "Metric label", value: "00" },
    ],
    icon: Layers,
    accent: "violet",
    featured: false,
  },
  {
    slug: "project-three",
    index: "03",
    client: "Client name",
    sector: "Sector",
    year: "2024",
    status: "Recently shipped",
    liveUrl: "#",
    cover: "/placeholder-cover.svg",
    pillars: ["Website", "Automation"],
    tagline: "A short, memorable line about this project.",
    heroTitle: {
      lead: "A third project",
      accent: "headline.",
    },
    oneLiner: "A one-line summary of the third placeholder project.",
    brief:
      "Placeholder brief for the third project. Replace with the real situation, need, and constraints.",
    approach: [
      "Phase one of the approach for this project.",
      "Phase two of the approach for this project.",
      "Phase three of the approach for this project.",
    ],
    deliverables: [
      "Deliverable one",
      "Deliverable two",
      "Deliverable three",
    ],
    outcomes: [
      { label: "Metric label", value: "00" },
      { label: "Metric label", value: "00" },
    ],
    icon: Zap,
    accent: "cyan",
    featured: false,
  },
];

export function getCaseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}

export function getFeaturedWork(): CaseStudy[] {
  return work.filter((w) => w.featured);
}

export const ACCENT_GRADIENTS: Record<
  CaseStudyAccent,
  { from: string; to: string; glow: string }
> = {
  magenta: {
    from: "rgb(255 0 188 / 0.55)",
    to: "rgb(100 200 255 / 0.18)",
    glow: "rgb(255 0 188 / 0.25)",
  },
  cyan: {
    from: "rgb(100 200 255 / 0.5)",
    to: "rgb(40 120 200 / 0.18)",
    glow: "rgb(100 200 255 / 0.22)",
  },
  amber: {
    from: "rgb(255 180 80 / 0.5)",
    to: "rgb(255 0 188 / 0.2)",
    glow: "rgb(255 180 80 / 0.22)",
  },
  violet: {
    from: "rgb(180 100 255 / 0.5)",
    to: "rgb(80 50 200 / 0.2)",
    glow: "rgb(180 100 255 / 0.22)",
  },
};
