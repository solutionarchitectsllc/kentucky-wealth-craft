import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description?: string;
  features: string[];
  featured?: boolean;
  cta?: string;
}

export function PricingCard({ name, price, priceNote, description, features, featured, cta = "Request Service" }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-7 shadow-[var(--shadow-card)] transition-all",
        featured
          ? "border-brand-emerald ring-1 ring-brand-emerald/30 -translate-y-1"
          : "border-border hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-7 rounded-full bg-brand-emerald px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase">
          Most Popular
        </div>
      )}
      <h3 className="font-display text-xl font-bold text-brand-navy">{name}</h3>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-brand-navy font-display">{price}</span>
        {priceNote && <span className="text-sm text-muted-foreground">{priceNote}</span>}
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-foreground/85">
            <Check className="h-5 w-5 text-brand-emerald shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        className={cn(
          "mt-7",
          featured
            ? "bg-brand-emerald hover:bg-brand-emerald-bright text-white"
            : "bg-brand-navy hover:bg-brand-navy-deep text-white"
        )}
      >
        <Link to="/contact">{cta}</Link>
      </Button>
    </div>
  );
}