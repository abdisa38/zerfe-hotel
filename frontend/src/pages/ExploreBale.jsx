import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { attractions, hotelInfo } from '../constants/hotelData'

const ExploreBale = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Explore Bale"
        subtitle="Discover the breathtaking wilderness of Bale Robe and the Bale Mountains"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2070&q=80"
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Navigation className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Welcome to Bale Robe
            </h2>
            <p className="text-gray leading-relaxed text-lg">
              Robe, the bustling capital of the Bale Zone in Oromia, serves as the prime gateway to 
              one of Africa's most breathtaking natural treasures — the Bale Mountains National Park. 
              Set amidst highland landscapes, Robe offers authentic Ethiopian warmth, lively town markets, 
              and effortless access to afro-alpine plateaus, rare endemic wildlife, and sacred historical sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Must-Visit Destinations
            </h2>
            <p className="text-gray">
              Explore the wonders around Zerfe Hotel & Lounge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-background rounded-luxury overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary bg-opacity-80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bale Highlands Highlight */}
      <section className="py-20 bg-primary text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold">
                The Afro-Alpine Crown of Ethiopia
              </h2>
              <p className="text-white text-opacity-90 leading-relaxed">
                Rising over 4,000 meters above sea level, the Bale Mountains contain the largest 
                Afro-alpine habitat on the continent. It is the premier refuge for the critically endangered 
                Ethiopian Wolf, the Mountain Nyala, and over 300 bird species.
              </p>
              <p className="text-white text-opacity-90 leading-relaxed">
                From crossing the expansive Sanetti Plateau along Africa's highest all-weather road to venturing 
                into the wild coffee groves of the Harenna Forest, staying at Zerfe Hotel & Lounge places 
                you right at the doorstep of these world-class expeditions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-gold mb-2">4,377m</div>
                  <div className="text-sm uppercase tracking-wider">Tullu Dimtu Peak</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-gold mb-2">UNESCO</div>
                  <div className="text-sm uppercase tracking-wider">World Heritage Site</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-luxury overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Bale Mountains Landscape"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Need Help Planning Your Visit?
            </h2>
            <p className="text-gray text-lg mb-8">
              Our front desk and advisory team are happy to assist with directions, local transportation, and mountain guides
            </p>
            <motion.a
              href={`tel:${hotelInfo.phones[0]}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold text-white px-10 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Contact Front Desk
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExploreBale
