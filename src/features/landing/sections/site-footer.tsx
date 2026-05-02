import Link from "next/link";
import { footer } from "@/features/landing/constants";

export function SiteFooter() {
  return (
    <footer className="space-y-8 border-t border-border pt-8">
      <div className="grid gap-7 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-3xl text-primary uppercase">
            {footer.company}
          </p>
          <p className="text-sm text-muted-foreground">{footer.legalName}</p>
          <p className="text-sm text-muted-foreground">{footer.address}</p>
          <Link
            className="text-sm text-primary"
            href={`mailto:${footer.email}`}
          >
            {footer.email}
          </Link>
        </div>

        <div className="space-y-2">
          {footer.links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-y-2">
          {footer.links.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="border-t border-border py-5 text-xs text-muted-foreground">
        {footer.copyright}
      </p>
    </footer>
  );
}
