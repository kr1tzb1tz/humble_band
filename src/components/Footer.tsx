'use client';

import { Instagram, Facebook } from 'lucide-react';
import { SiSpotify, SiApplemusic } from "react-icons/si";

const navLinks = [
  { label: "Home", section: "hero" },
  { label: "Listen", section: "sample" },
  { label: "Upcoming Shows", section: "upcoming-shows" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566321046928",
    icon: Facebook,
    hoverColor: "hover:text-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/humble_band_?utm_source=ig_web_button_share_sheet&igsh=MXVhaXMxcHhocGQ5dQ==",
    icon: Instagram,
    hoverColor: "hover:text-[#E4405F]",
  },
];

const streamingLinks = [
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/humble/1841926702",
    Icon: SiApplemusic,
    hoverColor: "hover:text-[#FC3C44]",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/6auPJqPy7ul5AIJX8JxdN1",
    Icon: SiSpotify,
    hoverColor: "hover:text-[#1DB954]",
  },
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Top gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-[#346703] via-[#4a8a05] to-orange-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-4xl mx-auto items-start">

          {/* Navigation */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="flex flex-col items-center text-center space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/img/humble-glitch.webp"
                alt="Humble Band"
                className="w-50 h-28"
              />
            </button>
          </div>

          {/* Social & Streaming */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">
              Follow &amp; Listen
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-400 ${hoverColor} transition-colors duration-200`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              {streamingLinks.map(({ label, href, Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-400 ${hoverColor} transition-colors duration-200`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Stay connected for show updates,<br />new music, and more.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-1">
          <p className="text-orange-400 text-xs tracking-widest uppercase">
            Funky Roots Music
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Humble Band. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
