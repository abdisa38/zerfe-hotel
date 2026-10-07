import { motion } from 'framer-motion'
import { Award, Users, Heart, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { stats } from '../constants/hotelData'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'Ethiopian warmth and exceptional service in every interaction',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards of quality and comfort',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with guests and locals alike',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously improving our facilities and services',
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="Where Ethiopian hospitality meets modern luxury"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
      />

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray leading-relaxed text-lg">
              <p>
                Zerfe Hotel & Lounge is a welcoming hospitality landmark located in the heart of Robe, 
                Bale Zone, Oromia, Ethiopia. We offer restful accommodations, authentic local hospitality, 
                and a vibrant lounge experience for business travelers, researchers, and tourists alike.
              </p>
              <p>
                Known locally as <span className="text-primary font-semibold">ዘርፌ ሆቴል እና ላውንጅ</span>, 
                our establishment blends modern comfort with traditional Ethiopian generosity. Whether you are 
                preparing for a trek across the scenic Bale Mountains or stopping by for an evening of fresh 
                regional dining and cold refreshments, our doors are open with genuine care.
              </p>
              <p>
                With well-appointed guest rooms, 24/7 reliable hot showers, an automatic backup power generator, 
                and an on-site restaurant serving specialties like Bale Special Shekla Tibs, Zerfe Hotel & Lounge 
                is your ideal home away from home in Bale Robe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Zerfe Hotel & Lounge by the Numbers
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-luxury p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold">
                Meet Our Team
              </h2>
              <p className="text-white text-opacity-90 leading-relaxed">
                Our dedicated team of hospitality professionals works around the clock to ensure 
                your stay at Derartu Hotel exceeds expectations. From our front desk staff to our 
                housekeeping team, from our talented chefs to our concierge service, every member 
                is committed to making your experience memorable.
              </p>
              <p className="text-white text-opacity-90 leading-relaxed">
                We believe in the power of genuine Ethiopian hospitality combined with international 
                standards of service. Our team undergoes regular training to stay updated with the 
                latest hospitality trends while maintaining the authentic warmth that makes our 
                service special.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-luxury overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Hotel Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Perfectly Located in Bale Robe
            </h2>
            <p className="text-gray leading-relaxed text-lg mb-8">
              Situated along the main commercial corridor in Robe, Zerfe Hotel & Lounge provides effortless access to local markets, 
              transport terminals, and Robe Airport (GOB). We serve as the premier base camp for exploring the UNESCO-listed 
              Bale Mountains National Park, the dramatic Sanetti Plateau, the mist-covered Harenna Forest, and Sof Omar Caves.
            </p>
            <div className="aspect-video rounded-luxury overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80"
                alt="Bale Mountains Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
