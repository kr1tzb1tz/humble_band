'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'Listen', section: 'sample' },
  { label: 'Upcoming Shows', section: 'upcoming-shows' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="/img/logo.webp"
              alt="Humble Band Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-[#4a8a05] bg-clip-text text-transparent">
              humble band
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-sm text-white/75 hover:text-white transition-colors duration-200 cursor-pointer tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-md border-t border-b border-white/20 ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className="text-left py-2.5 px-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
