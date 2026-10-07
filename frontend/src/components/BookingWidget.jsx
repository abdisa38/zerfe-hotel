import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Bed, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { rooms } from '../constants/hotelData'

const BookingWidget = ({ className = '' }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'any',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/contact', { state: { booking: formData } })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-luxury shadow-2xl p-6 md:p-8 ${className}`}
    >
      <h3 className="text-2xl font-playfair font-semibold text-primary mb-6 text-center">
        Reserve Your Stay
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Check In */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Check In
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
              <input
                type="date"
                required
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="w-full pl-11 pr-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {/* Check Out */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Check Out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
              <input
                type="date"
                required
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="w-full pl-11 pr-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full pl-11 pr-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors appearance-none bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Room Type
            </label>
            <div className="relative">
              <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
              <select
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                className="w-full pl-11 pr-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors appearance-none bg-white"
              >
                <option value="any">Any Room</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (ETB {room.price}/night)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gold text-white py-4 rounded-luxury font-medium text-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
        >
          <span>Check Availability</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </form>
    </motion.div>
  )
}

export default BookingWidget
