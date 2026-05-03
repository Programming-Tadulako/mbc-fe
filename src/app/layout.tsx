import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitraborneorent.com"),
  title: {
    default: "MBC | Strategic Mobility Partner",
    template: "%s | MBC",
  },
  description:
    "PT. Mitra Borneo Cemerlang (MBC) - Solusi penyewaan kendaraan (fleet management) strategis untuk korporasi dan institusi. Layanan profesional, armada handal, dan kemitraan jangka panjang.",
  keywords: [
    "Sewa Mobil Balikpapan",
    "Fleet Management Indonesia",
    "Rental Mobil Korporasi",
    "Mitra Borneo Cemerlang",
    "MBC Mobility",
    "Sewa Mobil Jakarta",
    "Sewa Mobil Palu",
    "Sewa Mobil Kalimantan",
    "Mitra Borneo Cemerlang",
  ],
  authors: [{ name: "PT. Mitra Borneo Cemerlang" }],
  creator: "PT. Mitra Borneo Cemerlang",
  publisher: "PT. Mitra Borneo Cemerlang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mitraborneorent.com",
    title: "MBC | Strategic Mobility Partner",
    description:
      "Solusi penyewaan kendaraan strategis untuk korporasi dan institusi di Indonesia.",
    siteName: "MBC Mobility",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "MBC Strategic Mobility Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBC | Strategic Mobility Partner",
    description:
      "Solusi penyewaan kendaraan strategis untuk korporasi dan institusi di Indonesia.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        plusJakartaSans.variable,
        bebasNeue.variable
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
