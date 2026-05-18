import type { Metadata } from "next";
import { privacyMeta, privacySections } from "@/features/legal/content";
import { LegalPageContent } from "@/features/legal/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | MBC",
  description: privacyMeta.subtitle,
};

export default function PrivacyPage() {
  const tocItems = privacySections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <LegalPageContent
      title={privacyMeta.title}
      subtitle={privacyMeta.subtitle}
      lastUpdated={privacyMeta.lastUpdated}
      tocItems={tocItems}
    >
      {privacySections.map((section) => (
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
