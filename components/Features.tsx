import React from 'react';

const FeatureCard: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-6">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--text),transparent_35%)]">{children}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20">
      <a id="features" className="relative top-[-90px] invisible"></a>
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <h2 className="text-3xl font-extrabold">Funktionen</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Fokus auf WhatsApp & Facebook Messenger – präzise Erkennung über Farbleiste oben (grün/blau) + Auflösung & Ausrichtung.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Vorschau & Liste">Wechsle zwischen Galerie-Vorschau und schneller Tabellenliste.</FeatureCard>
          <FeatureCard title="KI-basierte Erkennung">WhatsApp (Grün) & Facebook (Blau) werden über die App-Leiste erkannt.</FeatureCard>
          <FeatureCard title="Nur App-Leiste prüfen">Optional: ausschließlich die „fette“ App-Leiste auswerten – maximale Präzision.</FeatureCard>
          <FeatureCard title="Pfad-Speicher">Quell- & Zielordner bleiben beim nächsten Start erhalten.</FeatureCard>
          <FeatureCard title="Offline & schnell">Alle Dateien bleiben lokal. Keine Uploads. Tausende Bilder in Minuten.</FeatureCard>
          <FeatureCard title="Lizenz in-App">„Lizenz prüfen“ meldet dich an und schaltet „Änderungen anwenden“ frei (grüner Haken).</FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;