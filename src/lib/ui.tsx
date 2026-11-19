import React, { useEffect, useRef } from 'react';

/** Adds `is-visible` to `.reveal` children once they scroll into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.02 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export const REPO_URL = 'https://github.com/adesolabolu/tiktok-live-tts';
export const STORE_WEB_URL = 'https://apps.microsoft.com/detail/9N5RB7965L3D';
export const STORE_DEEP_LINK = 'ms-windows-store://pdp/?productid=9N5RB7965L3D';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const WindowsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 5.5 10.5 4.5v7H3v-6Zm0 13 7.5 1v-7H3v6Zm8.5 1.1L21 21v-8.5h-9.5v7.1Zm0-15.2v7.1H21V3l-9.5 1.4Z" />
  </svg>
);

export const Wave: React.FC<{ bars?: number; className?: string }> = ({ bars = 5, className = '' }) => (
  <span className={`inline-flex items-center gap-[3px] h-4 ${className}`} aria-hidden="true">
    {Array.from({ length: bars }).map((_, i) => (
      <span key={i} className="wave-bar" style={{ animationDelay: `${(i * 0.13) % 0.9}s` }} />
    ))}
  </span>
);
