import type { Route } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export const navItems = [
  { label: "Services", href: "/#services" as Route },
  { label: "Fleet", href: "/#fleet" as Route },
  { label: "About", href: "/#about" as Route },
  { label: "Legalities", href: "/#registry" as Route },
  { label: "Contact", href: "/#contact" as Route },
];

export const hero = {
  registry: "Established Registry No. 180420031281",
  subtitle: "Strategic transportation partner",
  title: ["Strategic", "Mobility", "Partner"],
  description:
    "Delivering reliable, efficient, and scalable vehicle rental solutions for corporate and institutional clients. Ensuring seamless mobility and uninterrupted business operations.",
  achievement:
    "Trusted by government institutions across Kalimantan and Central Sulawesi for professional fleet management and responsive support.",
  certificate: {
    id: "NIB: 1604250031831",
    label: "OSS Verified PMDN",
  },
  stats: {
    vehicles: "Diverse",
    label: "Hybrid & EV Ready",
  },
  ctas: [
    {
      label: "Explore Fleet",
      href: "#fleet" as Route,
      variant: "default" as const,
      icon: ArrowUpRightIcon,
    },
    {
      label: "Get In Touch",
      href: "#contact" as Route,
      variant: "outline" as const,
    },
  ],
  heroImage: "/images/hero-bg.png",
};

export const valueSection = {
  title: "Integrity & Professionalism",
  body: "With a foundation of integrity, professionalism, and continuous improvement, MBC is dedicated to building long-term partnerships and delivering measurable value through every mobility solution.",
  chips: ["Integrity", "Professionalism", "Continuous Improvement"],
  cards: [
    {
      title: "Vision",
      body: "Trusted transportation partner.",
    },
    {
      title: "Mission",
      body: "Professional service, reliable fleet, long-term partnership.",
    },
  ],
};

export const services = {
  title: "Service Level Agreement",
  subtitle:
    "Our commitment to consistent service quality and operational efficiency.",
  items: [
    {
      title: "Vehicle Readiness",
      body: "Maintaining maximum vehicle readiness through disciplined fleet management and high operational standards.",
    },
    {
      title: "Timely Logistics",
      body: "Ensuring timely delivery and pickup of vehicles to minimize operational disruptions for your business.",
    },
    {
      title: "Responsive Support",
      body: "Providing responsive customer support to address any needs or inquiries promptly.",
    },
    {
      title: "Proactive Maintenance",
      body: "Minimizing disruptions through regular maintenance and proactive fleet management.",
    },
  ],
};

export const pricingStats = {
  totalUnits: "20+ Models",
  categories: "3 Categories",
  evOptions: "6+ Models",
};

export const pricingFleet = {
  title: "Fleet List",
  subtitle:
    "Browse our comprehensive collection of premium, hybrid, and standard units for corporate rental.",
  lastUpdated: "May 2, 2026",

  categories: [
    {
      name: "Premium & Executive",
      units: [
        {
          model: "Toyota Fortuner 2.8 4x4 GR AT",
          rate: 26000000,
          image: "/images/fleets/fortuner.webp",
        },
        {
          model: "Toyota Fortuner 2.8 4x2 GR AT",
          rate: 19478330,
          image: "/images/fleets/fortuner.webp",
        },
        {
          model: "Toyota Innova Zenix G 2.0 HV MDL CVT",
          rate: 16276635,
          image: "/images/fleets/toyota_innova_zenix.webp",
        },
        {
          model: "Toyota Innova Zenix G 2.0 HV CVT",
          rate: 14190929,
          image: "/images/fleets/toyota_innova_zenix.webp",
        },
        {
          model: "Toyota Innova Zenix G 2.0 CVT",
          rate: 12828448,
          image: "/images/fleets/toyota_innova_zenix.webp",
        },
      ],
    },
    {
      name: "Electric & Hybrid (Sustainable)",
      units: [
        {
          model: "BYD Seal Premium",
          rate: 19016884,
          image: "/images/fleets/byd_seal.webp",
        },
        {
          model: "MG ZS Magnity EV",
          rate: 10812373,
          image: "/images/fleets/mg_zs_ev.webp",
        },
        {
          model: "Magnity 4 EV",
          rate: 10314242,
          image: "/images/fleets/mg_4_ev.webp",
        },
        {
          model: "MG VS HEV",
          rate: 8744422,
          image: "/images/fleets/mg_vs_hev.webp",
        },
        {
          model: "Suzuki XL7 Alpha Hybrid AT",
          rate: 8741005,
          image: "/images/fleets/xl7_alpha.webp",
        },
        {
          model: "Suzuki Ertiga Hybrid GX AT",
          rate: 7752326,
          image: "/images/fleets/ertiga.webp",
        },
      ],
    },
    {
      name: "Standard Operations",
      units: [
        {
          model: "Toyota Rush 1.5 GR Sport AT",
          rate: 9499444,
          image: "/images/fleets/rush_sport.webp",
        },
        {
          model: "Toyota Rush 1.5 G AT",
          rate: 8944159,
          image: "/images/fleets/rush.webp",
        },
        {
          model: "Toyota Veloz 1.5 V HV CVT",
          rate: 8613696,
          image: "/images/fleets/veloz.webp",
        },
        {
          model: "Toyota Avanza 1.5 G MT",
          rate: 7969023,
          image: "/images/fleets/avanza.webp",
        },
        {
          model: "Suzuki XL7 Zeta MT",
          rate: 7332476,
          image: "/images/fleets/xl7.webp",
        },
        {
          model: "Toyota Avanza 1.3 E MT",
          rate: 7318933,
          image: "/images/fleets/avanza.webp",
        },
      ],
    },
  ],

  disclaimer:
    "Prices listed are unit prices based on corporate rental standards and may vary depending on contract duration and service level requirements.",
};

export const clients = [
  {
    name: "Kota Balikpapan",
    image: "/images/clients/balikpapan.webp",
  },
  {
    name: "Kota Samarinda",
    image: "/images/clients/samarinda.webp",
  },
  {
    name: "Kota Bontang",
    image: "/images/clients/bontang.webp",
  },
  {
    name: "Kabupaten Kutai Timur",
    image: "/images/clients/kutai_timur.webp",
  },
  {
    name: "Kabupaten Penajam Paser Utara",
    image: "/images/clients/penajam_paser_utara.webp",
  },
  {
    name: "Kabupaten Parigi Moutong",
    image: "/images/clients/parigi_moutong.webp",
  },
  {
    name: "Dinkes Kaltim",
    image: "/images/clients/dinkes_kaltim.webp",
  },
  {
    name: "Kabupaten Nunukan",
    image: "/images/clients/nunukan.webp",
  },
  {
    name: "Kabupaten Tana Tidung",
    image: "/images/clients/tana_tidung.webp",
  },
];

export const registry = {
  title: "Corporate Legalities",
  body: "PT. Mitra Borneo Cemerlang is a legally registered entity (PMDN) with full compliance to Indonesian business regulations.",
  blocks: [
    { key: "NIB Registry", value: "1604250031831" },
    { key: "NPWP Tax ID", value: "1000 0000 0148 1309" },
    { key: "Notary", value: "Cindy Putri Ananta, S.H, M.Kn" },
  ],
};

export const aboutSection = {
  title: "Our Team",
  subtitle: "People behind every reliable dispatch and strategic decision.",
  members: [
    {
      name: "Cintya Wullur",
      position: "",
      image: "/images/landing/cintya_w.webp",
    },
    {
      name: "Masni Renova",
      position: "",
      image: "/images/landing/masni_r.webp",
    },
  ],
};

export const footer = {
  company: "MBC",
  legalName: "PT. Mitra Borneo Cemerlang",
  address: "Jl. Jenderal Ahmad Yani No.09, Balikpapan",
  email: "mbc_cs@mitraborneorent.com",
  links: [
    { label: "Our Services", href: "#services" as Route },
    { label: "Available Fleet", href: "#fleet" as Route },
    { label: "Contact Us", href: "#contact" as Route },
    { label: "Privacy Policy", href: "privacy" as Route },
    { label: "Terms of Service", href: "terms" as Route },
  ],
  copyright:
    "© 2026 PT. Mitra Borneo Cemerlang. Engineering Excellence in Mobility & Fleet Integrity.",
};

export const contactSection = {
  title: "Get In Touch",
  subtitle: "Reach out to our representatives or visit our branches.",
  emails: [
    { name: "meyco@mitraborneorent.com" },
    { name: "masni@mitraborneorent.com" },
    { name: "cintya@mitraborneorent.com" },
  ],
  phone: "0542 5463019",
  branches: [
    {
      name: "Balikpapan Head Office",
      address: "Jl. Jenderal Ahmad Yani No.09, Balikpapan",
    },
    {
      name: "Jakarta Branch",
      address:
        "Citywalk Sudirman No.121 Jalan KH. Mas Mansyur Kelurahan Karet Tengsin, Tanah Abang, Jakarta Pusat 10220",
    },
    {
      name: "Palu Branch",
      address: "Jl. Merdeka 4, Kel. Birobuli Selatan, Kec. Palu Selatan",
    },
  ],
};
