import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solution Architects LLC | Schedule a Consultation" },
      { name: "description", content: "Get in touch with Solution Architects LLC. Schedule a consultation, request service, or claim your free business assessment." },
      { property: "og:title", content: "Contact Solution Architects LLC" },
      { property: "og:description", content: "Schedule a consultation or request your free business assessment." },
      { property: "og:url", content: "https://solutionarchitectsllc.net/contact" },
    ],
    links: [{ rel: "canonical", href: "https://solutionarchitectsllc.net/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-brand-navy text-white">
        <div className="container-x py-20">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-emerald-bright">Contact</div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Let's build something that lasts.
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl">
            Tell us what you're working on. A team member will respond within one business day.
          </p>
        </div>
      </section>

      <section id="schedule" className="container-x py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">
              We work with entrepreneurs, small businesses, investors, and property owners across Kentucky and nationwide.
            </p>
          </div>
          <InfoBlock icon={MapPin} label="Registered Office" lines={["104 S Winter St.", "Midway, KY 40347"]} />
          <InfoBlock icon={MapPin} label="Mailing Address" lines={["PO Box 3569", "Midway, KY 40347"]} />
          <InfoBlock icon={Mail} label="Email" lines={["ian.eady@solutionarchitectsllc.com"]} />
          <InfoBlock icon={Clock} label="Hours" lines={["Mon–Fri: 9am – 6pm ET", "Weekend: By appointment"]} />

          <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/5 p-6">
            <div className="text-sm font-semibold text-brand-emerald uppercase tracking-wider">Quick options</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              <li>• Schedule Consultation</li>
              <li>• Request Service</li>
              <li>• Free Business Assessment</li>
              <li>• Free Visibility Audit</li>
              <li>• Free Asset Recovery Case Evaluation</li>
            </ul>
          </div>
        </div>
        <div id="assessment">
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoBlock({ icon: Icon, label, lines }: { icon: React.ElementType; label: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        {lines.map((l) => <div key={l} className="text-sm text-foreground/90">{l}</div>)}
      </div>
    </div>
  );
}