import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { pricingCategories } from "@/data/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "2026 Service Menu & Pricing Guide | Solution Architects LLC" },
      { name: "description", content: "Complete 2026 pricing for LLC formation, registered agent, branding, websites, SEO, consulting, real estate, funding, and asset recovery services." },
      { property: "og:title", content: "Service Menu & Pricing Guide 2026 — Solution Architects LLC" },
      { property: "og:description", content: "Transparent 2026 pricing across formation, branding, digital visibility, consulting, real estate, and asset recovery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://solutionarchitectsllc.net/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/pricing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="bg-brand-navy text-white">
        <div className="container-x py-20 text-center">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">2026 Guide</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">Service Menu &amp; Pricing Guide</h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto">
            Business Formation • Branding • Digital Visibility • Consulting • Real Estate • Asset Recovery
          </p>
          <div className="mt-8 flex gap-3 flex-wrap justify-center">
            <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
              <Link to="/contact">Request Service <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact" hash="schedule">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <nav aria-label="Pricing categories" className="border-b border-border bg-secondary/40">
        <div className="container-x flex flex-wrap gap-2 py-5">
          {pricingCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-brand-emerald hover:text-brand-emerald"
            >
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-x py-16 space-y-16">
        {pricingCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <SectionHeading align="left" title={cat.title} description={cat.blurb} className="max-w-3xl" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <h3 className="font-display text-lg font-bold text-brand-navy">{item.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-brand-emerald">{item.price}</span>
                    {item.note && <span className="text-sm text-muted-foreground">{item.note}</span>}
                  </div>
                  {item.features && (
                    <ul className="mt-4 space-y-2 flex-1">
                      {item.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-foreground/85">
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-emerald" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button asChild variant="outline" className="mt-6 border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white">
                    <Link to="/contact">Request Service</Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-muted-foreground max-w-3xl">
          State filing fees and third-party fees are not included and are billed separately.
          Contingency-based recovery services are offered where permitted by law and under written agreement.
          Custom scopes are quoted after a consultation.
        </p>
      </div>

      <CTASection />
    </SiteLayout>
  );
}
