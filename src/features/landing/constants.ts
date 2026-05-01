import type { Route } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export const navItems = [
  { label: "Services", href: "#services" as Route },
  { label: "Fleet", href: "#fleet" as Route },
  { label: "About", href: "#about" as Route },
];

export const hero = {
  registry: "Established Registry No. 180420031281",
  subtitle: "Strategic fleet for vehicle solutions",
  title: ["Strategic", "Mobility", "Partner"],
  description:
    "Scalable, high-performance vehicle rental solutions engineered for corporate excellence. Delivering reliability across standard, premium, and EV fleets.",
  achievement:
    "Since 2014, Mitra Borneo Cemerlang has completed over 1,200 contracts and remains the highest-rated provider in East Kalimantan.",
  certificate: {
    id: "04.3.8/MANIFEST/2026",
    label: "Government Verified",
  },
  stats: {
    vehicles: "2,650+",
    label: "Ready Fleet Units",
  },
  ctas: [
    {
      label: "Explore Fleet",
      href: "#fleet" as Route,
      variant: "default" as const,
      icon: ArrowUpRightIcon,
    },
    {
      label: "Documentation",
      href: "#documentation" as Route,
      variant: "outline" as const,
    },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1682020245785-4619e7a89d2f?auto=format&fit=crop&w=1500&q=80",
};

export const valueSection = {
  title: "Precision & Integrity",
  body: "At PT. Mitra Borneo Cemerlang, we bridge the gap between industrial strength and corporate sophistication. Our commitment to integrity and professionalism ensures every journey is executed with exacting standards.",
  chips: ["Trust", "Efficiency", "Sustainability"],
  cards: [
    {
      title: "Vision",
      body: "To disrupt trusted transportation partners, setting benchmark standards for corporate mobility.",
    },
    {
      title: "Mission",
      body: "Provide professional services and maintain a reliable, high-performance fleet.",
    },
  ],
};

export const services = {
  title: "Operational Excellence",
  subtitle: "Guaranteed services for uninterrupted corporate movement.",
  items: [
    {
      title: "Vehicle Readiness",
      body: "Impeccably detailed and mechanically sound units guarantee reliable delivery at dispatch.",
    },
    {
      title: "Timely Delivery",
      body: "Precision logistics ensure your fleet arrives exactly when and where needed.",
    },
    {
      title: "Responsive Support",
      body: "Dedicated account managers provide rapid resolution to operational requests.",
    },
    {
      title: "Proactive Care",
      body: "Scheduled servicing keeps performance stable and downtime minimal.",
    },
  ],
};

export const fleet = {
  title: "The Fleet",
  cards: [
    {
      tag: "Premium Class",
      name: "Fortuner & Rush",
      detail: "Executive transport / VIP road capability",
      quote: "Highest Quote",
      image:
        "https://images.unsplash.com/photo-1619767886645-0ae16581bf6b?auto=format&fit=crop&w=1300&q=80",
    },
    {
      tag: "Sustainable Future",
      name: "MG4 EV & BYD Seal",
      detail: "Pure electric / low emission operations",
      quote: "Highest Quote",
      image:
        "https://images.unsplash.com/photo-1728469876516-17a32611eb24?auto=format&fit=crop&w=1300&q=80",
    },
    {
      tag: "Standard Operations",
      name: "Avanza & Ertiga",
      detail:
        "Reliable, efficient personnel transport for daily operations and administrative logistics.",
      image:
        "https://images.unsplash.com/photo-1650530579355-7ad9d4766043?auto=format&fit=crop&w=1300&q=80",
      specs: ["6 seats", "Hybrid opt."],
    },
    {
      tag: "Off-road / Site Visit",
      name: "Suzuki Jimny",
      detail:
        "Rugged capability for demanding site visits, remote exploration, and challenging terrain.",
      image:
        "https://images.unsplash.com/photo-1730830812275-05d20a099679?auto=format&fit=crop&w=1300&q=80",
      specs: ["4x4 pro", "Terrain mode"],
    },
  ],
};

export const cities = [
  "Kota Balikpapan",
  "Samarinda",
  "Bontang",
  "Kabupaten Berau",
];

export const registry = {
  title: "Corporate Registry Verified",
  body: "We maintain full transparency with our partners. All business credentials are verified and up-to-date for government and private tenders.",
  blocks: [
    { key: "NIB Registry", value: "180420031281" },
    { key: "NPWP Tax ID", value: "1000 0000 0148 1309" },
  ],
};

export const aboutSection = {
  title: "Our Team",
  subtitle: "People behind every reliable dispatch and strategic decision.",
  members: [
    {
      name: "Cintya Wullur",
      position: "TBA",
      image: "/images/landing/cintya_w.webp",
    },
    {
      name: "Masni Renova",
      position: "TBA",
      image: "/images/landing/masni_r.webp",
    },
  ],
};

export const footer = {
  company: "MBC",
  legalName: "PT. Mitra Borneo Cemerlang",
  address:
    "Citywalk Sudirman No.121 Jalan KH. Mas Mansyur Kelurahan Karet Tengsin, Tanah Abang, Jakarta Pusat 10220",
  email: "mitraborneocemerlang@gmail.com",
  links: [
    "About Us",
    "Fleet Categories",
    "Service Standards",
    "Privacy Policy",
    "Terms of Service",
  ],
  copyright:
    "© 2026 PT. Mitra Borneo Cemerlang. Engineering Excellence in Mobility & Fleet Integrity.",
};
