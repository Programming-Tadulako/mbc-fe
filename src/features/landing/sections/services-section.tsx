import {
  FlagIcon,
  GaugeIcon,
  HeadsetIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/features/landing/constants";

const srvIcons = [GaugeIcon, ShieldCheckIcon, HeadsetIcon, FlagIcon];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 space-y-8 rounded-md border border-border bg-white px-4 py-6 md:scroll-mt-28 md:px-8 md:py-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl leading-none uppercase md:text-5xl">
          Operational <span className="text-primary">Excellence</span>
        </h2>
        <p className="max-w-sm text-right font-mono text-xs tracking-widest text-primary uppercase">
          {services.subtitle}
        </p>
      </div>
      <div className="grid gap-0 border border-border md:grid-cols-2 lg:grid-cols-4">
        {services.items.map((item, idx) => {
          const Icon = srvIcons[idx];
          return (
            <article
              key={item.title}
              className="group border-b border-border p-5 last:border-b-0 md:border-r md:border-b-0 last:md:border-r-0"
            >
              <div className="space-y-4">
                <Icon
                  className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
                  size={20}
                  weight="duotone"
                />
                <div className="space-y-2">
                  <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
