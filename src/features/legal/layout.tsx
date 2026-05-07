import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { TOC } from "@/components/toc";
import type { TOCItem } from "@/components/toc";
import { SiteFooter } from "@/features/landing/sections/site-footer";
import { SiteHeader } from "@/features/landing/sections/site-header";

export function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-mbc-page text-foreground">
      <div className="mbc-grid-overlay pointer-events-none absolute inset-0" />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-5 pb-14 md:px-8 lg:px-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </main>
    </div>
  );
}

type LegalPageContentProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  tocItems: TOCItem[];
  children: ReactNode;
};

export function LegalPageContent({
  title,
  subtitle,
  lastUpdated,
  tocItems,
  children,
}: LegalPageContentProps) {
  return (
    <>
      <div className="space-y-6 border-b border-border pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase no-underline transition-colors hover:text-primary"
        >
          <ArrowLeftIcon size={12} weight="bold" />
          Back to Home
        </Link>

        <div className="space-y-3">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            Legal · {lastUpdated}
          </p>
          <h1 className="font-display text-5xl leading-none uppercase md:text-7xl">
            {title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex gap-16 pb-4">
        <article className="min-w-0 flex-1 space-y-12">{children}</article>

        <div className="hidden w-48 shrink-0 xl:block">
          <TOC items={tocItems} className="sticky top-24" />
        </div>
      </div>
    </>
  );
}
