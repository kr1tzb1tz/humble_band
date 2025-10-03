"use client"
import { Star } from 'lucide-react';
import { useState } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function AlbumSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ParallaxProvider>
        <section className="relative min-h-screen overflow-hidden">
          <ParallaxBanner
            layers={[
              {
                image: '/beach.jpg',
                speed: -40,
              },
              {
                children: (
                  <div className="absolute inset-0 bg-black/20"></div>
                ),
                speed: -10,
              },
            ]}
            className="min-h-screen"
          >
            {/* Content Container - Perfectly Centered */}
            <div className="relative z-20 min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left Side - Album Art - Desktop Only */}
              <div className="hidden lg:flex justify-center lg:justify-start order-2 lg:order-1">
                <div 
                  className="relative group/album"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full blur-2xl transition-all duration-700 ${
                    isHovered ? 'opacity-60 scale-110' : 'opacity-30 scale-100'
                  }`}></div>
                  
                  {/* Album Art */}
                  <div className="relative">
                      <img
                        src="/album-1.jpg"
                        alt="Humble Band Album"
                        className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-3xl shadow-2xl transform group-hover/album:scale-105 transition-all duration-500"
                      />
                    
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-center lg:text-left order-1 lg:order-2 space-y-6 lg:space-y-8">
                {/* Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight drop-shadow-2xl">
                    New Release!
                  </h1>
                  
                  <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-[#346703] rounded-full shadow-lg mx-auto lg:mx-0"></div>
                </div>

                {/* Album Art - Mobile Only */}
                <div className="flex justify-center lg:hidden">
                  <div 
                    className="relative group/album"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full blur-2xl transition-all duration-700 ${
                      isHovered ? 'opacity-60 scale-110' : 'opacity-30 scale-100'
                    }`}></div>
                    
                    {/* Album Art */}
                    <div className="relative">
                      <img
                        src="/album-1.jpg"
                        alt="Humble Band Album"
                        className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl shadow-2xl transform group-hover/album:scale-105 transition-all duration-500"
                      />
                      
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed drop-shadow-xl font-light">
                      Our new e.p. - five songs recorded in two days, August 15-16, with 
                      <span className="font-semibold text-orange-500"> Rick Witkowski of Crack the Sky</span> at the helm.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed drop-shadow-xl font-light">
                      It's a soulful collection of tunes that we hope you enjoy! The new e.p. is streaming on all platforms 
                      <span className="font-bold text-orange-500">October 3</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ParallaxBanner>
      </section>
    </ParallaxProvider>
  );
}