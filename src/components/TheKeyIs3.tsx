'use client';

import { motion } from 'framer-motion';

export default function TheKeyIs3() {
  const photos = [
    {
      src: '/img/jase.webp',
      alt: 'Jase',
      name: 'Jase'
    },
    {
      src: '/img/nuggy.webp',
      alt: 'Nuggy',
      name: 'Nuggy'
    },
    {
      src: '/img/matty.webp',
      alt: 'Matty',
      name: 'Matty'
    }
  ];

  return (
    <section id="the-key-is-3" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Green accent pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-green-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-green-500 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-[#346703] bg-clip-text text-transparent mb-6 leading-tight pb-2">
            The Key is Three
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Meet the brothers behind the music. Each member brings a unique creative spark, coming together to craft something truly extraordinary.
          </p>
        </motion.div>

        {/* Band Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold text-white">{photo.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Band Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-2xl overflow-hidden">
              {/* Bio header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Our Story</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Bio content with enhanced typography */}
            <div className="relative z-10 space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                The humble band – drummer Brian Gorby, bassist Jason Mattis and guitarist Matt Heusel – are kindred spirits who share a love of good roots music and songs. The three met in West Virginia as part of a rhythm section in Humble Sacrifice, which made an album for Richmond's Planetary Records.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                Later, Gorby and Heusel helped form the Trainjumpers and Gorby continued to broaden his musical palette with the Hackensaw Boys before finding a home as soulful percussionist with Pennsylvania's bluegrass-based Cabinet. Meanwhile, Mattis had been a mainstay in Washington, D.C. legend Evan Bliss' band.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                The three friends had always hoped to do more work together, though. Now they can in humble, which harkens to its member's interests in things like old Grant Green, the Meters, JB's, roots reggae. The group hopes to create music that'll be an uplift for people, and that'll bear repeated listenings. "It's got to be inspired to be any good, don't it!?"
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
      </div>
    </section>
  );
} 