import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none rounded-lg whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1C1C24] to-[#121218] border border-[#2E2E3C] flex items-center justify-center font-extrabold text-sm tracking-wider text-white shadow-md group-hover:border-[#FF5A5F]/60 transition-colors">
            <span className="text-white">C</span>
            <span className="text-[#FF5A5F]">C</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            CostCards
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#product"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            Spreadsheets vs CostCards
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            Core Features
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg shadow-[0_2px_14px_rgba(255,90,95,0.35)] hover:shadow-[0_4px_20px_rgba(255,90,95,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F14] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Spreadsheets vs CostCards
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Core Features
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-lg shadow-md"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
