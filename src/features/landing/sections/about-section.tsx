import Image from "next/image";
import { Card } from "@/components/ui/card";
import { aboutSection } from "@/features/landing/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-md border border-border p-4 py-8 md:scroll-mt-28 md:p-8"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <p className="inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary uppercase">
            About Us
          </p>
          <h2 className="font-display text-5xl leading-none tracking-tight uppercase md:text-7xl">
            {aboutSection.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {aboutSection.subtitle}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutSection.members.map((member, idx) => (
            <article
              key={member.name}
              className="group animate-in duration-1000 fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <Card className="relative aspect-3/4 gap-0 overflow-hidden rounded-2xl bg-transparent py-0 shadow-none ring-0 transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, 336px"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-3 px-6 py-7 text-center opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-display text-2xl tracking-wider text-white uppercase drop-shadow md:text-3xl">
                    {member.name}
                  </h3>
                  {member.position && (
                    <p className="mt-1.5 font-mono text-xs tracking-widest text-white/70 uppercase">
                      {member.position}
                    </p>
                  )}
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
