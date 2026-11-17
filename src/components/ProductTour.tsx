import React, { useState } from 'react';
import { useReveal } from '../lib/ui';

const TABS = [
  {
    id: 'live',
    label: 'Live console',
    caption: 'Three-column broadcast deck: connection, voice, soundboard, moderation, and live feed on one screen.',
    src: '/shots/app-main.webp',
    alt: 'Live console with the 3-column broadcast deck, on-air monitor, and chat activity feed',
  },
  {
    id: 'overlay',
    label: 'Studio overlay',
    caption: 'Transparent browser source for TikTok Live Studio with live stage preview.',
    src: '/shots/app-overlay.webp',
    alt: 'Studio overlay tab with setup steps and live transparent stage preview',
  },
  {
    id: 'store',
    label: 'Voice store',
    caption: 'Preview and install all 13 offline neural voices in one click.',
    src: '/shots/app-store.webp',
    alt: 'Voice store with voice cards, preview and install buttons',
  },
  {
    id: 'settings',
    label: 'Audio & settings',
    caption: 'Output device routing, master volume, updates, and local port telemetry.',
    src: '/shots/app-settings.webp',
    alt: 'Settings tab with audio routing and runtime telemetry',
  },
] as const;

export const ProductTour: React.FC = () => {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<(typeof TABS)[number]['id']>('live');
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section ref={ref} className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Everything on one screen.</h2>
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-zinc-950 p-1" role="tablist" aria-label="App screens">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`focus-ring rounded-full px-4 py-2 text-sm transition-colors sm:px-5 ${
                  active === t.id ? 'bg-white font-medium text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mt-5 min-h-[1.5rem] text-zinc-400">{tab.caption}</p>
        </div>

        <div className="reveal relative mt-10">
          <div className="pointer-events-none absolute inset-x-[10%] -top-10 h-40 rounded-full bg-accent/[0.06] blur-[90px]" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-40px_rgba(0,0,0,1)]">
            <div className="flex h-9 items-center justify-between border-b border-white/[0.07] px-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 text-[11px] text-zinc-500">TikTok Live TTS Studio — {tab.label}</span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">1320 × 860 Desktop Window</span>
            </div>
            <div className="relative">
              {TABS.map((t) => (
                <img
                  key={t.id}
                  src={t.src}
                  alt={t.alt}
                  width={2610}
                  height={1720}
                  loading="lazy"
                  className={`block w-full transition-opacity duration-500 ${
                    t.id === active ? 'relative opacity-100' : 'absolute inset-0 opacity-0'
                  }`}
                  aria-hidden={t.id !== active}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
