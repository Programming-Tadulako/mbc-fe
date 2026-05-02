import type { Metadata } from "next";
import { LegalPageContent } from "@/features/legal/layout";
import { termsMeta, termsSections } from "@/features/legal/content";

export const metadata: Metadata = {
  title: "Terms of Service | MBC",
  description: termsMeta.subtitle,
};

export default function TermsPage() {
  const tocItems = termsSections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <LegalPageContent
      title={termsMeta.title}
      subtitle={termsMeta.subtitle}
      lastUpdated={termsMeta.lastUpdated}
      tocItems={tocItems}
    >
      {termsSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 space-y-4"
        >
          <h2 className="font-display text-3xl leading-none uppercase md:text-4xl">
            {section.title}
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {section.body}
          </p>

          {section.bullets && (
            <ul className="space-y-2 border-l-2 border-primary/20 pl-4">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </LegalPageContent>
  );
}
