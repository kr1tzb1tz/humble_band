'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

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
            <Image
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:text-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('upcoming-shows')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
              >
                Upcoming Shows
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}