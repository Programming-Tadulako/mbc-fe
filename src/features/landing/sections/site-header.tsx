import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/features/landing/constants";

export function SiteHeader() {
  return (
    <header className="rounded-sm border border-border/80 bg-white/95 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex items-center justify-between gap-6">
        <p className="font-display text-2xl tracking-wide text-primary uppercase">
          MBC
        </p>
        <nav className="hidden flex-wrap items-center gap-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              data-active={item === "Home" ? "true" : "false"}
              className="data-[active=true]:text-primary data-[active=true]:underline data-[active=true]:underline-offset-4"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button size="sm">Enquire Now</Button>
      </div>
    </header>
  );
}
