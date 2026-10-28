import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { SpreadsheetVsCostCards } from './components/SpreadsheetVsCostCards';
import { FeaturesSection } from './components/FeaturesSection';
import { AiSearchExtract } from './components/AiSearchExtract';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] selection:bg-[#FF5A5F]/30 selection:text-[#FFAA40] relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 bg-radial-mesh pointer-events-none -z-10" />

      {/* 1. Header & Navigation */}
      <Header
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 3. Stappenplan / How It Works */}
        <HowItWorks
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 4. Why Traditional Spreadsheets Fail Your Margins */}
        <SpreadsheetVsCostCards />

        {/* 5. Core Features (Visual Listing with Spacious Card Deck) */}
        <FeaturesSection
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 6. Structured Overview */}
        <AiSearchExtract />

        {/* 7. FAQ Accordion */}
        <FaqSection
          onOpenDemo={() => setDemoOpen(true)}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* Interactive Modal (Book a Demo) */}
      <Modals
        demoOpen={demoOpen}
        onCloseDemo={() => setDemoOpen(false)}
      />
    </div>
  );
}
