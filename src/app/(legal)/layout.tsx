import type { ReactNode } from "react";
import { LegalPageLayout } from "@/features/legal/layout";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <LegalPageLayout>{children}</LegalPageLayout>;
}
