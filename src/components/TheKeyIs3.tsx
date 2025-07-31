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
            Meet the visionary souls behind the music. Each member brings a unique creative spark, coming together to craft something truly extraordinary.
          </p>
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