import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Solution Architects LLC" },
      { name: "description", content: "Terms and conditions for using Solution Architects LLC services and website." },
      { property: "og:title", content: "Terms & Conditions — Solution Architects LLC" },
      { property: "og:description", content: "The rules for using our site and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="container-x py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-brand-navy">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="space-y-6 mt-8 text-foreground/85 leading-relaxed">
          <p>By accessing or using our website and services, you agree to these terms.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Services</h2>
          <p>Solution Architects LLC provides business formation assistance, SEO, real estate consulting, and asset recovery services. We are not a law firm and do not provide legal, tax, or investment advice.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Pricing & Engagement</h2>
          <p>All engagements are subject to a written agreement. Asset recovery services are provided on a contingency basis where permitted by law.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Limitation of Liability</h2>
          <p>Our liability for any claim arising from your use of the site or services is limited to the fees paid for the specific service in question.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Governing Law</h2>
          <p>These terms are governed by the laws of the Commonwealth of Kentucky.</p>
        </div>
      </section>
    </SiteLayout>
  );
}