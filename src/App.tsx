import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VoiceSoundboard } from './components/VoiceSoundboard';
import { SetupFlow } from './components/SetupFlow';
import { StudioIntegration } from './components/StudioIntegration';
import { VideoSlot } from './components/VideoSlot';
import { SafetyFeatures } from './components/SafetyFeatures';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VoiceSoundboard />
        <SetupFlow />
        <StudioIntegration />
        <VideoSlot />
        <SafetyFeatures />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
