import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(root, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run client build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');
const entryServerUrl = pathToFileURL(path.resolve(root, 'dist-ssr/entry-server.js')).href;
const { render } = await import(entryServerUrl);

const routes = [
  {
    path: '/',
    outPath: path.resolve(distDir, 'index.html'),
    title: 'TTS Live Studio · Free text-to-speech for live streamers',
    desc: 'Free Windows desktop app that reads your live stream chat aloud in natural offline voices. Built for TikTok Live Studio.',
  },
  {
    path: '/privacy',
    outPath: path.resolve(distDir, 'privacy/index.html'),
    title: 'Privacy Policy · TTS Live Studio',
    desc: 'Privacy policy for TTS Live Studio desktop application and website.',
  },
  {
    path: '/terms',
    outPath: path.resolve(distDir, 'terms/index.html'),
    title: 'Terms of Use · TTS Live Studio',
    desc: 'Terms of use for TTS Live Studio desktop application and website.',
  },
];

console.log('Static pre-rendering routes...');

for (const r of routes) {
  const appHtml = render(r.path);
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  if (r.title) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${r.title}</title>`);
  }
  if (r.desc) {
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${r.desc}" />`);
  }

  const dir = path.dirname(r.outPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(r.outPath, html, 'utf-8');
  console.log(`✓ Pre-rendered ${r.path} -> ${path.relative(distDir, r.outPath)} (${(html.length / 1024).toFixed(1)} kB)`);
}

// Clean up dist-ssr
const distSsrDir = path.resolve(root, 'dist-ssr');
if (fs.existsSync(distSsrDir)) {
  fs.rmSync(distSsrDir, { recursive: true, force: true });
}

console.log('Static pre-rendering complete!');
