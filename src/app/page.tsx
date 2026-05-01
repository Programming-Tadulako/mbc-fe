import {
  FleetSection,
  HeroSection,
  RegistrySection,
  ShowcaseSection,
  ValuesSection,
  SiteHeader,
  AboutSection,
  SiteFooter,
  CitiesSection,
  ServicesSection,
  ContactSection,
} from "@/features/landing/sections";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-mbc-page pb-10 text-foreground">
      <div className="mbc-grid-overlay pointer-events-none absolute inset-0" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-5 pb-14 md:gap-16 md:px-8 lg:px-10">
        <SiteHeader />
        <HeroSection />
        <ShowcaseSection />
        <ValuesSection />
        <ServicesSection />
        <FleetSection />
        <AboutSection />
        <CitiesSection />
        <RegistrySection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
