import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Zone 1: Merknaam */}
        <a href="#" className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none rounded-lg whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1C1C24] to-[#121218] border border-[#2E2E3C] flex items-center justify-center font-extrabold text-sm tracking-wider text-white shadow-md group-hover:border-[#FF5A5F]/60 transition-colors">
            <span className="text-white">C</span>
            <span className="text-[#FF5A5F]">C</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            CostCards
          </span>
        </a>

        {/* Zone 2: Navigatie Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#product"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            {t.nav.product}
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            {t.nav.features}
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            {t.nav.faq}
          </a>
        </nav>

        {/* Zone 3: Taalselector & Primair Actieknop (Desktop) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Taalselector */}
          <div
            className="flex items-center rounded-lg bg-[#14141B] border border-white/10 p-0.5 text-xs font-semibold"
            role="group"
            aria-label="Language selection"
          >
            <button
              type="button"
              onClick={() => setLanguage('nl')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                language === 'nl'
                  ? 'bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] text-white shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Nederlands"
            >
              NL
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] text-white shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg shadow-[0_2px_14px_rgba(255,90,95,0.35)] hover:shadow-[0_4px_20px_rgba(255,90,95,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>{t.nav.bookDemo}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobiele sectie: Taalselector & menuknop */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile compact language switcher */}
          <div className="flex items-center rounded-lg bg-[#14141B] border border-white/10 p-0.5 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('nl')}
              className={`px-2 py-0.5 rounded transition-all ${
                language === 'nl'
                  ? 'bg-[#FF5A5F] text-white font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              NL
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded transition-all ${
                language === 'en'
                  ? 'bg-[#FF5A5F] text-white font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5"
            aria-label={t.nav.openMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobiel menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F14] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            {t.nav.product}
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            {t.nav.features}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            {t.nav.faq}
          </a>

          {/* Mobile drawer language switch row */}
          <div className="pt-2 pb-1 border-t border-white/5 flex items-center justify-between px-3 text-xs text-neutral-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Globe className="w-4 h-4 text-neutral-400" />
              <span>Taal / Language</span>
            </span>
            <div className="flex items-center rounded-lg bg-[#191924] border border-white/10 p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'nl'
                    ? 'bg-[#FF5A5F] text-white font-bold'
                    : 'text-neutral-400'
                }`}
              >
                Nederlands
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-[#FF5A5F] text-white font-bold'
                    : 'text-neutral-400'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg shadow-md"
            >
              {t.nav.bookDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
