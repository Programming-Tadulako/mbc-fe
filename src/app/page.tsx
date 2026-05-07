import {
  FleetSection,
  HeroSection,
  RegistrySection,
  ValuesSection,
  SiteHeader,
  AboutSection,
  SiteFooter,
  ClientSection,
  ServicesSection,
  ContactSection,
} from "@/features/landing/sections";

export default function Home() {
  return (
    <div className="relative bg-mbc-page pb-10 text-foreground">
      <div className="mbc-grid-overlay pointer-events-none absolute inset-0" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PT. Mitra Borneo Cemerlang",
            url: "https://mitraborneorent.com",
            logo: "https://mitraborneorent.com/favicon.ico",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-542-5463019",
              contactType: "customer service",
              areaServed: "ID",
              availableLanguage: "Indonesian",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Jenderal Ahmad Yani No.09",
              addressLocality: "Balikpapan",
              addressCountry: "ID",
            },
            sameAs: [
              // Add social media links here if available
            ],
          }),
        }}
      />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-5 pb-12 md:gap-14 md:px-8 lg:px-10">
        <SiteHeader />
        <HeroSection />
        {/* <ShowcaseSection /> */}
        <ValuesSection />
        <ServicesSection />
        <FleetSection />
        <AboutSection />
        <ClientSection />
        <RegistrySection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
