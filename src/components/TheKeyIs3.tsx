'use client';

import { motion } from 'framer-motion';

export default function TheKeyIs3() {
  const photos = [
    {
      src: '/jase.jpg',
      alt: 'Space Jase Mattis',
      description: 'Space Jase Mattis getting ready for the Greenbriar Brewing Co. show while taking in some beautiful West Virginia love outside Lewisburg.',
      name: 'Jase'
    },
    {
      src: '/nuggy.jpg',
      alt: 'Nuggy',
      description: 'Nuggy kicking out some jams at the recent Sleepy Creek show.',
      name: 'Nuggy'
    },
    {
      src: '/matty.jpg',
      alt: 'Matty',
      description: 'Matty bringing the heat and soul to the stage at the recent Sleepy Creek show.',
      name: 'Matty'
    }
  ];

  return (
    <section id="the-key-is-3" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Groovy background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-orange-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            The Key is Three
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Meet the brothers behind the music. Each member brings a unique creative spark, coming together to craft something truly extraordinary.
          </p>
        </motion.div>

        {/* Band Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
            
            {/* Bio header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-3">Our Story</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Bio content with enhanced typography */}
            <div className="relative z-10 space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="text-yellow-300 font-semibold">The humble band</span> – drummer <span className="text-orange-300 font-medium">Brian Gorby</span>, bassist <span className="text-orange-300 font-medium">Jason Mattis</span> and guitarist <span className="text-orange-300 font-medium">Matt Heusel</span> – are kindred spirits who share a love of good roots music and songs. The three met in West Virginia as part of a rhythm section in <span className="text-pink-300 font-medium">Humble Sacrifice</span>, which made an album for Richmond's Planetary Records.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                Later, Gorby and Heusel helped form the <span className="text-yellow-300 font-medium">Trainjumpers</span> and Gorby continued to broaden his musical palette with the <span className="text-yellow-300 font-medium">Hackensaw Boys</span> before finding a home as soulful percussionist with Pennsylvania's bluegrass-based <span className="text-orange-300 font-medium">Cabinet</span>. Meanwhile, Mattis had been a mainstay in Washington, D.C. legend <span className="text-pink-300 font-medium">Evan Bliss'</span> band.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                The three friends had always hoped to do more work together, though. Now they can in <span className="text-yellow-300 font-semibold">humble</span>, which harkens to its member's interests in things like old <span className="text-orange-300 font-medium">Grant Green</span>, the <span className="text-orange-300 font-medium">Meters</span>, <span className="text-pink-300 font-medium">JB's</span>, roots reggae. The group hopes to create music that'll be an uplift for people, and that'll bear repeated listenings. <span className="text-yellow-300 font-semibold italic">"It's got to be inspired to be any good, don't it!?"</span>
              </p>
            </div>
            
            {/* Musical influences accent */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                Musical Influences: Grant Green • The Meters • JB's • Roots Reggae
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-300">{photo.name}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 