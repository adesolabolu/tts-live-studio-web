import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { GithubIcon, REPO_URL, Wave } from '../lib/ui';

const DEMO_CHAT = [
  { user: 'sarah_cozy', text: 'bro your gameplay is actually so insane today', level: 12 },
  { user: 'jordan_fps', text: 'what voice is this?? sounds so clean', level: 7 },
  { user: 'hype_viewer', text: "W stream, let's hit the 20k likes goal", level: 0 },
  { user: 'mike.plays', text: 'first time here, love the vibe', level: 3 },
];

/** Live preview of the on-stream subtitle the app shows while it speaks. */
const LiveSubtitle: React.FC = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % DEMO_CHAT.length), 3200);
    return () => window.clearInterval(id);
  }, []);
  const msg = DEMO_CHAT[i];

  return (
    <div
      key={i}
      className="subtitle-in flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      aria-live="polite"
    >
      <Wave className="h-6 shrink-0 text-accent" />
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-[13px]">
          {msg.level > 0 && (
            <span className="rounded-md bg-amber-400 px-1.5 py-px font-mono text-[10px] font-semibold text-black">
              LV.{msg.level}
            </span>
          )}
          <span className="font-semibold text-accent">{msg.user}</span>
        </div>
        <p className="mt-0.5 truncate text-[15px] font-medium text-white sm:text-base">{msg.text}</p>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const release = useLatestRelease();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-32 lg:pb-28">
      {/* single soft light source behind the product shot */}
      <div
        className="pointer-events-none absolute right-[-10%] top-10 h-[520px] w-[720px] rounded-full bg-accent/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-page items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <a
            href={`${REPO_URL}/releases/latest`}
            target="_blank"
            rel="noreferrer"
            className="rise focus-ring group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200"
          >
            <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white">{release.versionTag}</span>
            Redesigned studio console &amp; icon
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>

          <h1
            className="rise mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl"
            style={{ ['--rise-delay' as string]: '80ms' }}
          >
            Your TikTok Live chat, <span className="text-accent">read&nbsp;aloud.</span>
          </h1>

          <p
            className="rise mt-6 max-w-[46ch] text-lg leading-relaxed text-zinc-400"
            style={{ ['--rise-delay' as string]: '160ms' }}
          >
            A free Windows app that speaks viewer comments in natural voices the moment they arrive. Connect with just your
            @username.
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ ['--rise-delay' as string]: '240ms' }}
          >
            <a href={release.setupUrl} className="btn-primary focus-ring !px-7 !py-3.5">
              <Download className="h-[18px] w-[18px]" strokeWidth={2} />
              Download for Windows
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="btn-ghost focus-ring !py-3.5">
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="rise relative lg:-mr-24 xl:-mr-40" style={{ ['--rise-delay' as string]: '200ms' }}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-30px_rgba(0,0,0,1)]">
            <div className="flex h-9 items-center gap-2 border-b border-white/[0.07] px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 text-[11px] text-zinc-500">TTS Live Studio</span>
            </div>
            <img
              src="/shots/app-main.webp"
              alt="TTS Live Studio dashboard, connected to a live room and reading a viewer comment aloud"
              width={2610}
              height={1720}
              className="block w-full"
              fetchPriority="high"
            />
          </div>

          <div className="absolute -bottom-8 left-4 right-4 sm:left-10 sm:right-auto sm:w-[440px] lg:-left-10">
            <LiveSubtitle />
          </div>
        </div>
      </div>
    </section>
  );
};
