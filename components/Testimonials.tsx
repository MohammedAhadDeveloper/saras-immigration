'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Check, X, ChevronRight, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface TestimonialsProps {
  currentLang: LanguageCode;
}

// Helper to get initials from name
function getInitials(name: string) {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featured = TESTIMONIALS[0];
  const secondary = TESTIMONIALS.slice(1, 3);

  return (
    <section id="testimony" className="py-10 md:py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3 flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-[#C8102E]" />
              <span>CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
              {getTranslation(currentLang, 'testiTitle')}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {getTranslation(currentLang, 'testiSubtitle')}
            </p>
          </div>

          <Link
            href="/testimonials"
            className="shrink-0 bg-slate-900 hover:bg-[#C8102E] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <span>{getTranslation(currentLang, 'viewAllTestimonials')} ({TESTIMONIALS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Editorial Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Story Card (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#FAF8F5] text-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-stone-300 flex flex-col justify-between relative overflow-hidden shadow-xs"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-stone-300 pointer-events-none opacity-40" />

            <div className="relative z-10">
              <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="inline-flex items-center space-x-2 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{featured.tag}</span>
              </div>

              <blockquote className="text-base sm:text-xl font-serif leading-relaxed text-stone-800 italic border-l-3 border-[#C8102E] pl-4 py-1 line-clamp-3 md:line-clamp-none">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="mt-2 md:hidden">
                <Link
                  href="/testimonials"
                  className="text-xs font-bold text-[#C8102E] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Read full story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-stone-200 flex items-center space-x-4 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C8102E] text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 border-2 border-red-400 shadow-xs">
                {getInitials(featured.name)}
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base sm:text-lg">
                  {featured.name}
                </h4>
                <p className="text-xs text-stone-600 font-medium flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified IRCC Approval • {featured.location}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked Stories (Col 5) - Hidden on mobile for compact scroll, shown on md and lg screens */}
          <div className="hidden md:flex lg:col-span-5 flex-col space-y-6 lg:space-y-8">
            {secondary.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx + 1) * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 flex flex-col justify-between flex-1 relative shadow-xs"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-slate-800 text-xs font-semibold mb-3 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{item.tag}</span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Testimonials Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative my-8 border border-slate-100"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6 sticky top-0 bg-white z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-50 text-[#C8102E] rounded-2xl border border-red-100">
                    <MessageSquareQuote className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black text-slate-900">
                      All Client Success Stories ({TESTIMONIALS.length})
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Verified Client Approvals &amp; Reviews • Saras Immigration Consultancy Inc.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <div className="inline-flex items-center space-x-1.5 text-slate-800 text-xs font-semibold mb-3 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                        <Check className="w-3 h-3 text-[#C8102E]" />
                        <span>{item.tag}</span>
                      </div>

                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#C8102E] text-white font-bold text-xs flex items-center justify-center shrink-0 border border-red-400">
                        {getInitials(item.name)}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                        <p className="text-[11px] text-slate-500">{item.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center pt-6 border-t border-slate-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3.5 bg-[#C8102E] text-white font-semibold text-sm rounded-full hover:bg-[#A00C23] transition-colors"
                >
                  Close Reviews Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
