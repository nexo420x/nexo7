import React from 'react';

export const BG = '#111315';
export const TEXT_PRIMARY = '#e5e7eb';
export const TEXT_SECONDARY = '#9ca3af';
export const ACCENT = '#22c55e';
export const CARD_BG = '#16181c';
export const BORDER = 'rgba(255,255,255,0.06)';

export const mono: React.CSSProperties = {
  fontFamily: "'VT323', monospace",
  letterSpacing: '0.02em',
};

export const sans: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
};

export const GLOBAL_STYLES = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes pulseY {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50%       { opacity: 0.6; transform: scaleY(1.15); }
  }
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::selection { background: rgba(34,197,94,0.22); color: #e5e7eb; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #111315; }
  ::-webkit-scrollbar-thumb { background: #2a2d30; border-radius: 2px; }
`;
