import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type EnquiryFormProps = {
  action: (payload: FormData) => void;
  isPending: boolean;
};

export function EnquiryForm({ action, isPending }: EnquiryFormProps) {
  return (
    <form action={action} className="w-full">
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 text-left">
            <Label htmlFor="firstName" className="font-semibold">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="John"
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="lastName" className="font-semibold">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input id="lastName" name="lastName" required placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="email" className="font-semibold">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="phone" className="font-semibold">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="message" className="font-semibold">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            className="min-h-32 resize-none"
            required
            placeholder="Tell us about your enquiry... What services are you interested in?"
          />
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/30 bg-slate-50/50">
        <Button
          type="submit"
          className="h-11 w-full text-base font-semibold"
          disabled={isPending}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Submitting...
            </span>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
      </CardFooter>
    </form>
  );
}
