'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface CtaBannerProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
}

export default function CtaBanner({ currentLang, onOpenAssessment }: CtaBannerProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#C8102E] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
              96% SUCCESS RATE • RCIC LICENSED #R710896
            </p>

            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              {getTranslation(currentLang, 'ctaTitle')}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-red-100 leading-relaxed font-normal">
              {getTranslation(currentLang, 'ctaSubtitle')}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-red-100">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-300" />
                No Hidden Fees
              </span>
              <span>•</span>
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-300" />
                Licensed RCIC Representation
              </span>
              <span>•</span>
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-300" />
                Fast 24h Response
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 shrink-0">
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white font-semibold text-base px-8 py-4 rounded-full shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </button>

            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base px-7 py-4 rounded-full shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <CheckCircle2 className="w-5 h-5 text-[#C8102E]" />
              <span>Check Eligibility</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
