"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/img/band-1.webp", alt: "Humble Band" },
  { src: "/img/band-2.webp", alt: "Humble Band" },
  { src: "/img/band-3.webp", alt: "Humble Band" },
  { src: "/img/band-4.webp", alt: "Humble Band" },
];

export default function MeetTheBand() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="meet-the-band" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#346703] via-[#4a8a05] to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight pb-2">
            Meet the Band
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#346703] to-orange-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

          {/* Slideshow */}
          <div
            className="w-full lg:w-1/2 flex-shrink-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-950">
              {images.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-orange-500"
                        : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              Humble is a brand new trio playing funky roots music with songs that run deep like the rivers flowing through the band&apos;s native West Virginia.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Drummer <span className="text-orange-400 font-semibold">Brian Gorby</span> and guitarist <span className="text-orange-400 font-semibold">Matt Heusel</span> met as members of Humble Sacrifice before forming the Trainjumpers with bassist <span className="text-orange-400 font-semibold">Scotty Harkness</span> before the idea of a trio was born. Gorby also spent time adding potent rhythms to the Hackensaw Boys before joining Cabinet.
            </p>
            <blockquote className="border-l-4 border-[#4a8a05] pl-5">
              <p className="text-gray-200 text-lg italic leading-relaxed">
                &ldquo;With Humble, three is all you need to get down to the essence of songs and music.&rdquo;
              </p>
              <cite className="block mt-2 text-sm text-gray-500 not-italic">— Brian Gorby</cite>
            </blockquote>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The band has shared stages with a variety of performers from G-Love to Corey Harris to Les Claypool and Dark Star Orchestra. With Gorby at the root of the band&apos;s sound, funky rhythm is the key, with Heusel and Harkness&apos; soulful playing added in. The sum is greater than its parts in this musical brotherhood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
