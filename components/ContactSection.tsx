'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface ContactSectionProps {
  currentLang: LanguageCode;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    country: '',
    message: '',
    fileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">
            <span className="hidden md:inline">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
            {getTranslation(currentLang, 'contactTitle')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal hidden md:block">
            We’re here to answer your questions and help you achieve your Canadian dream
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Standalone Image + Contact Info Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Standalone Canadian Image Frame Outside Card */}
            <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 shrink-0 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop"
                alt="Canadian Natural Heritage"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>

            {/* Left Contact Info & Location Card */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-md flex-1 flex flex-col justify-between border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Saras Immigration</h3>
                    <p className="text-xs text-[#C8102E] font-bold">Consultancy Inc. • CICC #R710896</p>
                  </div>
                  <span className="bg-[#C8102E] text-white text-[10px] px-2.5 py-1 rounded-md uppercase font-extrabold tracking-wider shrink-0">
                    CICC Licensed
                  </span>
                </div>

                <div className="space-y-5 text-sm divide-y divide-slate-100">
                  {/* Brampton Office Address */}
                  <div className="pt-2 first:pt-0">
                    <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Address: Brampton Head Office (GTA)
                    </div>
                    <p className="text-slate-800 font-semibold mt-1 leading-relaxed">
                      170 Steelwell Rd, Suite 200
                      <br />
                      Brampton, Ontario L6T 5T3, Canada
                    </p>
                  </div>

                  {/* Edmonton Office Address */}
                  <div className="pt-4">
                    <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Address: Edmonton Office (Alberta)
                    </div>
                    <p className="text-slate-800 font-semibold mt-1 leading-relaxed">
                      2882 Parsons Rd NW, UNIT 202
                      <br />
                      Edmonton, Alberta T6E 5S8, Canada
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="pt-4">
                    <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Phone
                    </div>
                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:16477131192"
                        className="text-slate-900 font-extrabold text-sm hover:text-[#C8102E] transition-colors block"
                      >
                        Brampton: (647) 713-1192
                      </a>
                      <a
                        href="tel:17808516016"
                        className="text-slate-900 font-extrabold text-sm hover:text-[#C8102E] transition-colors block"
                      >
                        Edmonton: (780) 851-6016
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
                      className="text-slate-900 font-semibold hover:text-[#C8102E] transition-colors block mt-1"
                    >
                      info@sarasimmigration.ca
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="pt-4">
                    <div className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Hours (By Appointment)
                    </div>
                    <p className="text-slate-800 font-semibold mt-1 text-xs leading-relaxed">
                      Mon – Fri: 9:00 am – 7:00 pm EST
                      <br />
                      Sat – Sun: 10:00 am – 4:00 pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                <span className="text-[#C8102E] font-bold">
                  Regulated CICC Member
                </span>
                <span className="font-semibold text-slate-500">100% Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form - Solid Clean Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Inquiry Submitted!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  {getTranslation(currentLang, 'contactSuccessMsg')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-[#C8102E] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. John"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Smith"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john.smith@example.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: WhatsApp Number & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India, UAE, Nigeria, Philippines"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Description Box */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Tell us a little how we can help you *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little how we can help you..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#C8102E] focus:bg-white rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                {/* Solid Red Action Button (NO Gradient) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C8102E] hover:bg-[#A00C23] text-white font-semibold text-base py-4 rounded-full shadow-md transition-all flex items-center justify-center"
                >
                  <span>
                    {isSubmitting
                      ? getTranslation(currentLang, 'submittingBtn')
                      : getTranslation(currentLang, 'submitBtn')}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
