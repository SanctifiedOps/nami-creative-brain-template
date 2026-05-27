import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { instrumentSans } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/providers/custom-cursor";
import { MotionProvider } from "@/components/providers/motion-config";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import {
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/components/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} · ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "creative studio",
    "brand studio",
    "design studio",
    "brand strategy",
    "content systems",
    "website design",
  ],
  metadataBase: new URL(brand.url),
  // Bing/Webmaster site-ownership token. Per-site value; set
  // NEXT_PUBLIC_BING_SITE_VERIFICATION in env once the
  // Webmaster account is verified. Renders nothing when unset.
  ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? {
        verification: {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: brand.locale,
    title: `${brand.name} · ${brand.tagline}`,
    description: brand.description,
    images: [
      {
        url: "/og.svg",
        width: 1600,
        height: 1000,
        alt: `${brand.name} · ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} · ${brand.tagline}`,
    description: brand.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={instrumentSans.variable}
      suppressHydrationWarning
    >
      <body className="bg-surface-0 text-fg antialiased">
        <JsonLd
          schema={[organizationSchema, localBusinessSchema, websiteSchema]}
        />
        <SmoothScroll />
        <CustomCursor />
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
