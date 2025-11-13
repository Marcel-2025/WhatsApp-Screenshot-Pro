
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pb-12 pt-8 text-center text-xs text-[color-mix(in_oklab,var(--text),transparent_45%)]">
      <div className="mx-auto max-w-7xl px-4" style={{maxWidth: '1120px'}}>
        <p>© 2025 WhatsApp Screenshot Sorter Pro • <a href="#" className="underline hover:no-underline">Impressum</a> • <a href="#" className="underline hover:no-underline">Datenschutz</a></p>
        <p className="mt-2">Design & Code v1</p>
      </div>
    </footer>
  );
};

export default Footer;
