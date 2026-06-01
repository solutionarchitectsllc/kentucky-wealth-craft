import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Briefcase, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import img from "@/assets/business-formation.jpg";

export const Route = createFileRoute("/services/business-formation")({
  head: () => ({
    meta: [
      { title: "LLC Formation & Business Startup Services | Solution Architects LLC" },
      { name: "description", content: "Kentucky LLC formation, EIN assistance, operating agreements, and complete business launch packages from $299." },
      { property: "og:title", content: "Business Formation Services — Solution Architects LLC" },
      { property: "og:description", content: "Start your business the right way with professional LLC formation and startup support." },
      { property: "og:url", content: "/services/business-formation" },
    ],
    links: [{ rel: "canonical", href: "/services/business-formation" }],
  }),
  component: Page,
});

const items = [
  { icon: FileText, t: "LLC Formation Assistance" },
  { icon: BadgeCheck, t: "EIN Assistance" },
  { icon: Briefcase, t: "Operating Agreement Preparation" },
  { icon: Building2, t: "Business Startup Guidance" },
  { icon: ShieldCheck, t: "Business Compliance Support" },
];

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="What's included"
          title="Everything you need to launch with confidence"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-emerald/10 text-brand-emerald shrink-0">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-brand-navy mt-1">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Packages" title="Transparent pricing built for every stage" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <PricingCard
              name="Starter LLC"
              price="$299"
              priceNote="+ State Fees"
              description="For founders ready to file."
              features={["Name Availability Check", "LLC Filing Assistance", "EIN Guidance", "Startup Checklist"]}
            />
            <PricingCard
              featured
              name="Professional Startup"
              price="$799"
              priceNote="+ State Fees"
              description="Everything in Starter plus the essentials to operate."
              features={["Everything in Starter", "Operating Agreement", "Business Email Setup", "Google Business Profile Setup", "Business Consultation"]}
            />
            <PricingCard
              name="Elite Business Launch"
              price="From $2,500"
              description="Full infrastructure to launch and scale."
              features={["Complete Business Infrastructure", "Branding", "Website Setup", "CRM Setup", "Automation Systems", "Growth Strategy"]}
              cta="Request Quote"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center py-20">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">Business Formation</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">Start your business the right way</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl">
            We help entrepreneurs establish professional business structures and launch with confidence.
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
        <div className="relative">
          <img src={img} alt="Business formation consultation" width={1280} height={896}
            loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] object-cover aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}