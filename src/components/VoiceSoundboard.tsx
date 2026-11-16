import React, { useState, useRef } from 'react';
import { VOICES, Voice } from '../data/voices';
import { Play, Pause, Search, Volume2, Sparkles } from 'lucide-react';

export const VoiceSoundboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const categories = [
    { id: 'all', label: 'All Voices (13)' },
    { id: 'gaming', label: 'Gaming & Hype' },
    { id: 'deep', label: 'Deep & Radio' },
    { id: 'chill', label: 'Story & Cozy' },
    { id: 'warm', label: 'Warm & Friendly' },
    { id: 'accents', label: 'Accents & UK' },
  ];

  const handlePlayToggle = (voice: Voice) => {
    // If clicking currently active voice, pause it
    if (activeVoiceId === voice.id && audioRef.current) {
      audioRef.current.pause();
      setActiveVoiceId(null);
      return;
    }

    // Stop existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Start new audio
    const audio = new Audio(voice.sampleUrl);
    audioRef.current = audio;
    setActiveVoiceId(voice.id);

    audio.play().catch(e => {
      console.error("Audio playback error:", e);
      setActiveVoiceId(null);
    });

    audio.onended = () => {
      setActiveVoiceId(null);
      audioRef.current = null;
    };
    audio.onerror = () => {
      setActiveVoiceId(null);
      audioRef.current = null;
    };
  };

  const filteredVoices = VOICES.filter(voice => {
    const matchesCat = selectedCategory === 'all' || voice.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
      voice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voice.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voice.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="voices" className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>13 HIGH-FIDELITY OFFLINE VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Hear the Voices Before You Install.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              100% offline Piper neural models. Zero robotic synthesizer pitch artifacts. Click any voice below to stream an authentic sample.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search voice or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn-press px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Voice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVoices.map((voice) => {
            const isPlaying = activeVoiceId === voice.id;

            return (
              <div
                key={voice.id}
                className={`studio-card p-5 rounded-2xl flex flex-col justify-between transition-all ${
                  isPlaying ? 'border-cyan-500/40 bg-zinc-950/80 shadow-[0_0_24px_rgba(56,189,248,0.15)]' : ''
                }`}
              >
                <div>
                  {/* Top Card Meta */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>{voice.name}</span>
                        {isPlaying && (
                          <span className="flex items-center gap-0.5 h-3">
                            <span className="eq-bar !w-1 !bg-cyan-400" />
                            <span className="eq-bar !w-1 !bg-cyan-400" />
                            <span className="eq-bar !w-1 !bg-cyan-400" />
                          </span>
                        )}
                      </h3>
                      <div className="text-xs text-zinc-400 font-medium">{voice.subtitle}</div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${voice.badgeColor}`}>
                      {voice.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-5">
                    {voice.desc}
                  </p>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>0ms Offline CPU</span>
                  </span>

                  <button
                    onClick={() => handlePlayToggle(voice)}
                    className={`btn-press flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isPlaying
                        ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Playing Sample</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Sample</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVoices.length === 0 && (
          <div className="py-16 text-center text-zinc-500 text-sm">
            No voices match your search criteria.
          </div>
        )}

      </div>
    </section>
  );
};
