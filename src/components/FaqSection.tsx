import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onOpenDemo: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#0D0D11] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            VEELGESTELDE VRAGEN
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Veelgestelde Vragen
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Directe antwoorden over migratie, meergraads stuklijsten, ERP-interoperabiliteit en databeveiliging.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14141D] border-[#FF5A5F]/40 shadow-lg'
                    : 'bg-[#111116] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#FF5A5F]/20 text-[#FF5A5F] rotate-180'
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Heb je een specifieke machineconfiguratie of ERP-inrichting?</h4>
            <p className="text-xs text-neutral-400">Onze kostprijsarchitecten bekijken graag je huidige stuklijstopzet tijdens een live demo.</p>
          </div>
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg transition-all cursor-pointer shrink-0 shadow-md"
          >
            Boek een Demo
          </button>
        </div>

      </div>
    </section>
  );
};
