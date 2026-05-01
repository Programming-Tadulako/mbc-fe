import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
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
import { pricingFleet } from "@/features/landing/constants";

export default function Pricing() {
  return (
    <section className="mt-4 space-y-12 rounded-md border border-border bg-zinc-800 p-4 md:p-8">
      <Link href="/#fleet">
        <Button variant="secondary" className="mb-4">
          <ArrowLeftIcon className="mr-2" /> Back to Home
        </Button>
      </Link>
      <div className="space-y-6 text-center md:text-left">
        <h1 className="font-display text-4xl text-secondary uppercase md:text-6xl">
          Complete <span className="text-primary">Fleet List</span>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {pricingFleet.subtitle} Browse our full catalog of premium, hybrid,
          and standard units available for corporate rental.
        </p>
      </div>

      <div className="space-y-16">
        {pricingFleet.categories.map((category) => (
          <div key={category.name} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <h3 className="font-display text-3xl tracking-wide text-primary uppercase">
                {category.name}
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.units.map((unit) => (
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
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-md bg-white/5 p-4 text-center">
        <p className="text-xs text-white/50">
          <ShieldCheckIcon className="-mt-0.5 mr-1 inline-block" />
          {pricingFleet.disclaimer} (Updated: {pricingFleet.lastUpdated})
        </p>
      </div>
    </section>
  );
}
