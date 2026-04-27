import { cities } from "@/features/landing/constants";

export function CitiesSection() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 border-y border-border py-6">
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
