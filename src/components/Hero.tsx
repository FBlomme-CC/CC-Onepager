import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Play,
  TrendingUp,
  Check,
} from 'lucide-react';
import { HERO_CARDS, CostCardItem } from '../data/content';

interface HeroProps {
  onOpenWalkthrough: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWalkthrough, onOpenDemo }) => {
  // Ordered stack of cards: index 0 is front, index 1 is middle, index 2 is back
  const [cards, setCards] = useState<CostCardItem[]>(HERO_CARDS);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle cards every 4 seconds (pauses when user is actively hovering over deck)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Bring clicked card to front
  const bringToFront = (id: string) => {
    setCards((prev) => {
      const clicked = prev.find((c) => c.id === id);
      if (!clicked) return prev;
      const rest = prev.filter((c) => c.id !== id);
      return [clicked, ...rest];
    });
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0A0A0C]">
      {/* Subtle radial mesh glow behind cards */}
      <div className="absolute top-1/4 right-1/10 w-[600px] h-[600px] bg-gradient-to-br from-[#FF5A5F]/15 via-[#FFAA40]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/12 w-[450px] h-[450px] bg-[#FF5A5F]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Prop & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            {/* Unboxed Metadata Header */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <span className="text-[#FF5A5F] uppercase tracking-wider font-bold">Manufacturing &amp; SME Software</span>
              <span aria-hidden="true">·</span>
              <span>Dynamic Recipe Costing</span>
            </div>

            {/* H1 with Glowing Warm Sunset Gradient on "margins" */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Protect your{' '}
              <span className="relative inline-block">
                <span className="text-gradient-coral drop-shadow-[0_0_25px_rgba(255,90,95,0.45)]">
                  margins
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5A5F] via-[#FFAA40] to-transparent rounded-full opacity-80" />
              </span>{' '}
              card by card.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
              CostCards is dynamic costing and margin simulation software for manufacturing SMEs and producers. Replace spreadsheet chaos with connected BOM building blocks.
            </p>

            {/* CTAs - Enforcing single primary Book a Demo CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenDemo}
                className="relative group px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] via-[#FA6B65] to-[#FFAA40] rounded-xl shadow-[0_4px_25px_rgba(255,90,95,0.4)] hover:shadow-[0_8px_35px_rgba(255,90,95,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenWalkthrough}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <Play className="w-4 h-4 fill-current ml-0.5 text-[#FFAA40]" />
                <span>Watch 2-Min Walkthrough</span>
              </button>
            </div>

            {/* Key benefits as clean typography */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> AI empowered</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Real-time BOM sync</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Instant margin simulation</span>
            </div>
          </div>

          {/* Right Column: Signature Fanned / Stacked 3-Card Deck */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[490px] select-none">
            {/* The Stacked Card Deck Container */}
            <div
              className="relative w-full max-w-[390px] h-[370px] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {cards.map((card, index) => {
                let transformStyle = '';
                let zIndex = 30 - index * 10;

                if (isHovered) {
                  if (index === 0) {
                    transformStyle = 'translate3d(-24px, 12px, 0) rotate(-4deg)';
                  } else if (index === 1) {
                    transformStyle = 'translate3d(14px, -18px, 0) rotate(5deg)';
                  } else {
                    transformStyle = 'translate3d(42px, -46px, 0) rotate(11deg)';
                  }
                } else {
                  if (index === 0) {
                    transformStyle = 'translate3d(0, 0, 0) rotate(0deg)';
                  } else if (index === 1) {
                    transformStyle = 'translate3d(16px, -14px, 0) rotate(3deg)';
                  } else {
                    transformStyle = 'translate3d(30px, -26px, 0) rotate(6deg)';
                  }
                }

                const isWhiteCard = card.colorScheme === 'white';
                const isCoralCard = card.colorScheme === 'coral';

                return (
                  <div
                    key={card.id}
                    onClick={() => bringToFront(card.id)}
                    style={{
                      transform: transformStyle,
                      zIndex,
                      transition: 'transform 850ms cubic-bezier(0.25, 1, 0.35, 1), box-shadow 600ms ease, opacity 600ms ease',
                    }}
                    className={`absolute inset-0 rounded-2xl p-6 select-none shadow-2xl transition-colors duration-500 ${
                      isWhiteCard
                        ? 'bg-white text-[#0A0A0C] border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.55)]'
                        : isCoralCard
                        ? 'bg-[#FA6B65] text-white border border-[#FF7D77] shadow-[0_20px_50px_rgba(250,107,101,0.35)]'
                        : 'bg-[#18181F] text-white border border-[#2A2A35] shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
                    }`}
                  >
                    {/* Top Row: Category Badge & Status Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[11px] font-extrabold tracking-wider uppercase ${
                          isWhiteCard
                            ? 'text-[#FF5A5F]'
                            : isCoralCard
                            ? 'text-white/90 bg-white/15 px-2 py-0.5 rounded'
                            : 'text-[#FFAA40]'
                        }`}
                      >
                        {card.category}
                      </span>

                      {/* Status indicator */}
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isWhiteCard
                              ? 'bg-emerald-500'
                              : isCoralCard
                              ? 'bg-white'
                              : 'bg-[#FF5A5F]'
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold ${
                            isWhiteCard
                              ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200'
                              : isCoralCard
                              ? 'text-white/95'
                              : 'text-neutral-300'
                          }`}
                        >
                          {card.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Title & Subtitle */}
                    <div className="mb-4">
                      <h3
                        className={`text-xl font-bold tracking-tight leading-tight ${
                          isWhiteCard ? 'text-[#0A0A0C]' : 'text-white'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          isWhiteCard
                            ? 'text-neutral-600'
                            : isCoralCard
                            ? 'text-white/80'
                            : 'text-neutral-400'
                        }`}
                      >
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Rate Highlight Box */}
                    <div
                      className={`p-3.5 rounded-xl flex items-center justify-between mb-4 ${
                        isWhiteCard
                          ? 'bg-neutral-100/90 border border-neutral-200'
                          : isCoralCard
                          ? 'bg-white/15 border border-white/20'
                          : 'bg-[#20202A] border border-[#2F2F3D]'
                      }`}
                    >
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isWhiteCard
                            ? 'text-neutral-500'
                            : isCoralCard
                            ? 'text-white/80'
                            : 'text-neutral-400'
                        }`}
                      >
                        RATE SPECIFICATION
                      </span>
                      <div className="text-right">
                        <span
                          className={`text-2xl font-extrabold tracking-tight font-mono tabular-nums ${
                            isWhiteCard ? 'text-[#0A0A0C]' : 'text-white'
                          }`}
                        >
                          {card.rate}
                        </span>
                        <span
                          className={`text-xs ml-1 font-medium ${
                            isWhiteCard
                              ? 'text-neutral-500'
                              : isCoralCard
                              ? 'text-white/80'
                              : 'text-neutral-400'
                          }`}
                        >
                          / {card.unit.replace('per ', '')}
                        </span>
                      </div>
                    </div>

                    {/* 4 Specs Key-Value Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {card.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-2 rounded-lg flex flex-col ${
                            isWhiteCard
                              ? 'bg-neutral-50 border border-neutral-150'
                              : isCoralCard
                              ? 'bg-black/10'
                              : 'bg-[#15151C] border border-[#252530]'
                          }`}
                        >
                          <span
                            className={`text-[9px] font-bold tracking-wider uppercase ${
                              isWhiteCard
                                ? 'text-neutral-400'
                                : isCoralCard
                                ? 'text-white/70'
                                : 'text-neutral-500'
                            }`}
                          >
                            {spec.label}
                          </span>
                          <span
                            className={`font-semibold mt-0.5 truncate ${
                              isWhiteCard
                                ? 'text-neutral-800'
                                : isCoralCard
                                ? 'text-white'
                                : 'text-neutral-200'
                            }`}
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Micro-Alert / Margin Impact */}
                    <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px]">
                      <span className="font-medium truncate opacity-85 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                        {card.marginImpact}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                        CLICK FRONT
                      </span>
                    </div>

                    {/* Simulation tooltip when hovering on front card */}
                    {index === 0 && (
                      <div className="absolute -bottom-3 right-6 bg-[#0A0A0C] text-white border border-white/20 text-[10px] font-mono px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F] animate-ping" />
                        <span>LIVE BOM SYNC ACTIVE</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
