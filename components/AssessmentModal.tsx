'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface AssessmentModalProps {
  isOpen: boolean;
  currentLang: LanguageCode;
  onClose: () => void;
}

export default function AssessmentModal({
  isOpen,
  currentLang,
  onClose,
}: AssessmentModalProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    targetGoal: 'Express Entry (PR)',
    age: '20-29 years',
    education: "Master's Degree or Post-Grad",
    workExp: '3+ years skilled experience',
    languageLevel: 'Fluent (IELTS 7+ / CLB 8+)',
    fullName: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setStep(1);
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8 border border-slate-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-red-100 text-[#C8102E] rounded-2xl">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Canadian Eligibility Check
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Saras Immigration • Licensed RCIC #R710896 Review
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Assessment Request Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <span className="font-bold">{answers.fullName || 'Valued Client'}</span>! Our Senior Immigration Consultant (RCIC) will evaluate your profile for <span className="font-bold">{answers.targetGoal}</span> and reach out within 24 hours.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 text-left mb-6 space-y-2">
                <div className="font-bold text-slate-900 uppercase">Assessment Profile Summary:</div>
                <div>• Goal: {answers.targetGoal}</div>
                <div>• Education: {answers.education}</div>
                <div>• Experience: {answers.workExp}</div>
                <div>• Language: {answers.languageLevel}</div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-full transition-colors flex items-center space-x-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start New Check</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#C8102E] text-white font-bold text-xs rounded-full hover:bg-[#A00C23] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 px-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center space-x-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        step >= s ? 'bg-[#C8102E] text-white' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {s}
                    </div>
                    <span
                      className={`text-xs font-bold ${
                        step >= s ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {s === 1 ? 'Goal' : s === 2 ? 'Profile' : 'Contact'}
                    </span>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-sm font-extrabold text-slate-900">
                    Step 1: What is your primary Canadian goal?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Express Entry (PR)',
                      'Provincial Nominee (PNP)',
                      'Family / Spousal Sponsorship',
                      'Business / Start-Up Visa',
                      'Study Permit & PGWP',
                      'Work Permit / LMIA',
                      'Refugee / Asylum Claim',
                      'Humanitarian Grounds',
                    ].map((goal) => (
                      <button
                        key={goal}
                        onClick={() => setAnswers({ ...answers, targetGoal: goal })}
                        className={`p-3.5 rounded-2xl text-xs font-extrabold text-left transition-all border ${
                          answers.targetGoal === goal
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        🇨🇦 {goal}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#C8102E] hover:bg-[#A00C23] text-white font-semibold text-xs rounded-full shadow-md flex items-center space-x-2"
                    >
                      <span>Continue to Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-sm font-extrabold text-slate-900">
                    Step 2: Key Credentials
                  </label>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Highest Education Level
                    </label>
                    <select
                      value={answers.education}
                      onChange={(e) => setAnswers({ ...answers, education: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                    >
                      <option>High School Diploma</option>
                      <option>1-3 Year Diploma or Bachelor Degree</option>
                      <option>Master&apos;s Degree or Post-Grad</option>
                      <option>Doctorate (PhD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Skilled Work Experience
                    </label>
                    <select
                      value={answers.workExp}
                      onChange={(e) => setAnswers({ ...answers, workExp: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                    >
                      <option>Less than 1 year</option>
                      <option>1-2 years experience</option>
                      <option>3+ years skilled experience</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      English / French Language Proficiency
                    </label>
                    <select
                      value={answers.languageLevel}
                      onChange={(e) => setAnswers({ ...answers, languageLevel: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                    >
                      <option>Fluent (IELTS 7+ / CLB 8+)</option>
                      <option>Moderate (IELTS 6.0 / CLB 7)</option>
                      <option>Basic / Not Taken Yet</option>
                    </select>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={handleBack}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-full"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#C8102E] hover:bg-[#A00C23] text-white font-semibold text-xs rounded-full shadow-md flex items-center space-x-2"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block text-sm font-extrabold text-slate-900">
                    Step 3: Where should we send your assessment results?
                  </label>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={answers.fullName}
                      onChange={(e) => setAnswers({ ...answers, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={answers.email}
                      onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={answers.phone}
                      onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-900 outline-none"
                    />
                  </div>

                  <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-[11px] text-[#C8102E] font-medium flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Your information is protected and reviewed exclusively by licensed RCIC staff.</span>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-full"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3.5 bg-[#C8102E] hover:bg-[#A00C23] text-white font-semibold text-xs rounded-full shadow-md flex items-center space-x-2"
                    >
                      <span>Get Assessment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
