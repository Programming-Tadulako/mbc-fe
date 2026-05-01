import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/features/landing/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-5 z-10 rounded-sm border border-border/80 bg-white/95 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex items-center justify-between gap-6">
        <Link
          href={"/"}
          className="font-display text-2xl tracking-wide text-primary uppercase"
        >
          MBC
        </Link>
        <nav className="hidden flex-wrap items-center gap-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              data-active={item.label === "Home" ? "true" : "false"}
              className="transition-colors hover:text-primary focus:text-primary data-[active=true]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button size="sm">Enquire Now</Button>
      </div>
    </header>
  );
}
