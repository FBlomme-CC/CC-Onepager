import React from 'react';
import {
  FileSpreadsheet,
  Layers,
  XCircle,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SpreadsheetVsCostCards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="product" className="py-16 bg-[#0D0D11] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Minimalist */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            {t.comparison.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Shortened Side-by-Side Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: Static Spreadsheets */}
          <div className="bg-[#121217] rounded-xl border border-red-500/20 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <FileSpreadsheet className="w-4 h-4 text-red-400" />
                <h3 className="text-base font-bold text-white">{t.comparison.leftTitle}</h3>
              </div>
              <span className="text-[10px] font-mono text-red-400 font-bold uppercase">{t.comparison.leftBadge}</span>
            </div>

            <div className="space-y-3">
              {t.comparison.data.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-red-950/10 border border-red-500/10 text-xs">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-red-300 block">{item.feature}</span>
                    <span className="text-neutral-300 leading-snug">{item.excel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CostCards Platform */}
          <div className="bg-[#14141E] rounded-xl border border-[#FF5A5F]/30 p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#FF5A5F]" />
                <h3 className="text-base font-bold text-white">{t.comparison.rightTitle}</h3>
              </div>
              <span className="text-[10px] font-mono text-[#FFAA40] font-bold uppercase">{t.comparison.rightBadge}</span>
            </div>

            <div className="space-y-3">
              {t.comparison.data.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-950/10 border border-emerald-500/20 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-300 block">{item.feature}</span>
                    <span className="text-neutral-200 leading-snug">{item.costCards}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
