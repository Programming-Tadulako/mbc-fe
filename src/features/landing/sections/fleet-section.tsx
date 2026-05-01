import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingFleet, pricingStats } from "@/features/landing/constants";

export function FleetSection() {
  return (
    <section
      id="fleet"
      className="scroll-mt-24 space-y-12 rounded-md border border-border bg-zinc-800 p-4 md:scroll-mt-28 md:p-8"
    >
      <div className="space-y-4 text-center md:text-left">
        <h2 className="font-display text-4xl text-secondary uppercase md:text-6xl">
          {pricingFleet.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {pricingFleet.subtitle}
        </p>
      </div>

      {/* Stats/Highlights */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="p-4">
            <CardDescription className="text-white/60">
              Fleet Capacity
            </CardDescription>
            <CardTitle className="text-2xl">
              {pricingStats.totalUnits}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="p-4">
            <CardDescription className="text-white/60">
              Unit Categories
            </CardDescription>
            <CardTitle className="text-2xl">
              {pricingStats.categories}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="p-4">
            <CardDescription className="text-white/60">
              Sustainable Fleet
            </CardDescription>
            <CardTitle className="text-2xl">{pricingStats.evOptions}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingFleet.categories.map((category) => {
          const unit = category.units[0];
          return (
            <Card
              key={unit.model}
              className="group overflow-hidden rounded-md border-primary/30 bg-white transition-all hover:border-primary/60 hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                <Image
                  src={unit.image}
                  alt={unit.model}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1 p-5 pb-4">
                <CardDescription className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                  {category.name}
                </CardDescription>
                <CardTitle className="text-lg leading-tight md:text-xl">
                  {unit.model}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Link href="/pricing">
          <Button
            size="lg"
            variant="secondary"
            className="px-8 font-semibold tracking-widest uppercase"
          >
            View Full Fleet List
            <ArrowRightIcon className="ml-2" weight="bold" />
          </Button>
        </Link>
      </div>

      <div className="rounded-md bg-white/5 p-4 text-center">
        <p className="text-xs text-white/50">
          <ShieldCheckIcon className="-mt-0.5 mr-1 inline-block" />
          {pricingFleet.disclaimer} (Updated: {pricingFleet.lastUpdated})
        </p>
      </div>
    </section>
  );
}
