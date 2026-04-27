import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hero } from "@/features/landing/constants";

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative h-70 overflow-hidden rounded-3xl md:h-105"
    >
      <Image
        src={hero.heroImage}
        alt="Premium fleet vehicle"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1120px"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
      <Card className="absolute bottom-3 left-3 w-fit min-w-40 rounded-sm border-primary/25 bg-white/95 py-5 md:bottom-5 md:left-5 md:max-w-sm">
        <CardHeader>
          <CardDescription className="font-mono text-xs tracking-widest uppercase">
            {hero.stats.label}
          </CardDescription>
          <CardTitle className="text-3xl leading-none text-primary">
            {hero.stats.vehicles}
          </CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}
