
import React from 'react';

const StepCard: React.FC<{step: number; title: string; children: React.ReactNode}> = ({ step, title, children }) => (
    <div className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-6">
        <div className="text-sm font-bold text-[var(--brand)]">{step}</div>
        <p className="mt-2 font-semibold">{title}</p>
        <p className="text-sm text-[color-mix(in_oklab,var(--text),transparent_35%)]">{children}</p>
    </div>
);


const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--subtle)]">
      <a id="how" className="relative top-[-90px] invisible"></a>
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <h2 className="text-3xl font-extrabold">So funktioniert's</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <StepCard step={1} title="Ordner wählen">Quell- & Zielordner auswählen (werden gemerkt).</StepCard>
          <StepCard step={2} title="Vorschau prüfen">Die App zeigt, wie sortiert wird – ohne Dateien zu bewegen.</StepCard>
          <StepCard step={3} title="Lizenz aktivieren & anwenden">Mit Lizenz werden die Änderungen übernommen und Ordner erstellt.</StepCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
