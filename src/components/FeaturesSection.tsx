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

interface FeaturesSectionProps {
  onOpenDemo: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDemo }) => {
  // 6 Modular Cost Cards definitions with spacious dimensions
  const COST_CARDS = [
    {
      id: 'rawMaterial',
      num: '01',
      category: 'RAW MATERIAL',
      title: 'Kraftboard 350g',
      specs: 'Yield 94.2% · FSC Mix',
      cost: 1.45,
      unit: '/ kg',
      theme: 'white',
      icon: Package,
    },
    {
      id: 'labour',
      num: '02',
      category: 'DIRECT LABOUR',
      title: 'Operator Setup',
      specs: '12 min shift cycle',
      cost: 0.65,
      unit: '/ pass',
      theme: 'coral',
      icon: Users,
    },
    {
      id: 'machine',
      num: '03',
      category: 'MACHINE RATE',
      title: 'Heidelberg XL Press',
      specs: 'Press hourly pass',
      cost: 0.85,
      unit: '/ sheet',
      theme: 'slate',
      icon: Factory,
    },
    {
      id: 'energy',
      num: '04',
      category: 'ENERGY & POWER',
      title: 'UV Drying Pass',
      specs: '0.42 kWh peak load',
      cost: 0.28,
      unit: '/ kWh',
      theme: 'amber',
      icon: Zap,
    },
    {
      id: 'packaging',
      num: '05',
      category: 'PACKAGING',
      title: 'Pallet Outer Box',
      specs: 'Corrugated 3-ply',
      cost: 0.32,
      unit: '/ unit',
      theme: 'sky',
      icon: Package,
    },
    {
      id: 'scrap',
      num: '06',
      category: 'SCRAP & WASTE',
      title: '4.8% Trim Loss',
      specs: 'Die-cut allowance',
      cost: 0.12,
      unit: '/ margin',
      theme: 'rose',
      icon: AlertTriangle,
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

  const totalUnitCost = COST_CARDS.reduce((acc, card) => {
    return acc + (activeCards[card.id] ? card.cost : 0);
  }, 0);

  const activeCount = Object.values(activeCards).filter(Boolean).length;

  // The 4 Core Platform Features for the Visual Listing
  const FEATURE_LIST = [
    {
      id: 'feature-01',
      num: '01',
      title: 'Modulaire builder',
      category: 'VISUELE BOM ARCHITECTUUR',
      description: 'Stapel grondstoffen, machinetijden, arbeid en opslag als fysieke kaarten. Maak complexe samengestelde producten in enkele seconden inzichtelijk.',
      highlights: ['Atomaire kaartstructuur', 'Real-time BOM herberekening', 'Multi-level afval- & scrapfaktoren'],
      icon: Layers,
      accentColor: 'text-[#FF5A5F]',
      badgeBg: 'bg-[#FF5A5F]/15 border-[#FF5A5F]/30 text-[#FF5A5F]',
    },
    {
      id: 'feature-02',
      num: '02',
      title: 'De Onderhandelaar',
      category: 'COMMERCIËLE MARGEBEWAKING',
      description: 'Laat je salesteam live offertes testen en kortingspercentages simuleren met harde EBITDA-bewakers die verlieslatende offertes direct blokkeren.',
      highlights: ['Real-time volumestaffels', 'Color-coded margedrempels', '1-Klik PDF-offertes'],
      icon: Handshake,
      accentColor: 'text-[#FFAA40]',
      badgeBg: 'bg-[#FFAA40]/15 border-[#FFAA40]/30 text-[#FFAA40]',
    },
    {
      id: 'feature-03',
      num: '03',
      title: 'Portfolio Analytics & Inzichten',
      category: 'STRATEGISCHE VISIBILITEIT',
      description: 'Krijg een panoramisch overzicht over al je afgewerkte SKUs. Detecteer sluipende marge-erosie bij klanten voordat facturen uitsturen.',
      highlights: ['Gevoeligheidsanalyse voor grondstoffen', 'Detectie van verlieslatende accounts', 'Bi-directionele ERP-koppeling'],
      icon: BarChart3,
      accentColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    },
    {
      id: 'feature-[#04]',
      num: '04',
      title: 'AI Simulatie & Budget Forecast',
      category: 'VOORSPELLENDE INTELLIGENTIE',
      description: 'Simuleer plotse marktshocks (zoals +8% staal of +25% energie) over meer dan 400 producten. Genereer een volgend-jaar budget in seconden.',
      highlights: ['1.2s Portfolio-brede AI scan', 'Volgend-jaar indexatie in 1 klik', 'Automatische toeslagberekeningen'],
      icon: Bot,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    },
  ];

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
            INTERACTIEF OVERZICHT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            De CostCards Builder in Actie
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Klik op onderstaande kaarten om ze in- of uit te schakelen en zie hoe de berekende kostprijs direct reageert.
          </p>
        </div>

        {/* GROTERE INTERACTIEVE KAARTEN CONTAINER - Ruim & overzichtelijk op alle schermen */}
        <div className="mb-16 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header Bar within Card Stacker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF5A5F] uppercase tracking-wider block">
                INTERACTIEVE DEMO
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Geselecteerd Product Deck: Custom Printed Verpakking
              </h3>
            </div>

            <div className="flex items-center gap-4 bg-[#181824] px-5 py-3 rounded-xl border border-white/10 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  BEREKENDE EENHEIDSKOST
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {activeCount} van 6 kaarten actief
                </span>
              </div>
              <div className="pl-4 border-l border-white/10">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FFAA40]">
                  €{totalUnitCost.toFixed(2)}
                </span>
                <span className="text-xs text-neutral-400 ml-1">/ st</span>
              </div>
            </div>
          </div>

          {/* GROTERE KAARTEN FAN CONTAINER - Duidelijk zichtbaar, ruime kaarten */}
          <div className="py-6 overflow-x-auto no-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 min-w-[700px] xl:min-w-0">
              {COST_CARDS.map((card) => {
                const isActive = activeCards[card.id];
                const IconComp = card.icon;

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
                      <span className="text-[10px] uppercase font-bold opacity-70">TARIEF</span>
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
                        {isActive ? 'AAN' : 'UIT'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Klik op een kaart om het effect op de totale eenheidskost direct te zien.</span>
          </div>

        </div>

        {/* ============================================================ */}
        {/* VISUELE OPLIJSTING VAN DE 4 FEATURES */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAA40] font-bold">
              KERNFUNCTIONALITEITEN
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              4 Pijlers van CostCards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURE_LIST.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="bg-[#121217] border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${feat.badgeBg}`}>
                        {feat.category}
                      </span>
                      <span className="font-mono text-sm font-bold text-neutral-500">
                        {feat.num}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white flex items-center gap-2.5">
                      <IconComp className={`w-5 h-5 ${feat.accentColor}`} />
                      {feat.title}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      BELANGRIJKSTE VOORDELEN:
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
              <span>Vraag een Demonstratie Aan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export const BentoGrid = FeaturesSection;
