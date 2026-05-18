import { SiteFooter } from "@/features/landing/sections";
import Pricing from "@/features/pricing";

export const metadata = {
  title: "Daftar Armada & Harga | MBC Strategic Mobility Partner",
  description:
    "Lihat daftar lengkap armada kendaraan PT. Mitra Borneo Cemerlang. Kami menyediakan berbagai pilihan kendaraan dari Premium, Hybrid, hingga Standard untuk kebutuhan korporasi Anda.",
  keywords: [
    "Harga Sewa Mobil Balikpapan",
    "Daftar Armada MBC",
    "Sewa Fortuner Balikpapan",
    "Sewa Innova Zenix Balikpapan",
    "Rental Mobil Listrik Indonesia",
  ],
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-mbc-page pb-10 text-foreground">
      <div className="mbc-grid-overlay pointer-events-none absolute inset-0" />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-5 pb-14 md:gap-16 md:px-8 lg:px-10">
        <Pricing />
        <SiteFooter />
      </main>
    </div>
  );
}
