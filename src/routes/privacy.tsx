import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Solution Architects LLC" },
      { name: "description", content: "Privacy policy for Solution Architects LLC." },
      { property: "og:title", content: "Privacy Policy — Solution Architects LLC" },
      { property: "og:description", content: "How we collect, use, and protect your information." },
      { property: "og:url", content: "https://solutionarchitectsllc.net/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/privacy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="container-x py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-brand-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-slate mt-8 space-y-6 text-foreground/85 leading-relaxed">
          <p>Solution Architects LLC ("we", "us", "our") respects your privacy. This policy explains how we collect and use information when you visit our site or contact us.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Information we collect</h2>
          <p>We collect information you submit through our contact form (name, business name, email, phone, message) and limited analytics about site usage.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">How we use it</h2>
          <p>To respond to your inquiries, deliver requested services, and improve our website. We do not sell your personal information.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Data retention</h2>
          <p>We retain your information only as long as needed to provide services or as required by law.</p>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Contact</h2>
          <p>Questions? Email contact@solutionarchitectsllc.com.</p>
        </div>
      </section>
    </SiteLayout>
  );
}