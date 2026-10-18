'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { LANGUAGES, LanguageCode, getTranslation } from '@/lib/translations';
import { TOP_SERVICES } from '@/lib/data';
import Logo from '@/components/Logo';

interface NavbarProps {
  currentLang: LanguageCode;
  onLanguageChange: (code: LanguageCode) => void;
  onOpenAssessment: () => void;
  onOpenServiceModal: (serviceId?: string) => void;
}

export default function Navbar({
  currentLang,
  onLanguageChange,
  onOpenAssessment,
  onOpenServiceModal,
}: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white shadow-md py-2.5 border-b border-slate-200'
          : 'bg-white py-3.5 shadow-xs border-b border-slate-200'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-column layout: left (logo) | center (nav) | right (actions) */}
        <div className="flex items-center justify-between gap-4">
          {/* Left: Firm Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center group shrink-0 z-10">
              <Logo variant="dark" />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-9 text-xs xl:text-sm font-semibold text-slate-800 whitespace-nowrap shrink-0">
            {/* Home Navigation Link */}
            <Link
              href="/"
              className="hover:text-[#C8102E] transition-colors py-2 relative group"
            >
              <span>{getTranslation(currentLang, 'home') || 'Home'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8102E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/about"
              className="hover:text-[#C8102E] transition-colors py-2 relative group"
            >
              {getTranslation(currentLang, 'aboutUs')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8102E] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center space-x-1 hover:text-[#C8102E] transition-colors py-2 group focus:outline-none"
              >
                <span>{getTranslation(currentLang, 'services')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-500 group-hover:text-[#C8102E] transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {/* Top 6 Services Dropdown Menu with Larger Font & Smooth Animation */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 p-4 z-50 mt-1"
                  >
                    <div className="px-3.5 py-2 text-xs font-extrabold text-slate-500 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between mb-1.5">
                      <span>{getTranslation(currentLang, 'services')}</span>
                      <span className="text-[11px] bg-red-50 text-[#C8102E] px-2.5 py-0.5 rounded-md font-extrabold border border-red-100">
                        Top Pathways
                      </span>
                    </div>
                    <div className="space-y-1">
                      {TOP_SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services?service=${srv.id}`}
                          onClick={() => {
                            setIsServicesOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-red-50/60 transition-all flex items-center justify-between group/item border border-transparent hover:border-red-100"
                        >
                          <div className="text-sm sm:text-base font-bold text-slate-900 group-hover/item:text-[#C8102E] transition-colors">
                            {getTranslation(currentLang, srv.titleKey)}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="w-full py-3 bg-slate-900 text-white hover:bg-[#C8102E] text-xs sm:text-sm font-extrabold rounded-xl text-center transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md active:scale-[0.98]"
                      >
                        <span>{getTranslation(currentLang, 'viewAllServices')}</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/testimonials"
              className="hover:text-[#C8102E] transition-colors py-2 relative group"
            >
              {getTranslation(currentLang, 'testimony')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8102E] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Blogs Navigation Link */}
            <Link
              href="/blogs"
              className="hover:text-[#C8102E] transition-colors py-2 relative group"
            >
              {getTranslation(currentLang, 'blogs') || 'Blogs'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8102E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Right: Action Items */}
          <div className="flex-1 hidden lg:flex items-center justify-end space-x-2 xl:space-x-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="h-9 px-3 xl:px-3.5 inline-flex items-center justify-center space-x-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-2xs whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                <span className="text-xs leading-none shrink-0">{selectedLangObj.flag}</span>
                <span className="truncate max-w-[80px] xl:max-w-none">{selectedLangObj.name}</span>
                <ChevronDown className="w-3 h-3 text-stone-500 shrink-0" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-stone-200 p-2 z-50 max-h-80 overflow-y-auto"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Select Language / भाषा
                    </div>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-full text-xs font-medium flex items-center justify-between hover:bg-stone-100 transition-colors ${
                          currentLang === lang.code ? 'bg-red-50 text-[#C8102E] font-semibold' : 'text-stone-800'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        <span className="text-[11px] text-stone-500">{lang.nativeName}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Nav Button */}
            <Link
              href="/contact"
              className="h-9 px-3 xl:px-3.5 inline-flex items-center justify-center bg-white hover:bg-stone-50 text-stone-900 hover:text-[#C8102E] text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-full border border-stone-300 hover:border-stone-400 transition-all shadow-2xs whitespace-nowrap"
            >
              {getTranslation(currentLang, 'contactUsNav')}
            </Link>

            {/* Get Assessment CTA Button */}
            <button
              onClick={onOpenAssessment}
              className="h-9 px-3.5 xl:px-4 inline-flex items-center justify-center bg-[#C8102E] hover:bg-[#A00C23] text-white text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-full shadow-2xs hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <span>{getTranslation(currentLang, 'getAssessment')}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <Globe className="w-5 h-5 text-[#C8102E]" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Smooth Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 font-semibold text-sm text-slate-900">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{getTranslation(currentLang, 'home') || 'Home'}</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50"
              >
                {getTranslation(currentLang, 'aboutUs')}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{getTranslation(currentLang, 'services')}</span>
                <span className="text-xs text-[#C8102E] bg-red-50 px-2 py-0.5 rounded-md font-bold border border-red-100">
                  18 Pathways
                </span>
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50"
              >
                {getTranslation(currentLang, 'testimony')}
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50"
              >
                {getTranslation(currentLang, 'blogs') || 'Blogs'}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 hover:text-[#C8102E] rounded-xl hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{getTranslation(currentLang, 'contactUsNav')}</span>
              </Link>
            </nav>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Language / भाषा
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-xs rounded-full text-left flex items-center space-x-2 transition-all ${
                      currentLang === lang.code
                        ? 'bg-red-50 text-[#C8102E] font-bold border border-red-200'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full py-3.5 bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold rounded-full text-center text-sm shadow-sm transition-all active:scale-95"
              >
                <span>{getTranslation(currentLang, 'getAssessment')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}