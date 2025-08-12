'use client';

import { Music, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Humble Band Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                humble band
              </h3>
            </button>
            <p className="text-gray-400 max-w-sm">
              Experience the raw energy and soulful melodies that define our sound. 
              Join us on a musical journey that speaks to the heart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('upcoming-shows')} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Upcoming Shows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('the-key-is-3')} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Meet the Band
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61566321046928"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/humble_band_?utm_source=ig_web_button_share_sheet&igsh=MXVhaXMxcHhocGQ5dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Stay connected for the latest updates and behind-the-scenes content.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Humble Band. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}