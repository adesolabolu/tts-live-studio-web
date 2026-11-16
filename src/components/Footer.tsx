import React from 'react';
import { Download, Heart } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/[0.08] py-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs">
              ⚡
            </div>
            <div>
              <div className="font-bold text-sm text-white">TikTok Live TTS Studio</div>
              <div className="text-[11px] font-mono text-zinc-400">0ms Offline Neural Voice Engine • v1.9.2</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <a
              href="https://github.com/adesolabolu/tiktok-live-tts"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://github.com/adesolabolu/tiktok-live-tts/releases"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Release Notes</span>
            </a>
            <a
              href="https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Setup.exe"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Setup (.exe)</span>
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <p>
            ⚖️ Independent open-source tool released under the MIT License. Not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
          </p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-red-500 fill-current" /> for livestreamers.
          </p>
        </div>

      </div>
    </footer>
  );
};
