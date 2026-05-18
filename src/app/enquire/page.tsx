"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { submitEnquiry } from "@/features/enquire/actions";
import { EnquiryForm } from "@/features/enquire/components/enquiry-form";
import { SiteFooter } from "@/features/landing/sections/site-footer";
import { SiteHeader } from "@/features/landing/sections/site-header";

export default function EnquirePage() {
  const [state, action, isPending] = useActionState(submitEnquiry, null);

  return (
    <div className="relative bg-mbc-page pb-10 text-foreground">
      <div className="mbc-grid-overlay pointer-events-none absolute inset-0" />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-5 pb-12 md:gap-14 md:px-8">
        <SiteHeader />
        {state?.success ? (
          <div className="flex flex-1 items-center justify-center py-20">
            <div className="space-y-8 text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-6">
                  <CheckCircleIcon
                    size={64}
                    className="text-green-600"
                    weight="fill"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="font-display text-5xl tracking-wide text-primary uppercase">
                  Thank You!
                </h1>
                <p className="mx-auto max-w-lg text-lg text-muted-foreground">
                  We have received your enquiry and will get back to you shortly
                  at the contact details you provided.
                </p>
              </div>
              <Link href="/" className={buttonVariants({ size: "lg" })}>
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-3">
                  <EnvelopeSimpleIcon
                    size={28}
                    className="text-primary"
                    weight="fill"
                  />
                </div>
                <h1 className="font-display text-4xl tracking-wide text-primary uppercase">
                  Get in Touch
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Have questions about our services or fleet? We&apos;d love to
                hear from you. Fill out the form below and our dedicated team
                will be happy to respond within 24 hours.
              </p>
            </div>

            <Card className="space-y-2 border-2 border-border/50">
              <CardHeader className="pb-0">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Please provide as much detail as possible so we can better
                  assist you.
                </p>
              </CardHeader>
              <EnquiryForm action={action} isPending={isPending} />
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2 rounded-lg border border-border bg-slate-50 p-6">
                <h3 className="font-semibold text-primary">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all enquiries within 24 business hours.
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-border bg-slate-50 p-6">
                <h3 className="font-semibold text-primary">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our team has years of experience in logistics and fleet
                  management.
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-border bg-slate-50 p-6">
                <h3 className="font-semibold text-primary">
                  Tailored Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  We provide customized solutions to meet your specific needs.
                </p>
              </div>
            </div>
          </div>
        )}
        <SiteFooter />
      </main>
    </div>
  );
}
