import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white/85 mt-24">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
            <div>
              <div className="font-display font-bold text-white">Solution Architects LLC</div>
              <div className="text-xs text-white/60">Building Businesses. Creating Opportunities.</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            Kentucky-based business and asset solutions for entrepreneurs, investors, and property owners.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wider uppercase">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/business-formation" className="hover:text-brand-emerald-bright">Business Formation</Link></li>
            <li><Link to="/services/seo" className="hover:text-brand-emerald-bright">SEO & Visibility</Link></li>
            <li><Link to="/services/real-estate" className="hover:text-brand-emerald-bright">Real Estate Solutions</Link></li>
            <li><Link to="/services/asset-recovery" className="hover:text-brand-emerald-bright">Asset Recovery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wider uppercase">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-brand-emerald-bright">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-emerald-bright">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-emerald-bright">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-emerald-bright">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-emerald-bright shrink-0" /><span>PO Box 3569<br/>Midway, KY 40347</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-emerald-bright shrink-0" /><span>104 S Winter St.<br/>Midway, KY 40347</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand-emerald-bright shrink-0" /><a href="mailto:ian.eady@solutionarchitectsllc.com" className="hover:text-brand-emerald-bright">ian.eady@solutionarchitectsllc.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Solution Architects LLC. All Rights Reserved.</div>
          <div>Service Areas: Kentucky & Nationwide Remote Services</div>
        </div>
      </div>
    </footer>
  );
}