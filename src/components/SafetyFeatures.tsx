import React from 'react';
import { ShieldCheck, MessageSquareCode, Clock, Users, ZapOff } from 'lucide-react';

export const SafetyFeatures: React.FC = () => {
  const features = [
    {
      icon: <MessageSquareCode className="w-6 h-6 text-cyan-400" />,
      title: "Command Prefix Filter",
      badge: "STREAMER FAVORITE",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      desc: "Optionally require comments to begin with a trigger prefix ('.', '/', or '!') before being spoken aloud. The prefix is automatically stripped so only the clean message is read."
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-400" />,
      title: "Anti-Spam Auto-Mute",
      badge: "AUTO-DEFENSE",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      desc: "Automatically silences users who spam repetitive messages or flood chat (3+ messages in 10 seconds triggers an automatic 30-second quiet timeout)."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Fan Club & Role Access",
      badge: "AUDIENCE GATING",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      desc: "Limit TTS speech exclusively to Followers Only, Subscribers Only, or loyal Fan Club members with custom level thresholds (e.g. reserve speech for Level 5+ supporters)."
    },
    {
      icon: <ZapOff className="w-6 h-6 text-amber-400" />,
      title: "Hardware Panic Controls",
      badge: "INSTANT CUTOFF",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      desc: "Instant 'Skip Message' and 'Clear Queue' buttons let you silence inappropriate comments mid-speech immediately with zero latency."
    }
  ];

  return (
    <section id="safety" className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STREAMER ANTI-TROLL DEFENSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Total Moderation Control.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Keep your stream professional, safe, and spam-free with battle-tested streamer safety rules.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="studio-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-medium border ${feat.badgeColor}`}>
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
