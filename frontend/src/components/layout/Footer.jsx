import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { hotelInfo } from '../../constants/hotelData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { label: 'Rooms', path: '/rooms' },
      { label: 'Restaurant', path: '/restaurant' },
      { label: 'Conference', path: '/conference' },
      { label: 'Gallery', path: '/gallery' },
    ],
    services: [
      { label: 'Free WiFi', path: '#' },
      { label: 'Room Service', path: '#' },
      { label: 'Parking', path: '#' },
      { label: 'Laundry', path: '#' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Explore Bale', path: '/explore-bale' },
      { label: 'Contact', path: '/contact' },
    ],
  }

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-playfair font-bold text-white">
                ZERFE
              </span>
              <span className="text-xs tracking-[0.25em] uppercase text-gold">
                Hotel & Lounge
              </span>
            </div>
            <p className="text-gray text-sm leading-relaxed">
              Experience comfortable stays and vibrant dining in the heart of Bale Robe. Your premier base for exploring the Bale Mountains.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-gold transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={hotelInfo.telegramUrl || `https://t.me/${hotelInfo.telegram.replace('@', '')}`}
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray text-sm">
                  {hotelInfo.location}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href={`tel:${hotelInfo.phones[0]}`} className="text-gray hover:text-gold transition-colors text-sm">
                    {hotelInfo.phones[0]}
                  </a>
                  <a href={`tel:${hotelInfo.phones[1]}`} className="text-gray hover:text-gold transition-colors text-sm">
                    {hotelInfo.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="text-gray hover:text-gold transition-colors text-sm">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white border-opacity-10 pt-12 pb-8"
        >
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-playfair font-semibold">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray text-sm">
              Get exclusive offers and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-luxury bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray focus:outline-none focus:border-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-8 py-3 rounded-luxury font-medium hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center">
          <p className="text-gray text-sm">
            © {currentYear} Zerfe Hotel & Lounge. All rights reserved. | Robe, Bale Zone, Oromia, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
