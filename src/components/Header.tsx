import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services/business-formation", label: "Business Formation" },
  { to: "/services/seo", label: "SEO & Visibility" },
  { to: "/services/real-estate", label: "Real Estate" },
  { to: "/services/asset-recovery", label: "Asset Recovery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Solution Architects LLC logo" width={40} height={40} className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-brand-navy">Solution Architects</div>
            <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Building Businesses</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.slice(1, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-emerald"
              activeProps={{ className: "text-brand-emerald" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm" className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
            <Link to="/contact" hash="schedule">Schedule Consultation</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/90 border-b border-border/60 last:border-0"
                activeProps={{ className: "text-brand-emerald" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button asChild className="bg-brand-emerald hover:bg-brand-emerald-bright text-white">
                <Link to="/contact" onClick={() => setOpen(false)}>Schedule Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}