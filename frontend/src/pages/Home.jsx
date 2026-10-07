import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { ChevronDown, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import BookingWidget from '../components/BookingWidget'
import ServiceCard from '../components/ServiceCard'
import RoomCard from '../components/RoomCard'
import TestimonialCard from '../components/TestimonialCard'
import Counter from '../components/Counter'
import FAQ from '../components/FAQ'
import { hotelInfo, stats, services, rooms, testimonials, faqs, mediaAssets } from '../constants/hotelData'

const Home = () => {
  const heroImages = [
    mediaAssets?.heroBanner || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    mediaAssets?.loungeInterior || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    mediaAssets?.diningArea || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Zerfe Hotel & Lounge ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
              >
                Welcome to Luxury
              </motion.p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                {hotelInfo.tagline}
              </h1>
              <p className="text-lg md:text-xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                {hotelInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold text-white px-8 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
                  >
                    Book Your Stay
                  </motion.button>
                </Link>
                <Link to="/rooms">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-8 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
                  >
                    Explore Rooms
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Booking Widget */}
      <section className="relative -mt-32 z-20 px-4">
        <div className="max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-luxury overflow-hidden shadow-2xl">
                <img
                  src={mediaAssets?.loungeInterior || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'}
                  alt="Zerfe Lounge Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-64 h-64 rounded-luxury overflow-hidden shadow-2xl hidden md:block"
              >
                <img
                  src={mediaAssets?.diningArea || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'}
                  alt="Zerfe Dining"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase">
                About Zerfe Hotel & Lounge
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                Comfortable Stays & Vibrant Dining in Bale Robe
              </h2>
              <p className="text-gray leading-relaxed">
                Located in the heart of Robe, Zerfe Hotel & Lounge offers restful accommodations, authentic local hospitality, 
                and a welcoming lounge experience for business travelers, tourists heading to the Bale Mountains, and locals alike.
              </p>
              <p className="text-gray leading-relaxed">
                With modern well-appointed rooms, a celebrated restaurant serving regional specialties like Bale Special Shekla Tibs, 
                a full-service bar & social lounge, 24/7 hot showers, and reliable power backup, we ensure a warm and seamless stay.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <Counter
                    key={index}
                    end={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-white px-8 py-3 rounded-luxury font-medium hover:bg-opacity-90 transition-all flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Exceptional Amenities
            </h2>
            <p className="text-gray max-w-2xl mx-auto leading-relaxed">
              Experience world-class facilities and services designed for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Accommodation
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Luxury Rooms & Suites
            </h2>
            <p className="text-gray max-w-2xl mx-auto leading-relaxed">
              Choose from our selection of elegantly designed rooms, each offering modern comfort and stunning views
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/rooms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-luxury font-medium hover:bg-gold transition-all inline-flex items-center space-x-2"
              >
                <span>View All Rooms</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              What Our Guests Say
            </h2>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray">
              Find answers to common questions about your stay
            </p>
          </motion.div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready to Experience Zerfe Hotel & Lounge?
            </h2>
            <p className="text-white text-opacity-90 text-lg mb-8 leading-relaxed">
              Book your stay at Zerfe Hotel & Lounge and enjoy authentic local hospitality in the heart of Bale Robe.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-10 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
