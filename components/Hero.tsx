
import React from 'react';
import FileProcessor from './FileProcessor';

const Hero: React.FC = () => {
  const heroGradStyle: React.CSSProperties = {
      background: 'radial-gradient(800px 400px at 10% -10%, color-mix(in oklab, var(--brand), transparent 70%), transparent 60%), radial-gradient(800px 400px at 90% 0%, color-mix(in oklab, var(--accent), transparent 75%), transparent 60%)'
  };

  return (
    <section style={heroGradStyle}>
      <a id="top" className="relative top-[-90px] invisible"></a>
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center" style={{maxWidth: '1120px'}}>
        <div>
          <span className="border border-black/10 dark:border-white/20 rounded-full px-2.5 py-1 text-xs text-[color-mix(in_oklab,var(--text),transparent_30%)]">100% lokal • Windows 10+ • Keine Cloud</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Sortiert WhatsApp- & Messenger-Screenshots <span className="text-[var(--brand)]">automatisch.</span>
          </h1>
          <p className="mt-4 max-w-prose text-[color-mix(in_oklab,var(--text),transparent_30%)]">
            Schluss mit <em>IMG-2023-WA…</em>. Die App erkennt WhatsApp & Facebook Messenger anhand der Farbleiste (grün/blau),
            unterscheidet Portrait/Landscape und baut eine saubere Ordnerstruktur. Vorschau gratis – Anwenden mit Lizenz.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a id="download" href="#download" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold bg-[var(--brand)] text-white shadow-lg shadow-[var(--ring)]">Für Windows herunterladen</a>
            <a target="_blank" href="https://screenshot-sorter-pro.lemonsqueezy.com/checkout" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold border border-[color-mix(in_oklab,var(--brand),transparent_70%)] text-[var(--brand)]">Lizenz kaufen</a>
            <span className="text-xs text-[color-mix(in_oklab,var(--text),transparent_40%)]">Vorschau gratis • Lizenz nötig zum Anwenden</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl" style={{background:'linear-gradient(140deg, color-mix(in oklab,var(--brand),transparent 50%), color-mix(in oklab,var(--accent),transparent 55%))', filter:'blur(24px)', opacity:.6}}></div>
          <div className="relative bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-2">
            <FileProcessor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
