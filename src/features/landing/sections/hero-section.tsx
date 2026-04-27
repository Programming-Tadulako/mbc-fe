import Link from "next/link";
import { CertificateIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hero } from "@/features/landing/constants";

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-8">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">
          {hero.registry}
        </p>
        <h1 className="max-w-xl font-display text-6xl leading-none uppercase md:text-8xl">
          {hero.title[0]} <span className="text-primary">{hero.title[1]}</span>{" "}
          {hero.title[2]}
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          {hero.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <Link key={cta.label} href={cta.href}>
              <Button variant={cta.variant}>
                {cta.label}
                {cta.icon && <cta.icon data-icon="inline-end" />}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-5 border-l border-border pl-0 lg:pl-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {hero.subtitle}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {hero.achievement}
        </p>
        <Card className="border-primary/20 bg-white/95">
          <CardHeader className="pb-4">
            <CardDescription className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {hero.certificate.id}
            </CardDescription>
            <CardTitle className="text-sm">{hero.certificate.label}</CardTitle>
          </CardHeader>
          <CardFooter>
            <CertificateIcon
              className="text-primary"
              size={24}
              weight="duotone"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
