import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { GithubIcon, REPO_URL } from '../lib/ui';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#voices', label: 'Voices' },
  { href: '#features', label: 'Features' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const release = useLatestRelease();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.07]' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-ring flex items-center gap-2.5 rounded-lg">
          <img src="/icon.png" alt="" className="h-7 w-7 rounded-md" width={28} height={28} />
          <span className="text-[15px] font-semibold tracking-tight text-white">TikTok Live TTS</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring rounded transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View on GitHub"
            className="focus-ring grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={release.setupUrl} className="btn-primary focus-ring !px-4 !py-2">
            <Download className="h-4 w-4" strokeWidth={2} />
            Download for Windows
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="focus-ring -mr-2 rounded-full p-2 text-zinc-300 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.07] px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.05] py-3.5 text-base text-zinc-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href={release.setupUrl} className="btn-primary mt-5 w-full">
            <Download className="h-4 w-4" />
            Download for Windows
          </a>
        </div>
      )}
    </header>
  );
};
