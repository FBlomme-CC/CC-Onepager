import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid company email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 relative overflow-hidden text-neutral-400 text-sm">
      {/* Dark gradient glow backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-[#FF5A5F]/12 via-[#FFAA40]/6 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* Conversion Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 relative z-10 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A5F] font-bold">
            PROTECT YOUR MARGINS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop guessing your unit margins. Book a demo today.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            See how packaging plants, craft breweries, and industrial producers replace Excel chaos with modular CostCards.
          </p>

          {/* Quick Demo Request Form */}
          <div className="max-w-md mx-auto pt-2">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! We sent a demo invitation to {email}.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your work email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-[#14141B] border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] text-xs"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-[#FF5A5F]/20"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-red-400 text-left pl-1">{error}</p>}
                <p className="text-[11px] text-neutral-400">
                  30-minute 1-on-1 walkthrough with costing architects · Zero commitment
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1C1C24] to-[#121218] border border-[#2E2E3C] flex items-center justify-center font-bold text-xs text-white">
                <span>C</span>
                <span className="text-[#FF5A5F]">C</span>
              </div>
              <span className="text-base font-bold text-white tracking-tight">CostCards</span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Modular bill of materials (BOM), manufacturing unit economics, and real-time margin simulation software for SME producers.
            </p>

            {/* Security badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified AI Software</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 text-[11px]">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>Enterprise Encrypted</span>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Modular Cost Cards</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">The Negotiator</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Analytics &amp; Insights</a>
              </li>
              <li>
                <a href="#product" className="hover:text-white transition-colors">Spreadsheets vs CostCards</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button type="button" onClick={onOpenDemo} className="hover:text-white transition-colors text-left font-bold text-[#FFAA40]">
                  Book a Demo
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Implementation FAQ</a>
              </li>
              <li>
                <a href="https://www.costcards.io" className="hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="mailto:support@costcards.io" className="hover:text-white transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with required Blooom Consultancy BV backlink */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} CostCards (costcards.io). All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-neutral-300">
            <span>A venture of</span>
            <a
              href="https://www.costcards.io"
              className="text-white hover:text-[#FFAA40] font-semibold underline underline-offset-4 decoration-[#FF5A5F] transition-colors"
            >
              Blooom Consultancy BV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
