import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FactStrip } from './components/FactStrip';
import { HowItWorks } from './components/HowItWorks';
import { Voices } from './components/Voices';
import { Features } from './components/Features';
import { ProductTour } from './components/ProductTour';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';

function getCurrentRoute(fallback?: '/' | '/privacy' | '/terms'): '/' | '/privacy' | '/terms' {
  if (typeof window === 'undefined') return fallback || '/';
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/privacy') return '/privacy';
  if (path === '/terms') return '/terms';
  return '/';
}

export const App: React.FC<{ initialRoute?: '/' | '/privacy' | '/terms' }> = ({ initialRoute }) => {
  const [route, setRoute] = useState<'/' | '/privacy' | '/terms'>(() => getCurrentRoute(initialRoute));

  useEffect(() => {
    const onPop = () => setRoute(getCurrentRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (path: string) => {
    const clean = path === '/privacy' || path === '/terms' ? path : '/';
    window.history.pushState({}, '', clean);
    setRoute(clean);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black font-sans text-zinc-100">
      <Navbar />
      <main className="flex-1">
        {route === '/privacy' ? (
          <LegalPage kind="privacy" onNavigate={navigate} />
        ) : route === '/terms' ? (
          <LegalPage kind="terms" onNavigate={navigate} />
        ) : (
          <>
            <Hero />
            <FactStrip />
            <HowItWorks />
            <Voices />
            <Features />
            <ProductTour />
            <Faq />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} showCta={route === '/'} />
    </div>
  );
};

export default App;
