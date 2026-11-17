import React from 'react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { useReveal } from '../lib/ui';

export const FactStrip: React.FC = () => {
  const release = useLatestRelease();
  const ref = useReveal<HTMLDivElement>();

  const facts = [
    { value: '13', label: 'natural voices' },
    { value: 'Free', label: 'and open source' },
    { value: 'No login', label: 'just your @username' },
    release.totalDownloads > 50
      ? { value: release.totalDownloads.toLocaleString(), label: 'downloads' }
      : { value: 'Win 10/11', label: '64-bit desktop app' },
  ];

  return (
    <section aria-label="Key facts" className="border-y border-white/[0.07]">
      <div ref={ref} className="mx-auto grid max-w-page grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`reveal py-8 md:py-10 ${i % 2 === 1 ? 'pl-6 border-l border-white/[0.07]' : ''} ${
              i >= 2 ? 'border-t border-white/[0.07] md:border-t-0' : ''
            } ${i === 2 ? 'md:pl-6 md:border-l' : ''}`}
            style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
          >
            <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{f.value}</div>
            <div className="mt-1 text-sm text-zinc-500">{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
