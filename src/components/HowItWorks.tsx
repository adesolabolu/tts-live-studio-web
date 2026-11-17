import React from 'react';
import { useReveal } from '../lib/ui';

const STEPS = [
  {
    title: 'Install the app',
    body: 'Run the installer. It adds Desktop and Start Menu shortcuts and opens in about a second.',
  },
  {
    title: 'Type your @username',
    body: 'Hit Go Live. The app listens to your public live room. No password, stream key, or login.',
  },
  {
    title: 'Go live in TikTok Live Studio',
    body: 'Studio already captures your desktop audio, so viewers hear every comment with no extra setup.',
  },
];

export const HowItWorks: React.FC = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="how" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <h2 className="reveal max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          On air in under a minute.
        </h2>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="reveal relative" style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}>
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 font-mono text-sm text-white">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 max-w-[36ch] leading-relaxed text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
