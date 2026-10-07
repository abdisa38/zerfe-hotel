import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import { conferenceFeatures } from '../constants/hotelData'
import { Link } from 'react-router-dom'

const Conference = () => {
  const eventTypes = [
    {
      title: 'Corporate Meetings',
      description: 'Professional environment for business meetings and presentations',
      icon: 'Briefcase',
    },
    {
      title: 'Seminars & Training',
      description: 'Ideal space for educational programs and workshops',
      icon: 'GraduationCap',
    },
    {
      title: 'Wedding Events',
      description: 'Create unforgettable memories in our elegant venue',
      icon: 'Heart',
    },
    {
      title: 'Private Events',
      description: 'Customize your special occasion with our flexible spaces',
      icon: 'PartyPopper',
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Conference Hall"
        subtitle="State-of-the-art facilities for meetings, events, and celebrations"
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Your Event, Perfected
            </h2>
            <p className="text-gray leading-relaxed text-lg">
              Zerfe Hotel & Lounge provides a welcoming and reliable venue for your business meetings, 
              workshops, organizational retreats, and celebratory gatherings in Robe, Bale. With backup power, 
              high-speed Wi-Fi, and delicious catering, we make your event in Bale seamless and memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Facilities & Amenities
            </h2>
            <p className="text-gray">
              Everything you need for a successful event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conferenceFeatures.map((feature, index) => (
              <ServiceCard key={index} service={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Perfect For Any Occasion
            </h2>
            <p className="text-gray">
              Host a variety of events in our versatile space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <ServiceCard key={index} service={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Layouts */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Flexible Seating Arrangements
            </h2>
            <p className="text-gray mb-8">
              Our conference hall can be configured to suit your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-luxury p-8 text-center"
            >
              <div className="text-5xl font-playfair font-bold text-gold mb-2">150</div>
              <div className="text-primary font-semibold mb-2">Theater Style</div>
              <div className="text-gray text-sm">Ideal for presentations and seminars</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-luxury p-8 text-center"
            >
              <div className="text-5xl font-playfair font-bold text-gold mb-2">80</div>
              <div className="text-primary font-semibold mb-2">Classroom Style</div>
              <div className="text-gray text-sm">Perfect for training sessions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-luxury p-8 text-center"
            >
              <div className="text-5xl font-playfair font-bold text-gold mb-2">120</div>
              <div className="text-primary font-semibold mb-2">Banquet Style</div>
              <div className="text-gray text-sm">Great for dinners and celebrations</div>
            </motion.div>
          </div>
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
              Event Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1920',
              'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
                  alt={`Conference ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Ready to Book Your Event?
            </h2>
            <p className="text-white text-opacity-90 text-lg mb-8">
              Contact us today to discuss your event requirements and receive a customized quote
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Conference
