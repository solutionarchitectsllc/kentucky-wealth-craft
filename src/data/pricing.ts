export interface ServiceItem {
  name: string;
  price: string;
  note?: string;
  features?: string[];
}
export interface ServiceCategory {
  id: string;
  title: string;
  blurb?: string;
  items: ServiceItem[];
}

export const pricingCategories: ServiceCategory[] = [
  {
    id: "business-formation",
    title: "Business Formation Services",
    blurb: "Launch packages that take you from idea to a fully organized company.",
    items: [
      { name: "Basic LLC Formation Package", price: "$199", note: "+ State Filing Fees", features: ["Business name availability search", "Articles of Organization preparation", "State filing assistance", "Operating Agreement template", "EIN application guidance", "Digital document delivery"] },
      { name: "Premium LLC Formation Package", price: "$499", note: "+ State Filing Fees", features: ["Everything in Basic", "Custom Operating Agreement", "EIN registration assistance", "Business banking setup guidance", "Corporate Records Book", "Ownership Certificate", "Initial Member Resolution", "Annual Compliance Checklist"] },
      { name: "Elite Business Launch Package", price: "$999", note: "+ State Filing Fees", features: ["Everything in Premium", "Professional website", "Google Business Profile setup", "Business email setup", "Business phone setup consultation", "Logo package", "Social media setup", "Business launch strategy session"] },
    ],
  },
  {
    id: "registered-agent",
    title: "Registered Agent Services",
    items: [
      { name: "Registered Agent Service", price: "$99", note: "/year", features: ["Legal document receipt", "Compliance reminders", "Secure document storage"] },
    ],
  },
  {
    id: "ein-irs",
    title: "EIN & IRS Services",
    items: [
      { name: "EIN Application Service", price: "$99", features: ["EIN filing assistance", "IRS confirmation delivery"] },
      { name: "IRS Compliance Package", price: "$249", features: ["EIN verification", "Federal compliance checklist", "Annual filing reminders"] },
    ],
  },
  {
    id: "legal-documents",
    title: "Operating Agreements & Legal Documents",
    items: [
      { name: "Custom Operating Agreement", price: "$199" },
      { name: "Single-Member Operating Agreement", price: "$149" },
      { name: "Multi-Member Operating Agreement", price: "$299" },
      { name: "Corporate Records Book Package", price: "$149", features: ["Member resolutions", "Ownership certificate", "Record templates"] },
      { name: "Business Document Bundle", price: "$249", features: ["Operating Agreement", "Service Agreement", "Independent Contractor Agreement", "Privacy Policy", "Terms & Conditions"] },
    ],
  },
  {
    id: "branding",
    title: "Branding Services",
    items: [
      { name: "Starter Logo Package", price: "$149", features: ["3 logo concepts", "PNG files"] },
      { name: "Professional Branding Package", price: "$499", features: ["Custom logo", "Brand colors", "Typography guide", "Social media graphics", "Business card design"] },
      { name: "Complete Brand Identity Package", price: "$999", features: ["Full branding suite", "Marketing assets", "Brand standards guide"] },
    ],
  },
  {
    id: "websites",
    title: "Website Services",
    items: [
      { name: "Starter Website", price: "$599", features: ["5-page website", "Mobile responsive design", "Contact form"] },
      { name: "Professional Business Website", price: "$1,499", features: ["Up to 15 pages", "Mobile optimization", "SEO setup", "Lead capture forms", "Google Analytics"] },
      { name: "Enterprise Website", price: "$2,999–$7,500", features: ["Custom development", "CRM integration", "Advanced automation", "Online booking", "E-commerce capability"] },
    ],
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Services",
    items: [
      { name: "Google Business Profile Setup", price: "$199" },
      { name: "Google Business Optimization", price: "$399", features: ["SEO optimization", "Photos", "Service descriptions", "Citation setup"] },
      { name: "Monthly GBP Management", price: "$149", note: "/month", features: ["Posts", "Review monitoring", "Optimization updates"] },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    items: [
      { name: "Local SEO Package", price: "$499", note: "/month", features: ["Keyword research", "Citation building", "On-page optimization"] },
      { name: "Growth SEO Package", price: "$999", note: "/month", features: ["Everything in Local SEO", "Monthly reporting", "Competitor analysis"] },
      { name: "Social Media Management", price: "$399–$999", note: "/month", features: ["Content creation", "Posting schedule", "Engagement monitoring"] },
      { name: "Reputation Management", price: "$199", note: "/month", features: ["Review monitoring", "Response guidance", "Reputation scoring"] },
    ],
  },
  {
    id: "consulting",
    title: "Business Consulting",
    items: [
      { name: "Startup Consultation", price: "$99", note: "/hour" },
      { name: "Business Strategy Session", price: "$199", note: "/hour" },
      { name: "Business Growth Coaching", price: "$499", note: "/month", features: ["Monthly planning", "Goal tracking", "Growth strategy"] },
      { name: "Executive Advisory Program", price: "$1,500", note: "/month", features: ["Weekly consulting", "Scaling guidance", "Strategic planning"] },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Services",
    items: [
      { name: "Property Research Package", price: "$199", features: ["Ownership search", "Tax information review", "Basic market data"] },
      { name: "Vacant Property Lead Package", price: "$299", features: ["Distressed property identification", "Owner contact information research"] },
      { name: "Investor Property Acquisition Consulting", price: "$999–$2,500" },
      { name: "Real Estate Deal Structuring Consultation", price: "$299", note: "/hour" },
    ],
  },
  {
    id: "asset-recovery",
    title: "Surplus Funds & Asset Recovery",
    blurb: "Contingency-based where permitted by law and written agreement.",
    items: [
      { name: "Surplus Funds Recovery", price: "30%", note: "contingency fee", features: ["No recovery = No fee"] },
      { name: "Probate Asset Recovery", price: "25%–35%", note: "contingency fee" },
      { name: "Unclaimed Property Recovery", price: "20%–30%", note: "contingency fee" },
      { name: "Mortgage Overbid Recovery", price: "30%", note: "contingency fee" },
    ],
  },
  {
    id: "funding",
    title: "Business Funding Services",
    items: [
      { name: "Business Credit Consultation", price: "$199" },
      { name: "Business Credit Builder Package", price: "$799", features: ["DUNS guidance", "Vendor account setup", "Credit roadmap"] },
      { name: "Funding Readiness Package", price: "$999", features: ["Financial review", "Funding strategy", "Lender preparation"] },
    ],
  },
  {
    id: "document-prep",
    title: "Document Preparation Services",
    items: [
      { name: "Independent Contractor Agreement", price: "$99" },
      { name: "Service Agreement", price: "$149" },
      { name: "Non-Disclosure Agreement (NDA)", price: "$99" },
      { name: "Employment Agreement", price: "$149" },
      { name: "Client Intake Package", price: "$99" },
      { name: "Privacy Policy", price: "$99" },
      { name: "Terms & Conditions", price: "$99" },
    ],
  },
  {
    id: "memberships",
    title: "Monthly Membership Plans",
    items: [
      { name: "Entrepreneur Essentials", price: "$49", note: "/month", features: ["Compliance reminders", "Monthly newsletter", "Resource library"] },
      { name: "Business Growth Membership", price: "$149", note: "/month", features: ["Compliance support", "Quarterly consultations", "Marketing resources"] },
      { name: "Executive Success Membership", price: "$399", note: "/month", features: ["Monthly strategy sessions", "Priority support", "Business growth planning"] },
    ],
  },
  {
    id: "signature-offers",
    title: "High-Ticket Signature Offers",
    items: [
      { name: "Entrepreneur Launch System", price: "$1,997", features: ["Everything needed to launch a business from idea to operation"] },
      { name: "Digital Visibility Accelerator", price: "$2,997", features: ["Website + SEO + Google Business Profile + Branding"] },
      { name: "Business Transformation Program", price: "$4,997", features: ["6-month business consulting and growth program"] },
      { name: "Asset Recovery Elite Service", price: "25%–35%", note: "contingency-based" },
    ],
  },
];
