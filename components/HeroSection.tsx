'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface HeroSectionProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
  onOpenServiceModal: () => void;
}

export default function HeroSection({
  currentLang,
  onOpenAssessment,
  onOpenServiceModal,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = HERO_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slideCount);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, slideCount]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full py-12 md:py-0 md:h-[660px] lg:h-[700px] bg-slate-50 border-b border-slate-200 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel with Subtle Light Overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full block"
        >
          {/* High-def Unsplash Image */}
          <Image
            src={activeSlide.imageUrl}
            alt={getTranslation(currentLang, activeSlide.translationKeyTitle)}
            fill
            sizes="100vw"
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center"
          />

          {/* Light Overlay Gradients for High Image Visibility and Crisp Mobile Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 md:from-white/80 md:via-white/45 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-white/30 to-transparent md:from-slate-50/70 md:via-transparent md:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="max-w-2xl pt-6">
          {/* Title */}
          <motion.h1
            key={`title-${activeSlide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.12] text-slate-900"
          >
            {getTranslation(currentLang, activeSlide.translationKeyTitle)}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${activeSlide.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal"
          >
            {getTranslation(currentLang, activeSlide.translationKeyDesc)}
          </motion.p>

          {/* Verification Bar inside Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-700 font-semibold"
          >
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
              100% Regulated CICC Consultants
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
              96% Visa Approval Rate
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={onOpenAssessment}
              className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-semibold text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all text-center active:scale-98"
            >
              <span>{getTranslation(currentLang, 'getAssessment')}</span>
            </button>

            <Link
              href="/services"
              className="flex items-center justify-center space-x-2 bg-white/90 hover:bg-white text-slate-900 font-semibold text-base px-7 py-4 rounded-full border border-slate-300 shadow-sm transition-all"
            >
              <span>{getTranslation(currentLang, 'ourServicesBtn')}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Manual Scroll Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#C8102E] text-slate-800 hover:text-white hidden md:flex items-center justify-center transition-all border border-slate-200 shadow-md focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#C8102E] text-slate-800 hover:text-white hidden md:flex items-center justify-center transition-all border border-slate-200 shadow-md focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? 'w-7 h-2.5 bg-[#C8102E]'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
