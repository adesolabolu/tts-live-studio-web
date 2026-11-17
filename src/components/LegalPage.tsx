import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { REPO_URL } from '../lib/ui';

interface LegalPageProps {
  kind: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ kind, onNavigate }) => {
  const isPrivacy = kind === 'privacy';

  return (
    <section className="mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-8 md:pt-36">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/');
        }}
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to TTS Live Studio
      </a>

      <h1 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
      </h1>
      <p className="mt-3 font-mono text-xs text-zinc-500">
        TTS Live Studio · Effective November 2026 · Published by Boluwatife Adesola
      </p>

      {isPrivacy ? (
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-zinc-300">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Zero Account Credentials or Personal Data Collection</h2>
            <p className="mt-2 text-zinc-400">
              TTS Live Studio does not require an account, password, stream key, OAuth login, or session cookies. To listen
              to live room chat, you enter only a public <code className="font-mono text-zinc-200">@username</code>. We do not
              collect, store, sell, or transmit personal user accounts or viewer identities to any third-party analytics or
              advertising service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Local Offline Speech Processing</h2>
            <p className="mt-2 text-zinc-400">
              All text-to-speech synthesis runs locally on your Windows PC using embedded Piper neural voice models or your
              built-in Windows voices. Viewer chat comments, nicknames, and gift events are processed solely in your device&apos;s
              local memory to render audio and the local browser overlay (<code className="font-mono text-zinc-200">127.0.0.1</code>)
              and are never uploaded or logged to external servers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. Local Configuration &amp; Network Requests</h2>
            <p className="mt-2 text-zinc-400">
              Preferences such as your selected voice, volume, cooldowns, blocked words, and starred voices are stored strictly
              on your local machine. The application connects externally only when you:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-zinc-400">
              <li>Connect to a public livestream room using its public handle.</li>
              <li>Audition or download an open-source voice model from the Voice Store.</li>
              <li>Check for or install an application update via the public GitHub Releases API.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Children&apos;s Privacy</h2>
            <p className="mt-2 text-zinc-400">
              Because TTS Live Studio runs locally and collects no personal data, registration information, or telemetry from
              users, no personal information from children or adults is gathered or retained.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Contact &amp; Support</h2>
            <p className="mt-2 text-zinc-400">
              For privacy questions, security reports, or support, email{' '}
              <a
                href="mailto:boluwatifeadesola9@gmail.com"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                boluwatifeadesola9@gmail.com
              </a>{' '}
              or open an issue on{' '}
              <a
                href={`${REPO_URL}/issues`}
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-zinc-300">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Open-Source Software License</h2>
            <p className="mt-2 text-zinc-400">
              TTS Live Studio is free, open-source software licensed under the MIT License. You may inspect, run, and build
              the source code from our public{' '}
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                GitHub repository
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Broadcaster Moderation Responsibility</h2>
            <p className="mt-2 text-zinc-400">
              TTS Live Studio includes audience access gates, cooldowns, spam auto-mute, blocked-word filters, and instant skip
              controls. Broadcasters are responsible for configuring moderation rules appropriately for their live broadcasts
              and complying with their streaming platform&apos;s community guidelines.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. Independent Tool &amp; Warranty Disclaimer</h2>
            <p className="mt-2 text-zinc-400">
              TTS Live Studio is an independent utility and is not affiliated with, endorsed by, or sponsored by ByteDance Ltd.
              or TikTok. The software is provided &ldquo;as is&rdquo;, without warranty of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Contact</h2>
            <p className="mt-2 text-zinc-400">
              Questions or support requests can be sent to{' '}
              <a
                href="mailto:boluwatifeadesola9@gmail.com"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                boluwatifeadesola9@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
