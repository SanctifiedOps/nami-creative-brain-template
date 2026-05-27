import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact · Start a brand, website, or systems project",
  description:
    "Start a conversation with the studio. A few questions on the form, scope and budget on the call. Personal response within one working day.",
  keywords: [
    "start a creative project",
    "book a creative studio call",
    "hire a brand studio",
    "brand consultation booking",
  ],
  openGraph: {
    title: `Contact · ${brand.name}`,
    description:
      "A few questions on the form. Scope and budget on the call. Personal response within one working day.",
    url: `${brand.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
