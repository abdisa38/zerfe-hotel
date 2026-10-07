import { motion } from 'framer-motion'
import { Utensils, Coffee } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { menuCategories } from '../constants/hotelData'

const Restaurant = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Restaurant"
        subtitle="Savor authentic Ethiopian cuisine and international flavors"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Utensils className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              A Culinary Journey
            </h2>
            <p className="text-gray leading-relaxed text-lg">
              Experience authentic dining and a vibrant social lounge atmosphere at Zerfe Hotel & Lounge in Robe, Bale. 
              Our kitchen prepares traditional Ethiopian delicacies like our celebrated Bale Special Shekla Tibs, 
              comforting international dishes, and freshly brewed highland coffee with genuine hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 px-4 ${categoryIndex % 2 === 0 ? 'bg-white' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                {category.title}
              </h2>
              <p className="text-gray">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.05 }}
                  className="bg-background rounded-luxury p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-lg">
                      ETB {item.price}
                    </span>
                  </div>
                  <p className="text-gray text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Coffee Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Coffee className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Ethiopian Coffee Ceremony
            </h2>
            <p className="text-white text-opacity-90 leading-relaxed text-lg">
              Experience the traditional Ethiopian coffee ceremony, a cultural ritual that has been passed down 
              through generations. Watch as our staff roasts, grinds, and brews fresh coffee beans, creating an 
              aromatic and flavorful cup that embodies Ethiopian hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Dining Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1920',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-luxury overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Restaurant ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Restaurant
