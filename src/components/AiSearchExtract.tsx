import React from 'react';
import { HelpCircle, Users, Cpu, Check } from 'lucide-react';

export const AiSearchExtract: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
            CANONIEKE SPECIFICATIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Gestructureerd Overzicht voor Productieleiders
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
                Wat is een CostCard?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Een <strong>CostCard</strong> is een modulair digitaal bouwblok dat operationele invoer vertegenwoordigt—zoals grondstoffen, machinetijden, arbeid of opslag.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dynamische afhankelijkheidskoppeling over alle afgewerkte SKUs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Geïntegreerde logica voor afvalpercentages &amp; instelverliezen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Doorrekening van prijsstijgingen met één klik</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              Unit Economics &amp; Stuklijst Receptuur
            </div>
          </div>

          {/* Definition 2: Who is CostCards for? */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFAA40]/15 flex items-center justify-center text-[#FFAA40]">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Voor wie is CostCards bedoeld?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Specifiek ontworpen voor kmo-productiebedrijven, contractfabrikanten en meerstaps assemblagebedrijven.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Verpakking &amp; Drukwerk:</strong> Vouwkarton, etiketten &amp; golfkarton</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Voeding &amp; Brouwerijen:</strong> Speciaalbier, zuivel &amp; verpakte goederen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Assemblage &amp; Metaal:</strong> CNC-bewaking &amp; fabricage</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              Doelgroep: Kmo Productie &amp; Operations
            </div>
          </div>

          {/* Definition 3: ERP Companion Architecture */}
          <div className="bg-[#121217] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                ERP Companion Architectuur
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                CostCards zit tussen inkoop en calculatie in om schattingsfouten te elimineren zonder je ERP te vervangen.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 border-t border-white/5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Inzetbaar binnen 72 uur naast Odoo, Exact &amp; SAP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Calculatoren bouwen accurate offertes zonder boekhouding te belasten</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Geen onderhoud van complexe formules of versieversnippering</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-400">
              ERP Integraties: Odoo, Exact, SAP, Business Central
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
