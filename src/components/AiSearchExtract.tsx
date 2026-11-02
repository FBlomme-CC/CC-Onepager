import React from 'react';
import { HelpCircle, Users, Cpu, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AiSearchExtract: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
            {t.aiExtract.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.aiExtract.title}
          </h2>
        </div>

        {/* 3 Structured Semantic Definition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Definition 1: What is a CostCard? */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF5A5F]/15 flex items-center justify-center text-[#FF5A5F]">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {t.aiExtract.card1.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {t.aiExtract.card1.descriptionPart1}
                <strong>{t.aiExtract.card1.strongWord}</strong>
                {t.aiExtract.card1.descriptionPart2}
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                {t.aiExtract.card1.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              {t.aiExtract.card1.footer}
            </div>
          </div>

          {/* Definition 2: Who is CostCards for? */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFAA40]/15 flex items-center justify-center text-[#FFAA40]">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {t.aiExtract.card2.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {t.aiExtract.card2.description}
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                {t.aiExtract.card2.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{b.bold}</strong>
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              {t.aiExtract.card2.footer}
            </div>
          </div>

          {/* Definition 3: ERP Companion Architecture */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {t.aiExtract.card3.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {t.aiExtract.card3.description}
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                {t.aiExtract.card3.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              {t.aiExtract.card3.footer}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
