import { cities } from "@/features/landing/constants";

export function CitiesSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5 border-y border-border py-6 md:justify-between">
      {cities.map((city) => (
        <p
          key={city}
          className="font-display text-3xl tracking-wide text-mbc-soft uppercase md:text-4xl"
        >
          {city}
        </p>
      ))}
    </section>
  );
}
