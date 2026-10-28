import React from 'react';
import { HelpCircle, Users, Cpu, Check } from 'lucide-react';

export const AiSearchExtract: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
            CANONICAL SPECIFICATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Structured Overview for Production Leaders
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
                What is a CostCard?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                A <strong>CostCard</strong> is a modular digital building block representing operational inputs—raw material stock, machine time, direct labor, or storage.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dynamic dependency linking across all finished SKUs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Integrated scrap rate &amp; machine setup loss logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Single-click inflation and commodity pass-through</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              Unit Economics &amp; Recipe BOM
            </div>
          </div>

          {/* Definition 2: Who is CostCards for? */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFAA40]/15 flex items-center justify-center text-[#FFAA40]">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Who is CostCards for?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Engineered specifically for manufacturing SMEs, contract producers, and multi-step fabrication operations.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Packaging &amp; Print:</strong> Folding cartons, labels &amp; corrugated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Food &amp; Breweries:</strong> Craft beer, dairy &amp; packaged goods</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Assembly &amp; Metal:</strong> CNC machining &amp; fabrication</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              Target Segment: SME Production &amp; Operations
            </div>
          </div>

          {/* Definition 3: ERP Companion Architecture */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                ERP Companion Architecture
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                CostCards sits between procurement and quoting to eliminate spreadsheet estimation errors without replacing your ERP.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deploys in under 72 hours alongside Odoo, Exact &amp; SAP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Estimators build accurate bids without consulting accounting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero formula maintenance or version fragmentation</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              ERP Integrations: Odoo, Exact, SAP, Business Central
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
