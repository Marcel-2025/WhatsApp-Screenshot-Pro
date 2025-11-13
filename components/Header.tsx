
import React from 'react';

interface HeaderProps {
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4" style={{maxWidth: '1120px'}}>
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--brand)] text-white font-black ring-soft" style={{boxShadow: '0 0 0 6px var(--ring)'}}>W</span>
          <span className="font-semibold hidden sm:inline">WhatsApp Screenshot Sorter <span className="text-[var(--brand)]">Pro</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[color-mix(in_oklab,var(--text),transparent_35%)]">
          <a href="#features" className="hover:text-[var(--text)]">Funktionen</a>
          <a href="#how" className="hover:text-[var(--text)]">So funktioniert's</a>
          <a href="#pricing" className="hover:text-[var(--text)]">Preis</a>
          <a href="#faq" className="hover:text-[var(--text)]">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#download" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold bg-[var(--brand)] text-white shadow-lg shadow-[var(--ring)] hidden sm:inline-flex">Download</a>
          <button onClick={onSettingsClick} className="inline-flex items-center justify-center w-10 h-10 rounded-xl border bg-[var(--card)] hover:shadow ring-offset-1" aria-label="Einstellungen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
              <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1.5.9l-.04.08a2 2 0 0 1-3.92 0l-.04-.08a1.7 1.7 0 0 0-1.5-.9 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.9-1.5l-.08-.04a2 2 0 0 1 0-3.92l.08-.04c.5-.26.86-.74.9-1.5a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.5.5 1.2.64 1.87.34.76-.34 1.24-.8 1.5-.9l.04-.02a2 2 0 0 1 3.92 0l.04.02c.26.1.74.56 1.5.9.67.3 1.37.16 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.5.5-.64 1.2-.34 1.87.34.76.8 1.24.9 1.5l.02.04a2 2 0 0 1 0 3.92l-.02.04c-.1.26-.56.74-.9 1.5Z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
