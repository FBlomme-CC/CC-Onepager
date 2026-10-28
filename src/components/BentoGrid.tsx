import React, { useState } from 'react';
import {
  Blocks,
  TrendingUp,
  ShieldAlert,
  RefreshCw,
  Database,
  Sliders,
  CheckCircle2,
  FileCode,
  ArrowUpRight,
  Layers,
  Sparkles,
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  // Interactive shock simulation state inside the bento card
  const [boardCostIndex, setBoardCostIndex] = useState<number>(100);
  const [discountPercent, setDiscountPercent] = useState<number>(12);

  // Active tab in recipe builder preview
  const [activeLayer, setActiveLayer] = useState<'material' | 'labor' | 'finish' | 'freight'>('material');

  return (
    <section id="modular-costing" className="py-24 bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A5F]/10 border border-[#FF5A5F]/20 text-xs font-semibold text-[#FF5A5F] uppercase tracking-wider">
            <Blocks className="w-3.5 h-3.5" />
            <span>Modular Cost Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Everything you need to govern unit economics
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Replace opaque formulas with visual operational cards. Build products like Lego, simulate shocks in seconds, and protect your EBITDA margin floor.
          </p>
        </div>

        {/* Bento Grid Layout (2 large asymmetric marquee cards + 2 companion cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Modular Recipe Builder (Col-span 7 on desktop) */}
          <div className="md:col-span-7 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5A5F]/40 transition-all duration-300 shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
                  01 · BUILDING BLOCK ENGINE
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  Multi-Level BOM
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Modular Recipe Builder
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                Combine materials, machine time, setup labor, and secondary packaging like modular building blocks. Changes flow downward automatically through every sub-assembly.
              </p>
            </div>

            {/* Interactive Visual Recipe Card Stack Preview */}
            <div className="bg-[#171722] p-4 sm:p-5 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                <span className="text-neutral-400 font-medium">BOM Hierarchy Explorer:</span>
                <div className="flex gap-1">
                  {(['material', 'labor', 'finish', 'freight'] as const).map((layer) => (
                    <button
                      key={layer}
                      type="button"
                      onClick={() => setActiveLayer(layer)}
                      className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded transition-colors ${
                        activeLayer === layer
                          ? 'bg-[#FF5A5F] text-white'
                          : 'bg-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {layer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic layer content */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div
                  className={`p-3 rounded-lg border transition-all ${
                    activeLayer === 'material'
                      ? 'bg-[#232332] border-[#FF5A5F] text-white shadow-md'
                      : 'bg-[#191924] border-white/5 text-neutral-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold text-[#FF5A5F] mb-1">
                    Card 1: Substrate
                  </div>
                  <div className="font-semibold truncate">350gsm Kraft Liner</div>
                  <div className="text-neutral-400 font-mono text-[11px] mt-1">€0.384 / unit</div>
                </div>

                <div
                  className={`p-3 rounded-lg border transition-all ${
                    activeLayer === 'labor'
                      ? 'bg-[#232332] border-[#FF5A5F] text-white shadow-md'
                      : 'bg-[#191924] border-white/5 text-neutral-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold text-[#FFAA40] mb-1">
                    Card 2: Press & Cut
                  </div>
                  <div className="font-semibold truncate">Komori 5-Color Press</div>
                  <div className="text-neutral-400 font-mono text-[11px] mt-1">€0.192 / unit</div>
                </div>

                <div
                  className={`p-3 rounded-lg border transition-all ${
                    activeLayer === 'finish' || activeLayer === 'freight'
                      ? 'bg-[#232332] border-[#FF5A5F] text-white shadow-md'
                      : 'bg-[#191924] border-white/5 text-neutral-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold text-emerald-400 mb-1">
                    Card 3: Overhead
                  </div>
                  <div className="font-semibold truncate">Pallet Wrapping & QC</div>
                  <div className="text-neutral-400 font-mono text-[11px] mt-1">€0.068 / unit</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 px-1 text-neutral-400 font-mono">
                <span>Calculated Unit Cost: <strong className="text-white">€0.644</strong></span>
                <span className="text-emerald-400 font-bold">Yield: 97.4% (2.6% Scrap factored)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Live Inflation & Price Shocks (Col-span 5 on desktop) */}
          <div className="md:col-span-5 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#FFAA40]/40 transition-all duration-300 shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFAA40] font-bold">
                  02 · PRICE SHOCK SIMULATOR
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  Real-time
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Live Inflation Pass-Through
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Update 1 raw material cost; all finished product margins recalculate instantaneously across thousands of finished SKUs.
              </p>
            </div>

            {/* Interactive shock toggle slider */}
            <div className="bg-[#171722] p-5 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">Commodity Price Index:</span>
                <span className="font-mono font-bold text-[#FFAA40] text-sm">
                  {boardCostIndex === 100 ? 'Baseline (100%)' : `+${boardCostIndex - 100}% Surcharge`}
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="140"
                step="5"
                value={boardCostIndex}
                onChange={(e) => setBoardCostIndex(Number(e.target.value))}
                className="w-full accent-[#FFAA40] cursor-pointer"
              />

              <div className="p-3 rounded-lg bg-[#111116] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Impact on Gross Margin:</span>
                <span
                  className={`font-mono font-bold text-sm ${
                    boardCostIndex > 115 ? 'text-red-400' : 'text-emerald-400'
                  }`}
                >
                  {(36.5 - (boardCostIndex - 100) * 0.42).toFixed(1)}% (was 36.5%)
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Target Margin Guardrails (Col-span 5 on desktop) */}
          <div className="md:col-span-5 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-red-500/40 transition-all duration-300 shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  03 · MARGIN PROTECTION
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  EBITDA Guard
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Target Margin Guardrails
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Visual indicators alert account managers before sending quotes that dip below your executive EBITDA threshold.
              </p>
            </div>

            {/* Interactive Guardrail Indicator */}
            <div className="bg-[#171722] p-5 rounded-xl border border-white/10 space-y-3">
              <div className="flex justify-between text-xs text-neutral-300">
                <span>Negotiated Client Discount:</span>
                <span className="font-mono font-bold text-white">{discountPercent}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                className="w-full accent-[#FF5A5F] cursor-pointer"
              />

              <div
                className={`p-3 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                  discountPercent > 15
                    ? 'bg-red-500/10 border-red-500/30 text-red-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  {discountPercent > 15 ? (
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  <span className="font-semibold">
                    {discountPercent > 15 ? 'Margin Breach (Requires CFO Approval)' : 'Approved: Margin within Guardrail'}
                  </span>
                </div>
                <span className="font-mono font-bold">
                  {(34.0 - discountPercent * 0.9).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: ERP & Accounting Integration (Col-span 7 on desktop) */}
          <div className="md:col-span-7 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300 shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                  04 · SEAMLESS CONNECTIVITY
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  Bi-Directional Sync
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                ERP & Accounting Integration
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                Don&apos;t rip and replace your core finance system. CostCards feeds clean, mathematically validated cost recipes directly into your ERP and quoting tools.
              </p>
            </div>

            {/* Integration Badges & Protocol Strip */}
            <div className="bg-[#171722] p-5 rounded-xl border border-white/10 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[#111116] border border-white/5 flex flex-col items-center justify-center">
                  <span className="font-extrabold text-sm text-purple-400">Odoo</span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">Native App</span>
                </div>
                <div className="p-3 rounded-lg bg-[#111116] border border-white/5 flex flex-col items-center justify-center">
                  <span className="font-extrabold text-sm text-blue-400">Exact Online</span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">Direct Sync</span>
                </div>
                <div className="p-3 rounded-lg bg-[#111116] border border-white/5 flex flex-col items-center justify-center">
                  <span className="font-extrabold text-sm text-sky-300">MS Dynamics</span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">Business Central</span>
                </div>
                <div className="p-3 rounded-lg bg-[#111116] border border-white/5 flex flex-col items-center justify-center">
                  <span className="font-extrabold text-sm text-emerald-400">Excel / CSV</span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">1-Click Export</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 px-1 font-mono">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>REST API & Webhooks enabled</span>
                </div>
                <span className="text-neutral-300 font-semibold">Automatic nightly sync</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
