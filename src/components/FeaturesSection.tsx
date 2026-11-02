import React, { useState } from 'react';
import {
  Layers,
  Handshake,
  BarChart3,
  Bot,
  Package,
  Users,
  Factory,
  Zap,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FeaturesSectionProps {
  onOpenDemo: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  const cardIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    rawMaterial: Package,
    labour: Users,
    machine: Factory,
    energy: Zap,
    packaging: Package,
    scrap: AlertTriangle,
  };

  const pillarMeta = [
    {
      icon: Layers,
      accentColor: 'text-[#FF5A5F]',
      badgeBg: 'bg-[#FF5A5F]/15 border-[#FF5A5F]/30 text-[#FF5A5F]',
    },
    {
      icon: Handshake,
      accentColor: 'text-[#FFAA40]',
      badgeBg: 'bg-[#FFAA40]/15 border-[#FFAA40]/30 text-[#FFAA40]',
    },
    {
      icon: BarChart3,
      accentColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    },
    {
      icon: Bot,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    },
  ];

  // Active cards toggling
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({
    rawMaterial: true,
    labour: true,
    machine: true,
    energy: true,
    packaging: true,
    scrap: true,
  });

  const toggleCard = (id: string) => {
    setActiveCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalUnitCost = t.features.interactiveCards.reduce((acc, card) => {
    return acc + (activeCards[card.id] ? card.cost : 0);
  }, 0);

  const activeCount = Object.values(activeCards).filter(Boolean).length;

  const getThemeClasses = (theme: string, isActive: boolean) => {
    if (!isActive) {
      return 'bg-[#12121B] text-neutral-500 border border-white/10 opacity-40 scale-95';
    }

    switch (theme) {
      case 'white':
        return 'bg-white text-[#0A0A0C] border-2 border-white shadow-2xl';
      case 'coral':
        return 'bg-gradient-to-br from-[#FA6B65] to-[#E84E4E] text-white border-2 border-[#FF8A85] shadow-2xl';
      case 'slate':
        return 'bg-[#1C1C28] text-white border-2 border-[#38384E] shadow-2xl';
      case 'amber':
        return 'bg-[#2B2014] text-white border-2 border-[#FFAA40] shadow-2xl';
      case 'sky':
        return 'bg-[#122333] text-white border-2 border-sky-400 shadow-2xl';
      case 'rose':
        return 'bg-[#2C151B] text-white border-2 border-rose-400 shadow-2xl';
      default:
        return 'bg-[#181822] text-white border-white/20 shadow-2xl';
    }
  };

  return (
    <section id="features" className="py-16 bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            {t.features.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* GROTERE INTERACTIEVE KAARTEN CONTAINER - Ruim & overzichtelijk op alle schermen */}
        <div className="mb-16 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header Bar within Card Stacker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF5A5F] uppercase tracking-wider block">
                {t.features.demoBadge}
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {t.features.deckTitle}
              </h3>
            </div>

            <div className="flex items-center gap-4 bg-[#181824] px-5 py-3 rounded-xl border border-white/10 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  {t.features.unitCostLabel}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {t.features.cardsActiveCount(activeCount, t.features.interactiveCards.length)}
                </span>
              </div>
              <div className="pl-4 border-l border-white/10">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FFAA40]">
                  €{totalUnitCost.toFixed(2)}
                </span>
                <span className="text-xs text-neutral-400 ml-1">{t.features.unitSuffix}</span>
              </div>
            </div>
          </div>

          {/* GROTERE KAARTEN FAN CONTAINER - Duidelijk zichtbaar, ruime kaarten */}
          <div className="py-6 overflow-x-auto no-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 min-w-[700px] xl:min-w-0">
              {t.features.interactiveCards.map((card) => {
                const isActive = activeCards[card.id];
                const IconComp = cardIcons[card.id] || Package;

                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => toggleCard(card.id)}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-64 sm:h-72 ${getThemeClasses(
                      card.theme,
                      isActive
                    )} hover:scale-[1.03] active:scale-[0.98]`}
                  >
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black opacity-90">{card.num}</span>
                      <IconComp className="w-4 h-4 opacity-90" />
                    </div>

                    {/* Middle Info */}
                    <div className="space-y-1.5 my-auto">
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 block truncate">
                        {card.category}
                      </span>
                      <div className="font-extrabold text-sm sm:text-base leading-tight">
                        {card.title}
                      </div>
                      <div className="text-xs opacity-75 leading-tight">
                        {card.specs}
                      </div>
                    </div>

                    {/* Bottom Cost Rate */}
                    <div className="pt-3 border-t border-current/15 flex items-baseline justify-between">
                      <span className="text-[10px] uppercase font-bold opacity-70">{t.features.rateLabel}</span>
                      <div className="text-right">
                        <span className="font-mono text-base sm:text-lg font-black">
                          €{card.cost.toFixed(2)}
                        </span>
                        <span className="text-[10px] opacity-75 block">{card.unit}</span>
                      </div>
                    </div>

                    {/* Active Badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className={`text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-black/40 text-neutral-400'
                        }`}
                      >
                        {isActive ? t.features.badgeOn : t.features.badgeOff}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.features.interactiveHint}</span>
          </div>

        </div>

        {/* ============================================================ */}
        {/* VISUELE OPLIJSTING VAN DE 4 FEATURES */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAA40] font-bold">
              {t.features.pillarsTag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.features.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.features.pillars.map((feat, idx) => {
              const meta = pillarMeta[idx];
              const IconComp = meta.icon;
              return (
                <div
                  key={feat.id}
                  className="bg-[#121217] border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${meta.badgeBg}`}>
                        {feat.category}
                      </span>
                      <span className="font-mono text-sm font-bold text-neutral-500">
                        {feat.num}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white flex items-center gap-2.5">
                      <IconComp className={`w-5 h-5 ${meta.accentColor}`} />
                      {feat.title}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      {t.features.keyBenefitsLabel}
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-200">
                      {feat.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Button */}
          <div className="pt-8 text-center">
            <button
              type="button"
              onClick={onOpenDemo}
              className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>{t.features.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export const BentoGrid = FeaturesSection;
