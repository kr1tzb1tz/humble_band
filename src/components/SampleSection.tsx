"use client"
import { Button } from '@/components/ui/button';
import { Play, Music2, Palmtree } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function SampleSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showTrackInfo, setShowTrackInfo] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLogoClick = async () => {
    if (audioRef.current) {
      try {
        if (isAudioPlaying) {
          audioRef.current.pause();
          setIsAudioPlaying(false);
          setShowTrackInfo(false);
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsAudioPlaying(true);
          setShowTrackInfo(true);
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Audio playback error:', error);
      }
    }
  };

  const handleDropNeedle = async () => {
    if (audioRef.current) {
      try {
        if (isAudioPlaying) {
          audioRef.current.pause();
          setIsAudioPlaying(false);
          setShowTrackInfo(false);
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsAudioPlaying(true);
          setShowTrackInfo(true);
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Audio playback error:', error);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
    setShowTrackInfo(false);
    setIsPlaying(false);
  };

  useEffect(() => {
    // Ensure audio element is properly loaded
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  return (
    <section id="sample" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/the-band.jpg"
          alt="Humble Band"
          className="w-full h-full object-cover hero-bg-image"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/55"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-orange-900/30"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-2000">
          {/* Band Logo - Vinyl Record Style */}
          <div className="flex justify-center">
            <div 
              className="relative group cursor-pointer"
              onClick={handleLogoClick}
            >
              {/* Vinyl Record Base */}
              <div className={`h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full bg-black border-4 md:border-6 border-gray-800 shadow-2xl ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`} style={{
                filter: isPlaying ? 'drop-shadow(0 0 20px #346703) drop-shadow(0 0 40px #346703)' : 'drop-shadow(0 0 10px #346703)'
              }}></div>
              
              {/* Record Grooves */}
              <div className={`absolute inset-2 md:inset-3 h-44 w-44 md:h-58 md:w-58 lg:h-74 lg:w-74 rounded-full border border-gray-600 opacity-60 ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`}></div>
              <div className={`absolute inset-4 md:inset-6 h-40 w-40 md:h-52 md:w-52 lg:h-68 lg:w-68 rounded-full border border-gray-600 opacity-40 ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`}></div>
              <div className={`absolute inset-6 md:inset-9 h-36 w-36 md:h-46 md:w-46 lg:h-62 lg:w-62 rounded-full border border-gray-600 opacity-30 ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`}></div>
              
              {/* Center Label */}
              <div className={`absolute inset-1/4 h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full bg-white border-2 border-gray-300 shadow-inner ${
                isPlaying ? 'animate-spin-continuous' : ''
              }`}>
                <img
                  src="/colored-logo.png"
                  alt="Humble Band Logo"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* Record Player Arm */}
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
            </div>
          </div>

          {/* Text Section */}
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
            showTrackInfo ? 'opacity-100 max-h-96 mb-8' : 'opacity-0 max-h-0 mb-0'
          }`}>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-center">
                Preview of <span className="font-bold text-orange-500">"Ghostride"</span> from our new EP.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-center">
                Streaming everywhere <span className="font-bold text-orange-500">October 3</span>
              </p>
            </div>
          </div>

          {/* Button Section */}
          <div className={`flex justify-center transition-all duration-700 ease-in-out ${
            showTrackInfo ? 'transform translate-y-0' : 'transform translate-y-0'
          }`}>
            <Button
              onClick={handleDropNeedle}
              className="bg-gradient-to-r from-orange-500 to-[#346703] hover:from-orange-600 hover:to-[#2a5502] text-white py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Palmtree className="mr-3 h-6 w-6" />
              {isAudioPlaying ? 'Stop' : 'Drop the needle'}
            </Button>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        onEnded={handleAudioEnded}
        onError={(e) => console.error('Audio error:', e)}
        preload="metadata"
        controls={false}
      >
        <source src="/Ghostride_mix_2_L_MASTERED.wav" type="audio/wav" />
        {/* OLD AUDIO SOURCE - COMMENTED OUT
        <source src="/BrownstonesLive.m4a" type="audio/mp4" />
        */}
        Your browser does not support the audio element.
      </audio>

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

