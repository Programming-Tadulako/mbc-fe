import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { contactSection } from "@/features/landing/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 space-y-8 rounded-md border border-border bg-white px-4 py-8 md:scroll-mt-28 md:px-8 md:py-12"
    >
      <div className="space-y-2">
        <h2 className="font-display text-4xl leading-none uppercase md:text-5xl">
          Get <span className="text-primary">In Touch</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {contactSection.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Branches */}
        <Card className="col-span-1 border-border bg-mbc-page lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg uppercase tracking-wide">
              <MapPinIcon className="text-primary" size={24} weight="duotone" />
              Office Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactSection.branches.map((branch) => (
              <div
                key={branch.name}
                className="space-y-1 rounded border border-border/50 bg-white p-3"
              >
                <h3 className="font-semibold text-sm">{branch.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {branch.address}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="col-span-1 border-border bg-mbc-page">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg uppercase tracking-wide">
              <PhoneIcon className="text-primary" size={24} weight="duotone" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <PhoneIcon size={16} /> Phone
              </h3>
              <p className="font-mono text-sm">{contactSection.phone}</p>
            </div>

            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <EnvelopeIcon size={16} /> Email Contacts
              </h3>
              <ul className="space-y-1">
                {contactSection.emails.map((email) => (
                  <li
                    key={email.name}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {email.name}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
