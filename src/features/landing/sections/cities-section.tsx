import Image from "next/image";
import { cities } from "@/features/landing/constants";

export function CitiesSection() {
  return (
    <section className="space-y-8 overflow-hidden border-y border-border ">
      <div className="px-4 text-center md:px-8">
        <h2 className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
          Our Client
        </h2>
      </div>
      <div className="relative flex w-full">
        <div className="flex w-max animate-marquee hover:paused">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-6 pr-6 md:gap-8 md:pr-8"
            >
              {cities.map((city) => (
                <div
                  key={`${city.name}-${i}`}
                  className="group flex w-48 flex-col items-center gap-4 md:w-64"
                >
                  <div className="relative aspect-square w-32 md:w-40">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="text-center font-display text-sm tracking-widest text-muted-foreground uppercase md:text-base">
                    {city.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
