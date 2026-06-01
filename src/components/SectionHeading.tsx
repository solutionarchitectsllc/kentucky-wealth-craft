import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}