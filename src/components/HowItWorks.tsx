import React from 'react';
import { Layers, Box, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  const stepMeta = [
    {
      icon: Layers,
      highlightColor: 'text-[#FF5A5F]',
      borderColor: 'border-[#FF5A5F]/30',
      bgColor: 'bg-[#FF5A5F]/10',
      visualPreview: (
        <div className="flex gap-2 justify-center pt-2">
          <div className="bg-white text-black text-[11px] font-bold p-2.5 rounded-lg w-28 shadow-md border border-neutral-200">
            <span className="text-[9px] text-[#FF5A5F] block font-mono">{t.howItWorks.card1PreviewRaw}</span>
            <span className="text-xs truncate block font-extrabold">{t.howItWorks.card1PreviewRawTitle}</span>
            <span className="font-mono text-neutral-600 block mt-1">€1.45 / kg</span>
          </div>
          <div className="bg-[#1C1C28] text-white text-[11px] font-bold p-2.5 rounded-lg w-28 shadow-md border border-white/10">
            <span className="text-[9px] text-[#FFAA40] block font-mono">{t.howItWorks.card1PreviewMachine}</span>
            <span className="text-xs truncate block font-extrabold">{t.howItWorks.card1PreviewMachineTitle}</span>
            <span className="font-mono text-neutral-300 block mt-1">{t.howItWorks.card1PreviewMachineRate}</span>
          </div>
        </div>
      ),
    },
    {
      icon: Box,
      highlightColor: 'text-[#FFAA40]',
      borderColor: 'border-[#FFAA40]/30',
      bgColor: 'bg-[#FFAA40]/10',
      visualPreview: (
        <div className="bg-[#161622] p-3 rounded-lg border border-white/10 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px] text-neutral-400">
            <span>{t.howItWorks.card2PreviewDeck}</span>
            <span className="text-emerald-400 font-mono font-bold">{t.howItWorks.card2PreviewYield}</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-black/30 font-mono">
            <span className="text-neutral-300 text-[11px]">{t.howItWorks.card2PreviewUnitLabel}</span>
            <span className="text-base font-extrabold text-[#FFAA40]">{t.howItWorks.card2PreviewUnitVal}</span>
          </div>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      highlightColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
      visualPreview: (
        <div className="bg-[#161622] p-3 rounded-lg border border-emerald-500/30 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-neutral-300 font-bold">{t.howItWorks.card3PreviewGuarded}</span>
            <span className="text-emerald-400 font-mono font-bold">{t.howItWorks.card3PreviewEbitda}</span>
          </div>
          <div className="p-2 rounded bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold flex items-center justify-between">
            <span>{t.howItWorks.card3PreviewSim}</span>
            <span className="font-mono">{t.howItWorks.card3PreviewProtected}</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-[#0D0D11] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            {t.howItWorks.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.howItWorks.steps.map((step, idx) => {
            const meta = stepMeta[idx];
            const IconComp = meta.icon;
            return (
              <div
                key={idx}
                className="bg-[#121217] border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all shadow-xl relative overflow-hidden group"
              >
                {/* Step Number & Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${meta.bgColor} border ${meta.borderColor} flex items-center justify-center ${meta.highlightColor}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-400 mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Component Preview */}
                <div className="pt-2 border-t border-white/5">
                  {meta.visualPreview}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>{t.howItWorks.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
