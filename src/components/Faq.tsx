import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is TikTok Live TTS Studio safe for my TikTok account?",
      a: "Yes, 100% safe. The application connects strictly to your live room's public webcast stream using just your @username. It never asks for your password, stream keys, login credentials, or account cookies, and cannot interact with your account directly."
    },
    {
      q: "Does it require an OpenAI, ElevenLabs, or Azure API key?",
      a: "No API keys are required. TikTok Live TTS Studio runs a high-performance offline neural synthesis engine (Piper) directly on your local CPU. There are zero cloud subscription fees, zero recurring token costs, and no usage limits."
    },
    {
      q: "How does it achieve zero delay (<30ms) speech?",
      a: "Traditional TTS solutions send text across the internet to cloud servers, wait for audio generation, and stream it back, which takes 2–5 seconds. TikTok Live TTS Studio performs speech synthesis directly on your computer's CPU in under 30 milliseconds."
    },
    {
      q: "How does audio get captured by TikTok Live Studio?",
      a: "TikTok Live Studio captures your default Windows desktop sound automatically. When TikTok Live TTS Studio speaks, your viewers hear it instantly. If you use virtual mixers like Voicemeeter, Wave Link, GoXLR, or SteelSeries Sonar, you can choose your dedicated output channel in the Settings tab."
    },
    {
      q: "How do in-app updates work?",
      a: "Whenever an update is published, an 'Update Available' badge appears in the studio header and Settings tab. Clicking 'Update & Restart' downloads the new release and updates your app automatically."
    },
    {
      q: "Can I uninstall voices I don't use to save disk space?",
      a: "Yes. In the Voice Store tab, every installed voice model has an 'Uninstall' button that instantly frees up disk space (each model is only ~20–40MB)."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about setting up and running TikTok Live TTS Studio.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="studio-card rounded-xl border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
