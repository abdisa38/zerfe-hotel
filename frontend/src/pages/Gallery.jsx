import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { galleryImages } from '../constants/hotelData'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = ['all', 'rooms', 'restaurant', 'conference', 'events', 'lobby', 'outdoor']

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Gallery"
        subtitle="A visual journey through Zerfe Hotel & Lounge"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
      />

      {/* Category Filter */}
      <section className="py-12 px-4 bg-white sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-luxury font-medium capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-background text-primary hover:bg-gold hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setLightboxImage(image)}
                  className="relative h-80 rounded-luxury overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-playfair font-semibold text-xl">
                        {image.title}
                      </h3>
                      <p className="text-white text-opacity-80 text-sm capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-primary bg-opacity-95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-8 right-8 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-luxury"
              />
              <div className="text-center mt-6">
                <h3 className="text-white font-playfair font-semibold text-2xl mb-2">
                  {lightboxImage.title}
                </h3>
                <p className="text-white text-opacity-80 capitalize">
                  {lightboxImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
