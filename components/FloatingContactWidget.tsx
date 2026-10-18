'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageSquare, MapPin, X } from 'lucide-react';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface FloatingContactWidgetProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
}

export default function FloatingContactWidget({
  currentLang,
  onOpenAssessment,
}: FloatingContactWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none flex flex-col items-end">
      {/* Popup Menu Positioned Absolutely Above Trigger so Button Position Never Shifts */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-3 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200 w-72 space-y-2.5 z-50"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-bold text-[#D97706] uppercase tracking-wider">
              <span>Quick Reach Out</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 1. Phone Direct - Brampton & Edmonton */}
            <a
              href="tel:16477131192"
              className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 group border border-transparent hover:border-slate-200 active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 group-hover:text-[#C8102E] transition-colors">
                  {getTranslation(currentLang, 'floatingCall')}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Brampton: (647) 713-1192</div>
              </div>
            </a>

            <a
              href="tel:17808516016"
              className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 group border border-transparent hover:border-slate-200 active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-red-800 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 group-hover:text-[#C8102E] transition-colors">
                  Edmonton Office
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Edmonton: (780) 851-6016</div>
              </div>
            </a>

            {/* 2. WhatsApp Chat */}
            <a
              href="https://wa.me/16477131192?text=Hello%20Saras%20Immigration%2C%20I%20would%20like%20to%20inquire%20about%20Canadian%20Immigration."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 group border border-transparent hover:border-slate-200 active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {getTranslation(currentLang, 'floatingWhatsApp')}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Instant WhatsApp Chat</div>
              </div>
            </a>

            {/* 3. Send Email */}
            <a
              href="mailto:info@sarasimmigration.ca"
              className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 group border border-transparent hover:border-slate-200 active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 group-hover:text-blue-600 transition-colors">
                  {getTranslation(currentLang, 'floatingEmail')}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">info@sarasimmigration.ca</div>
              </div>
            </a>

            {/* 4. Office Location */}
            <a
              href="https://maps.google.com/?q=170+Steelwell+Rd+Suite+200+Brampton+ON+L6T+5T3"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold text-slate-800 group border border-transparent hover:border-slate-200 active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 group-hover:text-[#D97706] transition-colors">
                  {getTranslation(currentLang, 'floatingDirections')}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Brampton & Edmonton Hubs</div>
              </div>
            </a>

            {/* 5. Assessment CTA - At the very last */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAssessment();
              }}
              className="w-full p-3 rounded-xl bg-[#C8102E] hover:bg-[#A00C23] text-white text-xs font-bold transition-all text-center block shadow-sm hover:shadow-md active:scale-95 mt-1"
            >
              <div>{getTranslation(currentLang, 'getAssessment')}</div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed-Position Floating Trigger Button (No hover scale or movement) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2.5 bg-[#C8102E] hover:bg-[#A00C23] text-white px-5 py-4 rounded-full shadow-2xl transition-colors shrink-0"
        aria-label="Contact Firm Floating Speed Dial"
      >
        <span className="flex items-center justify-center shrink-0">
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Phone className="w-5 h-5 text-white" />
          )}
        </span>
        <span className="font-extrabold text-xs tracking-wider uppercase shrink-0">
          CONTACT US
        </span>
      </button>
    </div>
  );
}
