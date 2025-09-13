'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Humble Band Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              humble band
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('upcoming-shows')} 
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Upcoming Shows
            </button>
            <button 
              onClick={() => scrollToSection('the-key-is-3')} 
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Meet the Band
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 rounded-full"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pb-4 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300 cursor-pointer transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? '0.1s' : '0s' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('upcoming-shows')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300 cursor-pointer transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? '0.2s' : '0s' }}
            >
              Upcoming Shows
            </button>
            <button
              onClick={() => scrollToSection('the-key-is-3')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300 cursor-pointer transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}
            >
              Meet the Band
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}