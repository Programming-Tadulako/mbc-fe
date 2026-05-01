import { cities } from "@/features/landing/constants";

export function CitiesSection() {
  return (
    <section className="relative flex overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee hover:paused">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 pr-10 md:gap-16 md:pr-16">
            {cities.map((city) => (
              <p
                key={`${city}-${i}`}
                className="whitespace-nowrap font-display text-3xl tracking-wide text-mbc-soft uppercase md:text-4xl"
              >
                {city}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
