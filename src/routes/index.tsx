import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Building2, Search, Home as HomeIcon, Wallet, ShieldCheck, Sparkles,
  Target, MapPin, TrendingUp, Star, CheckCircle2, XCircle,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solution Architects LLC | Kentucky Business, SEO & Asset Solutions" },
      { name: "description", content: "Kentucky-based business and asset solutions: LLC formation, Google visibility & SEO, real estate consulting, and asset recovery for entrepreneurs and investors." },
      { property: "og:title", content: "Solution Architects LLC | Kentucky Business & Asset Solutions" },
      { property: "og:description", content: "Build your business, increase your visibility, and recover lost assets with Solution Architects LLC." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://solutionarchitectsllc.net/" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Solution Architects LLC",
        slogan: "Building Businesses. Creating Opportunities.",
        areaServed: "Kentucky",
        address: {
          "@type": "PostalAddress",
          streetAddress: "104 S Winter St.",
          addressLocality: "Midway",
          addressRegion: "KY",
          postalCode: "40347",
          addressCountry: "US",
        },
      }),
    }],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Business Formation", desc: "LLC formation, EIN, operating agreements, and full startup launch packages.", href: "/services/business-formation" },
  { icon: Search, title: "Google Visibility & SEO", desc: "Get found when customers search. More calls, leads, and revenue.", href: "/services/seo" },
  { icon: HomeIcon, title: "Real Estate Solutions", desc: "Property research, investment strategy, and vacant land opportunities.", href: "/services/real-estate" },
  { icon: Wallet, title: "Asset Recovery", desc: "Identify and pursue surplus funds and recoverable assets owed to you.", href: "/services/asset-recovery" },
] as const;

const whyUs = [
  { icon: ShieldCheck, title: "Professional Service", desc: "Experienced guidance you can trust." },
  { icon: Sparkles, title: "Transparent Pricing", desc: "Clear, upfront packages — no surprises." },
  { icon: Target, title: "Personalized Solutions", desc: "Strategies tailored to your goals." },
  { icon: TrendingUp, title: "Business Growth Focus", desc: "Built around measurable outcomes." },
  { icon: MapPin, title: "Local Kentucky Expertise", desc: "Rooted in the community we serve." },
  { icon: CheckCircle2, title: "Results-Oriented", desc: "We're judged by the wins we deliver." },
];

const testimonials = [
  { name: "Marcus T.", role: "Founder, MT Logistics", quote: "Solution Architects helped me launch my LLC, set up Google Business, and bring in calls within weeks. Worth every dollar." },
  { name: "Erika S.", role: "Real Estate Investor", quote: "Their property research and strategy saved me from a bad deal — and pointed me toward two great ones." },
  { name: "James R.", role: "Small Business Owner", quote: "Within 60 days of their SEO work, my shop was on the first page of Google for our main service. Game changer." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.055 257 / 0.92) 0%, oklch(0.236 0.063 257 / 0.85) 60%, oklch(0.18 0.055 257 / 0.92) 100%)" }} />
        </div>
        <div className="container-x relative flex flex-col items-center py-24 md:py-36">
          <img
            src={logo}
            alt="Solution Architects LLC"
            width={400}
            height={326}
            className="h-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] rounded-2xl bg-white p-4 shadow-[0_0_40px_rgba(29,138,91,0.25)] mb-8"
          />
          <div className="max-w-3xl w-full text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider uppercase text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald-bright" />
              Kentucky • Business & Asset Solutions
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Build Your Business.<br />
              Increase Your Visibility.<br />
              <span className="text-brand-emerald-bright">Recover Lost Assets.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Helping entrepreneurs and business owners launch companies, attract more customers,
              invest in real estate, and recover money that belongs to them.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
                <Link to="/contact" hash="schedule">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                <Link to="/contact" hash="assessment">Free Business Assessment</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm text-white/65">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-emerald-bright" /> Transparent pricing</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-emerald-bright" /> Midway, KY</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand-emerald-bright" /> Results-focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Strategic solutions for entrepreneurs, investors, and owners"
          description="Four focused service lines, each designed to help you build, grow, recover, or protect wealth."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-brand-emerald/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO COMPARISON STRIP */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why visibility matters"
            title="What changes when customers can actually find you"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-destructive" />
                <h3 className="font-display text-xl font-bold text-brand-navy">Business Without SEO</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                {["Hard to find online", "Fewer calls", "Limited traffic", "Lost revenue"].map((i) => (
                  <li key={i} className="flex gap-2.5"><XCircle className="h-5 w-5 text-destructive/80 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-hero)" }}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand-emerald-bright" />
                <h3 className="font-display text-xl font-bold">Business With SEO</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {["Appears in Google searches", "More customer inquiries", "Increased visibility", "More sales opportunities"].map((i) => (
                  <li key={i} className="flex gap-2.5"><CheckCircle2 className="h-5 w-5 text-brand-emerald-bright shrink-0" /> {i}</li>
                ))}
              </ul>
              <Button asChild className="mt-7 bg-white text-brand-navy hover:bg-white/90">
                <Link to="/services/seo">Request a Free Visibility Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Why choose us"
          title="A partner committed to your long-term success"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-navy text-white py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client stories"
            title={<span className="text-white">Real results, real businesses</span>}
            description={<span className="text-white/70">A few words from clients we've helped launch, grow, and recover.</span>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="flex gap-1 text-brand-emerald-bright">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-white/90 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-white/55">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
