'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '@/lib/translations';
import Logo from '@/components/Logo';

interface FooterProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
  onOpenServiceModal: () => void;
}

export default function Footer({
  currentLang,
  onOpenAssessment,
  onOpenServiceModal,
}: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-100 text-slate-800 pt-16 pb-8 border-t border-slate-200 relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block group">
              <Logo className="h-14 sm:h-16 md:h-18" variant="dark" />
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Saras Immigration is an RCIC-licensed Canadian immigration consultancy with a 96% visa approval rate. We provide clear strategies, honest advice, and professionally prepared applications for Express Entry, PNP, LMIA, Spousal Sponsorship, Study Permits, and Visitor Visas.
            </p>

            {/* RCIC & CICC License */}
           {/* RCIC & CICC License */}
<div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10">
    <ShieldCheck className="h-6 w-6 text-[#C8102E]" />
  </div>
  <div className="leading-tight">
    <div className="text-[10px] font-bold uppercase tracking-wider text-[#C8102E]">
      Licensed Immigration Consultant
    </div>
    <div className="mt-0.5 text-sm font-bold text-slate-900">
      Amanpreet Singh, RCIC
    </div>
    <div className="text-[11px] font-medium text-slate-600">
      License #R710896 · Regulated by the CICC
    </div>
    <a
      href="https://register.college-ic.ca/Public-Register-EN/"
      target="_blank"
      rel="noreferrer"
      className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 hover:text-[#C8102E] transition-colors"
    >
      <CheckCircle2 className="h-3 w-3" />
      Verify on CICC public register
    </a>
  </div>
</div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {getTranslation(currentLang, 'quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li>
                <Link href="/" className="hover:text-[#C8102E] transition-colors">
                  {getTranslation(currentLang, 'homeNav')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8102E] transition-colors">
                  {getTranslation(currentLang, 'aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C8102E] transition-colors font-semibold"
                >
                  {getTranslation(currentLang, 'services')}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#C8102E] transition-colors">
                  {getTranslation(currentLang, 'testimony')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8102E] transition-colors">
                  {getTranslation(currentLang, 'contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {getTranslation(currentLang, 'contactUs')}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-700 font-medium">
              {/* Brampton Office */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Brampton (GTA):</span>
                  <span>170 Steelwell Rd, Suite 200, Brampton, ON L6T 5T3</span>
                </div>
              </div>

              {/* Edmonton Office */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Edmonton (AB):</span>
                  <span>2882 Parsons Rd NW, UNIT 202, Edmonton, AB T6E 5S8</span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                <div className="space-x-2">
                  <a href="tel:16477131192" className="hover:text-[#C8102E] font-bold text-slate-900">
                    (647) 713-1192
                  </a>
                  <span className="text-stone-300">•</span>
                  <a href="tel:17808516016" className="hover:text-[#C8102E] font-bold text-slate-900">
                    (780) 851-6016
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href="mailto:info@sarasimmigration.ca" className="hover:text-[#C8102E] font-semibold text-stone-900">
                  info@sarasimmigration.ca
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Office Hours (By Appt):</span>
                  <span>Mon - Fri: 9:00am - 7:00pm</span>
                  <br />
                  <span>Sat: 9:00am - 5:00pm | Sun: 11:00am - 5:00pm</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                {getTranslation(currentLang, 'followUs')}
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-[#C8102E] text-slate-700 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-[#C8102E] text-slate-700 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-[#C8102E] text-slate-700 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-[#C8102E] text-slate-700 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-xs"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

    
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4 font-medium">
          <div>{getTranslation(currentLang, 'copyright')}</div>
          <div className="font-semibold text-slate-700">
            {getTranslation(currentLang, 'developedBy')}
          </div>
        </div>
      </div>
    </footer>
  );
}
