import React from 'react';
import { Download } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { GithubIcon, REPO_URL, useReveal, WindowsIcon } from '../lib/ui';

interface FooterProps {
  onNavigate?: (path: string) => void;
  showCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, showCta = true }) => {
  const release = useLatestRelease();
  const ref = useReveal<HTMLDivElement>();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-white/[0.07]">
      {showCta && (
        <div ref={ref} className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-full h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[120px]"
            aria-hidden="true"
          />
          <div className="reveal relative mx-auto flex max-w-page flex-col items-center px-5 py-28 text-center sm:px-8 md:py-36">
            <img src="/icon.png" alt="" width={56} height={56} className="h-14 w-14 rounded-xl" />
            <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
              Let your chat be heard.
            </h2>
            <p className="mt-5 text-lg text-zinc-400">Free for Windows 10 and 11.</p>
            <a href={release.setupUrl} className="btn-primary focus-ring mt-10 !px-8 !py-4 !text-base">
              <Download className="h-5 w-5" strokeWidth={2} />
              Download for Windows
            </a>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <WindowsIcon className="h-3.5 w-3.5" />
                {release.versionTag} · {release.setupSizeMB}
              </span>
              <span aria-hidden="true">·</span>
              <a href={release.zipUrl} className="underline decoration-white/20 underline-offset-4 hover:text-zinc-300">
                Portable .zip
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="" width={20} height={20} className="h-5 w-5 rounded" />
            <span className="text-zinc-300">TTS Live Studio</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            <a href="/privacy" onClick={(e) => go(e, '/privacy')} className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" onClick={(e) => go(e, '/terms')} className="hover:text-white">
              Terms of Use
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
              <GithubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer" className="hover:text-white">
              Release notes
            </a>
            <a href={`${REPO_URL}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="hover:text-white">
              MIT License
            </a>
          </nav>
        </div>
        <p className="mx-auto max-w-page px-5 pb-10 text-xs text-zinc-600 sm:px-8">
          Independent open-source project, not affiliated with TikTok. TikTok is a trademark of ByteDance Ltd.
        </p>
      </div>
    </footer>
  );
};
