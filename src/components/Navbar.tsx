import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Group */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            ⚡
          </div>
          <a href="#" className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-white">TikTok Live TTS Studio</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              v1.9.2
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#voices" className="hover:text-white transition-colors">13 Voices</a>
          <a href="#setup" className="hover:text-white transition-colors">Quick Setup</a>
          <a href="#studio" className="hover:text-white transition-colors">TikTok Live Studio</a>
          <a href="#safety" className="hover:text-white transition-colors">Safety & Rules</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/adesolabolu/tiktok-live-tts"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Setup.exe"
            className="btn-press flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-black bg-white hover:bg-zinc-200 shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-black border-b border-white/10 flex flex-col gap-4 text-sm text-zinc-300">
          <a href="#voices" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">13 Neural Voices</a>
          <a href="#setup" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">Quick Setup</a>
          <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">TikTok Live Studio HUD</a>
          <a href="#safety" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">Anti-Spam Safety</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">FAQ</a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Setup.exe"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-black bg-white"
            >
              <Download className="w-4 h-4" />
              <span>Download TikTokLiveTTS-Setup.exe</span>
            </a>
            <a
              href="https://github.com/adesolabolu/tiktok-live-tts"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-medium text-zinc-400 bg-white/5 border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
