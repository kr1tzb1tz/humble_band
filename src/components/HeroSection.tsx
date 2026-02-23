"use client"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { SiSpotify, SiApplemusic } from "react-icons/si";

export default function HeroSection() {
  return (
    <ParallaxProvider>
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <ParallaxBanner
          layers={[
            { image: '/img/beach.webp', speed: -40 },
            {
              children: <div className="absolute inset-0 bg-black/50" />,
              speed: -10,
            },
          ]}
          className="min-h-screen"
        >
          <div className="relative z-20 min-h-screen w-full flex items-center justify-center px-6 sm:px-8 lg:px-8">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Album Art — desktop only */}
                <div className="hidden lg:flex justify-center order-2 lg:order-1">
                  <img
                    src="/img/album-1.webp"
                    alt="Humble Band EP"
                    className="w-[26rem] h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left order-1 lg:order-2 space-y-7">

                  {/* Eyebrow — mobile: small thumbnail + label inline */}
                  <div className="flex items-center justify-center lg:hidden gap-3">
                    <img
                      src="/img/album-1.webp"
                      alt="Humble Band EP"
                      className="w-20 h-20 rounded-lg shadow-lg border border-white/10 flex-shrink-0"
                    />
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-400 text-left">
                      New EP<br />Out Now
                    </p>
                  </div>

                  {/* Eyebrow — desktop only */}
                  <p className="hidden lg:block text-xs font-bold tracking-[0.3em] uppercase text-orange-400">
                    New EP Out Now
                  </p>

                  {/* Band Name */}
                  <div>
                    <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                      humble
                    </h1>
                    <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-r from-orange-400 to-[#4a8a05] bg-clip-text text-transparent leading-none tracking-tight">
                      band
                    </h1>
                    <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-[#346703] mt-5 mx-auto lg:mx-0" />
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xs mx-auto lg:mx-0">
                    Five songs recorded in two days with{' '}
                    <span className="text-orange-400 font-medium">Rick Witkowski of Crack the Sky</span>.
                    A soulful collection of Funky Roots Music.
                  </p>

                  {/* Streaming Links */}
                  <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                    <a
                      href="https://music.apple.com/us/artist/humble/1841926702"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen on Apple Music"
                      className="flex items-center gap-2.5 bg-white/10 hover:bg-[#FC3C44] border border-white/20 hover:border-[#FC3C44] text-white px-5 py-2.5 rounded-full transition-all duration-500 backdrop-blur-sm text-sm font-medium"
                    >
                      <SiApplemusic size={17} />
                      Apple Music
                    </a>
                    <a
                      href="https://open.spotify.com/artist/6auPJqPy7ul5AIJX8JxdN1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen on Spotify"
                      className="flex items-center gap-2.5 bg-white/10 hover:bg-[#1DB954] border border-white/20 hover:border-[#1DB954] text-white px-5 py-2.5 rounded-full transition-all duration-500 backdrop-blur-sm text-sm font-medium"
                    >
                      <SiSpotify size={17} />
                      Spotify
                    </a>
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
