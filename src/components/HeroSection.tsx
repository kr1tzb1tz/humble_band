"use client"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { SiSpotify, SiApplemusic } from "react-icons/si";

export default function HeroSection() {
  return (
    <ParallaxProvider>
      <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
        <ParallaxBanner
          layers={[
            { image: '/img/sal-album-2.webp', speed: -20 },
            {
              children: <div className="absolute inset-0 bg-black/65" />,
              speed: -10,
            },
          ]}
          className="min-h-screen"
        >
          <div className="hero-overlay absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-8">

            {/* ── Desktop layout ── */}
            <div className="hidden lg:flex items-center justify-center gap-16 xl:gap-24 w-full max-w-6xl">

              {/* Album Art */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/img/sal-album-1.webp"
                  alt="Humble Band - Greetings from Sal Paradise EP"
                  className="w-[30rem] h-[30rem] xl:w-[34rem] xl:h-[34rem] rounded-2xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col items-center text-center space-y-7">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-400">
                  New EP Out Now
                </p>
                <img
                  src="/img/colored-logo.webp"
                  alt="Humble Band"
                  className="w-64 rounded-full"
                />
                <p className="self-start text-left text-lg text-white/75 leading-relaxed max-w-xs">
                  Five songs recorded in two days with{' '}
                  <span className="text-orange-400 font-medium">Rick Witkowski of Crack the Sky</span>.
                  A soulful collection of Funky Roots Music.
                </p>
                <div className="flex items-center justify-center gap-3">
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

            {/* ── Mobile layout ── */}
            <div className="lg:hidden flex flex-col items-center text-center space-y-6 w-full">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/img/sal-album-1.webp"
                  alt="Humble Band - Greetings from Sal Paradise EP"
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl shadow-2xl border border-white/10"
                />
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-400">
                  New EP · Out Now
                </p>
              </div>
              <img
                src="/img/colored-logo.webp"
                alt="Humble Band"
                className="w-44 sm:w-52 rounded-full"
              />
              <p className="text-base text-white/75 leading-relaxed max-w-xs">
                Five songs recorded in two days with{' '}
                <span className="text-orange-400 font-medium">Rick Witkowski of Crack the Sky</span>.
                A soulful collection of Funky Roots Music.
              </p>
              <div className="flex items-center justify-center gap-3">
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
        </ParallaxBanner>
      </section>
    </ParallaxProvider>
  );
}
