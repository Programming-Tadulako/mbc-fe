"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navItems } from "@/features/landing/constants";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-5 z-50 rounded-sm border border-border/80 bg-white/95 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex items-center justify-between gap-6">
        <Link
          href={"/"}
          className="font-display text-2xl tracking-wide text-primary uppercase"
        >
          MBC
        </Link>
        <nav className="hidden flex-wrap items-center gap-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary focus:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/enquire"
            className={buttonVariants({
              size: "sm",
              className: "hidden md:flex",
            })}
          >
            Enquire Now
          </Link>

          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="flex h-8 w-8 md:hidden"
              >
                <ListIcon size={18} />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="text-left">
                  <DrawerTitle className="font-display text-2xl tracking-wide text-primary uppercase">
                    MBC
                  </DrawerTitle>
                  <DrawerDescription>
                    Navigate through our sections.
                  </DrawerDescription>
                </DrawerHeader>
                <nav className="flex flex-col gap-4 p-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 transition-colors hover:text-primary focus:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <DrawerFooter className="pt-2">
                  <Link
                    href="/enquire"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      size: "sm",
                      className: "w-full",
                    })}
                  >
                    Enquire Now
                  </Link>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
