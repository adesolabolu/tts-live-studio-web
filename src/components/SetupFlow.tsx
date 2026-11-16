import React from 'react';
import { DownloadCloud, AtSign, Radio, ArrowRight } from 'lucide-react';

export const SetupFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <DownloadCloud className="w-6 h-6 text-cyan-400" />,
      title: "1-Click Windows Install",
      desc: "Download and run TikTokLiveTTS-Setup.exe. Installs cleanly to Windows with zero administrative hurdles, creating instant Desktop and Start Menu shortcuts."
    },
    {
      number: "02",
      icon: <AtSign className="w-6 h-6 text-pink-400" />,
      title: "Enter Your TikTok @Username",
      desc: "Type your public TikTok handle and hit Connect. Never asks for your account password, stream key, or session cookies. Safe, read-only live room connection."
    },
    {
      number: "03",
      icon: <Radio className="w-6 h-6 text-emerald-400" />,
      title: "Stream on TikTok Live Studio",
      desc: "Launch TikTok Live Studio. Audio routes directly through your desktop sound system with zero configuration needed. Add the /overlay HUD for live subtitle visuals."
    }
  ];

  return (
    <section id="setup" className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-950 border border-white/10 mb-3">
            <span>GET UP AND RUNNING IN &lt;60 SECONDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Three Steps. Zero Hassle.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            No complex developer compilation, no cloud subscription tokens, no complicated audio routing.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="studio-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_16px_rgba(255,255,255,0.05)]">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-mono font-black text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Phase {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
