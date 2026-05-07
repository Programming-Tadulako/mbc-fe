import Image from "next/image";
import { aboutSection } from "@/features/landing/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-md border border-border bg-white p-4 py-8 md:scroll-mt-28 md:p-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl space-y-20">
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

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 md:gap-x-12">
          {aboutSection.members.map((member, idx) => (
            <article
              key={member.name}
              className="group relative flex w-full max-w-72 animate-in flex-col items-center gap-6 duration-1000 fade-in slide-in-from-bottom-8 md:max-w-xs"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-xl transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-primary/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-101 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>

              <div className="flex flex-col items-center space-y-2 text-center transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <h3 className="font-display text-2xl tracking-wider uppercase md:text-3xl">
                  {member.name}
                </h3>
                <p className="font-mono text-sm tracking-widest text-primary uppercase">
                  {member.position}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
