import React, { useState } from 'react';
import { Download, Sparkles, Shield, Cpu, Volume2, Play, Radio, CheckCircle, ChevronDown } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Hero: React.FC = () => {
  const release = useLatestRelease();
  const [activeTab, setActiveTab] = useState<'tts' | 'overlay' | 'store' | 'settings'>('tts');
  const [isPlayingSample, setIsPlayingSample] = useState(false);

  const toggleSample = () => {
    setIsPlayingSample(!isPlayingSample);
    setTimeout(() => setIsPlayingSample(false), 2600);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black bg-studio-grid border-b border-white/[0.06]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] h-[300px] bg-pink-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-zinc-950 border border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-semibold">{release.versionTag} Official Release</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">100% Offline Neural Speech</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Zero Cloud API Fees</span>
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
            Connect directly to your TikTok livestream using just your public <span className="text-white font-semibold">@username</span>. 13 offline Piper neural voices running on your local CPU with zero cloud buffering, zero API keys, and custom fan club moderation.
          </p>
        </div>

        {/* Download Buttons & Callouts (Dynamically updated via GitHub API) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={release.setupUrl}
            className="btn-press flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all group"
          >
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span>Download for Windows ({release.versionTag})</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800 font-mono font-medium">
              {release.setupSizeMB}
            </span>
          </a>

          <a
            href={release.zipUrl}
            className="btn-press flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-900 border border-white/10 transition-all"
          >
            <span>Portable .ZIP Package</span>
            <span className="text-xs text-zinc-500 font-mono">({release.zipSizeMB})</span>
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
          {release.totalDownloads > 0 && (
            <span className="text-zinc-500">
              ⚡ {release.totalDownloads.toLocaleString()} total downloads
            </span>
          )}
        </div>

        {/* AUTHENTIC STUDIO APP WINDOW REPLICA (Matches real desktop app UI 1:1) */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-black border border-white/[0.14] shadow-[0_20px_80px_-20px_rgba(0,0,0,1)] overflow-hidden">
          
          {/* Top Window Header Bar */}
          <div className="px-5 py-3.5 bg-zinc-950 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* OS Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              </div>

              {/* Brand Title & Version */}
              <div className="flex items-center gap-2 pl-2">
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="text-cyan-400">⚡</span> TikTok Live TTS Studio
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-zinc-900 text-zinc-300 border border-white/10">
                  {release.versionTag}
                </span>
              </div>
            </div>

            {/* Telemetry Strip */}
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                <span>⚡ 0ms Offline CPU Engine</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CONNECTED: @creator</span>
              </div>
            </div>
          </div>

          {/* Authentic Segmented Navigation Controller */}
          <div className="px-4 bg-zinc-950/60 border-b border-white/[0.06] flex items-center gap-1 overflow-x-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab('tts')}
              className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tts'
                  ? 'border-cyan-400 text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>🎙️ Live TTS & Moderation</span>
            </button>
            <button
              onClick={() => setActiveTab('overlay')}
              className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'overlay'
                  ? 'border-cyan-400 text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>📺 TikTok Studio Overlay</span>
            </button>
            <button
              onClick={() => setActiveTab('store')}
              className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'store'
                  ? 'border-cyan-400 text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>🏪 Voice Store (13 Voices)</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'settings'
                  ? 'border-cyan-400 text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>⚙️ Settings & Audio Routing</span>
            </button>
          </div>

          {/* App Body (Real Tab 1 Layout) */}
          <div className="p-6 sm:p-8 bg-black grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Streamer Deck Controls (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              
              {/* Card 1: Stream Connection */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Stream Connection</span>
                  <span className="text-[11px] font-mono text-zinc-500">Direct Webhook</span>
                </div>
                <label className="text-[11px] text-zinc-400 mb-1.5 block">TikTok @Username</label>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 flex items-center bg-black border border-white/10 rounded-lg px-3 py-2 text-xs font-mono">
                    <span className="text-zinc-500 mr-1.5">@</span>
                    <span className="text-white font-medium">streamer_official</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs">
                    Disconnect
                  </button>
                </div>
                <div className="text-[11px] text-emerald-400/90 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Hook connected to live room #73919402 • Listening to chat</span>
                </div>
              </div>

              {/* Card 2: Active Speech Voice */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Active Speech Voice</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">0ms Offline Latency</span>
                </div>
                <label className="text-[11px] text-zinc-400 mb-1.5 block">Selected Voice Model</label>
                <div className="p-2.5 rounded-lg bg-black border border-white/10 flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center gap-2 text-white font-mono">
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                    <span>en_US-bryce-medium (Gamer Guy)</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-500" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={toggleSample}
                    className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-white/10 text-xs text-white font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isPlayingSample ? 'Speaking sample...' : 'Play Sample of Selected Voice'}</span>
                    {isPlayingSample && (
                      <div className="flex items-center gap-0.5 h-3 ml-1">
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Volume Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                    <span>Master Speech Volume</span>
                    <span className="text-cyan-400 font-mono font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 w-full rounded-full" />
                  </div>
                </div>
              </div>

              {/* Card 3: Audience & Fan Club Permissions */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Audience Access Rules</span>
                  <span className="text-[10px] font-mono text-zinc-500">{release.versionTag} Filter</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black border border-cyan-500/40 text-white flex items-center gap-2 font-medium">
                    <Radio className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Everyone</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 text-zinc-400 flex items-center gap-2 hover:border-white/20 cursor-pointer">
                    <div className="w-3.5 h-3.5 rounded-full border border-zinc-700" />
                    <span>Followers</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 text-zinc-400 flex items-center gap-2 hover:border-white/20 cursor-pointer">
                    <div className="w-3.5 h-3.5 rounded-full border border-zinc-700" />
                    <span>Fan Club</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Live Broadcast Log & Quick Soundboard (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5">
              
              {/* Broadcast Log */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Live TTS Broadcast Log
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">3/3 SPOKEN</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-black border border-white/5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-white">@sarah_cozy <span className="text-[9px] px-1 py-0.2 bg-pink-500/20 text-pink-400 rounded">FAN CLUB</span></span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">TTS OK</span>
                    </div>
                    <p className="text-zinc-300">"bro your gameplay is actually so insane today!"</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black border border-white/5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-white">@jordan_fps <span className="text-[9px] px-1 py-0.2 bg-cyan-500/20 text-cyan-400 rounded">FOLLOWER</span></span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">TTS OK</span>
                    </div>
                    <p className="text-zinc-300">"what voice model is this?? sounds so clean"</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black border border-white/5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400 mb-1">
                      <span className="font-semibold text-white">@hype_viewer</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">TTS OK</span>
                    </div>
                    <p className="text-zinc-300">"W stream let's hit the 20k likes goal chat!"</p>
                  </div>
                </div>
              </div>

              {/* Streamer Soundboard (Fast Reactions) */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Streamer Soundboard</span>
                  <span className="text-[10px] font-mono text-zinc-500">4 PRESETS</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button className="p-2 rounded bg-black border border-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-left flex items-center gap-1.5 transition-colors">
                    <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Welcome to stream!</span>
                  </button>
                  <button className="p-2 rounded bg-black border border-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-left flex items-center gap-1.5 transition-colors">
                    <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Thanks for roses!</span>
                  </button>
                  <button className="p-2 rounded bg-black border border-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-left flex items-center gap-1.5 transition-colors">
                    <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Hydrate check!</span>
                  </button>
                  <button className="p-2 rounded bg-black border border-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-left flex items-center gap-1.5 transition-colors">
                    <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Appreciate you!</span>
                  </button>
                </div>
              </div>

              {/* Status Footer Strip */}
              <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Queue: 0 pending
                </span>
                <span className="text-zinc-500">Virtual Cable: VB-Audio Cable</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
