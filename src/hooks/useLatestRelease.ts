import { useState, useEffect } from 'react';

export interface ReleaseInfo {
  version: string;
  versionTag: string;
  publishedAt: string;
  setupUrl: string;
  zipUrl: string;
  setupSizeMB: string;
  zipSizeMB: string;
  totalDownloads: number;
  releaseNotes: string;
  isLoading: boolean;
}

const DEFAULT_RELEASE: ReleaseInfo = {
  version: '1.9.7',
  versionTag: 'v1.9.7',
  publishedAt: 'Recently',
  setupUrl: 'https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Setup.exe',
  zipUrl: 'https://github.com/adesolabolu/tiktok-live-tts/releases/latest/download/TikTokLiveTTS-Windows.zip',
  setupSizeMB: '72 MB',
  zipSizeMB: '68 MB',
  totalDownloads: 0,
  releaseNotes: 'Offline Piper neural speech engine, TikTok Live Studio integration, audio playback queue, and zero-latency chat moderation.',
  isLoading: true,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let sharedRequest: Promise<any> | null = null;

export function useLatestRelease(): ReleaseInfo {
  const [release, setRelease] = useState<ReleaseInfo>(DEFAULT_RELEASE);

  useEffect(() => {
    let isMounted = true;

    async function fetchLatest() {
      try {
        // One shared request for every component that uses this hook.
        sharedRequest ??= fetch('https://api.github.com/repos/adesolabolu/tiktok-live-tts/releases/latest').then((r) =>
          r.ok ? r.json() : null,
        );
        const data = await sharedRequest;
        if (!data) {
          if (isMounted) setRelease((prev) => ({ ...prev, isLoading: false }));
          return;
        }
        if (!isMounted) return;

        const tag = data.tag_name || 'v1.9.7';
        const cleanVer = tag.replace(/^v/, '');
        
        // Find assets
        let setupSize = '72 MB';
        let zipSize = '68 MB';
        let setupUrl = DEFAULT_RELEASE.setupUrl;
        let zipUrl = DEFAULT_RELEASE.zipUrl;
        let downloads = 0;

        if (Array.isArray(data.assets)) {
          for (const asset of data.assets) {
            downloads += asset.download_count || 0;
            const sizeInMB = asset.size ? `${(asset.size / (1024 * 1024)).toFixed(1)} MB` : null;
            if (asset.name && asset.name.endsWith('.exe')) {
              setupUrl = asset.browser_download_url || setupUrl;
              if (sizeInMB) setupSize = sizeInMB;
            } else if (asset.name && asset.name.endsWith('.zip')) {
              zipUrl = asset.browser_download_url || zipUrl;
              if (sizeInMB) zipSize = sizeInMB;
            }
          }
        }

        // Format published date
        let pubDateStr = 'Recently';
        if (data.published_at) {
          const d = new Date(data.published_at);
          pubDateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }

        setRelease({
          version: cleanVer,
          versionTag: tag,
          publishedAt: pubDateStr,
          setupUrl,
          zipUrl,
          setupSizeMB: setupSize,
          zipSizeMB: zipSize,
          totalDownloads: downloads,
          releaseNotes: data.body || DEFAULT_RELEASE.releaseNotes,
          isLoading: false,
        });
      } catch {
        // Fallback to defaults on offline or rate limit
        if (isMounted) {
          setRelease(prev => ({ ...prev, isLoading: false }));
        }
      }
    }

    fetchLatest();

    return () => {
      isMounted = false;
    };
  }, []);

  return release;
}
