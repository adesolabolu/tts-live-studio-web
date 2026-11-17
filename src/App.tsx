import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FactStrip } from './components/FactStrip';
import { HowItWorks } from './components/HowItWorks';
import { Voices } from './components/Voices';
import { Features } from './components/Features';
import { ProductTour } from './components/ProductTour';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => (
  <div className="flex min-h-[100dvh] flex-col bg-black font-sans text-zinc-100">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <FactStrip />
      <HowItWorks />
      <Voices />
      <Features />
      <ProductTour />
      <Faq />
    </main>
    <Footer />
  </div>
);

export default App;
