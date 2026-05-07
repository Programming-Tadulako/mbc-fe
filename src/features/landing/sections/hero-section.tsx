import Image from "next/image";
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
    <section className="relative overflow-hidden rounded-[2rem] bg-zinc-900 px-8 py-12 lg:px-16 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Luxury Car Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            {hero.registry}
          </p>
          <h1 className="max-w-xl font-display text-5xl text-white uppercase md:text-7xl md:leading-none lg:text-8xl">
            {hero.title[0]}{" "}
            <span className="text-primary">{hero.title[1]}</span>{" "}
            {hero.title[2]}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-zinc-300 md:text-base">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <Link key={cta.label} href={cta.href}>
                <Button
                  variant={cta.variant}
                  className={
                    cta.variant === "outline"
                      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                      : ""
                  }
                >
                  {cta.label}
                  {cta.icon && <cta.icon data-icon="inline-end" />}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
              {hero.subtitle}
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 lg:text-base">
              {hero.achievement}
            </p>
          </div>

          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardHeader className="pb-4">
              <CardDescription className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
                {hero.certificate.id}
              </CardDescription>
              <CardTitle className="text-sm text-white">
                {hero.certificate.label}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <CertificateIcon
                  className="text-primary"
                  size={24}
                  weight="duotone"
                />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
