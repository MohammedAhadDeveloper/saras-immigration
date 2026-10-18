'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ArrowRight, Check, Zap, Briefcase, HeartHandshake, ShieldAlert, Users, MapPin } from 'lucide-react';
import { TOP_SERVICES } from '@/lib/data';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface ServicesModalProps {
  isOpen: boolean;
  selectedServiceId?: string;
  currentLang: LanguageCode;
  onClose: () => void;
  onOpenAssessment: () => void;
}

export default function ServicesModal({
  isOpen,
  selectedServiceId,
  currentLang,
  onClose,
  onOpenAssessment,
}: ServicesModalProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedServiceId || TOP_SERVICES[0].id);

  if (!isOpen) return null;

  const currentService = TOP_SERVICES.find((s) => s.id === activeTab) || TOP_SERVICES[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-10 shadow-2xl relative my-8 border border-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-1 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-[#C8102E]" />
                <span>Saras Immigration Legal Services</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
                Immigration Pathways &amp; Legal Representation
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body: Sidebar Tabs + Main Detail View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 overflow-y-auto flex-1">
            {/* Left Nav List */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                Top 6 Canadian Pathways
              </div>
              {TOP_SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center space-x-3 border ${
                    activeTab === srv.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                      activeTab === srv.id ? 'bg-[#C8102E] text-white' : 'bg-red-50 text-[#C8102E]'
                    }`}
                  >
                    🇨🇦
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold truncate">
                      {getTranslation(currentLang, srv.titleKey)}
                    </div>
                    <div
                      className={`text-xs truncate mt-0.5 ${
                        activeTab === srv.id ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {srv.tag}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detailed View */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-extrabold text-[#C8102E] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed RCIC Representation</span>
                </div>

                <h4 className="text-2xl font-black text-slate-900 mb-4">
                  {getTranslation(currentLang, currentService.titleKey)}
                </h4>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {currentService.fullDetails}
                </p>

                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2 mb-6">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Features & Benefits:
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct submission by senior regulated CICC practitioners</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Comprehensive document review and refusal prevention strategy</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>1-on-1 progress updates & dedicated case representative</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-500">Need immediate help?</div>
                  <a
                    href="tel:14166042669"
                    className="text-sm font-extrabold text-[#C8102E] hover:underline"
                  >
                    Call (416) 604-2669
                  </a>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenAssessment();
                  }}
                  className="w-full sm:w-auto bg-[#C8102E] hover:bg-[#A00C23] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <span>Apply for {getTranslation(currentLang, currentService.titleKey)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
