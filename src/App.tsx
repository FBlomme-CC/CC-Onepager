/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpreadsheetVsCostCards } from './components/SpreadsheetVsCostCards';
import { FeaturesSection } from './components/FeaturesSection';
import { AiSearchExtract } from './components/AiSearchExtract';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] selection:bg-[#FF5A5F]/30 selection:text-[#FFAA40] relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 bg-radial-mesh pointer-events-none -z-10" />

      {/* 1. Header & Navigation (Fixed / Dark Glass) */}
      <Header
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 2. Hero Section with Interactive 3-Card Deck */}
        <Hero
          onOpenWalkthrough={() => setWalkthroughOpen(true)}
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 3. Why Traditional Spreadsheets Fail Your Margins (Shortened) */}
        <SpreadsheetVsCostCards />

        {/* 4. Core Features with Visual Card Element (Shortened) */}
        <FeaturesSection onOpenDemo={() => setDemoOpen(true)} />

        {/* 5. Structured Overview */}
        <AiSearchExtract />

        {/* 6. FAQ Accordion */}
        <FaqSection onOpenDemo={() => setDemoOpen(true)} />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* Interactive Modals */}
      <Modals
        walkthroughOpen={walkthroughOpen}
        demoOpen={demoOpen}
        onCloseWalkthrough={() => setWalkthroughOpen(false)}
        onCloseDemo={() => setDemoOpen(false)}
      />
    </div>
  );
}
