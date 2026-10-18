'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Wrench,
  Construction,
  ArrowLeft,
  Clock,
  Sparkles,
  ShieldCheck,
  Mail,
  ArrowRight,
  Compass,
  FileText,
  MessageSquare,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import AssessmentModal from '@/components/AssessmentModal';
import ServicesModal from '@/components/ServicesModal';
import { LanguageCode } from '@/lib/translations';

export default function BlogsPage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleOpenServiceModal = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    } else {
      router.push('/services');
    }
  };

  const handleSubscribeNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setEmailSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#C8102E] selection:text-white flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />

      {/* Under Development Hero Section */}
      <main className="flex-1 flex items-center justify-center py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-300 text-amber-900 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-2xs"
          >
            <Construction className="w-4 h-4 text-[#C8102E] animate-bounce" />
            <span>SECTION UNDER DEVELOPMENT</span>
          </motion.div>

          {/* Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-950 tracking-tight leading-[1.1]">
              The Canadian Immigration Chronicle
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Our legal insights, policy breakdowns, and RCIC commentary blog section is currently being curated and updated for the 2026 IRCC regulations.
            </p>
          </motion.div>



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="w-full sm:w-auto bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all flex items-center justify-center space-x-2 shadow-2xs"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Floating Speed Dial Button */}
      <FloatingContactWidget
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        currentLang={currentLang}
      />

      <ServicesModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        selectedServiceId={selectedServiceId}
        onOpenAssessment={() => {
          setIsServiceModalOpen(false);
          setIsAssessmentOpen(true);
        }}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
      />
    </div>
  );
}