'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Award,
  Globe,
  GraduationCap,
  Users,
  Briefcase,
  FileCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import { LanguageCode } from '@/lib/translations';

const REGIONAL_COUNTRIES = [
  {
    region: 'Americas',
    countries: ['Canada', 'USA', 'Mexico', 'Brazil', 'Jamaica', 'Trinidad & Tobago'],
  },
  {
    region: 'South Asia & Middle East',
    countries: [
      'India (Delhi, Punjab, Gujarat)',
      'Pakistan',
      'UAE (Dubai, Abu Dhabi)',
      'Saudi Arabia',
      'Qatar',
      'Bangladesh',
      'Sri Lanka',
    ],
  },
  {
    region: 'Europe & UK',
    countries: ['United Kingdom', 'Germany', 'France', 'Portugal', 'Ireland'],
  },
  {
    region: 'East & Southeast Asia',
    countries: ['Philippines', 'China', 'Vietnam', 'Malaysia', 'Singapore'],
  },
  {
    region: 'Africa & Oceania',
    countries: ['Nigeria', 'Kenya', 'Ghana', 'Australia', 'New Zealand'],
  },
];

export default function AboutPage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServiceModal = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    } else {
      router.push('/services');
    }
  };

  const scrollToCountries = () => {
    const countriesElem = document.getElementById('international-service');
    if (countriesElem) {
      countriesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans antialiased selection:bg-[#C8102E] selection:text-white">
      {/* Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenAssessment={scrollToContact}
        onOpenServiceModal={handleOpenServiceModal}
      />

      <main className="pt-0 pb-12 sm:pb-16">
        {/* HERO SECTION / MEET AMANPREET SINGH */}
        <section className="pt-4 pb-8 sm:py-12 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Right Column (Portrait Image): Order first on mobile, second on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 order-first lg:order-2 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full"
              >
                <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 aspect-[896/1200] bg-stone-100 shadow-md">
                  <Image
                    src="/amanpreet-singh.jpg"
                    alt="Amanpreet Singh - Licensed Regulated Canadian Immigration Consultant RCIC #R710896"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-5 text-white">
                    <div className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                      Founder &amp; Principal Consultant
                    </div>
                    <div className="text-lg font-serif font-bold">Amanpreet Singh, RCIC</div>
                    <div className="text-xs text-stone-300">CICC License #R710896</div>
                  </div>
                </div>
              </motion.div>

              {/* Left Column (Bio Content): Order last on mobile, first on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 order-last lg:order-1 space-y-6 sm:space-y-8"
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Clean credentials line */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold tracking-wider text-stone-600 uppercase border-b border-stone-200/80 pb-3">
                    <span className="text-[#C8102E] font-bold">CICC Member #R710896</span>
                    <span className="text-stone-300">•</span>
                    <span>Licensed Immigration Counsel</span>
                    <span className="text-stone-300 hidden sm:inline">•</span>
                    <span className="hidden sm:inline">96% Visa Approval Rate</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-950 tracking-tight leading-[1.08]">
                    Meet <span className="text-[#C8102E]">Amanpreet Singh</span>
                  </h1>

                  <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                    Regulated Canadian Immigration Consultant (RCIC) • Founder of Saras Immigration
                  </p>
                </div>

                <p className="text-base sm:text-xl text-stone-800 leading-relaxed font-normal">
                  Having arrived in Canada as an international student, Amanpreet Singh personally lived through every phase of the immigration journey — from study permits to post-graduate work permits, permanent residency, and Canadian citizenship. This lived experience gives Saras Immigration unmatched empathy, practical insight, and dedication.
                </p>

                {/* Specialties Editorial Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1">
                  <div className="border-t border-stone-200/80 pt-3 sm:pt-4 space-y-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">1. Express Entry &amp; PNP</span>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">
                      CRS Score Maximization, FSW, CEC &amp; Alberta AAIP
                    </h3>
                  </div>

                  <div className="border-t border-stone-200/80 pt-3 sm:pt-4 space-y-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">2. LMIA &amp; Work Permits</span>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">
                      Employer LMIA Filings, Dual-Intent &amp; Spousal Permits
                    </h3>
                  </div>

                  <div className="border-t border-stone-200/80 pt-3 sm:pt-4 space-y-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">3. Family Reunification</span>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">
                      Spousal Sponsorships &amp; Parents Super Visas
                    </h3>
                  </div>

                  <div className="border-t border-stone-200/80 pt-3 sm:pt-4 space-y-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">4. Dual Canadian Hubs</span>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">
                      Full-Service Offices in Brampton (ON) &amp; Edmonton (AB)
                    </h3>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                  <button
                    onClick={scrollToContact}
                    className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm px-8 py-3.5 sm:py-4 rounded-lg transition-all flex items-center justify-center space-x-2.5 shadow-sm hover:shadow-md active:scale-95"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={scrollToContact}
                    className="bg-stone-900 hover:bg-stone-950 text-white font-bold text-sm px-8 py-3.5 sm:py-4 rounded-lg transition-all flex items-center justify-center space-x-2.5 shadow-sm hover:shadow-md active:scale-95"
                  >
                    <span>Check Eligibility</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT SARAS IMMIGRATION CONSULTANCY */}
        <section className="py-10 sm:py-16 lg:py-24 bg-white border-y border-stone-200/80 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            {/* Kicker Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-0.5 bg-[#C8102E]" />
                <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                  ABOUT OUR CONSULTANCY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
                About Saras Immigration Consultancy Inc.
              </h2>
            </motion.div>

            {/* Asymmetric Overview Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                      Licensed Canadian Practice
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Offices in Brampton &amp; Edmonton
                    </span>
                  </div>

                  <p className="text-base sm:text-xl text-stone-900 leading-relaxed font-serif font-normal">
                    At Saras Immigration, we believe that immigration is not just about paperwork — it is about people, families, careers, and life transformations. Our mission is to provide clear strategy, honest counsel, and meticulous case execution.
                  </p>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal pt-1">
                    Whether you are an international student seeking post-graduation settlement, a skilled worker aiming for permanent residency through Express Entry or PNP, a business seeking LMIA talent, or a Canadian resident sponsoring family, our RCIC-licensed team represents your case with precision.
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-semibold text-stone-800">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#C8102E] shrink-0" />
                    <span>96% Application Approval Rate</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#C8102E] shrink-0" />
                    <span>Direct IRCC Portal Representation</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#C8102E] shrink-0" />
                    <span>Transparent Retainer Agreements</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#C8102E] shrink-0" />
                    <span>Alberta AAIP &amp; Ontario OINP Mastery</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Image Frame */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 relative hidden sm:block"
              >
                <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-lg aspect-[16/11] sm:aspect-[16/10] min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                    alt="Saras Immigration Consultancy Canadian Corporate Office"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us & How We Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-6 sm:pt-8 border-t border-stone-200/80"
            >
              <div className="space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-0.5 bg-[#C8102E]" />
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                      TRUST &amp; INTEGRITY
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950">
                    Why Choose Saras Immigration
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    We do not give false hopes. We analyze your factual eligibility, uncover potential risks beforehand, and construct the strongest possible legal argument supported by documented evidence.
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-stone-200/80 text-xs font-semibold text-stone-600 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>CICC Member #R710896 Regulated Practice</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-0.5 bg-[#C8102E]" />
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                      OUR APPROACH
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950">
                    How We Work
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Our philosophy centers on clarity and empathy. From your initial evaluation through retainer, document assembly, and portal submission, you are never left in the dark about the status of your file.
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-stone-200/80 text-xs font-semibold text-stone-600 flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Client-First Transparency &amp; Fast Communication</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: CORE IMMIGRATION PATHWAYS */}
        <section className="py-10 sm:py-16 lg:py-24 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            {/* Kicker Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-0.5 bg-[#C8102E]" />
                <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                  CORE IMMIGRATION PATHWAYS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
                How We Can Help You
              </h2>
              <p className="text-sm sm:text-base text-stone-700 max-w-2xl leading-relaxed">
                Specialized Canadian immigration solutions for individuals, students, skilled workers, employers, and families worldwide.
              </p>
            </motion.div>

            {/* Asymmetric Pathway Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
            >
              {/* PRIMARY FEATURED: EXPRESS ENTRY & PNP */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border-2 border-[#C8102E]/20 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                      Primary Economic Pathway
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      High Demand
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-serif font-black text-stone-950">
                    Express Entry &amp; Provincial Nominee Programs
                  </h3>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Permanent Residency via Federal Skilled Worker (FSW), Canadian Experience Class (CEC), and high-growth provincial nomination programs in Alberta (AAIP) and Ontario (OINP).
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-6 pt-4 sm:pt-6 border-t border-stone-200/80">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-stone-800">
                      <span className="bg-[#FAF8F5] border border-stone-200/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md">CRS Score Optimization</span>
                      <span className="bg-[#FAF8F5] border border-stone-200/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md">Alberta AAIP Opportunity &amp; Tech Streams</span>
                      <span className="bg-[#FAF8F5] border border-stone-200/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md">600 Bonus Points Support</span>
                    </div>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm px-6 sm:px-8 py-3.5 rounded-lg transition-all inline-flex items-center justify-center space-x-2 shadow-xs hover:shadow-sm active:scale-95 w-full sm:w-auto"
                  >
                    <span>Assess Your CRS &amp; PNP Points</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* SECONDARY PATHWAYS STACK */}
              <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">
                {/* LMIA & Work Permits */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 space-y-4 flex flex-col justify-between flex-1 shadow-xs hover:shadow-md transition-shadow">
                  <div className="space-y-2 sm:space-y-3">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                      Employer &amp; Worker Solutions
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      LMIA &amp; Work Permits
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      Assisting Canadian employers with ESDC LMIA compliance and helping skilled professionals obtain employer-specific or open work permits.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                    <div className="text-xs font-semibold text-stone-600">
                      High/Low Wage • PGWP • SOWP
                    </div>
                    <button
                      onClick={scrollToContact}
                      className="text-xs font-bold text-[#C8102E] hover:underline flex items-center space-x-1"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Spousal & Family Sponsorship */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 space-y-4 flex flex-col justify-between flex-1 shadow-xs hover:shadow-md transition-shadow">
                  <div className="space-y-2 sm:space-y-3">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                      Family Reunification
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      Spousal Sponsorship &amp; Super Visa
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      Inland and Outland spousal applications, Spousal Open Work Permits (SOWP), and up to 5-year multi-entry Super Visas for parents and grandparents.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                    <div className="text-xs font-semibold text-stone-600">
                      Fast Reunification • Zero Gaps
                    </div>
                    <button
                      onClick={scrollToContact}
                      className="text-xs font-bold text-[#C8102E] hover:underline flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: INTERNATIONAL SERVICE & DUAL LOCATIONS */}
        <section
          id="international-service"
          className="py-10 sm:py-16 lg:py-24 bg-[#FAF8F5] text-stone-900 border-t border-b border-stone-200/80 relative"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            {/* Kicker Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="border-b border-stone-200/80 pb-6 sm:pb-8 space-y-2 sm:space-y-3 max-w-2xl"
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-0.5 bg-[#C8102E]" />
                <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest">
                  GLOBAL CLIENT SERVICE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-950 tracking-tight">
                Worldwide Service &amp; Canadian Offices
              </h2>
              <p className="text-sm sm:text-lg text-stone-700 leading-relaxed">
                Whether you are already inside Canada or applying from abroad, Saras Immigration is by your side.
              </p>
            </motion.div>

            {/* Editorial Overview Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3 sm:space-y-4 max-w-4xl"
            >
              <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-serif font-normal">
                With corporate offices in Brampton, Ontario and Edmonton, Alberta, alongside our international liaison presence in New Delhi, India, we offer in-person and seamless virtual consultations (Zoom, Teams, WhatsApp) across all time zones.
              </p>
              <p className="text-xs sm:text-base text-stone-700 leading-relaxed font-normal">
                Our clients come from South Asia, the Middle East, Europe, the Americas, Africa, and East Asia, trusting us to manage their Canadian temporary and permanent residency milestones.
              </p>
            </motion.div>

            {/* Regional Serviced Regions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 sm:space-y-6 pt-4 border-t border-stone-200/80"
            >
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block">
                  Key Serviced Regions
                </span>
                <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                  International Reach
                </span>
              </div>

              <div className="divide-y divide-stone-200/80">
                {REGIONAL_COUNTRIES.map((group, idx) => (
                  <div
                    key={idx}
                    className="py-4 sm:py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4"
                  >
                    <div className="md:w-1/3 flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                      <h3 className="text-base font-serif font-bold text-stone-950">
                        {group.region}
                      </h3>
                      <span className="text-[10px] font-bold text-[#C8102E] bg-red-50 border border-red-100/80 px-2 py-0.5 rounded uppercase tracking-wider ml-2">
                        {group.countries.length}
                      </span>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:w-2/3 flex-wrap items-center gap-x-4 gap-y-2">
                      {group.countries.map((country, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-sm font-medium text-stone-800 flex items-center"
                        >
                          {cIdx > 0 && <span className="text-stone-300 mr-4 font-light">•</span>}
                          {country}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden flex-wrap gap-1.5 pt-1">
                      {group.countries.map((country, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs font-semibold text-stone-800 bg-white border border-stone-200/90 px-2.5 py-1 rounded-md shadow-2xs"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Assessment Callout */}
            <div className="pt-2 sm:pt-4 flex items-center justify-between">
              <button
                onClick={scrollToContact}
                className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all flex items-center space-x-2 shadow-sm hover:shadow-md active:scale-95 w-full sm:w-auto justify-center"
              >
                <span>Get A Free Eligibility Assessment</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
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
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Floating Speed Dial Button */}
      <FloatingContactWidget
        currentLang={currentLang}
        onOpenAssessment={scrollToContact}
      />
    </div>
  );
}
