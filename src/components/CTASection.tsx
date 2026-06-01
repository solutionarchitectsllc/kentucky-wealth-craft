import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-x py-20">
      <div
        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-emerald/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Ready to build, grow, or recover?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Get a free assessment of your business, visibility, or recovery opportunity.
            We'll show you exactly where the opportunity lies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
              <Link to="/contact" hash="assessment">
                Free Business Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact" hash="schedule">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}