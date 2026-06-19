import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Users, TrendingUp, Star, MapPin, DollarSign, CheckCircle2, XCircle } from "lucide-react";
import img from "@/assets/seo-visibility.jpg";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "Google Visibility & Local SEO Services | Solution Architects LLC" },
      { name: "description", content: "Local SEO and Google Business Profile optimization to help Kentucky businesses get found, generate more calls, and increase revenue." },
      { property: "og:title", content: "Google Visibility & SEO — Solution Architects LLC" },
      { property: "og:description", content: "Get found when customers search. More calls, more leads, more revenue." },
      { property: "og:url", content: "https://solutionarchitectsllc.net/services/seo" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/services/seo" }],
  }),
  component: Page,
});

const benefits = [
  { icon: Phone, t: "More Phone Calls" },
  { icon: Users, t: "More Leads" },
  { icon: TrendingUp, t: "More Website Traffic" },
  { icon: Star, t: "Better Online Reputation" },
  { icon: DollarSign, t: "Increased Revenue" },
  { icon: MapPin, t: "Greater Local Visibility" },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">SEO & Visibility</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">Get found when customers search</h1>
            <p className="mt-4 text-brand-emerald-bright font-semibold">If customers can't find your business online, they're finding your competitors.</p>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Most consumers search Google before choosing a business. We help companies appear higher in
              search results, generate more calls, increase website traffic, and convert visitors into paying customers.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
                <Link to="/contact" hash="audit">Request Free Visibility Audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact" hash="schedule">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          <img src={img} alt="Google search results on a phone" width={1280} height={896}
            loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Benefits" title="What better visibility unlocks" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <b.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold text-brand-navy">{b.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Side by side" title="The difference visibility makes" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3"><XCircle className="h-6 w-6 text-destructive" />
                <h3 className="font-display text-xl font-bold text-brand-navy">Without SEO</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                {["Hard to find online", "Fewer calls", "Limited traffic", "Lost revenue"].map((i) => (
                  <li key={i} className="flex gap-2.5"><XCircle className="h-5 w-5 text-destructive/80 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-hero)" }}>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-brand-emerald-bright" />
                <h3 className="font-display text-xl font-bold">With SEO</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {["Appears in Google searches", "More customer inquiries", "Increased visibility", "More sales opportunities"].map((i) => (
                  <li key={i} className="flex gap-2.5"><CheckCircle2 className="h-5 w-5 text-brand-emerald-bright shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Packages" title="SEO plans for every stage of growth" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PricingCard
            name="Google Business Profile Setup"
            price="$499"
            description="A one-time, complete profile launch."
            features={["Complete Profile Setup", "Optimization", "Category Research", "Service Descriptions", "Verification Assistance"]}
          />
          <PricingCard
            featured
            name="Local SEO Growth"
            price="$799"
            priceNote="/month"
            description="Ongoing growth for local businesses."
            features={["Monthly SEO Optimization", "Google Business Profile Management", "Citation Building", "Keyword Research", "Monthly Reporting"]}
          />
          <PricingCard
            name="Business Authority"
            price="$1,499"
            priceNote="/month"
            description="Dominate local search."
            features={["Advanced SEO", "Reputation Management", "Competitor Analysis", "Content Optimization", "Local Search Dominance Strategy"]}
          />
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}