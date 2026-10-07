import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Maximize, ArrowRight } from 'lucide-react'

const RoomCard = ({ room, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-luxury overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">
          ETB {room.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-2">
            {room.name}
          </h3>
          <p className="text-gray text-sm line-clamp-2">
            {room.description}
          </p>
        </div>

        {/* Details */}
        <div className="flex items-center space-x-6 text-sm text-gray">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gold" />
            <span>{room.capacityText || (typeof room.capacity === 'number' ? `${room.capacity} ${room.capacity === 1 ? 'Guest' : 'Guests'}` : room.capacity)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize className="w-4 h-4 text-gold" />
            <span>{room.size}</span>
          </div>
        </div>

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="text-xs bg-background px-3 py-1 rounded-full text-primary"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs bg-background px-3 py-1 rounded-full text-gold">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link to={`/rooms/${room.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white py-3 rounded-luxury font-medium hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 group-hover:bg-gold"
          >
            <span>View Details</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default RoomCard
