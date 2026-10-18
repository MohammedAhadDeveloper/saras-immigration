"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Search,
  CheckCircle2,
  X,
  ShieldCheck,
  ChevronRight,
  Compass,
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Globe,
  MapPin,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import { LanguageCode } from "@/lib/translations";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category:
    | "Federal & Permanent"
    | "Provincial Nominees"
    | "Work & LMIA"
    | "Family & Spousal"
    | "Study & Students"
    | "Visitor & Temporary"
    | "Citizenship & Status";
  description: string;
  highlights: string[];
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: "express-entry",
    number: "01",
    title: "Express Entry & CRS Optimization",
    category: "Federal & Permanent",
    description:
      "Comprehensive profile management for Federal Skilled Worker (FSW), Canadian Experience Class (CEC), and Federal Skilled Trades (FST) with targeted category-draw strategies.",
    highlights: [
      "Federal Skilled Worker & Canadian Experience Class",
      "Comprehensive Ranking System (CRS) Boost Strategy",
      "Educational Credential Assessment (ECA) & Language Benchmark Guidance",
      "Invitation to Apply (ITA) Full Electronic PR Dossier Support",
    ],
  },
  {
    id: "alberta-aaip",
    number: "02",
    title: "Alberta Advantage Immigration Program (AAIP)",
    category: "Provincial Nominees",
    description:
      "Direct representation for Alberta streams with our dedicated Edmonton office. Gain a fast-track to permanent residence or a 600-point boost in Express Entry.",
    highlights: [
      "Alberta Opportunity Stream (AOS) for Workers & Graduates",
      "Alberta Express Entry & Accelerated Tech Pathway",
      "Tourism and Hospitality Stream Guidance",
      "Direct Representation from our Edmonton, AB Office",
    ],
  },
  {
    id: "ontario-oinp",
    number: "03",
    title: "Ontario Immigrant Nominee Program (OINP)",
    category: "Provincial Nominees",
    description:
      "Leverage Ontario’s specialized economic streams managed through our Brampton headquarters in the Greater Toronto Area (GTA).",
    highlights: [
      "Employer Job Offer: Foreign Worker & International Student Streams",
      "Human Capital Priorities (Express Entry-linked)",
      "In-Demand Skills Stream & Master’s/PhD Graduate Streams",
      "Expression of Interest (EOI) Scoring Strategy",
    ],
  },
  {
    id: "pnp-other-provinces",
    number: "04",
    title: "Other Provincial Nominee Programs (BC, SK, MB)",
    category: "Provincial Nominees",
    description:
      "Guidance for regional provincial immigration pathways across British Columbia (BC PNP), Saskatchewan (SINP), Manitoba (MPNP), and Atlantic Canada (AIP).",
    highlights: [
      "BC PNP Skills Immigration & Tech Stream",
      "Saskatchewan Immigrant Nominee Program (SINP) In-Demand Occupations",
      "Atlantic Immigration Program (AIP) Endorsement Support",
      "Direct 600-Point Express Entry Nomination Boost",
    ],
  },
  {
    id: "lmia-applications",
    number: "05",
    title: "Labour Market Impact Assessment (LMIA)",
    category: "Work & LMIA",
    description:
      "Comprehensive support for Canadian employers seeking to hire foreign skilled talent, and foreign workers seeking LMIA-supported work authorization and PR points.",
    highlights: [
      "High-Wage & Low-Wage Stream Filings with ESDC",
      "Dual-Intent LMIA (Work Permit & 50/200 PR Points)",
      "Job Bank Advertising & Transition Plan Compliance",
      "Global Talent Stream (GTS) 2-Week Expedited Processing",
    ],
  },
  {
    id: "spousal-sponsorship",
    number: "06",
    title: "Spousal & Common-Law Sponsorship",
    category: "Family & Spousal",
    description:
      "Reunite with your spouse or common-law partner in Canada. We handle both Inland and Outland applications with airtight relationship evidence portfolios.",
    highlights: [
      "Inland Spousal Open Work Permit (SOWP) Strategy",
      "Outland Fast-Track Consular Processing",
      "Comprehensive Relationship & Co-habitation Proof",
      "Minimum Necessary Income (MNI) Exemption Guidance",
    ],
  },
  {
    id: "super-visa",
    number: "07",
    title: "Parents & Grandparents Super Visa",
    category: "Visitor & Temporary",
    description:
      "Multi-entry visa valid for up to 10 years, allowing parents and grandparents of Canadian citizens and PRs to stay up to 5 consecutive years per visit.",
    highlights: [
      "Up to 5 Consecutive Years in Canada without Renewal",
      "LICO Minimum Necessary Income Compliance Audit",
      "Canadian Medical Insurance Policy Verification",
      "Fast 24-48hr Turnaround on Documentation Assembly",
    ],
  },
  {
    id: "study-permits",
    number: "08",
    title: "Study Permits & DLI Admissions",
    category: "Study & Students",
    description:
      "Guided by a former international student, Saras Immigration assists with Designated Learning Institution (DLI) admissions, Provincial Attestation Letters (PAL), and study visas.",
    highlights: [
      "DLI College & University Program Selection",
      "Provincial Attestation Letter (PAL) Compliance",
      "Strategic Statement of Purpose (SOP) Drafting",
      "Clear Long-Term Pathway to PGWP and Permanent Residency",
    ],
  },
  {
    id: "post-graduation-work-permit",
    number: "09",
    title: "Post-Graduation Work Permits (PGWP)",
    category: "Study & Students",
    description:
      "Transition from international student to Canadian work professional with up to 3 years of open work authorization.",
    highlights: [
      "180-Day Application Deadline Monitoring",
      "Maintained / Implied Status Strategy",
      "Eligibility Audit Under Latest 2026 Field of Study Rules",
      "Strategic Bridging into CEC / AAIP / OINP Streams",
    ],
  },
  {
    id: "work-permits",
    number: "10",
    title: "Employer-Specific & Open Work Permits",
    category: "Work & LMIA",
    description:
      "Applications for employer-specific closed work permits, Spousal Open Work Permits (SOWP), and Bridging Open Work Permits (BOWP).",
    highlights: [
      "LMIA-Based Employer Closed Work Permits",
      "Spousal Open Work Permits for Partners of Workers & Students",
      "Bridging Open Work Permits (BOWP) while PR is Pending",
      "Work Permit Extensions & Status Preservation",
    ],
  },
  {
    id: "visitor-visas",
    number: "11",
    title: "Visitor Visas & Tourist Extensions (TRV)",
    category: "Visitor & Temporary",
    description:
      "Temporary Resident Visas (TRV) for tourists, family visits, business travelers, and visitor record extensions for individuals already in Canada.",
    highlights: [
      "Single and Multiple Entry Temporary Resident Visas",
      "Visitor Record Extensions for Stays Beyond 6 Months",
      "Financial Sufficiency & Strong Home Ties Proof",
      "Addressing Previous Refusals with Fresh Evidence",
    ],
  },
  {
    id: "citizenship-applications",
    number: "12",
    title: "Canadian Citizenship & Naturalization",
    category: "Citizenship & Status",
    description:
      "Achieve full Canadian citizenship with Canadian passport rights. We calculate physical presence days, prepare applications, and assist with test preparation.",
    highlights: [
      "1,095-Day Physical Presence Calculation Audit",
      "Income Tax Filing Compliance Verification",
      "Official Citizenship Test & Interview Preparation",
      "Urgent Citizenship Processing Requests",
    ],
  },
  {
    id: "pr-card-applications",
    number: "13",
    title: "PR Card Renewals & PRTD Travel Documents",
    category: "Citizenship & Status",
    description:
      "Permanent Resident card renewal and replacement applications, residency obligation reviews (730 days), and urgent travel document processing.",
    highlights: [
      "5-Year Card Renewal & Urgent Travel Expediting",
      "Residency Obligation Audit (730 Days Rule)",
      "Permanent Resident Travel Document (PRTD) from Abroad",
      "Lost, Stolen, or Damaged Card Replacements",
    ],
  },
  {
    id: "status-restoration",
    number: "14",
    title: "Status Restoration & Refusal Overhaul",
    category: "Citizenship & Status",
    description:
      "Time-sensitive restoration applications within 90 days of status loss, responses to Procedural Fairness Letters (PFL), and reconsideration filings.",
    highlights: [
      "Strict 90-Day Legal Restoration Window Filing",
      "Procedural Fairness Letter (PFL) Detailed Legal Rebuttals",
      "Overcoming Medical & Inadmissibility Hurdles",
      "Refusal Case Audits & IRCC Reconsideration Requests",
    ],
  },
  {
    id: "intra-company-transfers",
    number: "15",
    title: "Intra-Company Transfers (ICT) & Business",
    category: "Work & LMIA",
    description:
      "LMIA-exempt work permits for multinational executives, managers, and specialized knowledge workers establishing or expanding operations in Canada.",
    highlights: [
      "LMIA-Exempt Executive & Senior Manager Work Permits",
      "New Canadian Subsidiary / Branch Setup Strategy",
      "Business Plan Development & Financial Viability Proof",
      "Direct Pathway to Permanent Residency via Express Entry",
    ],
  },
];

const CATEGORIES = [
  "All Services",
  "Federal & Permanent",
  "Provincial Nominees",
  "Work & LMIA",
  "Family & Spousal",
  "Study & Students",
  "Visitor & Temporary",
  "Citizenship & Status",
] as const;

export default function ServicesPage() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Services");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedServiceId, setExpandedServiceId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const srvParam = params.get("service");
      if (srvParam && ALL_SERVICES.some((s) => s.id === srvParam)) {
        return srvParam;
      }
    }
    return "express-entry";
  });

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === "All Services" ||
        service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeServiceObj =
    ALL_SERVICES.find((s) => s.id === expandedServiceId) || ALL_SERVICES[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans antialiased selection:bg-[#C8102E] selection:text-white">
      {/* Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenAssessment={scrollToContact}
        onOpenServiceModal={scrollToContact}
      />

      <main className="pt-0 pb-12 sm:pb-20">
        {/* HERO SECTION */}
        <section className="pt-4 pb-6 sm:py-12 lg:py-16 relative border-b border-stone-200/80 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            >
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#C8102E] uppercase">
                  <span className="w-6 h-0.5 bg-[#C8102E]" />
                  <span>Saras Immigration Practice Areas</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-600">
                    96% Visa Approval Rate • RCIC #R710896
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-950 tracking-tight leading-[1.08]">
                  Canadian Immigration{" "}
                  <span className="text-[#C8102E]">Services</span>
                </h1>

                <p className="text-lg text-stone-700 leading-relaxed font-normal">
                  Licensed legal representation for Express Entry, Alberta AAIP &amp; Ontario OINP, Labour Market Impact Assessments (LMIA), Spousal Sponsorship, Study Permits, and Super Visas.
                </p>
              </div>

              {/* Quick Key Stat & Contact Action */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                <div className="border-l-2 border-[#C8102E] pl-4 py-1">
                  <div className="text-2xl font-serif font-bold text-stone-950">
                    15 Specialized Pathways
                  </div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    CICC Regulated Representation
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all flex items-center space-x-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Request Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* SEARCH & FILTER CONTROLS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pt-6 border-t border-stone-200/80 space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pathways (e.g., Express Entry, AAIP, LMIA, Spousal)..."
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C8102E] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter Counter */}
                <div className="text-xs font-semibold text-stone-500 flex items-center space-x-2">
                  <span>
                    Showing{" "}
                    <strong className="text-stone-900">
                      {filteredServices.length}
                    </strong>{" "}
                    of {ALL_SERVICES.length} Services
                  </span>
                  {selectedCategory !== "All Services" && (
                    <button
                      onClick={() => setSelectedCategory("All Services")}
                      className="text-[#C8102E] hover:underline font-bold ml-2 cursor-pointer"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-stone-900 text-white shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES MASTER GRID & DETAIL PANEL */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT LIST: ALL SERVICES ACCORDION / CARDS */}
              <div className="lg:col-span-7 space-y-4">
                {filteredServices.length === 0 ? (
                  <div className="bg-white rounded-2xl p-8 text-center border border-stone-200 space-y-3">
                    <p className="text-stone-500 text-sm">No services matching your search.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All Services");
                      }}
                      className="text-xs font-bold text-[#C8102E] hover:underline cursor-pointer"
                    >
                      Reset all filters
                    </button>
                  </div>
                ) : (
                  filteredServices.map((srv) => {
                    const isSelected = srv.id === expandedServiceId;
                    return (
                      <div
                        key={srv.id}
                        className={`rounded-2xl transition-all border ${
                          isSelected
                            ? "bg-white border-[#C8102E] shadow-md ring-1 ring-[#C8102E]/20"
                            : "bg-white border-stone-200/90 hover:border-stone-300 shadow-2xs"
                        }`}
                      >
                        <button
                          onClick={() => setExpandedServiceId(srv.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                        >
                          <div className="flex items-start space-x-3.5">
                            <span className="font-mono text-xs font-black text-[#C8102E] pt-0.5">
                              {srv.number}
                            </span>
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                                {srv.category}
                              </span>
                              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-950">
                                {srv.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`p-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                              isSelected
                                ? "bg-[#C8102E] text-white"
                                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                            }`}
                          >
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                isSelected ? "rotate-90" : ""
                              }`}
                            />
                          </span>
                        </button>

                        {/* Mobile expansion inline */}
                        <div className="lg:hidden">
                          {isSelected && (
                            <div className="px-5 pb-5 pt-2 border-t border-stone-100 space-y-4">
                              <p className="text-xs text-stone-700 leading-relaxed font-medium">
                                {srv.description}
                              </p>
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                                  Scope of Representation:
                                </span>
                                {srv.highlights.map((h, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start space-x-2 text-xs text-stone-800"
                                  >
                                    <Check className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                                    <span>{h}</span>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={scrollToContact}
                                className="w-full bg-[#C8102E] text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                              >
                                <span>Inquire for {srv.title}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* RIGHT STICKY PANEL: ACTIVE SERVICE COMPREHENSIVE DOSSIER */}
              <div className="hidden lg:block lg:col-span-5 sticky top-24">
                <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-md space-y-6">
                  <div className="space-y-2 border-b border-stone-200/80 pb-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-[#C8102E] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded">
                        PATHWAY #{activeServiceObj.number}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-500">
                        {activeServiceObj.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif font-black text-stone-950 leading-tight">
                      {activeServiceObj.title}
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    {activeServiceObj.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                      Representation Scope &amp; Legal Deliverables:
                    </span>
                    <div className="space-y-2">
                      {activeServiceObj.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 bg-stone-50 border border-stone-200/80 p-3 rounded-xl text-xs font-semibold text-stone-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-stone-200/80 space-y-3">
                    <button
                      onClick={scrollToContact}
                      className="w-full bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-xs hover:shadow-sm active:scale-98 cursor-pointer"
                    >
                      <span>Inquire About {activeServiceObj.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-stone-500 text-center">
                      CICC License #R710896 • Direct IRCC Authorized Representation
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <div id="contact">
          <ContactSection currentLang={currentLang} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={scrollToContact}
        onOpenServiceModal={scrollToContact}
      />

      {/* Floating Speed Dial Button */}
      <FloatingContactWidget
        currentLang={currentLang}
        onOpenAssessment={scrollToContact}
      />
    </div>
  );
}
