"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { LanguageCode, getTranslation } from "@/lib/translations";

interface WhyChooseUsProps {
  currentLang: LanguageCode;
  onOpenAssessment: () => void;
}

export default function WhyChooseUs({
  currentLang,
  onOpenAssessment,
}: WhyChooseUsProps) {
  const points = [
    {
      id: "01",
      title: "Licensed RCIC Legal Counsel",
      desc: "Led by Amanpreet Singh, a licensed Regulated Canadian Immigration Consultant (CICC Member #R710896) held to rigorous professional and ethical legal standards.",
    },
    {
      id: "02",
      title: "96% Visa & PR Approval Rate",
      desc: "Proven track record of success across Express Entry, Alberta AAIP & Ontario OINP, LMIA employer applications, Spousal Sponsorships, and Study Permits.",
    },
    {
      id: "03",
      title: "Firsthand Immigrant Insight & Relatable Care",
      desc: "Founded by a former international student who personally walked the journey from student visa to work permit, permanent residence, and Canadian citizenship.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content & 3 Editorial Paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3 flex items-center space-x-2">
                <span className="w-8 h-0.5 bg-[#C8102E]" />
                <span>96% APPROVAL RATE • CICC LICENSED #R710896</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
                Why Saras Immigration
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                With a 96% visa approval rate, offices in Brampton and Edmonton,
                and firsthand insight into Canada’s immigration pathways, here
                is why clients trust us:
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {points.map((pt, idx) => (
                <motion.div
                  key={pt.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-start space-x-5 pl-5 border-l-2 border-slate-200 hover:border-[#C8102E] py-1 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-serif font-black text-slate-300 group-hover:text-[#C8102E] transition-colors shrink-0 leading-none pt-0.5">
                    {pt.id}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenAssessment}
                className="bg-[#C8102E] hover:bg-[#A00C23] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all active:scale-98"
              >
                <span>{getTranslation(currentLang, "getAssessment")}</span>
              </button>

              <Link
                href="/about"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all text-center border border-slate-200"
              >
                <span>Meet Amanpreet Singh (RCIC) &amp; Our Team</span>
              </Link>
            </div>
          </div>

          {/* Right High Quality Image */}
          <div className="lg:col-span-5 relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] w-full"
            >
              <Image
                src="/amanpreet-singh-image.jpg"
                alt="Amanpreet Singh"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-[70%_center]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
