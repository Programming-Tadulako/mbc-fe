import {
  AddressBookIcon,
  BuildingIcon,
  BuildingApartmentIcon,
  BuildingOfficeIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactSection } from "@/features/landing/constants";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 space-y-8 rounded-md border border-border bg-white px-4 py-8 md:scroll-mt-28 md:px-8 md:py-12"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="font-display text-4xl leading-none uppercase md:text-5xl">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {contactSection.subtitle}
          </p>
        </div>
        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 md:flex">
          <AddressBookIcon
            className="text-primary"
            size={28}
            weight="duotone"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 border-border bg-mbc-page lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg tracking-wide uppercase">
              <MapPinIcon className="text-primary" size={24} weight="duotone" />
              Office Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {contactSection.branches.map((branch, idx) => {
              const Icon = [
                BuildingIcon,
                BuildingApartmentIcon,
                BuildingOfficeIcon,
              ][idx % 3];
              return (
                <div
                  key={branch.name}
                  className="group flex items-start gap-4 rounded-lg border border-border/50 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={20} weight="duotone" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 font-mono text-[9px] font-bold text-primary">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm font-semibold">{branch.name}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {branch.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="col-span-1 border-border bg-mbc-page">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg tracking-wide uppercase">
              <PhoneIcon className="text-primary" size={24} weight="duotone" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                <PhoneIcon size={16} /> Phone
              </h3>
              <p className="font-mono text-sm">{contactSection.phone}</p>
            </div>

            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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

            <div className="space-y-2 border-t border-border pt-4">
              <h3 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                <ClockIcon size={16} /> Office Hours
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon – Fri</span>
                  <span className="font-medium">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sat</span>
                  <span className="font-medium">08:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sun</span>
                  <span className="font-medium text-muted-foreground/50">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
