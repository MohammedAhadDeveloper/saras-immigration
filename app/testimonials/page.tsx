'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote,
  Star,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Search,
  ArrowRight,
  ChevronRight,
  UserCheck,
  FileText,
  Send,
  MessageSquareQuote,
  Compass,
  Award,
  SlidersHorizontal,
  X,
  Filter,
  Check,
  Heart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import AssessmentModal from '@/components/AssessmentModal';
import ServicesModal from '@/components/ServicesModal';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import { LanguageCode } from '@/lib/translations';

export interface ClientReviewItem {
  id: string;
  name: string;
  category:
    | 'Permanent Residency & PR'
    | 'Provincial Nominees & AAIP'
    | 'Work Permits & LMIA'
    | 'Study Permits & Students'
    | 'Family & Super Visa'
    | 'Consultation & Assessment';
  programTag: string;
  statusBadge: string;
  year: string;
  location: string;
  quote: string;
  fullNarrative?: string;
  highlights: string[];
}

const ALL_REVIEWS: ClientReviewItem[] = [
  {
    id: 'rev-kamalpreet',
    name: 'Kamalpreet Kaur',
    category: 'Study Permits & Students',
    programTag: 'Study Pathway & Express Entry',
    statusBadge: 'Study Permit Approved',
    year: '2025',
    location: 'Punjab, India ➔ Brampton, ON',
    quote:
      'I had an amazing experience working with Saras Immigration consultancy, especially with Amanpreet Sir! His patience, deep legal knowledge, and genuine interest in finding the best path for my situation made all the difference. He guided me step by step with my application, keeping me informed and confident throughout the journey. Highly recommended to anyone seeking honest and reliable immigration help!',
    fullNarrative:
      'Amanpreet Singh structured Kamalpreet’s study permit application with an airtight Statement of Purpose and comprehensive financial proofs, establishing a clear long-term roadmap towards post-graduation work and permanent residency.',
    highlights: [
      'DLI Program & College Admission Clearance',
      'Flawless Statement of Purpose (SOP) Filing',
      'Step-by-Step Transparent Guidance by Amanpreet Sir',
    ],
  },
  {
    id: 'rev-meenu',
    name: 'Meenu Dhir',
    category: 'Family & Super Visa',
    programTag: 'Spousal Sponsorship & PR',
    statusBadge: 'Permanent Residency Granted',
    year: '2025',
    location: 'Delhi, India ➔ Toronto, ON',
    quote:
      'I really like the service provided by Aman at Saras Immigration. He is very trustworthy, transparent, and professional throughout the entire process. My spousal sponsorship application was prepared with meticulous detail and approved without any issues. Thank you so much for bringing our family together in Canada!',
    fullNarrative:
      'Navigating spousal sponsorship demands exhaustive relationship documentation. Saras Immigration prepared a rock-solid submission package resulting in swift IRCC approval without procedural fairness letters or delays.',
    highlights: [
      'Inland Spousal Sponsorship Dossier',
      'Spousal Open Work Permit (SOWP) Included',
      'Direct Reunification with Zero Discrepancies',
    ],
  },
  {
    id: 'rev-baltej',
    name: 'Baltej Singh Assi',
    category: 'Work Permits & LMIA',
    programTag: 'Work Permit to PR Transition',
    statusBadge: 'Work Authorization Approved',
    year: '2025',
    location: 'Edmonton, Alberta',
    quote:
      'Extremely reliable and professional service provided by Aman and the team at Saras Immigration. They handled my work permit extension and subsequent permanent residency application with great precision. Their honest advice saved me both time and money. I always recommend Saras Immigration to all my friends and family.',
    fullNarrative:
      'Baltej faced tight work permit deadlines in Alberta. Amanpreet Singh audited his credentials and filed an expedited application that maintained his legal status and positioned him for Alberta provincial nomination.',
    highlights: [
      'Expedited Work Permit Extension Filing',
      'Maintained Legal Status Protection',
      'Seamless Pathway to Permanent Residence',
    ],
  },
  {
    id: 'rev-manjodh',
    name: 'Manjodh Bhatti',
    category: 'Permanent Residency & PR',
    programTag: 'LMIA & Express Entry Strategy',
    statusBadge: 'Express Entry PR Approved',
    year: '2025',
    location: 'Edmonton, Alberta',
    quote:
      'Great experience with Amanpreet sir regarding my immigration processes! From reviewing my LMIA documentation to optimizing my Express Entry profile, his strategic guidance was second to none. Whenever I had questions, he answered promptly and with complete clarity.',
    fullNarrative:
      'Optimizing Express Entry CRS scores requires fine-tuned NOC code matching and verified work history audits. Saras Immigration secured the invitation to apply and guided the entire PR electronic submission.',
    highlights: [
      'CRS Score Maximization & Profile Optimization',
      'ESDC LMIA Documentation Review',
      'Prompt, Responsive Direct Counsel',
    ],
  },
  {
    id: 'rev-navjot',
    name: 'Navjot S. & Employer Team',
    category: 'Work Permits & LMIA',
    programTag: 'Employer LMIA Application',
    statusBadge: 'Positive LMIA Issued',
    year: '2025',
    location: 'Brampton / Mississauga, ON',
    quote:
      'We used Saras Immigration for filing a Labour Market Impact Assessment (LMIA) for our company in Ontario. Amanpreet handled the job advertising, ESDC portal submission, and interview preparation with utmost professionalism. Approved in record time with zero hassles!',
    fullNarrative:
      'Corporate compliance with Service Canada and ESDC is stringent. Saras Immigration managed the recruitment proof, median wage benchmarks, and business legitimacy files with complete success.',
    highlights: [
      'Comprehensive ESDC Job Advertising Audit',
      'High-Wage LMIA Approval in Record Time',
      'Employer Compliance & Transition Plan Structuring',
    ],
  },
  {
    id: 'rev-gurpreet',
    name: 'Gurpreet Singh',
    category: 'Consultation & Assessment',
    programTag: 'Complex Pathway Resolution',
    statusBadge: 'Status Restored & Cleared',
    year: '2024',
    location: 'Calgary, Alberta',
    quote:
      'Saras Immigration helped navigate my case when other consultants told me it was too complicated. Aman evaluated my profile honestly during our initial consultation and built a clear legal strategy that resulted in my approved status. Truly client-centered and dependable.',
    fullNarrative:
      'Facing confusing options, Gurpreet received honest, realistic legal analysis from Amanpreet Singh that unlocked an actionable Alberta immigration route.',
    highlights: [
      'Realistic & Honest Case Diagnostic',
      'Overcame Conflicting Prior Advice',
      'Successful Status & Pathway Resolution',
    ],
  },
  {
    id: 'rev-harmanpreet',
    name: 'Harmanpreet Kaur',
    category: 'Family & Super Visa',
    programTag: 'Parents Super Visa (5-Year)',
    statusBadge: '5-Year Super Visa Approved',
    year: '2025',
    location: 'Brampton, Ontario',
    quote:
      'Secured a 5-year Super Visa for both my parents through Saras Immigration. Amanpreet Sir made sure every medical insurance detail and income proof document met IRCC guidelines perfectly. My parents are now happily here in Canada with us.',
    fullNarrative:
      'Super Visa approvals hinge on meeting strict LICO financial benchmarks and verified Canadian health insurance. Saras Immigration achieved an approval in record turnaround time.',
    highlights: [
      'Multi-Entry 5-Year Consecutive Stay Visa',
      'LICO Minimum Income Verification',
      'Zero-Delay Family Reunification in Brampton',
    ],
  },
  {
    id: 'rev-simranjeet',
    name: 'Simranjeet K.',
    category: 'Provincial Nominees & AAIP',
    programTag: 'Alberta AAIP Provincial Nomination',
    statusBadge: '600-Point Nomination Issued',
    year: '2025',
    location: 'Edmonton, Alberta',
    quote:
      'I reached out to the Edmonton office of Saras Immigration for my Alberta Advantage Immigration Program (AAIP) nomination. Their knowledge of Alberta labor streams is unmatched. I received my provincial nomination and 600 points boost in no time!',
    fullNarrative:
      'With in-depth knowledge of the Alberta Opportunity Stream and Accelerated Tech Pathway, the Saras Immigration Edmonton team guided Simranjeet to immediate provincial nomination.',
    highlights: [
      'Alberta Advantage Immigration Program (AAIP) Mastery',
      'Direct 600-Point Express Entry Boost',
      'Edmonton Local In-Person Support',
    ],
  },
  {
    id: 'rev-amandeep',
    name: 'Amandeep Singh',
    category: 'Work Permits & LMIA',
    programTag: 'Spousal Open Work Permit (SOWP)',
    statusBadge: 'Open Work Permit Approved',
    year: '2025',
    location: 'Mississauga / Brampton, ON',
    quote:
      'Aman helped file our Spousal Open Work Permit (SOWP) while my wife was completing her postgraduate program in Ontario. Fast approval with zero questions from IRCC. He answered all our calls patiently.',
    fullNarrative:
      'Filing an Open Work Permit while a partner is a full-time student requires synchronized proof of enrollment and marriage validity. Saras Immigration managed the filing seamlessly.',
    highlights: [
      'Spousal Open Work Permit (SOWP) Strategy',
      'Synchronized DLI Student Status Documentation',
      'Approved Without Procedural Queries',
    ],
  },
  {
    id: 'rev-jaspreet',
    name: 'Jaspreet S.',
    category: 'Permanent Residency & PR',
    programTag: 'Canadian Experience Class (CEC)',
    statusBadge: 'Landed Permanent Resident',
    year: '2025',
    location: 'Edmonton, AB ➔ Vancouver, BC',
    quote:
      'Amanpreet Sir is one of the most honest and hardworking consultants I have dealt with. He doesn\'t make false claims and prepares each case thoroughly. My CEC PR application was approved without a single bump. Thank you Saras Immigration!',
    fullNarrative:
      'Canadian Experience Class demands airtight proof of qualifying TEER 0, 1, 2, or 3 employment and tax compliance. Saras Immigration executed a flawless submission.',
    highlights: [
      'TEER Code & Payroll Documentation Audit',
      'Complete IRCC Portal Representation',
      'Honest, Zero-False-Promise Practice',
    ],
  },
];

const CATEGORIES = [
  'All Reviews',
  'Permanent Residency & PR',
  'Provincial Nominees & AAIP',
  'Work Permits & LMIA',
  'Study Permits & Students',
  'Family & Super Visa',
  'Consultation & Assessment',
];

function renderLocationText(locationStr: string) {
  if (locationStr.includes('➔') || locationStr.includes('->') || locationStr.includes('→')) {
    const parts = locationStr.split(/➔|->|→/);
    return (
      <span className="inline-flex items-center gap-1.5 font-sans font-medium text-stone-700 text-xs sm:text-sm tracking-normal">
        <span>{parts[0].trim()}</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
        <span className="font-bold text-stone-900">{parts[1].trim()}</span>
      </span>
    );
  }
  return (
    <span className="font-sans font-medium text-stone-700 text-xs sm:text-sm tracking-normal">
      {locationStr}
    </span>
  );
}

export default function TestimonialsPage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Reviews');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeReviewId, setActiveReviewId] = useState<string>('rev-kamalpreet');

  // Modals
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isSubmitStoryOpen, setIsSubmitStoryOpen] = useState(false);

  // New review state
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    program: 'Permanent Residency',
    story: '',
  });
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const handleOpenServiceModal = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    } else {
      router.push('/services');
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    return ALL_REVIEWS.filter((rev) => {
      const matchesCategory =
        selectedCategory === 'All Reviews' || rev.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        rev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.programTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.statusBadge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Active highlighted review object
  const activeReview = useMemo(() => {
    return (
      ALL_REVIEWS.find((r) => r.id === activeReviewId) || ALL_REVIEWS[0]
    );
  }, [activeReviewId]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReviewSubmitted(true);
    setTimeout(() => {
      setIsReviewSubmitted(false);
      setIsSubmitStoryOpen(false);
      setNewReview({
        name: '',
        location: '',
        program: 'Permanent Residency',
        story: '',
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#C8102E] selection:text-white">
      {/* Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Main Page Layout */}
      <main className="pb-24">
        {/* HERO EDITORIAL HEADER */}
        <section className="relative pt-4 sm:pt-6 pb-10 lg:pt-8 lg:pb-14 border-b border-stone-200/80 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Tagline */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-0.5 bg-[#C8102E]" />
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                VERIFIED CLIENT TESTIMONIALS • AMANPREET SINGH (RCIC #R710896)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.08] text-stone-900">
                  Client Testimonials &amp; Success Stories
                </h1>
                <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-3xl">
                  Read authentic, unfiltered words from individuals, students, employers, and families whom Saras Immigration supported through Canadian Express Entry, AAIP/PNP, LMIA, Spousal Sponsorship, and Super Visa applications.
                </p>
              </div>

              {/* Action Buttons Header */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-stretch lg:items-end">
                <button
                  onClick={() => setIsSubmitStoryOpen(true)}
                  className="bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <MessageSquareQuote className="w-4 h-4 text-[#C8102E]" />
                  <span>Share Your Experience</span>
                </button>

                <button
                  onClick={scrollToContact}
                  className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Proof Metrics Strip */}
            <div className="mt-8 sm:mt-12 pt-6 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-800">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                  4.9 / 5.0
                </div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Google &amp; Birdeye Rating
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-serif font-black text-[#C8102E]">
                  96% Approval
                </div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Verified Case Success Rate
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                  1,500+ Cases
                </div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Students, Workers &amp; Families
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-serif font-black text-[#C8102E]">
                  Brampton &amp; Edmonton
                </div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Dual Canadian Offices
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROLS BAR: SEARCH & CATEGORY CHIPS */}
        <section className="py-6 bg-white border-b border-stone-200/80 sticky top-16 z-20 shadow-2xs">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviews by name, program, location..."
                  className="w-full bg-[#FAF8F5] border border-stone-300 rounded-full pl-10 pr-4 py-2 text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C8102E] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Counter */}
              <div className="text-xs font-bold text-stone-600 flex items-center space-x-2">
                <span>
                  Showing <strong className="text-stone-950">{filteredReviews.length}</strong> of{' '}
                  {ALL_REVIEWS.length} client stories
                </span>
                {selectedCategory !== 'All Reviews' && (
                  <button
                    onClick={() => setSelectedCategory('All Reviews')}
                    className="text-[#C8102E] hover:underline font-bold ml-2 cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN STORIES GRID & HIGHLIGHT DOSSIER */}
        <section className="py-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: TESTIMONIAL CARDS */}
              <div className="lg:col-span-7 space-y-5">
                {filteredReviews.length === 0 ? (
                  <div className="bg-white rounded-2xl p-10 text-center border border-stone-200 space-y-3">
                    <p className="text-stone-600 text-sm">No reviews matched your search criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All Reviews');
                      }}
                      className="text-xs font-bold text-[#C8102E] hover:underline cursor-pointer"
                    >
                      Clear search filters
                    </button>
                  </div>
                ) : (
                  filteredReviews.map((rev) => {
                    const isSelected = rev.id === activeReviewId;
                    return (
                      <div
                        key={rev.id}
                        onClick={() => setActiveReviewId(rev.id)}
                        className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#C8102E] ring-1 ring-[#C8102E]/20 shadow-md'
                            : 'border-stone-200/90 hover:border-stone-300 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <h3 className="font-serif font-black text-stone-950 text-lg">
                              {rev.name}
                            </h3>
                            <div className="text-xs text-stone-500 font-medium">
                              {renderLocationText(rev.location)}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <span className="text-[10px] font-bold text-[#C8102E] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {rev.statusBadge}
                            </span>
                            <span className="text-[11px] font-semibold text-stone-400">
                              {rev.year}
                            </span>
                          </div>
                        </div>

                        <blockquote className="text-stone-700 text-sm leading-relaxed border-l-2 border-[#C8102E] pl-3.5 py-1 italic mb-4">
                          &ldquo;{rev.quote}&rdquo;
                        </blockquote>

                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                          <span className="font-bold text-stone-600">
                            {rev.programTag}
                          </span>
                          <span className="font-bold text-[#C8102E] flex items-center space-x-1">
                            <span>Read Case Notes</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* RIGHT STICKY PANEL: DETAILED CASE DOSSIER */}
              <div className="hidden lg:block lg:col-span-5 sticky top-36">
                <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-md space-y-6">
                  <div className="space-y-2 border-b border-stone-200/80 pb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C8102E] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {activeReview.statusBadge}
                      </span>
                      <span className="text-xs text-stone-400 font-semibold">
                        Verified Review • {activeReview.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif font-black text-stone-950">
                      {activeReview.name}
                    </h2>
                    <div className="text-xs text-stone-600 font-medium">
                      {renderLocationText(activeReview.location)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Client Feedback
                    </span>
                    <blockquote className="text-sm text-stone-800 leading-relaxed italic border-l-2 border-[#C8102E] pl-4 py-1">
                      &ldquo;{activeReview.quote}&rdquo;
                    </blockquote>
                  </div>

                  {activeReview.fullNarrative && (
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        RCIC Case Handling Overview
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {activeReview.fullNarrative}
                      </p>
                    </div>
                  )}

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Key Highlights:
                    </span>
                    {activeReview.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-xs font-medium text-stone-800 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-200/80 space-y-3">
                    <button
                      onClick={scrollToContact}
                      className="w-full bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-colors flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                    >
                      <span>Inquire About Similar Pathways</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-stone-500 text-center">
                      Amanpreet Singh • RCIC #R710896 • CICC Regulated
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

      {/* SUBMIT YOUR EXPERIENCE MODAL */}
      <AnimatePresence>
        {isSubmitStoryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div>
                  <h3 className="font-serif font-black text-stone-900 text-lg">
                    Share Your Immigration Story
                  </h3>
                  <p className="text-xs text-stone-500">
                    Inspire future applicants by sharing your experience with Saras Immigration.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitStoryOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-900 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isReviewSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    Thank You for Sharing Your Experience!
                  </h4>
                  <p className="text-xs text-stone-600">
                    Your testimonial has been submitted for review by the Saras Immigration team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Sarah M."
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">City / Location</label>
                      <input
                        type="text"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        placeholder="e.g. Brampton, ON"
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700">Immigration Program / Category</label>
                    <select
                      value={newReview.program}
                      onChange={(e) => setNewReview({ ...newReview, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#C8102E]"
                    >
                      <option value="Permanent Residency & PR">Permanent Residency &amp; PR</option>
                      <option value="Provincial Nominees & AAIP">Provincial Nominees &amp; AAIP</option>
                      <option value="Work Permits & LMIA">Work Permits &amp; LMIA</option>
                      <option value="Study Permits & Students">Study Permits &amp; Students</option>
                      <option value="Family & Super Visa">Family &amp; Super Visa</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700">Your Testimonial Story</label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.story}
                      onChange={(e) => setNewReview({ ...newReview, story: e.target.value })}
                      placeholder="Share your experience working with Amanpreet Singh & Saras Immigration..."
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Submit Testimonial
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Widgets & Modals */}
      <FloatingContactWidget
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        currentLang={currentLang}
      />

      <ServicesModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        selectedServiceId={selectedServiceId}
        onOpenAssessment={() => {
          setIsServiceModalOpen(false);
          setIsAssessmentOpen(true);
        }}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />
    </div>
  );
}
