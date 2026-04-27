import { Card, CardContent } from "@/components/ui/card";
import { registry } from "@/features/landing/constants";

export function RegistrySection() {
  return (
    <section
      id="registry"
      className="rounded-md border border-border bg-mbc-surface px-4 py-8 md:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-display text-4xl leading-none uppercase md:text-5xl">
            Corporate <span className="text-primary">Registry Verified</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {registry.body}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {registry.blocks.map((block) => (
            <Card key={block.key} className="bg-mbc-page">
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {block.key}
                </span>
                <span className="font-semibold tracking-wide">
                  {block.value}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
