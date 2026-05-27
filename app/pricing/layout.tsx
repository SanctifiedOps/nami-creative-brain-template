import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Pricing · Project, partnership, and systems engagements",
  description:
    "Three ways to work with the studio: scoped projects, ongoing partnerships, and systems + product builds. Engagements sized to the work, not packaged into fixed bundles.",
  keywords: [
    "creative studio pricing",
    "brand engagement pricing",
    "creative retainer pricing",
    "brand studio cost",
  ],
  openGraph: {
    title: `Pricing · ${brand.name}`,
    description:
      "Project, partnership, and systems engagements. Sized to the work, never packaged.",
    url: `${brand.url}/pricing`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
