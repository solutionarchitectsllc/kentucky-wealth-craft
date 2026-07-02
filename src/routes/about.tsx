import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Target, Eye, HeartHandshake, Mail } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solution Architects LLC | Kentucky Business Solutions" },
      { name: "description", content: "Solution Architects LLC, founded by Ian D Eady, helps entrepreneurs, investors, and business owners build stronger financial foundations." },
      { property: "og:title", content: "About Solution Architects LLC" },
      { property: "og:description", content: "Strategic business, visibility, real estate, and asset recovery solutions." },
      { property: "og:url", content: "https://solutionarchitectsllc.net/about" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative bg-brand-navy text-white">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">About Us</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              Building stronger financial foundations for entrepreneurs and investors.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Solution Architects LLC exists to help entrepreneurs, investors, and business owners create
              stronger financial foundations through strategic business development, digital visibility,
              real estate opportunities, and asset recovery services.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Pillar icon={Target} title="Our Mission"
            body="To empower individuals and businesses through strategic solutions that create growth, visibility, opportunity, and long-term success." />
          <Pillar icon={Eye} title="Our Vision"
            body="A community of confident entrepreneurs and informed investors making the most of every opportunity available to them." />
          <Pillar icon={HeartHandshake} title="Our Approach"
            body="Transparent pricing, personalized service, and a relentless focus on real, measurable outcomes for our clients." />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <SectionHeading
            align="left"
            eyebrow="Leadership"
            title="Founded on practical experience."
            description="Solution Architects LLC is owned and operated by Ian D Eady, with a focus on helping Kentucky small businesses and individuals navigate complex paths to growth and recovery."
          />
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="text-sm font-semibold text-brand-emerald uppercase tracking-wider">Owner</div>
            <div className="mt-2 font-display text-2xl font-bold text-brand-navy">Ian D Eady</div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ian leads Solution Architects with a commitment to clear strategy, professional service, and
              results that compound over time. The firm serves clients across Kentucky and offers remote
              consulting nationwide.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Registered Office</div>
                <div className="font-medium text-brand-navy">104 S Winter St.<br/>Midway, KY 40347</div>
              </div>
              <div>
                <div className="text-muted-foreground">Mailing Address</div>
                <div className="font-medium text-brand-navy">PO Box 3569<br/>Midway, KY 40347</div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 text-sm">
              <Mail className="h-4 w-4 mt-0.5 text-brand-emerald shrink-0" />
              <div>
                <div className="text-muted-foreground">Email</div>
                <a href="mailto:ian.eady@solutionarchitectsllc.com" className="font-medium text-brand-navy hover:text-brand-emerald">
                  ian.eady@solutionarchitectsllc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function Pillar({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}