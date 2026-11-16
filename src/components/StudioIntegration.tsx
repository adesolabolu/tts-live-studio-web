import React from 'react';
import { Headphones, Sliders, Monitor, Layers, CheckCircle2 } from 'lucide-react';

export const StudioIntegration: React.FC = () => {
  return (
    <section id="studio" className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span>TIKTOK LIVE STUDIO AUDIO PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built Directly for TikTok Live Studio.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            TikTok Live TTS Studio routes speech directly into Windows audio hardware, ensuring your livestream audience hears crystal-clear speech without complicated plug-ins.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Default Desktop Audio Capture */}
          <div className="studio-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Audio Setup by Default</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                TikTok Live Studio automatically captures your Windows default system audio. When TikTok Live TTS Studio speaks, your live stream audience hears it instantly with zero configuration needed.
              </p>
              
              <div className="space-y-2.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works out of the box with default Windows audio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated conflict-free port 28730 with auto-failover</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-black border border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-zinc-400" />
                <span>Pro Tip: Wear headphones to prevent mic feedback loop</span>
              </span>
            </div>
          </div>

          {/* Card 2: Transparent Subtitle HUD Overlay */}
          <div className="studio-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent Subtitle HUD Overlay</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Add a browser source in TikTok Live Studio pointing to <code className="text-cyan-300 font-mono bg-white/5 px-1.5 py-0.5 rounded">http://localhost:28730/overlay</code>. Displays real-time live chat subtitles, fan level badges, and gift banners with zero background.
              </p>

              <div className="space-y-2.5 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>100% transparent alpha channel background</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Animated fan club levels (LV. 1 to LV. 30+)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-black border border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-zinc-400" />
                <span>Supports Voicemeeter, Wave Link & SteelSeries Sonar</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
