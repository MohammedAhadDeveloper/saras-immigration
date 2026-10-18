'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Globe,
  FileText,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Lock,
  ArrowRight,
  Building,
  UserCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AssessmentModal from '@/components/AssessmentModal';
import ServicesModal from '@/components/ServicesModal';
import { LanguageCode } from '@/lib/translations';

export default function ContactPage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    country: '',
    category: 'Express Entry & Skilled Worker',
    message: '',
    fileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion State for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleLanguageChange = (code: LanguageCode) => {
    setCurrentLang(code);
  };

  const handleOpenServiceModal = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    } else {
      router.push('/services');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        whatsapp: '',
        country: '',
        category: 'Express Entry & Skilled Worker',
        message: '',
        fileName: '',
      });
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const CATEGORIES = [
    'Express Entry & Skilled Worker (FSW / CEC)',
    'Provincial Nominee Program (AAIP Alberta / OINP Ontario)',
    'Labour Market Impact Assessment (LMIA) for Employers',
    'Spousal & Family Sponsorship',
    'Super Visa for Parents & Grandparents',
    'Study Permits & Post-Graduation Work Permits (PGWP)',
    'Work Permits & Spousal Open Work Permits (SOWP)',
    'Visitor Visas & TRV Extensions',
    'Canadian Citizenship & PR Card Renewals',
    'Status Restoration & Refusal Overhaul',
    'General Consultation Inquiry',
  ];

  const FAQS = [
    {
      q: 'How fast can I expect a response after contacting Saras Immigration?',
      a: 'Our RCIC legal team reviews all inquiries promptly. You will receive a direct, personalized response within 24 business hours from our Brampton or Edmonton office.',
    },
    {
      q: 'Do you offer virtual consultations for clients outside Canada or in other provinces?',
      a: 'Yes! We consult with clients across Canada and internationally (India, Middle East, UK, US, etc.) via high-definition video calls (Google Meet, Zoom, MS Teams) and WhatsApp phone appointments tailored to your local time zone.',
    },
    {
      q: 'What credentials does Consultant Amanpreet Singh hold?',
      a: 'Amanpreet Singh is a licensed Regulated Canadian Immigration Consultant in good standing with the College of Immigration and Citizenship Consultants (CICC License #R710896). Saras Immigration maintains an exceptional 96% visa approval rate.',
    },
    {
      q: 'Can Canadian employers contact you directly for LMIA applications?',
      a: 'Absolutely. We assist Canadian business owners and HR teams with ESDC advertising compliance, transition plans, high/low-wage LMIAs, and dual-intent PR-support LMIAs from start to finish.',
    },
    {
      q: 'Is my personal and application information kept confidential?',
      a: 'Strictly yes. As CICC-regulated immigration counsel, all communications, documents, and assessment details are kept in strict confidentiality in compliance with the CICC Code of Professional Ethics.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans flex flex-col antialiased selection:bg-[#C8102E] selection:text-white">
      {/* Navbar Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />

      <main className="flex-1 pt-0 pb-12 sm:pb-20">
        {/* HERO SECTION */}
        <section className="pt-4 pb-8 sm:py-12 lg:py-16 bg-[#FAF8F5] border-b border-stone-200/80 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#C8102E] uppercase tracking-widest bg-red-50 border border-red-200/80 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                <span>Contact Saras Immigration Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-950 tracking-tight leading-[1.08]">
                Get in Touch With Our <span className="text-[#C8102E]">RCIC Team</span>
              </h1>

              <p className="text-base sm:text-xl text-stone-700 font-normal leading-relaxed">
                Whether you are applying for Permanent Residency, extending your work authorization, sponsoring family, or hiring international talent, Consultant <span className="font-semibold text-stone-900">Amanpreet Singh (RCIC #R710896)</span> and our legal team are ready to guide you.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-700">
                <div className="flex items-center space-x-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>CICC Member #R710896</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <UserCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>96% Visa Approval Rate</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Globe className="w-4 h-4 text-[#C8102E]" />
                  <span>Brampton &amp; Edmonton Offices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT CONTENT: CONTACT INFO + FORM */}
        <section className="py-10 sm:py-16 lg:py-20 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* LEFT COLUMN: OFFICE CONTACT CARD & MAP EMBED */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Office Info Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-md space-y-6">
                  <div className="flex items-center justify-between pb-5 border-b border-stone-200/80">
                    <div>
                      <h3 className="text-xl font-serif font-extrabold text-stone-950">
                        Saras Immigration
                      </h3>
                      <p className="text-xs text-[#C8102E] font-bold mt-0.5">
                        Consultancy Inc. • CICC Licensed Practice
                      </p>
                    </div>
                    <span className="bg-red-50 text-[#C8102E] text-[10px] px-2.5 py-1 rounded-md font-extrabold uppercase tracking-wider border border-red-100">
                      RCIC #R710896
                    </span>
                  </div>

                  <div className="space-y-5 text-sm divide-y divide-stone-100">
                    {/* Brampton Office */}
                    <div className="pt-2 first:pt-0">
                      <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                        Address: Brampton Head Office (GTA)
                      </div>
                      <p className="text-stone-900 font-semibold mt-1 leading-relaxed">
                        170 Steelwell Rd, Suite 200
                        <br />
                        Brampton, Ontario L6T 5T3, Canada
                      </p>
                    </div>

                    {/* Edmonton Office */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                        Address: Edmonton Office (Alberta)
                      </div>
                      <p className="text-stone-900 font-semibold mt-1 leading-relaxed">
                        2882 Parsons Rd NW, UNIT 202
                        <br />
                        Edmonton, Alberta T6E 5S8, Canada
                      </p>
                      <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold border border-amber-200/80 inline-block mt-1">
                        By Appointment Only
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="mt-1 space-y-1">
                        <a
                          href="tel:16477131192"
                          className="text-stone-950 font-extrabold text-sm hover:text-[#C8102E] transition-colors block"
                        >
                          Brampton / Toronto: (647) 713-1192
                        </a>
                        <a
                          href="tel:17808516016"
                          className="text-stone-950 font-extrabold text-sm hover:text-[#C8102E] transition-colors block"
                        >
                          Edmonton Office: (780) 851-6016
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                        Email
                      </div>
                      <a
                        href="mailto:info@sarasimmigration.ca"
                        className="text-stone-900 font-semibold hover:text-[#C8102E] transition-colors block mt-1 break-all"
                      >
                        info@sarasimmigration.ca
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/16477131192?text=Hello%20Saras%20Immigration%2C%20I%20would%20like%20to%20inquire%20about%20Canadian%20Immigration."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-extrabold text-sm hover:underline block mt-1"
                      >
                        Chat via WhatsApp: +1 (647) 713-1192
                      </a>
                    </div>

                    {/* Business Hours */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                        Hours (Operating Hours EST)
                      </div>
                      <p className="text-stone-800 font-medium text-xs mt-1 leading-relaxed">
                        Monday – Friday: 9:00 AM – 7:00 PM
                        <br />
                        Saturday: 9:00 AM – 5:00 PM
                        <br />
                        Sunday: 11:00 AM – 5:00 PM (By Appointment)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map Location Frame */}
                <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                      <Building className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>Brampton Headquarters</span>
                    </span>
                    <a
                      href="https://maps.google.com/?q=170+Steelwell+Rd+Suite+200+Brampton+ON+L6T+5T3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#C8102E] hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Get Directions</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-stone-200 relative bg-stone-100">
                    <iframe
                      title="Saras Immigration Brampton Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.895318621808!2d-79.69741272382672!3d43.73350297109886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c2005a8b79f%3A0xc321ae8d06b63d91!2s170%20Steelwell%20Rd%20%23200%2C%20Brampton%2C%20ON%20L6T%205T3!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: INTERACTIVE CONSULTATION FORM */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-md space-y-6">
                  
                  <div className="border-b border-stone-200/80 pb-5">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest block mb-1">
                      Direct RCIC Consultation Request
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-950">
                      Send a Message to Our Legal Team
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Fill out the form below and Consultant Amanpreet Singh’s team will review your details within 24 business hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-stone-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 my-6"
                    >
                      <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-stone-900">
                        Consultation Inquiry Received!
                      </h3>
                      <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Saras Immigration. An authorized representative will examine your inquiry and contact you shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-stone-900 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            First Name <span className="text-[#C8102E]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="e.g. Aman"
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            Last Name <span className="text-[#C8102E]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="e.g. Singh"
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            Email Address <span className="text-[#C8102E]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            Phone / WhatsApp <span className="text-[#C8102E]">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (647) 000-0000"
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Country of Residence & Pathway Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            Current Country of Residence
                          </label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            placeholder="e.g. Canada (Ontario/Alberta), India, UAE"
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                            Program of Interest
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 outline-none transition-all cursor-pointer"
                          >
                            {CATEGORIES.map((cat, idx) => (
                              <option key={idx} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                          Tell Us About Your Case / Goals <span className="text-[#C8102E]">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide details about your current immigration status, education, work experience, IELTS/language scores, or specific questions..."
                          className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#C8102E] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Optional Resume / File Upload */}
                      <div className="p-4 bg-stone-50 border border-dashed border-stone-300 rounded-xl flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-stone-500" />
                          <div className="text-xs">
                            <span className="font-bold text-stone-800 block">
                              Attach CV / Resume or Document (Optional)
                            </span>
                            <span className="text-stone-500 text-[11px]">
                              {formData.fileName || 'PDF, DOCX up to 10MB'}
                            </span>
                          </div>
                        </div>
                        <label className="bg-white border border-stone-300 hover:border-stone-400 text-stone-700 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors shadow-2xs">
                          <span>Browse</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center active:scale-98 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Submitting to Legal Team...</span>
                        ) : (
                          <span>Submit Consultation Request</span>
                        )}
                      </button>

                      <p className="text-[11px] text-stone-500 text-center pt-2">
                        All information is strictly confidential under CICC Professional Conduct Rules.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-stone-200/80">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                  GOT QUESTIONS?
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-950">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3 pt-4">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-stone-900 text-sm hover:text-[#C8102E] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-stone-400 transition-transform ${
                          openFaq === idx ? 'rotate-90 text-[#C8102E]' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Modals */}
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
    </div>
  );
}
