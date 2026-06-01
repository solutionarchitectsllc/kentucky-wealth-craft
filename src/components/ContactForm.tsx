import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  businessName: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

const services = [
  "Business Formation",
  "Google Visibility & SEO",
  "Real Estate Solutions",
  "Asset Recovery",
  "Free Business Assessment",
  "General Inquiry",
];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(defaultService ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      businessName: String(fd.get("businessName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service,
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Thanks — we'll be in touch shortly.");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-emerald" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-navy">Request received</h3>
        <p className="mt-2 text-muted-foreground">A member of our team will reach out within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-card)]">
      <div className="grid md:grid-cols-2 gap-5">
        <Field id="name" label="Full Name *" error={errors.name}>
          <Input id="name" name="name" required maxLength={100} placeholder="Jane Doe" />
        </Field>
        <Field id="businessName" label="Business Name" error={errors.businessName}>
          <Input id="businessName" name="businessName" maxLength={150} placeholder="Acme LLC" />
        </Field>
        <Field id="email" label="Email *" error={errors.email}>
          <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input id="phone" name="phone" type="tel" maxLength={30} placeholder="(555) 555-5555" />
        </Field>
      </div>
      <Field id="service" label="Service Needed *" error={errors.service}>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field id="message" label="Message *" error={errors.message}>
        <Textarea id="message" name="message" required maxLength={2000} rows={5} placeholder="Tell us about your goals…" />
      </Field>
      <Button type="submit" size="lg" className="w-full bg-brand-emerald hover:bg-brand-emerald-bright text-white">
        Send Request
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted by Solution Architects LLC regarding your inquiry.
      </p>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground/90">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}