"use client"
import { Button } from '@/components/ui/button';
import { Play, Music2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLogoClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/van.jpg"
          alt="Humble Band Van"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/55"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-orange-900/30"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-2000">
          {/* Band Logo - Enhanced Center of Attention */}
          <div className="flex justify-center">
            <div 
              className="relative group cursor-pointer"
              onClick={handleLogoClick}
            >
              {/* Main Logo */}
              <Image
                src="/logo.png"
                alt="Humble Band Logo"
                width={500}
                height={500}
                className={`h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain drop-shadow-2xl animate-pulse group-hover:scale-105 transition-all duration-300 ${
                  isPlaying ? 'animate-spin-continuous' : ''
                }`}
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(249, 115, 22, 0.9)) drop-shadow(0 0 80px rgba(239, 68, 68, 0.6)) brightness(1.2) contrast(1.3)',
                }}
              />
              
              {/* Multiple Glow Layers */}
              <div className={`absolute inset-0 h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse ${
                isPlaying ? 'animate-spin-continuous-reverse' : ''
              }`}></div>
              <div className={`absolute inset-0 h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full blur-xl opacity-20 animate-pulse ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`} style={{ animationDelay: '0.5s' }}></div>

              {/* Record Player Arm - Fixed */}
              <div className={`absolute top-0 right-0 w-20 h-1 md:w-32 md:h-1.5 bg-gray-400 rounded-full transform origin-left transition-all duration-1000 ${
                isPlaying ? 'rotate-45 translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8 opacity-100' : 'rotate-0 translate-x-0 translate-y-0 opacity-0'
              }`}>
                {/* Needle with connected tip */}
                <div className={`absolute right-0 top-0 w-1 h-6 md:h-8 bg-gray-600 rounded-full transition-all duration-1000 ${
                  isPlaying ? 'translate-y-6 md:translate-y-8' : 'translate-y-0'
                }`}>
                  <div className="absolute bottom-0 w-2 h-1 md:w-2.5 md:h-1 bg-gray-800 rounded-full transform -translate-x-0.5"></div>
                </div>
              </div>

              {/* Vinyl Record Effect */}
              <div className={`absolute inset-0 h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full border-2 md:border-4 border-gray-800 opacity-20 ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`}></div>
            </div>
          </div>

          {/* Main Title - Commented Out */}
          {/* <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              HUMBLE
            </span>
            <br />
            <span className="text-white">BAND</span>
          </h1> */}

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Experience the raw energy and soulful melodies that define our sound. 
            Join us on a musical journey that speaks to the heart.
          </p>


        </div>
      </div>

      {/* Floating Particles Throughout Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Particle 1 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/60 rounded-full animate-float-slow"></div>
        {/* Particle 2 */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400/50 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
        {/* Particle 3 */}
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
        {/* Particle 4 */}
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300/50 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        {/* Particle 5 */}
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-300/40 rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
        {/* Particle 6 */}
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-pink-300/50 rounded-full animate-float-slow" style={{ animationDelay: '5s' }}></div>
        {/* Particle 7 */}
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-orange-500/40 rounded-full animate-float-slow" style={{ animationDelay: '2.5s' }}></div>
        {/* Particle 8 */}
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-red-500/50 rounded-full animate-float-slow" style={{ animationDelay: '3.5s' }}></div>
      </div>
    </section>
  );
}