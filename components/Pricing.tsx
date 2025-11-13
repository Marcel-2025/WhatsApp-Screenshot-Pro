import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20">
      <a id="pricing" className="relative top-[-90px] invisible"></a>
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <h2 className="text-3xl font-extrabold">Preis</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Vorschau ist kostenfrei. Für das Anwenden der Änderungen ist eine Lizenz erforderlich.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Kostenlos</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color-mix(in_oklab,var(--text),transparent_40%)]">
              <li>✓ Vorschau & Erkennung (WhatsApp & Messenger)</li>
              <li>✓ Listen- & Galerieansicht</li>
              <li>✓ Pfad-Speicher</li>
              <li>— Anwenden deaktiviert</li>
            </ul>
          </div>
          <div className="relative bg-[var(--card)] border-[2px] rounded-2xl p-6" style={{borderColor: "color-mix(in oklab,var(--brand), transparent 30%)"}}>
            <div className="absolute -top-3 right-6 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[color-mix(in_oklab,var(--brand),white_85%)] dark:bg-[color-mix(in_oklab,var(--brand),black_80%)] text-[color-mix(in_oklab,var(--brand),black_35%)] dark:text-white">Empfohlen</div>
            <h3 className="font-semibold">Pro Lizenz</h3>
            <p className="mt-1 text-4xl font-extrabold"><span className="text-[var(--brand)]">€9.99</span><span className="text-base font-semibold text-[color-mix(in_oklab,var(--text),transparent_45%)]">/einmalig</span></p>
            <ul className="mt-3 space-y-2 text-sm text-[color-mix(in_oklab,var(--text),transparent_35%)]">
              <li>✓ Änderungen anwenden (Verschieben/Kopieren)</li>
              <li>✓ Schnell & offline • Support inklusive</li>
              <li>✓ Alle zukünftigen v1-Features</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://screenshot-sorter-pro.lemonsqueezy.com/checkout" className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold bg-[var(--brand)] text-white shadow-lg shadow-[var(--ring)]">Lizenz kaufen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;