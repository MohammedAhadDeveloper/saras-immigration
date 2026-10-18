'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  ClipboardCheck,
  FileSignature,
  FolderCheck,
  FileSpreadsheet,
  FileSearch,
  Send,
  BellRing,
  Award,
  HeartHandshake,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { LanguageCode } from '@/lib/translations';

interface StepProcessProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
}

interface StepItem {
  id: number;
  num: string;
  title: string;
  description: string;
  phase: string;
  pinPosition: 'up' | 'down'; // visual pin location in the infographic
  row: 1 | 2;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  tips: string;
}

export default function StepProcess({ onOpenAssessment }: StepProcessProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // 10 Steps precisely corresponding to the Saras Immigration Process Infographic
  const steps: StepItem[] = [
    {
      id: 1,
      num: '01.',
      title: 'Initial Consultation',
      description: 'Book Your Consultation with a Licensed Immigration Consultant',
      phase: 'Discovery & Profile Analysis',
      pinPosition: 'down',
      row: 1,
      icon: Calendar,
      deliverables: [
        'One-on-one session with Amanpreet Singh (RCIC #R710896)',
        'Comprehensive review of your immigration background, work history, and goals',
        'Transparent assessment of legal feasibility across Federal & Provincial streams',
      ],
      tips: 'Have your current resume, educational credentials, and travel history ready for the initial session.',
    },
    {
      id: 2,
      num: '02.',
      title: 'Assessment',
      description: 'In the consultation, know your Eligibility and Immigration options',
      phase: 'Eligibility & CRS Auditing',
      pinPosition: 'up',
      row: 1,
      icon: ClipboardCheck,
      deliverables: [
        'Detailed Comprehensive Ranking System (CRS) score calculation & target optimization',
        'Provincial Nominee Program (AAIP, OINP, BC PNP) eligibility comparison',
        'Personalized roadmap with optimal pathways (Express Entry, Work Permit, Family)',
      ],
      tips: 'We calculate exact cut-offs and identify category-based draw opportunities matching your NOC code.',
    },
    {
      id: 3,
      num: '03.',
      title: 'Sign Agreement',
      description: 'Agreement will define strategy, steps, expectation on your profile',
      phase: 'CICC Regulated Retainer',
      pinPosition: 'down',
      row: 1,
      icon: FileSignature,
      deliverables: [
        'Formal CICC-compliant Retainer Agreement protecting your legal client rights',
        'Clearly defined scope of work, processing milestones, and flat-rate fee schedule',
        'Official filing of Use of a Representative (IMM 5476) with IRCC',
      ],
      tips: 'Never work with unauthorized agents. Your agreement is directly with an RCIC in good standing.',
    },
    {
      id: 4,
      num: '04.',
      title: 'Checklists and Documents',
      description: 'Compile documents and get guidance on missing or additional paperwork',
      phase: 'Document Compilation',
      pinPosition: 'up',
      row: 1,
      icon: FolderCheck,
      deliverables: [
        'Tailored document checklist specifically customized for your immigration category',
        'ECA (WES/ICAS) guidance, IELTS/CELPIP score benchmarks, and police clearance instructions',
        'Sample reference letters and employer verification templates ensuring IRCC compliance',
      ],
      tips: 'Properly formatted employment reference letters prevent the #1 cause of Express Entry application rejections.',
    },
    {
      id: 5,
      num: '05.',
      title: 'Application Preparation',
      description: 'Comprehensive review to ensure accuracy and completeness',
      phase: 'Legal File Drafting',
      pinPosition: 'down',
      row: 1,
      icon: FileSpreadsheet,
      deliverables: [
        'Meticulous drafting and cross-referencing of all IRCC government statutory forms',
        'Preparation of customized Legal Submission Letter authored by Licensed RCIC',
        'Proof of funds verification, certified translations, and biometric documentation audits',
      ],
      tips: 'Every detail in your personal and address history is reconciled to avoid statutory inadmissibility.',
    },
    {
      id: 6,
      num: '06.',
      title: 'Final Review',
      description: 'Conduct a thorough review of the application to verify accuracy and completeness.',
      phase: 'Pre-Submission Audit',
      pinPosition: 'down',
      row: 2,
      icon: FileSearch,
      deliverables: [
        'Double-tier quality assurance check before any portal upload',
        'Verification against latest 2026 IRCC operational guidelines and ministerial instructions',
        'Client file walkthrough and approval prior to official lock-in',
      ],
      tips: 'You receive a complete copy of the finalized application bundle for your personal records.',
    },
    {
      id: 7,
      num: '07.',
      title: 'Submission',
      description: 'Timely submission and progress monitoring',
      phase: 'IRCC Authorized Filing',
      pinPosition: 'up',
      row: 2,
      icon: Send,
      deliverables: [
        'Filing via official IRCC Authorized Representative Portal under RCIC license credentials',
        'Immediate capture of official government Acknowledgment of Receipt (AOR)',
        'Establishment of file number and linkage to automated status tracking',
      ],
      tips: 'Filing through an authorized RCIC portal ensures direct institutional correspondence from visa officers.',
    },
    {
      id: 8,
      num: '08.',
      title: 'Follow-Up & Updates',
      description: 'Regular follow-ups and responding promptly to any requests for additional information by authorities',
      phase: 'Active Liaison & Compliance',
      pinPosition: 'down',
      row: 2,
      icon: BellRing,
      deliverables: [
        'Biometrics, medical exam, and background check scheduling guidance',
        'Swift response to IRCC Additional Document Requests (ADR) or Procedural Fairness Letters (PFL)',
        'Proactive case notes (GCMS) requests and processing time updates',
      ],
      tips: 'We monitor strict IRCC response deadlines so your case moves forward without procedural delays.',
    },
    {
      id: 9,
      num: '09.',
      title: 'Decision',
      description: 'Guidance on the next steps in process based on outcome',
      phase: 'Approval & COPR Issuance',
      pinPosition: 'up',
      row: 2,
      icon: Award,
      deliverables: [
        'Receipt and legal verification of Confirmation of Permanent Residence (COPR) or Visa Stamp',
        'Passport submission assistance and visa validity date verification',
        'Pre-landing checklist including border entry requirements and port-of-entry advice',
      ],
      tips: 'Celebrate your milestone! We review your COPR details carefully to ensure zero clerical errors before travel.',
    },
    {
      id: 10,
      num: '10.',
      title: 'Post-Immigration Support',
      description: 'Offer guidance on post-arrival procedures, support in accessing services, and address any initial challenges',
      phase: 'Settlement & Integration',
      pinPosition: 'down',
      row: 2,
      icon: HeartHandshake,
      deliverables: [
        'Guidance on securing Social Insurance Number (SIN) and Provincial Healthcare (OHIP/AHCIP)',
        'Permanent Resident Card delivery tracking and Canadian driver licensing steps',
        'Settlement orientation for housing, banking, and future Canadian Citizenship planning',
      ],
      tips: 'Our relationship does not end at approval—we support your long-term success as you build your life in Canada.',
    },
  ];

  const currentStep = steps[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  // Row 1: Steps 01 to 05 (left to right)
  const row1Steps = steps.slice(0, 5);
  // Row 2: In the infographic, row 2 flows 06 (under 05 on the right) through 10 (on the left)
  // To display visually from left to right as [10, 09, 08, 07, 06], or matching the flow:
  // In the image:
  // Col 1: 01 (top), 10 (bottom)
  // Col 2: 02 (top), 09 (bottom)
  // Col 3: 03 (top), 08 (bottom)
  // Col 4: 04 (top), 07 (bottom)
  // Col 5: 05 (top), 06 (bottom)
  // Flow is 01->02->03->04->05 then curve down to 06, then left 06->07->08->09->10!
  const row2StepsDisplay = [steps[9], steps[8], steps[7], steps[6], steps[5]]; // [10, 09, 08, 07, 06]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 relative overflow-hidden border-b border-stone-200">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-red-100/50 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching the provided Infographic */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#C8102E] uppercase tracking-widest bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>STEP-BY-STEP CANADIAN ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-stone-950 tracking-tight uppercase">
            HOW THE <span className="text-[#C8102E]">PROCESS WORKS</span>
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            From your initial consultation to landing and settlement support, our 10-step structured roadmap ensures full legal compliance and maximum success.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP / TABLET SERPENTINE ROADMAP (Matching the exact Infographic)
           ========================================================================= */}
        <div className="hidden lg:block relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12">
          {/* Faint Saras Immigration Watermark in Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
            <span className="font-serif font-black text-7xl uppercase tracking-widest text-stone-900">
              SARAS IMMIGRATION
            </span>
          </div>

          <div className="relative z-20 space-y-16">
            {/* ----------------- ROW 1: Steps 01 to 05 (Left to Right) ----------------- */}
            <div className="relative">
              {/* Dashed connector line through the centers of 01 - 05 */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-stone-300 -translate-y-1/2 z-0" />

              {/* 5 Column Grid for Steps 01 to 05 */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {row1Steps.map((step) => {
                  const isActive = activeStepIndex === step.id - 1;
                  const isPinUp = step.pinPosition === 'up';

                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStepIndex(step.id - 1)}
                      className={`group flex flex-col items-center cursor-pointer transition-all duration-300 p-2 rounded-2xl ${
                        isActive ? 'bg-red-50/60 ring-2 ring-[#C8102E]/30' : 'hover:bg-stone-50'
                      }`}
                    >
                      {/* Top Content (if pin is UP) */}
                      <div className="h-28 flex flex-col justify-end text-center px-1 mb-3">
                        {isPinUp ? (
                          <div className="transition-transform group-hover:-translate-y-1 duration-200">
                            <p className="text-[11px] leading-tight text-stone-500 font-medium mb-1.5 line-clamp-3">
                              {step.description}
                            </p>
                            <h4
                              className={`text-xs font-bold font-serif uppercase tracking-wider transition-colors ${
                                isActive ? 'text-[#C8102E]' : 'text-stone-900 group-hover:text-[#C8102E]'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mx-auto mt-1" />
                            <div className="w-0.5 h-4 bg-stone-300 mx-auto" />
                          </div>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>

                      {/* Numbered Circle Node */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm relative z-10 ${
                          isActive
                            ? 'bg-[#C8102E] text-white ring-4 ring-red-200 scale-110 shadow-md'
                            : 'bg-white border-2 border-[#E8A598] text-[#9A3B26] group-hover:border-[#C8102E] group-hover:scale-105'
                        }`}
                      >
                        <span>{step.num}</span>
                      </div>

                      {/* Bottom Content (if pin is DOWN) */}
                      <div className="h-28 flex flex-col justify-start text-center px-1 mt-3">
                        {!isPinUp ? (
                          <div className="transition-transform group-hover:translate-y-1 duration-200">
                            <div className="w-0.5 h-4 bg-stone-300 mx-auto" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mx-auto mb-1" />
                            <h4
                              className={`text-xs font-bold font-serif uppercase tracking-wider transition-colors mb-1 ${
                                isActive ? 'text-[#C8102E]' : 'text-stone-900 group-hover:text-[#C8102E]'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <p className="text-[11px] leading-tight text-stone-500 font-medium line-clamp-3">
                              {step.description}
                            </p>
                          </div>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ----------------- ROW 2: Steps 10 to 06 (Flows Right-to-Left: 06 -> 07 -> 08 -> 09 -> 10) ----------------- */}
            <div className="relative">
              {/* Dashed connector line through the centers of 10 - 06 */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-stone-300 -translate-y-1/2 z-0" />

              {/* 5 Column Grid for Steps 10, 09, 08, 07, 06 (displayed left to right) */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {row2StepsDisplay.map((step) => {
                  const isActive = activeStepIndex === step.id - 1;
                  const isPinUp = step.pinPosition === 'up';

                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStepIndex(step.id - 1)}
                      className={`group flex flex-col items-center cursor-pointer transition-all duration-300 p-2 rounded-2xl ${
                        isActive ? 'bg-red-50/60 ring-2 ring-[#C8102E]/30' : 'hover:bg-stone-50'
                      }`}
                    >
                      {/* Top Content (if pin is UP) */}
                      <div className="h-28 flex flex-col justify-end text-center px-1 mb-3">
                        {isPinUp ? (
                          <div className="transition-transform group-hover:-translate-y-1 duration-200">
                            <p className="text-[11px] leading-tight text-stone-500 font-medium mb-1.5 line-clamp-3">
                              {step.description}
                            </p>
                            <h4
                              className={`text-xs font-bold font-serif uppercase tracking-wider transition-colors ${
                                isActive ? 'text-[#C8102E]' : 'text-stone-900 group-hover:text-[#C8102E]'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mx-auto mt-1" />
                            <div className="w-0.5 h-4 bg-stone-300 mx-auto" />
                          </div>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>

                      {/* Numbered Circle Node */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm relative z-10 ${
                          isActive
                            ? 'bg-[#C8102E] text-white ring-4 ring-red-200 scale-110 shadow-md'
                            : 'bg-white border-2 border-[#E8A598] text-[#9A3B26] group-hover:border-[#C8102E] group-hover:scale-105'
                        }`}
                      >
                        <span>{step.num}</span>
                      </div>

                      {/* Bottom Content (if pin is DOWN) */}
                      <div className="h-28 flex flex-col justify-start text-center px-1 mt-3">
                        {!isPinUp ? (
                          <div className="transition-transform group-hover:translate-y-1 duration-200">
                            <div className="w-0.5 h-4 bg-stone-300 mx-auto" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mx-auto mb-1" />
                            <h4
                              className={`text-xs font-bold font-serif uppercase tracking-wider transition-colors mb-1 ${
                                isActive ? 'text-[#C8102E]' : 'text-stone-900 group-hover:text-[#C8102E]'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <p className="text-[11px] leading-tight text-stone-500 font-medium line-clamp-3">
                              {step.description}
                            </p>
                          </div>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET STEP SWITCHER TABS (Quick Step Selector 01 - 10)
           ========================================================================= */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#C8102E] text-white shadow-md'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span>{step.num}</span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            ACTIVE STEP SPOTLIGHT CARD (Updates dynamically as the steps change)
           ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 max-w-5xl mx-auto shadow-sm">
          {/* Header Controls: Step indicator + Prev/Next buttons */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-100 gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-full bg-red-50 border border-red-200 text-[#C8102E] font-black text-sm flex items-center justify-center">
                {currentStep.num.replace('.', '')}
              </span>
              <div>
                <span className="text-[11px] font-bold text-[#C8102E] uppercase tracking-widest block">
                  Step {currentStep.id} of 10 • {currentStep.phase}
                </span>
                <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                  Interactive Canadian Immigration Roadmap
                </span>
              </div>
            </div>

            {/* Quick Step Controls */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={handlePrev}
                aria-label="Previous Step"
                className="p-2 sm:px-3 sm:py-2 rounded-full border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 transition-all flex items-center space-x-1.5 text-xs font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Step"
                className="p-2 sm:px-3 sm:py-2 rounded-full border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 transition-all flex items-center space-x-1.5 text-xs font-bold"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dynamic Content Spotlight with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="py-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-950 tracking-tight">
                    {currentStep.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#C8102E] font-medium mt-1">
                    {currentStep.description}
                  </p>
                </div>

                <div className="inline-flex items-center space-x-1.5 bg-stone-100 text-stone-800 px-3.5 py-1.5 rounded-xl border border-stone-200 text-xs font-bold shrink-0 self-start">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>RCIC Supervised</span>
                </div>
              </div>

              {/* Deliverables / What We Do At This Step */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                  <span>What Saras Immigration Does at this Stage:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex flex-col justify-between space-y-2 hover:border-red-200 transition-colors"
                    >
                      <div className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-6">
                        Benchmark {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Tip Banner */}
              <div className="bg-[#FAF8F5] border border-amber-200/70 rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-xs sm:text-sm text-stone-700">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">RCIC Amanpreet Singh&apos;s Strategic Advice:</span>
                  <span className="leading-relaxed">{currentStep.tips}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-600 font-semibold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
              <span>CICC License #R710896 • Regulated Canadian Immigration Consultant</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-2xs"
              >
                <span>Book Your Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
