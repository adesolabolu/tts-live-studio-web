import React, { useState } from 'react';
import { Check, Copy, ShieldOff, SkipForward, Terminal, Volume2 } from 'lucide-react';
import { useReveal } from '../lib/ui';

const OVERLAY_URL = 'http://localhost:28730/overlay';

const AUDIENCES = ['Everyone', 'Followers', 'Fan Club', 'Subs'] as const;

const NAME_EXAMPLES = [
  { raw: '༺†SAMUEL†༻', spoken: 'Samuel' },
  { raw: 'P R 🕇 G R モ 丂 丂', spoken: 'P R G R' },
  { raw: '😂😂😂', spoken: 'Skipped' },
];

export const Features: React.FC = () => {
  const ref = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);
  const [audience, setAudience] = useState<(typeof AUDIENCES)[number]>('Everyone');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(OVERLAY_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked; URL is still visible */
    }
  };

  return (
    <section id="features" ref={ref} className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <h2 className="reveal max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Made for TikTok Live Studio. <span className="text-zinc-500">You stay in control of what gets said.</span>
        </h2>

        <div className="mt-16 grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Overlay — hero cell */}
          <article className="reveal surface relative flex flex-col overflow-hidden md:col-span-2 lg:row-span-2">
            <div className="p-7 pb-0">
              <h3 className="text-xl font-semibold text-white">On-screen subtitles</h3>
              <p className="mt-2 max-w-[48ch] leading-relaxed text-zinc-400">
                Add one browser source in TikTok Live Studio and viewers see who is speaking, with fan levels and gift alerts.
              </p>
              <div className="mt-5 flex items-center gap-2 rounded-[10px] border border-white/10 bg-black py-1.5 pl-3.5 pr-1.5">
                <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-zinc-300">{OVERLAY_URL}</code>
                <button
                  onClick={copy}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:bg-white/[0.12]"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-live" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="relative mt-7 flex-1 overflow-hidden border-t border-white/[0.07] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black min-h-[240px]">
              <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />
              <img
                src="/shots/overlay.webp"
                alt="Overlay showing a gift alert at the top and a viewer subtitle at the bottom"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </article>

          {/* Audience gating */}
          <article className="reveal surface flex flex-col justify-between p-7" style={{ ['--reveal-delay' as string]: '60ms' }}>
            <div>
              <h3 className="text-lg font-semibold text-white">Choose who can talk</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Open it to everyone or keep it for your supporters.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Who can trigger speech">
              {AUDIENCES.map((a) => (
                <button
                  key={a}
                  role="radio"
                  aria-checked={audience === a}
                  onClick={() => setAudience(a)}
                  className={`focus-ring rounded-full px-3 py-2 text-xs transition-colors ${
                    audience === a ? 'bg-accent font-medium text-black' : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </article>

          {/* Anti-spam */}
          <article className="reveal surface flex flex-col justify-between p-7" style={{ ['--reveal-delay' as string]: '120ms' }}>
            <ShieldOff className="h-5 w-5 text-zinc-500" strokeWidth={1.75} />
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Spam auto-mute</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Three messages in ten seconds earns a 30 second timeout. Banned words never get read.
              </p>
            </div>
          </article>

          {/* Prefix */}
          <article className="reveal surface flex flex-col justify-between p-7" style={{ ['--reveal-delay' as string]: '60ms' }}>
            <Terminal className="h-5 w-5 text-zinc-500" strokeWidth={1.75} />
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Command prefix</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Only read messages that start with <kbd className="rounded bg-white/10 px-1.5 font-mono text-[12px] text-white">!</kbd>,{' '}
                <kbd className="rounded bg-white/10 px-1.5 font-mono text-[12px] text-white">.</kbd> or{' '}
                <kbd className="rounded bg-white/10 px-1.5 font-mono text-[12px] text-white">/</kbd>. The symbol is removed before speaking.
              </p>
            </div>
          </article>

          {/* Panic */}
          <article className="reveal surface flex flex-col justify-between p-7" style={{ ['--reveal-delay' as string]: '120ms' }}>
            <SkipForward className="h-5 w-5 text-zinc-500" strokeWidth={1.75} />
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Skip and clear</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Cut off a message mid-sentence or empty the whole queue with one click.
              </p>
            </div>
          </article>

          {/* Name cleanup */}
          <article className="reveal surface p-7 md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Fancy names, spoken properly</h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-zinc-400">
              Decorative symbols and emojis are stripped before speaking. Emoji-only messages are skipped entirely.
            </p>
            <dl className="mt-6 divide-y divide-white/[0.06] rounded-[10px] border border-white/[0.07] bg-black">
              {NAME_EXAMPLES.map((n) => (
                <div key={n.raw} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                  <dt className="truncate text-zinc-500">{n.raw}</dt>
                  <dd className={`shrink-0 font-medium ${n.spoken === 'Skipped' ? 'text-zinc-500' : 'text-white'}`}>
                    <span className="mr-2 text-zinc-600" aria-hidden="true">→</span>
                    {n.spoken}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Audio routing */}
          <article className="reveal surface relative overflow-hidden p-7 md:col-span-2" style={{ ['--reveal-delay' as string]: '80ms' }}>
            <Volume2 className="h-5 w-5 text-zinc-500" strokeWidth={1.75} />
            <h3 className="mt-8 text-lg font-semibold text-white">Works with your audio setup</h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-zinc-400">
              Uses your default speakers out of the box. Running Voicemeeter, Wave Link, GoXLR or Sonar? Pick any output device in
              Settings.
            </p>
            <p className="mt-6 text-sm text-zinc-500">Tip: wear headphones so your mic does not pick up the voice twice.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
