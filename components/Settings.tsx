
import React from 'react';
import { Theme, Mode } from '../types';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose, theme, setTheme, mode, setMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" aria-hidden={!isOpen} data-open={isOpen}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-[var(--bg)] border-l border-black/10 dark:border-white/10 shadow-xl flex flex-col">
        <div className="p-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Einstellungen</h2>
          <button onClick={onClose} className="w-9 h-9 rounded-lg border bg-[var(--card)]" aria-label="Schließen">✕</button>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto">
          <section className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-4">
            <h3 className="font-semibold">Darstellung</h3>
            <div className="mt-3 grid grid-cols-1 gap-4">
              <label className="text-sm">Mode</label>
              <select 
                value={mode}
                onChange={(e) => setMode(e.target.value as Mode)}
                className="rounded-lg border border-black/10 dark:border-white/20 px-3 py-2 bg-[var(--card)]"
              >
                <option value="light">Hell</option>
                <option value="dark">Dunkel</option>
                <option value="auto">System</option>
              </select>
              <label className="text-sm mt-2">Style</label>
              <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value as Theme)}
                className="rounded-lg border border-black/10 dark:border-white/20 px-3 py-2 bg-[var(--card)]"
              >
                <option value="whatsapp">WhatsApp Grün</option>
                <option value="messenger">Messenger Blau</option>
                <option value="neutral">Neutral Graphit</option>
                <option value="sunset">Sunset (Orange/Teal)</option>
              </select>
            </div>
          </section>
          <section className="bg-[var(--card)] border border-black/10 dark:border-white/10 rounded-2xl p-4">
            <h3 className="font-semibold">App</h3>
            <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--text),transparent_40%)]">
              Deine Auswahl wird lokal im Browser gespeichert. Änderungen wirken sofort.
            </p>
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Settings;
