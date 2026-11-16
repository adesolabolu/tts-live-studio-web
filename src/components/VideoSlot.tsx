import React, { useState } from 'react';
import { Play, Video } from 'lucide-react';

export const VideoSlot: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-black border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>STREAMER WALKTHROUGH & DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            See It in Action on Live Stream.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Watch the full walkthrough covering Windows setup, TikTok Live Studio audio capture, and chat filter tuning.
          </p>
        </div>

        {/* 16:9 Cinematic Video Container */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-white/[0.12] overflow-hidden shadow-[0_20px_70px_-20px_rgba(0,0,0,1)] group">
          
          {isPlaying ? (
            <div className="w-full h-full flex items-center justify-center bg-black text-zinc-400">
              {/* Replace with YouTube/Cloudflare iframe when video is uploaded */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="TikTok Live TTS Studio Guide Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-studio-grid">
              
              {/* Ambient Center Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />
              <div className="absolute w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Poster Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="btn-press w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all mb-5 group/btn"
                  aria-label="Play Walkthrough Video"
                >
                  <Play className="w-8 h-8 fill-black translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                </button>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  TikTok Live TTS Studio Official Walkthrough
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-black/60 border border-white/10 backdrop-blur-md">
                  <span>Configuration & Live Studio Setup Guide</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-cyan-400">Ready to Stream</span>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>0ms Local Offline Speech</span>
                <span>TikTok Live Studio Compatible</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
