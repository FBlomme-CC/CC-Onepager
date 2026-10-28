import React, { useState } from 'react';
import {
  X,
  Play,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from 'lucide-react';

interface ModalsProps {
  walkthroughOpen: boolean;
  demoOpen: boolean;
  onCloseWalkthrough: () => void;
  onCloseDemo: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  walkthroughOpen,
  demoOpen,
  onCloseWalkthrough,
  onCloseDemo,
}) => {
  // Walkthrough state
  const [activeStep, setActiveStep] = useState<number>(0);

  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Packaging & Print',
    preferredTime: 'Morning (09:00 - 12:00 CET)',
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const walkthroughSteps = [
    {
      title: '01. Create Modular Building Blocks',
      subtitle: 'Raw Materials & Machine Rates',
      description: 'Define your machine hourly rates, operator wages, and raw commodity substrate rates in clean atomic cards. Update once, sync everywhere.',
      badge: 'Step 1 of 4',
      previewComponent: (
        <div className="p-4 rounded-xl bg-[#1C1C27] border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#FF5A5F] font-bold">CARD #M-102</span>
            <span className="text-emerald-400 font-mono text-[11px]">ACTIVE RATE</span>
          </div>
          <div className="font-bold text-white text-base">Heidelberg XL 106 Press</div>
          <div className="text-2xl font-mono font-extrabold text-[#FFAA40]">€110.00 <span className="text-xs text-neutral-400 font-normal">/ hour</span></div>
          <div className="text-xs text-neutral-400">Includes power draw + 1 senior operator</div>
        </div>
      ),
    },
    {
      title: '02. Assemble Finished Product BOMs',
      subtitle: 'Multi-level Scrap Rates',
      description: 'Stack substrate cards, press setup cards, and packing boxes like physical building blocks. CostCards handles scrap calculation automatically.',
      badge: 'Step 2 of 4',
      previewComponent: (
        <div className="p-4 rounded-xl bg-[#1C1C27] border border-white/10 space-y-2">
          <div className="text-xs text-neutral-400 flex justify-between">
            <span>Finished SKU: Luxury Folding Box</span>
            <span className="text-white font-mono">BOM Yield: 96.5%</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 bg-white/5 rounded flex justify-between">
              <span className="text-neutral-300">1x 350gsm Kraft Cardboard</span>
              <span className="font-mono text-white">€0.42</span>
            </div>
            <div className="p-2 bg-white/5 rounded flex justify-between">
              <span className="text-neutral-300">1x UV Offset Print Pass</span>
              <span className="font-mono text-white">€0.18</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '03. Test Live Commodity Shocks',
      subtitle: 'Instant Margin Variance Analysis',
      description: 'Run instantaneous portfolio-wide simulations. See which customer contracts slip under your 30% gross margin target before accepting orders.',
      badge: 'Step 3 of 4',
      previewComponent: (
        <div className="p-4 rounded-xl bg-[#1C1C27] border border-red-500/30 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-red-400 font-bold">SIMULATED SCENARIO</span>
            <span className="text-red-300 font-mono text-[11px]">+15% Board Cost</span>
          </div>
          <div className="p-3 bg-red-500/10 rounded-lg text-xs flex justify-between items-center">
            <span className="text-neutral-300">Product Gross Margin</span>
            <span className="font-mono text-base font-bold text-red-400">34.2% &rarr; 28.1%</span>
          </div>
        </div>
      ),
    },
    {
      title: '04. One-Click Sync to ERP & Quotes',
      subtitle: 'Export to Odoo, Exact Online & Excel',
      description: 'Push verified unit costs directly into your sales quoting engine, ERP item catalog, or export customer-ready transparent cost sheets.',
      badge: 'Step 4 of 4',
      previewComponent: (
        <div className="p-4 rounded-xl bg-[#1C1C27] border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>ERP SYNC READY</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-white/5 rounded text-center">
              <span className="text-[10px] text-neutral-400 block">DESTINATION</span>
              <span className="font-bold text-white">Odoo ERP v17</span>
            </div>
            <div className="p-2 bg-white/5 rounded text-center">
              <span className="text-[10px] text-neutral-400 block">UPDATED ITEMS</span>
              <span className="font-bold text-white">412 Finished SKUs</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* 1. Walkthrough Video / Tour Modal */}
      {walkthroughOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121218] border border-white/15 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#FF5A5F]/20 flex items-center justify-center text-[#FF5A5F]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">CostCards 2-Minute Tour</h3>
                  <span className="text-xs text-neutral-400">See how modular unit costing protects margins</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseWalkthrough}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Step indicator tabs */}
              <div className="grid grid-cols-4 gap-2">
                {walkthroughSteps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#FF5A5F] text-white font-bold shadow-md'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="block text-[10px] opacity-75">STEP 0{idx + 1}</span>
                    <span className="truncate block mt-0.5 font-semibold">
                      {step.title.split('. ')[1]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-mono font-bold text-[#FFAA40] uppercase tracking-wider">
                    {walkthroughSteps[activeStep].badge} · {walkthroughSteps[activeStep].subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {walkthroughSteps[activeStep].title}
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {walkthroughSteps[activeStep].description}
                  </p>
                </div>

                <div className="md:col-span-5">
                  {walkthroughSteps[activeStep].previewComponent}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#0E0E14] border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : walkthroughSteps.length - 1))}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 rounded-lg"
              >
                Previous Step
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (activeStep < walkthroughSteps.length - 1) {
                      setActiveStep(activeStep + 1);
                    } else {
                      onCloseWalkthrough();
                    }
                  }}
                  className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg shadow-md"
                >
                  {activeStep === walkthroughSteps.length - 1 ? 'Finish Tour' : 'Next Step →'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. Book a Demo Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121218] border border-white/15 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFAA40]/20 flex items-center justify-center text-[#FFAA40]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Book a 1-on-1 Architecture Demo</h3>
                  <span className="text-xs text-neutral-400">Tailored to your factory&apos;s BOM &amp; quoting process</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseDemo}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {demoSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Demo Slot Reserved!</h4>
                  <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                    We&apos;ve sent calendar invites and prep details to <strong>{demoForm.email}</strong>. Our industrial costing specialist look forward to meeting you.
                  </p>
                  <button
                    type="button"
                    onClick={onCloseDemo}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-white/10 rounded-lg hover:bg-white/20"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="e.g. Marcus Vandenberg"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Company Work Email
                    </label>
                    <input
                      required
                      type="email"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder="marcus@packtech.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Company Name
                      </label>
                      <input
                        required
                        type="text"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        placeholder="PackTech BV"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Industry Segment
                      </label>
                      <select
                        value={demoForm.industry}
                        onChange={(e) => setDemoForm({ ...demoForm, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      >
                        <option>Packaging &amp; Print</option>
                        <option>Craft Breweries &amp; Beverage</option>
                        <option>Assembly &amp; Metal Fabrication</option>
                        <option>Plastics &amp; Injection Molding</option>
                        <option>Other Production</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Preferred Timezone Slot
                    </label>
                    <select
                      value={demoForm.preferredTime}
                      onChange={(e) => setDemoForm({ ...demoForm, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    >
                      <option>Morning (09:00 - 12:00 CET)</option>
                      <option>Afternoon (13:00 - 17:00 CET)</option>
                      <option>US Eastern Time (09:00 - 12:00 EST)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Confirm 30-Minute Architecture Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="block text-[11px] text-center text-neutral-400 mt-2">
                      Direct session with senior product architects. No pushy sales reps.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
