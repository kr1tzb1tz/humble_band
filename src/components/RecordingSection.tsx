"use client"
import { Mic, Music, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function RecordingSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">


          {/* Main Content Card */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur-xl transition-all duration-500 ${
              isHovered ? 'opacity-80 scale-105' : 'opacity-40 scale-100'
            }`}></div>
            
            {/* Main Card */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center space-y-8">
                {/* Main Title */}
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Recording Complete!
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Main Message */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                    The energy was at an all-time high and the band really enjoyed itself. 
                    The tracks are getting mastered now and will soon be streaming!
                  </p>
                  
                  {/* Studio Details */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 pt-4">
                    <div className="flex items-center space-x-3 text-orange-400">
                      <Mic className="h-8 w-8" />
                      <span className="text-2xl md:text-3xl font-semibold">Studio L</span>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                    <div className="flex items-center space-x-3 text-purple-400">
                      <Sparkles className="h-8 w-8" />
                      <span className="text-2xl md:text-3xl font-semibold">Currently Mastering</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-6">
                  <p className="text-lg md:text-xl text-gray-300 font-medium">
                    Stay tuned for the release!
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
} 