'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#calendar', label: 'Calendar' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#team', label: 'Team' },
  { href: '#join', label: 'Join' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-charcoal/96 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Placeholder logo circle */}
          <div className="w-8 h-8 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center shrink-0">
            <span className="font-condensed font-black text-cream text-xs leading-none">U</span>
          </div>
          <span className="font-condensed font-bold text-cream text-lg tracking-widest uppercase">
            Utsav
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center w-8 h-8 gap-[5px] shrink-0"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-full bg-cream transition-all duration-200 origin-center"
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block h-0.5 w-full bg-cream transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-full bg-cream transition-all duration-200 origin-center"
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-t border-cream/10' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-condensed font-bold text-cream/80 hover:text-cream text-3xl tracking-wide py-2 border-b border-cream/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
