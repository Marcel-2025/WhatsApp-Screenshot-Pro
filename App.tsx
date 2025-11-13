
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { Theme, Mode } from './types';

const App: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('whatsapp');
  const [mode, setMode] = useState<Mode>('light');

  const applyTheme = useCallback(() => {
    const root = document.documentElement;
    const isDarkMode =
      mode === 'dark' ||
      (mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.toggle('dark', isDarkMode);
    root.dataset.theme = theme;

    const brandColors: Record<Theme, { brand: string; accent: string }> = {
        whatsapp: { brand: '#1A7F37', accent: '#06b6d4' },
        messenger: { brand: '#1877F2', accent: '#22c55e' },
        neutral: { brand: '#111827', accent: '#2563eb' },
        sunset: { brand: '#F97316', accent: '#10B981' },
    };

    const currentBrand = brandColors[theme].brand;
    
    root.style.setProperty('--brand', currentBrand);
    root.style.setProperty('--accent', brandColors[theme].accent);
    root.style.setProperty('--text', isDarkMode ? '#e5e7eb' : '#0b1220');
    root.style.setProperty('--bg', isDarkMode ? '#0d1117' : '#ffffff');
    root.style.setProperty('--subtle', isDarkMode ? '#0f1322' : '#f6f8fa');
    root.style.setProperty('--card', isDarkMode ? '#0f1322' : '#ffffff');
    root.style.setProperty('--ring', isDarkMode ? 'rgba(255,255,255,.12)' : `rgba(26,127,55,.2)`);


    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentBrand);
    }
  }, [mode, theme]);

  useEffect(() => {
    const savedPrefs = localStorage.getItem('wss:pref');
    if (savedPrefs) {
      const { mode: savedMode, style: savedTheme } = JSON.parse(savedPrefs);
      setMode(savedMode || 'light');
      setTheme(savedTheme || 'whatsapp');
    }
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
        if (mode === 'auto') {
            applyTheme();
        }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode, applyTheme]);

  useEffect(() => {
    applyTheme();
    localStorage.setItem('wss:pref', JSON.stringify({ mode, style: theme }));
  }, [mode, theme, applyTheme]);

  return (
    <>
      <Header onSettingsClick={() => setSettingsOpen(true)} />
      <Settings
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        mode={mode}
        setMode={setMode}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default App;
