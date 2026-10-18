'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBanner from '@/components/CtaBanner';
import { LanguageCode, LANGUAGES } from '@/lib/translations';

// Dynamically load below-the-fold components to reduce initial DOM size and JavaScript execution time
const StepProcess = dynamic(() => import('@/components/StepProcess'), {
  loading: () => <div className="min-h-[400px] bg-slate-50" />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="min-h-[350px] bg-white" />,
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-[400px] bg-slate-50" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[250px] bg-slate-900" />,
});
const FloatingContactWidget = dynamic(() => import('@/components/FloatingContactWidget'), {
  ssr: false,
});
const AssessmentModal = dynamic(() => import('@/components/AssessmentModal'), {
  ssr: false,
});
const ServicesModal = dynamic(() => import('@/components/ServicesModal'), {
  ssr: false,
});

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
        {/* 1. Hero Section (Above the fold LCP component) */}
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

      {/* Modals - Only mounted in DOM when triggered */}
      {isAssessmentOpen && (
        <AssessmentModal
          isOpen={isAssessmentOpen}
          currentLang={currentLang}
          onClose={() => setIsAssessmentOpen(false)}
        />
      )}

      {isServiceModalOpen && (
        <ServicesModal
          isOpen={isServiceModalOpen}
          selectedServiceId={selectedServiceId}
          currentLang={currentLang}
          onClose={() => setIsServiceModalOpen(false)}
          onOpenAssessment={handleOpenAssessment}
        />
      )}
    </div>
  );
}
