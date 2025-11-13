
import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl">
      <button className="w-full text-left p-4 font-semibold" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <div className="px-4 pb-4 text-[color-mix(in_oklab,var(--text),transparent_35%)]">{children}</div>}
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--subtle)]">
      <a id="faq" className="relative top-[-90px] invisible"></a>
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <h2 className="text-3xl font-extrabold">FAQ</h2>
        <div className="mt-6 space-y-3">
          <FaqItem question="Wie genau erkennt die App WhatsApp & Messenger?">Über einen konfigurierbaren Bildausschnitt oben (App-Leiste) und Farbbereiche (WhatsApp grün / Messenger blau) plus Auflösung & Ausrichtung.</FaqItem>
          <FaqItem question="Werden meine Bilder hochgeladen?">Nein. Alles läuft lokal auf deinem PC. Es gibt keine Cloud-Uploads.</FaqItem>
          <FaqItem question="Kann ich erst ausprobieren?">Ja. Die Vorschau ist gratis. Das Anwenden (Verschieben/Kopieren) wird mit Lizenz freigeschaltet.</FaqItem>
          <FaqItem question="Welche Systeme werden unterstützt?">Windows 10 oder neuer. Eine Mac-Version ist geplant.</FaqItem>
        </div>
      </div>
    </section>
  );
};

export default Faq;
