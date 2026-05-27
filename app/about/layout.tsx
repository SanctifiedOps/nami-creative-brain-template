import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { JsonLd, founderPersonSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the studio: who we are, how we work, and the kind of projects we take on. Replace this placeholder description with your own about copy.",
  keywords: [
    "about the studio",
    "creative studio founder",
    "creative director",
    "brand studio",
  ],
  openGraph: {
    title: `About · ${brand.name}`,
    description:
      "About the studio: who we are, how we work, and the kind of projects we take on.",
    url: `${brand.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd schema={founderPersonSchema} />
      {children}
    </>
  );
}
