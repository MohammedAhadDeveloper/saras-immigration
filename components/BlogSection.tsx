'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Newspaper, Calendar, Clock, ArrowRight, X, BookmarkCheck } from 'lucide-react';
import { BLOGS, BlogData } from '@/lib/data';
import { LanguageCode, getTranslation } from '@/lib/translations';

interface BlogSectionProps {
  currentLang: LanguageCode;
}

export default function BlogSection({ currentLang }: BlogSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogData | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-[#C8102E] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest border border-red-100 mb-4">
              <span>🇨🇦 Canadian Immigration News & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Latest Policy Updates & Guides
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Stay ahead with verified analysis directly from our Regulated Canadian Immigration Consultants.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article)}
              className="group bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-red-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center space-x-3 text-xs font-medium text-slate-400 mb-3">
                    <span className="text-xs font-bold text-[#C8102E] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#C8102E] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center text-xs font-extrabold text-[#C8102E] group-hover:translate-x-1 transition-transform">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8 border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-flex items-center space-x-1.5 bg-red-100 text-[#C8102E] text-xs font-extrabold px-3 py-1 rounded-full uppercase mb-4">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>{selectedArticle.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug mb-4">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center space-x-4 text-xs font-medium text-slate-500 mb-6 pb-6 border-b border-slate-100">
                <span>Published on {selectedArticle.date}</span>
                <span>•</span>
                <span>By Saras Immigration Legal Editorial</span>
              </div>

              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              <div className="text-slate-700 text-base leading-relaxed space-y-4">
                <p>{selectedArticle.content}</p>
                <p>
                  Immigration policies in Canada are highly dynamic. Having an experienced RCIC practitioner ensures your application meets the latest regulatory criteria, avoiding costly delays or refusals.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Saras Immigration Consultancy</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-[#C8102E] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
