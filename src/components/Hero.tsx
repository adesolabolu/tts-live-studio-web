import React, { useEffect, useState } from 'react';
import { Download, Sparkles, Shield, Cpu, Activity, Volume2, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [version, setVersion] = useState<string>("1.9.2");

  useEffect(() => {
    fetch('https://api.github.com/repos/adesolabolu/tiktok-live-tts/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (data.tag_name) setVersion(data.tag_name.replace(/^v/, ''));
        if (Array.isArray(data.assets)) {
          const total = data.assets.reduce((sum: number, a: { download_count?: number }) => sum + (a.download_count || 0), 0);
          if (total > 0) setDownloadCount(total);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black bg-studio-grid border-b border-white/[0.06]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] h-[300px] bg-pink-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-zinc-950 border border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-semibold">100% Offline Neural Speech</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Zero Cloud Subscriptions</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Turn TikTok Live Chat into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-white">
              Zero-Lag Voice.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Connect directly to your TikTok livestream using just your public <span className="text-white font-semibold">@username</span>. 13 offline neural voices running on your local CPU with zero cloud lag, zero API fees, and anti-spam moderation.
          </p>
        </div>

        {/* Download Buttons & Callouts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Setup.exe"
            className="btn-press flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all group"
          >
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span>Download for Windows (v{version})</span>
          </a>

          <a
            href="https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Windows.zip"
            className="btn-press flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-900 border border-white/10 transition-all"
          >
            <span>Portable .ZIP Package</span>
          </a>
        </div>

        {/* Telemetry Footnote */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 mb-16 font-mono">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Runs on Any CPU (&lt;30ms)
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            No Password or API Key Required
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Windows 10 / 11 64-bit
          </span>
          {downloadCount !== null && (
            <span className="text-zinc-500">
              ⚡ {downloadCount.toLocaleString()} total downloads
            </span>
          )}
        </div>

        {/* Studio Dashboard Interactive Mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-black border border-white/[0.12] shadow-[0_20px_80px_-20px_rgba(0,0,0,1)] overflow-hidden">
          
          {/* Top Window Chrome */}
          <div className="px-4 py-3 bg-zinc-950/80 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              <span className="ml-2 text-xs font-mono text-zinc-500">TikTok Live TTS Studio — Broadcast Monitor</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                ONLINE (PORT 28730)
              </span>
            </div>
          </div>

          {/* Studio Body Simulation */}
          <div className="p-6 sm:p-8 bg-black grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Broadcast VU Meter & Live Speaker */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              
              {/* Active Speaker Card */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">Active Local Speech</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">Voice: Nova (Anime Hype)</span>
                </div>
                
                <div className="p-4 rounded-lg bg-black border border-white/5 flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <Volume2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-zinc-400">@jordan_streams <span className="text-[10px] px-1.5 py-0.2 bg-pink-500/15 text-pink-400 rounded">LV.8</span> says:</div>
                      <div className="text-sm font-semibold text-white truncate">"Bro this TTS voice is literally instant, zero delay!"</div>
                    </div>
                  </div>

                  {/* Equalizer Wave Simulation */}
                  <div className="flex items-center gap-1 h-6 shrink-0">
                    <span className="eq-bar" />
                    <span className="eq-bar" />
                    <span className="eq-bar" />
                    <span className="eq-bar" />
                  </div>
                </div>

                {/* Streamer Controls */}
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 font-medium border border-white/5 flex items-center justify-center gap-1.5 transition-colors">
                    ⏭️ Skip Current
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 font-medium border border-white/5 flex items-center justify-center gap-1.5 transition-colors">
                    🗑️ Clear Queue (0)
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-cyan-400 font-medium border border-cyan-500/20 flex items-center justify-center gap-1.5 transition-colors">
                    ▶️ Play Sample
                  </button>
                </div>
              </div>

              {/* Hardware Quick Soundboard */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center justify-between">
                  <span>STREAMER SOUNDBOARD (INSTANT REACTION)</span>
                  <span className="text-[10px] text-zinc-600">6 PRESETS</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {['Welcome to the stream!', 'Thanks for the roses!', 'W stream today!', 'Don\'t forget to follow!', 'Appreciate you all!', 'Hydrate check!'].map((phrase, idx) => (
                    <div key={idx} className="p-2 rounded bg-black border border-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/30 flex items-center gap-1.5 transition-all cursor-pointer">
                      <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{phrase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real-Time Chat & Gift Activity Stream */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-semibold text-white">LIVE CHAT FEED</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">FILTER: ALL</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-white">@alex_gaming <span className="text-[10px] px-1 py-0.2 bg-emerald-500/20 text-emerald-400 rounded">LV.12</span></span>
                      <span className="text-[10px] font-mono text-zinc-600">11:28:40</span>
                    </div>
                    <p className="text-zinc-300">what game are we playing next stream?</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-pink-500/[0.04] border border-pink-500/20 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-pink-400">@sarah_cozy</span>
                      <span className="text-[10px] font-mono text-pink-400/80">🎁 GIFT</span>
                    </div>
                    <p className="text-zinc-200">Sent 10x Doughnut (300 coins)</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-white">@hype_man</span>
                      <span className="text-[10px] font-mono text-zinc-600">11:29:02</span>
                    </div>
                    <p className="text-zinc-300">let's gooooo chat</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Overlay: <code className="text-zinc-400">/overlay</code></span>
                <span className="text-emerald-400">0 dropped frames</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
