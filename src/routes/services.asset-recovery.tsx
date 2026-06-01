import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileSearch, FileCheck, HelpingHand } from "lucide-react";
import img from "@/assets/asset-recovery.jpg";

export const Route = createFileRoute("/services/asset-recovery")({
  head: () => ({
    meta: [
      { title: "Asset Recovery & Surplus Funds Services | Solution Architects LLC" },
      { name: "description", content: "We help eligible individuals identify and pursue surplus funds and recoverable assets. Free case evaluation." },
      { property: "og:title", content: "Asset Recovery Services — Solution Architects LLC" },
      { property: "og:description", content: "Recover assets that may be owed to you." },
      { property: "og:url", content: "/services/asset-recovery" },
    ],
    links: [{ rel: "canonical", href: "/services/asset-recovery" }],
  }),
  component: Page,
});

const items = [
  { icon: Search, t: "Surplus Funds Research" },
  { icon: HelpingHand, t: "Asset Recovery Assistance" },
  { icon: FileSearch, t: "Documentation Support" },
  { icon: FileCheck, t: "Claim Guidance" },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">Asset Recovery</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">Recover assets that may be owed to you</h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              We assist eligible individuals in identifying and pursuing surplus funds and other recoverable assets.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
                <Link to="/contact" hash="evaluation">Free Case Evaluation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Request Service</Link>
              </Button>
            </div>
          </div>
          <img src={img} alt="Document and asset review" width={1280} height={896}
            loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Services" title="How we help you recover" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <i.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-semibold text-brand-navy">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy">Case Evaluation</h3>
            <div className="mt-3 text-3xl font-bold text-brand-emerald font-display">Free</div>
            <p className="mt-3 text-sm text-muted-foreground">We'll review your situation and let you know if recovery may be possible.</p>
            <Button asChild className="mt-6 bg-brand-navy text-white hover:bg-brand-navy-deep">
              <Link to="/contact" hash="evaluation">Request Evaluation</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-brand-emerald bg-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy">Recovery Services</h3>
            <div className="mt-3 text-3xl font-bold text-brand-emerald font-display">Contingency</div>
            <p className="mt-3 text-sm text-muted-foreground">Contingency-based pricing where permitted by law and written agreement.</p>
            <Button asChild className="mt-6 bg-brand-emerald hover:bg-brand-emerald-bright text-white">
              <Link to="/contact">Start Recovery Process</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}