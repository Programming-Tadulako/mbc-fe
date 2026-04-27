import { EyeIcon, FlagIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { valueSection } from "@/features/landing/constants";

const valueIcons = [EyeIcon, FlagIcon];

export function ValuesSection() {
  return (
    <section className="rounded-md border border-border/60 bg-mbc-surface px-4 py-12 md:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="font-display text-4xl leading-none uppercase md:text-5xl">
            Precision & <span className="text-primary">Integrity</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {valueSection.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {valueSection.chips.map((chip) => (
              <Badge key={chip} variant="secondary">
                {chip}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {valueSection.cards.map((item, idx) => {
            const Icon = valueIcons[idx];
            return (
              <Card
                key={item.title}
                className="border-primary/25 bg-white text-center md:text-start"
              >
                <CardHeader className="space-y-2">
                  <Icon
                    size={22}
                    weight="duotone"
                    className="mx-auto text-primary md:mx-0"
                  />
                  <CardDescription className="font-mono text-xs tracking-widest text-primary uppercase">
                    {item.title}
                  </CardDescription>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
