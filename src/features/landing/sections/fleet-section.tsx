import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fleet } from "@/features/landing/constants";

export function FleetSection() {
  return (
    <section
      id="fleet"
      className="scroll-mt-8 space-y-8 rounded-md border border-border bg-mbc-surface p-4 md:scroll-mt-16 md:p-8"
    >
      <h2 className="text-center font-display text-5xl uppercase md:text-6xl">
        The <span className="text-primary">Fleet</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {fleet.cards.map((car) => (
          <Card
            key={car.name}
            className="overflow-hidden rounded-xs border-primary/30 bg-white"
          >
            {car.image ? (
              <Image
                src={car.image}
                alt={car.name}
                width={1024}
                height={768}
                className="aspect-video object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : null}
            <CardHeader>
              <CardDescription className="font-mono text-xs tracking-widest text-primary uppercase">
                {car.tag}
              </CardDescription>
              <CardTitle className="text-3xl leading-none">
                {car.name}
              </CardTitle>
              <CardDescription>{car.detail}</CardDescription>
            </CardHeader>
            <CardFooter className="flex-wrap justify-between gap-2 border-t border-border pt-4">
              <div className="flex items-center gap-2">
                {car.specs?.map((spec) => (
                  <Badge key={spec} variant="secondary">
                    {spec}
                  </Badge>
                ))}
              </div>
              <p className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-primary uppercase">
                {car.quote ?? "Request Quote"}
                <ArrowRightIcon size={12} weight="bold" />
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
