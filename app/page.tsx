'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import StepProcess from '@/components/StepProcess';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import AssessmentModal from '@/components/AssessmentModal';
import ServicesModal from '@/components/ServicesModal';
import { LanguageCode, LANGUAGES } from '@/lib/translations';

export default function HomePage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleLanguageChange = (code: LanguageCode) => {
    setCurrentLang(code);
    const langObj = LANGUAGES.find((l) => l.code === code);
    if (langObj?.dir) {
      document.documentElement.dir = langObj.dir;
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const handleOpenAssessment = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServiceModal = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    } else {
      router.push('/services');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Sticky Header Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenAssessment={handleOpenAssessment}
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (5 Auto-scrolling slides + manual controls + CTAs) */}
        <HeroSection
          currentLang={currentLang}
          onOpenAssessment={handleOpenAssessment}
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 2. Creative Stats Section */}
        <StatsSection currentLang={currentLang} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs
          currentLang={currentLang}
          onOpenAssessment={handleOpenAssessment}
        />

        {/* 4. Simple 4-Step Process Section (Timeline) */}
        <StepProcess
          currentLang={currentLang}
          onOpenAssessment={handleOpenAssessment}
        />

        {/* 5. Client Success Stories / Testimonials Section */}
        <Testimonials currentLang={currentLang} />

        {/* 6. Ready to Start Your Canadian Journey? CTA Banner */}
        <CtaBanner
          currentLang={currentLang}
          onOpenAssessment={handleOpenAssessment}
        />

        {/* 7. Get in Touch Contact Form & Address */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={handleOpenAssessment}
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Hovering Contact Speed Dial Button */}
      <FloatingContactWidget
        currentLang={currentLang}
        onOpenAssessment={handleOpenAssessment}
      />

      {/* Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        currentLang={currentLang}
        onClose={() => setIsAssessmentOpen(false)}
      />

      <ServicesModal
        isOpen={isServiceModalOpen}
        selectedServiceId={selectedServiceId}
        currentLang={currentLang}
        onClose={() => setIsServiceModalOpen(false)}
        onOpenAssessment={handleOpenAssessment}
      />
    </div>
  );
}
