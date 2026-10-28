import React, { useState } from 'react';
import {
  Layers,
  Handshake,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Package,
  Users,
  Factory,
  Sliders,
  Sparkles,
  Bot,
  Calendar,
  Check,
  ArrowRight,
} from 'lucide-react';

interface FeaturesSectionProps {
  onOpenDemo?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDemo }) => {
  // 8 Modular Cost Cards definitions for a cleaner compact deck
  const COST_CARDS = [
    {
      id: 'rawMaterial',
      num: '01',
      category: 'RAW MATERIAL',
      title: 'Kraftboard 350g',
      specs: 'Yield 94.2%',
      cost: 1.45,
      rotation: '-rotate-[12deg]',
      yOffset: 'translate-y-4',
      theme: 'white',
      icon: Package,
    },
    {
      id: 'labour',
      num: '02',
      category: 'DIRECT LABOUR',
      title: 'Operator Setup',
      specs: '12 min shift',
      cost: 0.65,
      rotation: '-rotate-[8deg]',
      yOffset: 'translate-y-2',
      theme: 'coral',
      icon: Users,
    },
    {
      id: 'machine',
      num: '03',
      category: 'MACHINE RATE',
      title: 'Heidelberg XL',
      specs: 'Press pass',
      cost: 0.85,
      rotation: '-rotate-[4deg]',
      yOffset: 'translate-y-1',
      theme: 'slate',
      icon: Factory,
    },
    {
      id: 'energy',
      num: '04',
      category: 'ENERGY RATE',
      title: 'UV Curing Load',
      specs: '0.42 kWh peak',
      cost: 0.28,
      rotation: 'rotate-[0deg]',
      yOffset: 'translate-y-0',
      theme: 'amber',
      icon: Zap,
    },
    {
      id: 'packaging',
      num: '05',
      category: 'PACKAGING',
      title: 'Pallet Outer Box',
      specs: 'Corrugated',
      cost: 0.32,
      rotation: 'rotate-[4deg]',
      yOffset: 'translate-y-1',
      theme: 'sky',
      icon: Package,
    },
    {
      id: 'scrap',
      num: '06',
      category: 'SCRAP BUFFER',
      title: '4.8% Trim Loss',
      specs: 'Die-cut allow',
      cost: 0.12,
      rotation: 'rotate-[8deg]',
      yOffset: 'translate-y-2',
      theme: 'rose',
      icon: AlertTriangle,
    },
  ];

  // --- 1. COST CARDS STACKER STATE ---
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({
    rawMaterial: true,
    labour: true,
    machine: true,
    energy: true,
    packaging: true,
    scrap: true,
  });

  const toggleCard = (cardId: string) => {
    setActiveCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const totalUnitCost = COST_CARDS.reduce((acc, card) => {
    return acc + (activeCards[card.id] ? card.cost : 0);
  }, 0);

  const activeCount = Object.values(activeCards).filter(Boolean).length;

  // --- 2. NEGOTIATOR STATE ---
  const [dealVolume, setDealVolume] = useState<number>(15000);
  const [clientDiscount, setClientDiscount] = useState<number>(8);
  const baseSalesPrice = 6.80;
  const discountedPrice = baseSalesPrice * (1 - clientDiscount / 100);
  const dealMarginPercent = totalUnitCost > 0 ? ((discountedPrice - totalUnitCost) / discountedPrice) * 100 : 0;
  const isHealthyMargin = dealMarginPercent >= 30;

  // --- 3. ANALYTICS STATE ---
  const [selectedScenario, setSelectedScenario] = useState<'energy' | 'materials' | 'labor'>('materials');

  // --- 4. AI SIMULATION STATE ---
  const [activeShock, setActiveShock] = useState<'steel' | 'energy' | 'wages'>('steel');

  const getCardThemeClasses = (theme: string, isActive: boolean) => {
    if (!isActive) {
      return 'bg-[#14141E]/80 text-neutral-500 border border-white/10 opacity-35 scale-90 z-0';
    }

    switch (theme) {
      case 'white':
        return 'bg-white text-[#0A0A0C] border-2 border-white shadow-xl z-20';
      case 'coral':
        return 'bg-gradient-to-b from-[#FA6B65] to-[#E84E4E] text-white border-2 border-[#FF8A85] shadow-xl z-20';
      case 'slate':
        return 'bg-[#1C1C28] text-white border-2 border-[#38384E] shadow-xl z-10';
      case 'amber':
        return 'bg-[#2B2014] text-white border-2 border-[#FFAA40] shadow-xl z-10';
      case 'sky':
        return 'bg-[#122333] text-white border-2 border-sky-400 shadow-xl z-10';
      case 'rose':
        return 'bg-[#2C151B] text-white border-2 border-rose-400 shadow-xl z-10';
      default:
        return 'bg-[#181822] text-white border-white/20 z-10';
    }
  };

  return (
    <section id="features" className="py-16 bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            PLATFORM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4 Core Engines in One Clean System
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Modular BOM recipe building blocks, real-time EBITDA negotiator, portfolio analytics, and AI inflation simulations.
          </p>
        </div>

        {/* ============================================================ */}
        {/* FEATURE 1: MODULAR COST CARDS VISUAL DECK */}
        {/* ============================================================ */}
        <div className="mb-12 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A5F] uppercase">
                <Layers className="w-4 h-4" />
                <span>Feature 01 · Visual BOM Deck</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mt-1">
                Modular Cost Cards: Physical Building Blocks
              </h3>
            </div>

            <div className="flex items-center gap-3 bg-[#181824] px-4 py-2 rounded-xl border border-white/10 shrink-0">
              <span className="text-xs text-neutral-400">Calculated Unit Cost:</span>
              <span className="text-xl font-mono font-extrabold text-[#FFAA40]">
                €{totalUnitCost.toFixed(2)}
              </span>
              <span className="text-xs text-neutral-400 font-mono">({activeCount} cards)</span>
            </div>
          </div>

          {/* Interactive Card Fan Container */}
          <div className="py-8 select-none">
            <div className="flex items-center justify-center -space-x-6 sm:-space-x-10 hover:-space-x-4 transition-all duration-300 px-4 overflow-x-auto no-scrollbar">
              {COST_CARDS.map((card) => {
                const isActive = activeCards[card.id];
                const IconComp = card.icon;

                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => toggleCard(card.id)}
                    className={`relative w-36 sm:w-44 h-52 sm:h-56 rounded-xl p-4 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between shrink-0 ${card.rotation} ${card.yOffset} hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-30 ${getCardThemeClasses(
                      card.theme,
                      isActive
                    )}`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <span>{card.num}</span>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>

                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider opacity-75 block truncate">
                        {card.category}
                      </span>
                      <div className="font-extrabold text-xs sm:text-sm truncate mt-0.5">
                        {card.title}
                      </div>
                      <div className="text-[10px] opacity-75 truncate">
                        {card.specs}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-current/15 flex justify-between items-baseline text-xs">
                      <span className="text-[9px] uppercase font-bold opacity-70">RATE</span>
                      <span className="font-mono font-black">€{card.cost.toFixed(2)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-center text-xs text-neutral-400 mt-4">
              Click cards above to include/exclude them from the dynamic BOM calculations in real time.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FEATURE 2 & 3 GRID: NEGOTIATOR + ANALYTICS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* FEATURE 2: THE NEGOTIATOR */}
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-[#FF5A5F] flex items-center gap-1.5">
                  <Handshake className="w-4 h-4" />
                  Feature 02 · The Negotiator
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Margin Guardrails
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">Live Deal Discounting & EBITDA Protection</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Sales reps test discount percentages live during client calls. Built-in threshold locks prevent quoting below target EBITDA limits.
              </p>
            </div>

            {/* Mini Simulator */}
            <div className="bg-[#171722] p-4 rounded-xl border border-white/10 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">Client Volume Discount:</span>
                <span className="font-mono font-bold text-[#FFAA40]">{clientDiscount}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={clientDiscount}
                onChange={(e) => setClientDiscount(Number(e.target.value))}
                className="w-full accent-[#FF5A5F] cursor-pointer"
              />

              <div className={`p-3 rounded-lg border flex items-center justify-between ${
                isHealthyMargin
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-300'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {isHealthyMargin ? <ShieldCheck className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                  <span>{isHealthyMargin ? 'Margin Approved' : 'EBITDA Floor Breached'}</span>
                </div>
                <span className="font-mono font-bold">{dealMarginPercent.toFixed(1)}% Gross</span>
              </div>
            </div>
          </div>

          {/* FEATURE 3: ANALYTICS & INSIGHTS */}
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-[#FFAA40] flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4" />
                  Feature 03 · Analytics
                </span>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  Portfolio Audit
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">Macro Price Shock & Margin Erosion</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Detect margin erosion across hundreds of finished product SKUs before issuing quarterly client renewals.
              </p>
            </div>

            {/* Interactive Macro Shock Selector */}
            <div className="bg-[#171722] p-4 rounded-xl border border-white/10 space-y-3 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedScenario('materials')}
                  className={`p-2 rounded-lg text-center font-bold cursor-pointer transition-all ${
                    selectedScenario === 'materials'
                      ? 'bg-[#FF5A5F] text-white'
                      : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  📦 Paper +15%
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedScenario('energy')}
                  className={`p-2 rounded-lg text-center font-bold cursor-pointer transition-all ${
                    selectedScenario === 'energy'
                      ? 'bg-[#FFAA40] text-black'
                      : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  ⚡ Energy +35%
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedScenario('labor')}
                  className={`p-2 rounded-lg text-center font-bold cursor-pointer transition-all ${
                    selectedScenario === 'labor'
                      ? 'bg-sky-400 text-black'
                      : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  👷 Wages +6%
                </button>
              </div>

              <div className="p-3 rounded-lg bg-[#0F0F16] border border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Net Portfolio EBITDA Shift:</span>
                <span className="font-mono font-bold text-red-400">
                  {selectedScenario === 'materials' ? '-4.1%' : selectedScenario === 'energy' ? '-2.8%' : '-1.4%'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* FEATURE 4: AI SIMULATION & FORECASTING */}
        {/* ============================================================ */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A5F] uppercase">
                <Bot className="w-4 h-4" />
                <span>Feature 04 · AI Simulation &amp; Forecasting</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mt-1">
                AI Portfolio Scan &amp; Next-Year Budget Forecast
              </h3>
            </div>

            {onOpenDemo && (
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#171722] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#FF5A5F] uppercase font-bold block">01. Instant Scan</span>
              <h4 className="font-bold text-white">1.2s Full Catalog Analysis</h4>
              <p className="text-neutral-400 leading-relaxed">
                Scans 480+ finished products instantly when geopolitical material spikes occur.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#171722] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#FFAA40] uppercase font-bold block">02. Auto Defense</span>
              <h4 className="font-bold text-white">Suggested Contract Surcharges</h4>
              <p className="text-neutral-400 leading-relaxed">
                Generates exact component pass-through rates to defend net EBITDA baseline.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#171722] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">03. Annual Forecast</span>
              <h4 className="font-bold text-white">Next Year&apos;s Budget in Seconds</h4>
              <p className="text-neutral-400 leading-relaxed">
                Replaces 3 weeks of manual Excel indexation with card-level forecasting.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const BentoGrid = FeaturesSection;
