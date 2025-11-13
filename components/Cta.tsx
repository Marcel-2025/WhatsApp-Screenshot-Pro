
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <div className="rounded-3xl p-1" style={{background: 'linear-gradient(135deg, color-mix(in oklab,var(--brand),transparent 20%), color-mix(in oklab,var(--accent),transparent 25%))'}}>
          <div className="rounded-[22px] bg-[var(--bg)] p-8 md:p-12 text-center">
            <h3 className="text-3xl font-extrabold">Ordner-Chaos in Ordnung verwandeln.</h3>
            <p className="mt-2 text-[color-mix(in_oklab,var(--text),transparent_35%)]">Teste die Vorschau gratis – schalte das Anwenden mit Lizenz frei.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href="#download" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold bg-[var(--brand)] text-white shadow-lg shadow-[var(--ring)]">Download</a>
              <a target="_blank" rel="noopener noreferrer" href="https://screenshot-sorter-pro.lemonsqueezy.com/checkout" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold border border-[color-mix(in_oklab,var(--brand),transparent_70%)] text-[var(--brand)]">Lizenz kaufen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
