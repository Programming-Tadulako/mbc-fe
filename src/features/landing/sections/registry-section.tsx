import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/card";
import { registry } from "@/features/landing/constants";

export function RegistrySection() {
  return (
    <section
      id="registry"
      className="scroll-mt-24 rounded-md border border-border bg-zinc-800 px-4 py-8 md:scroll-mt-28 md:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <ShieldCheckIcon
              className="text-primary"
              size={32}
              weight="duotone"
            />
          </div>
          <h2 className="font-display text-4xl leading-none text-secondary uppercase md:text-5xl">
            Corporate <span className="text-primary">Registry Verified</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {registry.body}
          </p>
          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
              <ShieldCheckIcon
                className="text-primary"
                size={18}
                weight="fill"
              />
            </div>
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Legally Compliant & Fully Registered
            </span>
          </div>
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
