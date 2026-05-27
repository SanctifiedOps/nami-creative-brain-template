import Image from "next/image";
import Link from "next/link";
import {
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from "@/components/icons/socials";
import { footerNav } from "@/lib/nav";
import { brand } from "@/lib/brand";
import { FooterCta } from "./footer-cta";

const socialIcons = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
} as const;

const socials = brand.socials
  .filter((s) => s.icon in socialIcons)
  .map((s) => ({
    label: s.label,
    href: s.href,
    icon: socialIcons[s.icon as keyof typeof socialIcons],
  }));

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-line bg-linear-to-b from-surface-0 to-surface-1">
      <FooterCta />

      {/* Sitemap */}
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Link href="/" aria-label={`${brand.name} · home`} className="inline-flex -ml-2 items-center transition-opacity duration-300 hover:opacity-80">
              <Image
                src="/logo.svg"
                alt={brand.name}
                width={200}
                height={40}
                className="h-8 w-auto md:h-9"
              />
            </Link>
            <p className="max-w-xs text-sm text-fg-muted leading-relaxed">
              {brand.description}
            </p>
            <p className="max-w-xs text-xs uppercase tracking-[0.32em] text-fg-subtle pt-1">
              {brand.tagline}
            </p>
            <ul className="flex items-center gap-3 pt-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} on ${s.label}`}
                      className="inline-grid size-11 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={16} aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerNav.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="space-y-4"
            >
              <p className="eyebrow">{column.title}</p>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-line">
        <div className="container-shell flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} {brand.legalName}. {brand.servesText}.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-fg-subtle">
            <li>
              <Link
                href="/privacy"
                className="hover:text-fg-muted transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-fg-muted transition-colors"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-fg-muted transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
