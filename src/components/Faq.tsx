import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { REPO_URL, useReveal } from '../lib/ui';

const FAQS = [
  {
    q: 'Is it safe for my TikTok account?',
    a: 'Yes. The app only reads your public live room using your @username. It never asks for your password, stream key or cookies, and it cannot post or change anything on your account.',
  },
  {
    q: 'Windows says "Windows protected your PC". Is that normal?',
    a: 'Yes. The app is new and not yet code-signed, so SmartScreen does not recognise it. Click "More info", then "Run anyway". The full source code is public on GitHub if you want to check it first.',
  },
  {
    q: 'Do I need an OpenAI, ElevenLabs or Azure key?',
    a: 'No. The neural voices run on your own computer, so there are no API keys, subscriptions or usage limits.',
  },
  {
    q: 'How do viewers hear the voice?',
    a: 'TikTok Live Studio captures your desktop audio by default, so anything the app says goes straight to your stream. If you use a mixer such as Voicemeeter or Wave Link, choose its output in the Settings tab.',
  },
  {
    q: 'How do updates work?',
    a: 'When a new version is out, an update badge appears in the app. Click "Update & Restart" and it installs itself.',
  },
  {
    q: 'Can I remove voices I do not use?',
    a: 'Yes. Every installed voice has an Uninstall button in the Voice Store. Each one is roughly 20 to 40 MB.',
  },
];

export const Faq: React.FC = () => {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Questions</h2>
          <p className="mt-5 max-w-[38ch] leading-relaxed text-zinc-400">
            Something else?{' '}
            <a href={`${REPO_URL}/issues`} target="_blank" rel="noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Open an issue on GitHub
            </a>
            .
          </p>
        </div>

        <div className="reveal divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-white sm:text-lg"
                  >
                    {f.q}
                    <Plus
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`}
                      strokeWidth={1.75}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <p className="overflow-hidden max-w-[62ch] leading-relaxed text-zinc-400">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
