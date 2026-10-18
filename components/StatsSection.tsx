'use client';

import React from 'react';
import { motion } from 'motion/react';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface StatsSectionProps {
  currentLang: LanguageCode;
}

export default function StatsSection({ currentLang }: StatsSectionProps) {
  const stats = [
    {
      id: 1,
      numKey: 'stat1_num',
      labelKey: 'stat1_label',
      defaultNum: '1,500+',
      defaultLabel: 'Successful Cases',
    },
    {
      id: 2,
      numKey: 'stat2_num',
      labelKey: 'stat2_label',
      defaultNum: '96%',
      defaultLabel: 'Visa Approval Rate',
    },
    {
      id: 3,
      numKey: 'stat3_num',
      labelKey: 'stat3_label',
      defaultNum: '4.9★',
      defaultLabel: 'Google & Birdeye Rating',
    },
    {
      id: 4,
      numKey: 'stat4_num',
      labelKey: 'stat4_label',
      defaultNum: '2 Hubs',
      defaultLabel: 'Brampton & Edmonton',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 mb-12 border-b border-slate-200">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3 flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-[#C8102E]" />
              <span>KEY PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight">
              PROVEN CANADIAN IMMIGRATION TRACK RECORD
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              With a 96% visa approval rate, verified 4.9-star client reviews, and full CICC licensing (#R710896), Saras Immigration provides dedicated, results-driven legal counsel.
            </p>
          </div>
        </div>

        {/* 4 Clean Stat Columns with Refined Serif Typography & Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col items-center text-center justify-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#C8102E] tracking-tight">
                {getTranslation(currentLang, stat.numKey) || stat.defaultNum}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                {getTranslation(currentLang, stat.labelKey) || stat.defaultLabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
