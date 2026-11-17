import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { VOICES, Voice } from '../data/voices';
import { useReveal, Wave } from '../lib/ui';

const CATEGORIES: { id: 'all' | Voice['category']; label: string }[] = [
  { id: 'all', label: 'All (13)' },
  { id: 'gaming', label: 'Hype' },
  { id: 'deep', label: 'Deep' },
  { id: 'chill', label: 'Calm' },
  { id: 'warm', label: 'Warm' },
  { id: 'accents', label: 'Accents' },
];

export const Voices: React.FC = () => {
  const ref = useReveal<HTMLElement>();
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]['id']>('all');
  const [selectedId, setSelectedId] = useState<string>(VOICES[0].id);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const list = VOICES.filter((v) => cat === 'all' || v.category === cat);
  const selected = VOICES.find((v) => v.id === selectedId) ?? VOICES[0];

  useEffect(() => () => audioRef.current?.pause(), []);

  const stop = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlayingId(null);
  };

  const play = (voice: Voice) => {
    setSelectedId(voice.id);
    if (playingId === voice.id) return stop();
    stop();
    const audio = new Audio(voice.sampleUrl);
    audioRef.current = audio;
    setPlayingId(voice.id);
    audio.onended = audio.onerror = () => {
      if (audioRef.current === audio) stop();
    };
    audio.play().catch(() => stop());
  };

  const isPlaying = playingId === selected.id;

  return (
    <section id="voices" ref={ref} className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Pick a voice that fits your stream.
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-zinc-400">
              Thirteen neural voices that run on your PC. Press play on any voice to hear the real sample.
            </p>
          </div>

          <div className="flex gap-1 overflow-x-auto pb-1" role="tablist" aria-label="Voice style">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                onClick={() => setCat(c.id)}
                className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                  cat === c.id ? 'bg-white font-medium text-black' : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          {/* Compact 2-Column Voice Selector Grid */}
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {list.map((v) => {
              const active = v.id === selected.id;
              const playing = v.id === playingId;
              return (
                <li key={v.id}>
                  <button
                    onClick={() => play(v)}
                    className={`focus-ring group flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all ${
                      active
                        ? 'border-accent/40 bg-zinc-900/90 shadow-[0_0_0_1px_rgba(56,189,248,0.18)]'
                        : 'border-white/[0.07] bg-zinc-950 hover:border-white/15 hover:bg-zinc-900/50'
                    }`}
                    aria-label={`${playing ? 'Stop' : 'Play'} ${v.name} sample`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                        playing
                          ? 'border-accent bg-accent text-black'
                          : active
                            ? 'border-white/25 bg-white/10 text-white'
                            : 'border-white/10 text-zinc-300 group-hover:border-white/25 group-hover:text-white'
                      }`}
                    >
                      {playing ? (
                        <Pause className="h-3.5 w-3.5 fill-current" />
                      ) : (
                        <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-white">{v.name}</span>
                        {playing ? (
                          <Wave className="text-accent" />
                        ) : (
                          <span className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                            {v.badge}
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-zinc-400">{v.subtitle}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Audition Card */}
          <aside className="surface relative flex flex-col overflow-hidden p-7 lg:sticky lg:top-24">
            <div
              className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                  {selected.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500">0ms Local CPU</span>
              </div>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">{selected.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{selected.subtitle}</p>

              {/* Waveform visualizer */}
              <div className="mt-8 flex h-16 items-center gap-[3px] rounded-xl border border-white/[0.06] bg-black px-4 py-3" aria-hidden="true">
                {Array.from({ length: 42 }).map((_, i) => {
                  const h = 22 + Math.abs(Math.sin(i * 0.7 + selected.name.length)) * 78;
                  return (
                    <span
                      key={i}
                      className={`w-full rounded-full transition-colors ${isPlaying ? 'wave-bar bg-accent' : 'bg-white/15'}`}
                      style={{ height: `${h}%`, animationDelay: `${(i % 9) * 0.1}s` }}
                    />
                  );
                })}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-zinc-300">{selected.desc}</p>

              <button onClick={() => play(selected)} className="btn-primary focus-ring mt-7 w-full">
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                {isPlaying ? 'Stop sample' : `Play ${selected.name} Sample`}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
