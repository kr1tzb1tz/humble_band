"use client"
import { Calendar, Sparkles, Star } from 'lucide-react';
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
                <div className="absolute inset-0 bg-black/50"></div>
              ),
              speed: -10,
            },
          ]}
          className="h-screen"
        >
          {/* Content Container - Perfectly Centered */}
          <div className="relative z-20 h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
                  <div className={`absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur-2xl transition-all duration-700 ${
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
                    Album
                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                      Release!
                    </span>
                  </h1>
                  
                  <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full shadow-lg mx-auto lg:mx-0"></div>
                </div>

                {/* Album Art - Mobile Only */}
                <div className="flex justify-center lg:hidden">
                  <div 
                    className="relative group/album"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur-2xl transition-all duration-700 ${
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
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed drop-shadow-xl font-light">
                    Our debut album is ready and will be streaming everywhere on 
                    <span className="font-bold text-yellow-300"> October 3rd, 2025!</span>
                  </p>
                  
                  {/* Info Cards */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="flex items-center space-x-3 text-white bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-xl border border-white/30 w-full sm:w-auto">
                      <Calendar className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                      <div className="text-center sm:text-left">
                        <div className="text-sm font-medium text-yellow-200 uppercase tracking-wider">Release Date</div>
                        <div className="text-xl font-bold">October 3</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-white bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-xl border border-white/30 w-full sm:w-auto">
                      <Sparkles className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                      <div className="text-center sm:text-left">
                        <div className="text-sm font-medium text-cyan-200 uppercase tracking-wider">Mastered By</div>
                        <div className="text-xl font-bold">Studio L</div>
                      </div>
                    </div>
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