import React from 'react';
import { Layers, Box, TrendingUp, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemo }) => {
  const steps = [
    {
      number: '01',
      title: 'Elk kostprijselement wordt vertaald naar een kaart',
      subtitle: 'Grondstoffen, machinetijden, arbeid & opslag',
      description: 'Zet losse grondstofprijzen, uurtarieven, insteltijden en afvalpercentages om in modulaire, digitale Cost Cards. Eén centrale bron van waarheid.',
      icon: Layers,
      highlightColor: 'text-[#FF5A5F]',
      borderColor: 'border-[#FF5A5F]/30',
      bgColor: 'bg-[#FF5A5F]/10',
      visualPreview: (
        <div className="flex gap-2 justify-center pt-2">
          <div className="bg-white text-black text-[11px] font-bold p-2.5 rounded-lg w-28 shadow-md border border-neutral-200">
            <span className="text-[9px] text-[#FF5A5F] block font-mono">GRONDSTOF</span>
            <span className="text-xs truncate block font-extrabold">Kartobord 350g</span>
            <span className="font-mono text-neutral-600 block mt-1">€1.45 / kg</span>
          </div>
          <div className="bg-[#1C1C28] text-white text-[11px] font-bold p-2.5 rounded-lg w-28 shadow-md border border-white/10">
            <span className="text-[9px] text-[#FFAA40] block font-mono">MACHINETIJD</span>
            <span className="text-xs truncate block font-extrabold">Drukpers XL</span>
            <span className="font-mono text-neutral-300 block mt-1">€110.00 / uur</span>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Kaarten worden samengelegd tot een Deck om een product te berekenen',
      subtitle: 'Dynamische samenstelling & instant kostprijs',
      description: 'Stapel kaarten samen om een compleet afgewerkt product te berekenen. De kostprijs per eenheid herrekent automatisch bij elke wijziging.',
      icon: Box,
      highlightColor: 'text-[#FFAA40]',
      borderColor: 'border-[#FFAA40]/30',
      bgColor: 'bg-[#FFAA40]/10',
      visualPreview: (
        <div className="bg-[#161622] p-3 rounded-lg border border-white/10 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px] text-neutral-400">
            <span>Deck: Luxe Vouwkarton</span>
            <span className="text-emerald-400 font-mono font-bold">Yield: 96.5%</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-black/30 font-mono">
            <span className="text-neutral-300 text-[11px]">Berekende Eenheidskost:</span>
            <span className="text-base font-extrabold text-[#FFAA40]">€2.47 / st</span>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Decks worden gebruikt als instrumenten voor finetuning & marge optimalisatie',
      subtitle: 'Simulatie, onderhandeling & ERP-synchronisatie',
      description: 'Gebruik actieve Decks om offertes te onderhandelen met harde EBITDA-bewakers, prijsstijgingen te simuleren en prijswijzigingen te synchroniseren van je ERP.',
      icon: TrendingUp,
      highlightColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
      visualPreview: (
        <div className="bg-[#161622] p-3 rounded-lg border border-emerald-500/30 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-neutral-300 font-bold">Marge Bewaakt:</span>
            <span className="text-emerald-400 font-mono font-bold">+32.4% EBITDA</span>
          </div>
          <div className="p-2 rounded bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold flex items-center justify-between">
            <span>Simulatie: Papier +15%</span>
            <span className="font-mono">Marge Beschermd ✓</span>
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
            HOE HET WERKT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            In 3 Stappen naar Volledige Margecontrole
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Van losse kostprijselementen naar een dynamische, visuele productberekening die je marges gegarandeerd beschermt.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#121217] border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all shadow-xl relative overflow-hidden group"
              >
                {/* Step Number & Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center ${step.highlightColor}`}>
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
                  {step.visualPreview}
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
            <span>Boek een Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
