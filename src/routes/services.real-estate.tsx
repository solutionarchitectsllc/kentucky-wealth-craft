import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPinned, Trees, LineChart, Building2, ClipboardList } from "lucide-react";
import img from "@/assets/real-estate.jpg";

export const Route = createFileRoute("/services/real-estate")({
  head: () => ({
    meta: [
      { title: "Real Estate Consulting & Investment Strategy | Solution Architects LLC" },
      { name: "description", content: "Property research, vacant land opportunities, and investment strategy consulting for investors and property owners in Kentucky." },
      { property: "og:title", content: "Real Estate Solutions — Solution Architects LLC" },
      { property: "og:description", content: "Strategic property research and investment consulting." },
      { property: "og:url", content: "https://solutionarchitectsllc.net/services/real-estate" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/services/real-estate" }],
  }),
  component: Page,
});

const items = [
  { icon: MapPinned, t: "Property Research" },
  { icon: Trees, t: "Vacant Land Opportunities" },
  { icon: LineChart, t: "Investment Consulting" },
  { icon: Building2, t: "Acquisition Strategy" },
  { icon: ClipboardList, t: "Property Analysis" },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">Real Estate</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">Strategic real estate opportunities</h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Helping investors and property owners identify opportunities and make informed real estate decisions.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
                <Link to="/contact">Request Service <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact" hash="schedule">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          <img src={img} alt="Aerial view of Kentucky residential properties" width={1280} height={896}
            loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Services" title="From research to acquisition strategy" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <i.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold text-brand-navy">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Pricing" title="Engagement options" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <PricingCard
              name="Consultation"
              price="$250"
              description="One-on-one strategy session."
              features={["1-hour consult", "Goal & opportunity review", "Action recommendations"]}
              cta="Book Consultation"
            />
            <PricingCard
              featured
              name="Investment Strategy Package"
              price="From $1,500"
              description="Full strategy and analysis."
              features={["Market & property research", "Investment analysis", "Acquisition strategy", "Risk review", "Action plan"]}
              cta="Request Quote"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}