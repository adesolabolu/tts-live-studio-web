export interface Voice {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  category: 'gaming' | 'deep' | 'chill' | 'warm' | 'accents';
  categoryLabel: string;
  badgeColor: string;
  desc: string;
  sampleUrl: string;
}

export const VOICES: Voice[] = [
  {
    id: "nova",
    name: "Nova",
    subtitle: "High-Energy Anime Female",
    badge: "Anime / Hype",
    category: "gaming",
    categoryLabel: "Gaming & Hype",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    desc: "Expressive, cheerful, and fast-paced. Perfect for hype gaming and interactive chat reactions.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/amy/medium/speaker_0.mp3"
  },
  {
    id: "kael",
    name: "Kael",
    subtitle: "Deep FM Radio Announcer",
    badge: "Deep / Radio",
    category: "deep",
    categoryLabel: "Deep & Radio",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    desc: "Resonant, bass-heavy broadcast DJ voice. Ideal for chill late-night talk streams and podcasting.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/bryce/medium/speaker_0.mp3"
  },
  {
    id: "arthur",
    name: "Arthur",
    subtitle: "Distinguished British Butler",
    badge: "British / Formal",
    category: "accents",
    categoryLabel: "Accents & Character",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    desc: "Polite, crisp UK English with formal tone. Reads chat comments with butler-like elegance.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_GB/alan/medium/speaker_0.mp3"
  },
  {
    id: "viper",
    name: "Viper",
    subtitle: "Esports Shoutcaster",
    badge: "Gaming / FPS",
    category: "gaming",
    categoryLabel: "Gaming & Hype",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    desc: "Fast, hype tournament commentator style. Built for high-kill FPS and battle royale streams.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/ryan/medium/speaker_0.mp3"
  },
  {
    id: "luna",
    name: "Luna",
    subtitle: "Calm & Cozy Storyteller",
    badge: "Cozy / ASMR",
    category: "chill",
    categoryLabel: "Story & Cozy",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    desc: "Soft, gentle, relaxing voice. Ideal for art streams, cozy farming games, and quiet evening streams.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/kathleen/medium/speaker_0.mp3"
  },
  {
    id: "thor",
    name: "Thor",
    subtitle: "Nordic Warrior / Northern Male",
    badge: "Fantasy / Epic",
    category: "accents",
    categoryLabel: "Accents & Character",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    desc: "Thunderous, roaring, epic character. Turns simple chat messages into battle declarations.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_GB/northern_english_male/medium/speaker_0.mp3"
  },
  {
    id: "danny",
    name: "Danny",
    subtitle: "Gamer / Teen Hype",
    badge: "US / Teen Hype",
    category: "gaming",
    categoryLabel: "Gaming & Hype",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    desc: "Youthful, energetic US English voice. Awesome for gaming banter, fast-paced stream hype, and jokes.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/danny/low/speaker_0.mp3"
  },
  {
    id: "lessac",
    name: "Lessac",
    subtitle: "Studio Narrator / Pro Audiobook",
    badge: "US / Studio Clear",
    category: "chill",
    categoryLabel: "Story & Cozy",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    desc: "Pristine, neutral, studio-grade narration voice. Flawlessly clear pronunciation for reading questions and donor tips.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/lessac/medium/speaker_0.mp3"
  },
  {
    id: "joe",
    name: "Joe",
    subtitle: "Chill Streamer / Casual Male",
    badge: "US / Casual Chill",
    category: "chill",
    categoryLabel: "Story & Cozy",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    desc: "Laid-back, conversational everyday guy. Feels like a stream co-host chatting on Discord.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/joe/medium/speaker_0.mp3"
  },
  {
    id: "kristin",
    name: "Kristin",
    subtitle: "Warm & Cheerful Female",
    badge: "US / Warm & Friendly",
    category: "warm",
    categoryLabel: "Warm & Friendly",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    desc: "Friendly, inviting, and upbeat female voice. Great for welcome greetings and donor thank-yous.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/kristin/medium/speaker_0.mp3"
  },
  {
    id: "mike",
    name: "Mike",
    subtitle: "Deep Baritone / Esports Caster",
    badge: "US / Deep Caster",
    category: "deep",
    categoryLabel: "Deep & Radio",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    desc: "Deep, authoritative, cinematic male baritone. Gives substantial punch and weight to stream commentary.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_US/mike/medium/speaker_0.mp3"
  },
  {
    id: "alba",
    name: "Alba",
    subtitle: "Scottish Storyteller Female",
    badge: "Scottish / Character",
    category: "accents",
    categoryLabel: "Accents & Character",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    desc: "Distinctive Scottish accent with lyrical warmth and charm. Captivating character voice for roleplay and storytelling.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_GB/alba/medium/speaker_0.mp3"
  },
  {
    id: "cori",
    name: "Cori",
    subtitle: "British Queen's English Female",
    badge: "UK / Royal Eloquent",
    category: "accents",
    categoryLabel: "Accents & Character",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    desc: "Refined, articulate British English accent with royal cadence. Perfect for dramatic flair and regal presence.",
    sampleUrl: "https://rhasspy.github.io/piper-samples/samples/en/en_GB/cori/medium/speaker_0.mp3"
  }
];
