import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} · home`}
      className={cn(
        "group inline-flex items-center transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt={brand.name}
        width={200}
        height={40}
        priority
        className="h-7 w-auto md:h-8"
      />
    </Link>
  );
}
