export const hotelInfo = {
  name: 'Zerfe Hotel & Lounge',
  nativeName: 'ዘርፌ ሆቴል እና ላውንጅ',
  slug: 'zerfe-hotel-lounge',
  tagline: 'Comfortable Stays & Vibrant Dining in Bale Robe',
  description:
    'Located in the heart of Robe, Zerfe Hotel & Lounge offers restful accommodations, authentic local hospitality, and a welcoming lounge experience for business travelers, tourists heading to the Bale Mountains, and locals alike.',
  foundedCity: 'Robe (Bale), Oromia, Ethiopia',
  location: 'Robe, Bale Zone, Oromia, Ethiopia',
  street: 'Main Commercial Corridor',
  city: 'Robe',
  zone: 'Bale Zone',
  region: 'Oromia',
  country: 'Ethiopia',
  plusCode: '42J2+3WC, Robe',
  googlePlaceId: 'ChIJT44aYgAByhcRb18GE3giXRQ',
  coordinates: { lat: 7.1264, lng: 39.9972 },
  directionsNote:
    'Centrally located in Robe town, easily reachable by Bajaj or taxi from Robe Airport (GOB) and the main bus terminal.',
  phones: ['+251 91 123 4567', '+251 92 000 0000'],
  phone: '+251 91 123 4567',
  receptionPhone: '+251 92 000 0000',
  email: 'info@zerfehotel.com',
  telegram: '@zerfehotellounge',
  telegramUrl: 'https://t.me/zerfehotellounge',
  whatsapp: '+251911234567',
  operatingHours: {
    frontDesk: '24/7',
    restaurantAndLounge: '06:30 AM - 11:00 PM daily',
    roomService: '07:00 AM - 10:00 PM',
  },
  paymentMethods: [
    'Telebirr',
    'CBE Birr',
    'Awash / Dashen Mobile Banking',
    'Cash (ETB)',
  ],
}

export const stats = [
  { number: 20, label: 'Modern Rooms', suffix: '+' },
  { number: 24, label: 'Front Desk & Security', suffix: '/7' },
  { number: 500, label: 'Happy Guests Monthly', suffix: '+' },
  { number: 100, label: 'Power Backup & Hot Water', suffix: '%' },
]

export const services = [
  {
    icon: 'Utensils',
    title: 'Restaurant & Dining',
    description: 'On-site traditional Ethiopian delicacies and modern cuisine prepared fresh daily',
  },
  {
    icon: 'Coffee',
    title: 'Bar & Social Lounge',
    description: 'Full-service social lounge, cold beers, evening cocktails, and traditional coffee ceremonies',
  },
  {
    icon: 'Wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Fast, reliable internet access throughout all rooms and lounge areas',
  },
  {
    icon: 'Droplets',
    title: 'Hot Water Showers',
    description: 'Guaranteed 24/7 pressurized hot showers to refresh after mountain treks',
  },
  {
    icon: 'Tv',
    title: 'DSTV & Satellite TV',
    description: 'Flat-screen satellite entertainment in every guest room',
  },
  {
    icon: 'Shield',
    title: '24/7 Security & Front Desk',
    description: 'Round-the-clock reception, CCTV surveillance, and dedicated guest care',
  },
  {
    icon: 'Zap',
    title: 'Power Backup Generator',
    description: 'Heavy-duty automatic backup generator ensuring uninterrupted power',
  },
  {
    icon: 'Car',
    title: 'Secure Parking',
    description: 'Spacious on-site secure parking for private cars, safari 4x4s, and tour vans',
  },
  {
    icon: 'Concierge',
    title: 'Room Service',
    description: 'In-room food and beverage service available 07:00 AM - 10:00 PM',
  },
  {
    icon: 'Sparkles',
    title: 'Daily Housekeeping',
    description: 'Thorough sanitation, crisp clean linens, and daily room maintenance',
  },
  {
    icon: 'Navigation',
    title: 'Bale Tour Assistance',
    description: 'Guidance and advisory for Bale Mountains National Park and local excursions',
  },
  {
    icon: 'Users',
    title: 'Meeting & Gatherings',
    description: 'Versatile lounge space suitable for private dinners and community gatherings',
  },
]

export const rooms = [
  {
    id: 'std-single',
    name: 'Standard Single Room',
    price: 800,
    priceUSD: 15,
    capacity: 1,
    capacityText: '1 Guest',
    bed: '1 Single Bed',
    size: '20 sqm',
    description:
      'Cozy and well-appointed single room ideal for solo travelers, field researchers, and business professionals visiting Robe. Features comfortable bedding, hot shower, and a quiet work desk.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: [
      '1 Single Bed',
      'En-suite Bathroom',
      '24/7 Hot Shower',
      'Satellite TV',
      'Free High-Speed Wi-Fi',
      'Work Desk',
      'Daily Housekeeping',
    ],
    featured: true,
  },
  {
    id: 'dlx-double',
    name: 'Deluxe Double Room',
    price: 1400,
    priceUSD: 25,
    capacity: 2,
    capacityText: '2 Guests',
    bed: '1 Queen Bed',
    size: '30 sqm',
    description:
      'Spacious and warm deluxe room with comfortable queen bedding and balcony view of Robe town. Designed for couples, friends, and travelers resting before exploring the Bale Mountains.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: [
      '1 Queen Bed',
      'En-suite Bathroom',
      'Balcony View',
      '24/7 Hot Shower',
      'Flat-Screen TV',
      'Free High-Speed Wi-Fi',
      'Wardrobe / Closet',
      'Room Service',
    ],
    featured: true,
  },
  {
    id: 'vip-suite',
    name: 'Executive Suite',
    price: 2200,
    priceUSD: 40,
    capacity: 3,
    capacityText: '2-3 Guests',
    bed: '1 King Bed + Lounge Sofa',
    size: '45 sqm',
    description:
      'Our premier executive suite offering a separate sitting lounge area, king-size bed, sofa, mini fridge, and complimentary breakfast. The perfect luxury sanctuary in Bale Robe.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    amenities: [
      '1 King Bed + Lounge Sofa',
      'Separate Sitting Area',
      'Mini Fridge',
      'Complimentary Breakfast',
      'En-suite Bathroom',
      '24/7 Hot Shower',
      'Flat-Screen TV',
      'Free High-Speed Wi-Fi',
      'Room Service',
    ],
    featured: true,
  },
]

export const diningHighlights = [
  {
    name: 'Bale Special Shekla Tibs',
    category: 'Food',
    price: 380,
    description: 'Sizzling lean beef served on a traditional clay burner with fresh chilies, rosemary, and injera.',
  },
  {
    name: 'Fasting Firfir / Shiro Tegabino',
    category: 'Food',
    price: 220,
    description: 'Slow-simmered spiced chickpea stew in an earthen pot served piping hot with fresh injera.',
  },
  {
    name: 'Special Jebena Buna Ceremony',
    category: 'Beverage',
    price: 100,
    description: 'Freshly roasted Ethiopian highland coffee prepared on frankincense embers with traditional popcorn.',
  },
  {
    name: 'Evening Cocktails & Cold Beer',
    category: 'Bar',
    price: 120,
    description: 'Full selection of chilled local and imported lagers, premium spirits, and mixed house cocktails.',
  },
]

export const menuCategories = [
  {
    title: 'Traditional Ethiopian & Bale Specialties',
    description: 'Authentic local cuisine and regional specialties prepared with farm-fresh highland ingredients',
    items: [
      {
        name: 'Bale Special Shekla Tibs',
        description: 'Sizzling lean beef served on a traditional clay burner with fresh chilies, rosemary, and injera',
        price: 380,
      },
      {
        name: 'Shiro Tegabino',
        description: 'Slow-simmered seasoned chickpea stew served bubbling hot in an earthen clay pot',
        price: 220,
      },
      {
        name: 'Special Kitfo',
        description: 'Prime minced beef seasoned with spiced clarified butter (niter kibbeh) and mitmita, served with kocho & ayib',
        price: 420,
      },
      {
        name: 'Doro Wot',
        description: 'Festive slow-cooked chicken stew in rich berbere sauce with hard-boiled eggs',
        price: 390,
      },
      {
        name: 'Fasting Firfir & Veggie Platter',
        description: 'Torn injera steeped in spiced berbere gravy served with lentil and vegetable medleys',
        price: 240,
      },
    ],
  },
  {
    title: 'International & Comfort Meals',
    description: 'Hearty, comforting dishes for travelers from around the world',
    items: [
      {
        name: 'Grilled Beef Burger & Fries',
        description: 'Juicy handcrafted beef patty with melted cheese, fresh tomato, lettuce, and crispy fries',
        price: 380,
      },
      {
        name: 'Spaghetti Bolognese / Pomodoro',
        description: 'Al dente pasta tossed in rich slow-cooked meat sauce or fresh basil tomato sauce',
        price: 320,
      },
      {
        name: 'Roast Chicken with Vegetables',
        description: 'Herb-marinated tender chicken roasted to golden perfection with sautéed garden vegetables',
        price: 390,
      },
      {
        name: 'Omelette & Toast Combo',
        description: 'Fluffy three-egg omelette with cheese, onions, peppers, and warm artisan toast',
        price: 200,
      },
    ],
  },
  {
    title: 'Lounge Bar & Refreshments',
    description: 'Relax in our vibrant lounge with cold beers, cocktails, and refreshing drinks',
    items: [
      {
        name: 'Cold Draft & Bottled Beer',
        description: 'Selection of chilled Ethiopian favorites (St. George, Habesha, Walia, Bedele)',
        price: 90,
      },
      {
        name: 'Evening House Cocktails',
        description: 'Classic cocktails and refreshing mixed spirits prepared by our lounge bartenders',
        price: 220,
      },
      {
        name: 'Freshly Squeezed Fruit Juice',
        description: 'Avocado, mango, and mixed seasonal highland fruit juices',
        price: 120,
      },
      {
        name: 'Soft Drinks & Mineral Water',
        description: 'Chilled Ambo mineral water, sodas, and juices',
        price: 50,
      },
    ],
  },
  {
    title: 'Highland Coffee & Breakfast',
    description: 'Start your mountain mornings with authentic Ethiopian coffee and breakfast',
    items: [
      {
        name: 'Special Jebena Buna Ceremony',
        description: 'Freshly roasted Ethiopian highland coffee prepared on frankincense embers with traditional popcorn',
        price: 100,
      },
      {
        name: 'Ethiopian Macchiato',
        description: 'Rich dark espresso layered with velvety steamed milk',
        price: 60,
      },
      {
        name: 'Traditional Ful & Fresh Bread',
        description: 'Warm fava beans simmered with olive oil, tomatoes, onions, berbere, and fresh bread',
        price: 180,
      },
      {
        name: 'Continental Breakfast Set',
        description: 'Eggs to order, toasted bread, butter, jam, fresh fruit slices, and coffee or spiced tea',
        price: 260,
      },
    ],
  },
]

export const conferenceFeatures = [
  { icon: 'Users', title: 'Meeting Capacity', description: 'Comfortably hosts up to 80 guests for workshops and gatherings' },
  { icon: 'Wifi', title: 'High-Speed Wi-Fi', description: 'Fast and reliable connectivity for business meetings' },
  { icon: 'Coffee', title: 'Full Catering & Coffee', description: 'Tea breaks, snack platters, and buffet dining' },
  { icon: 'Zap', title: 'Generator Backup', description: '100% uninterrupted power for all audio and projection needs' },
  { icon: 'Projector', title: 'Audio & Visual Setup', description: 'Projection screen and sound system upon request' },
  { icon: 'Shield', title: 'Secure Environment', description: 'Private, quiet, and secure setting with front desk coordination' },
  { icon: 'Car', title: 'Ample Parking', description: 'Safe on-premise parking for attendees and organizational vehicles' },
  { icon: 'Clock', title: 'Flexible Scheduling', description: 'Full-day, half-day, and evening session options' },
]

export const attractions = [
  {
    name: 'Bale Mountains National Park',
    distance: '45 km',
    description:
      'UNESCO World Heritage Site renowned for Afro-alpine wilderness, the rare Ethiopian Wolf, and spectacular highland vistas.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sanetti Plateau & Mount Batu',
    distance: '50 km',
    description:
      'The highest all-weather road in Africa crossing tundra landscapes, endemic wildlife, and alpine lakes over 4,000 meters.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Harenna Forest',
    distance: '65 km',
    description:
      'Dense, atmospheric cloud forest on the southern slopes of Bale, home to wild forest coffee, bamboo groves, and colobus monkeys.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sof Omar Caves',
    distance: '110 km',
    description:
      'One of Africa’s largest and most magnificent underground limestone cave networks, carved over millennia by the Weyib River.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Robe Central Market',
    distance: '1 km',
    description:
      'Vibrant local market in the heart of Robe featuring regional grains, highland honey, traditional textiles, and spices.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Madda Walabu Heritage Area',
    distance: '60 km',
    description:
      'A deeply revered cultural and historical cradle in Oromo heritage, set against the scenic landscapes of the Bale Zone.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
]

export const testimonials = [
  {
    name: 'Yared Tesfaye',
    role: 'Field Researcher & Tourist',
    rating: 5,
    text: 'Zerfe Hotel was our base camp before trekking the Bale Mountains. The hot shower was truly 24/7, the beds were very comfortable, and the Shekla Tibs in the evening was outstanding!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Elena Rostova',
    role: 'Wildlife Photographer',
    rating: 5,
    text: 'Clean, safe, and hospitable! The staff helped us arrange transportation to Sanetti Plateau. Having reliable power and Wi-Fi in Robe made our stay seamless.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Abdi Mohammed',
    role: 'Business Traveler',
    rating: 5,
    text: 'Great location right on the main corridor in Robe. The lounge has a vibrant atmosphere in the evenings, and the front desk staff are welcoming and attentive.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Sarah & Mark Davis',
    role: 'Adventure Travelers',
    rating: 5,
    text: 'A welcoming gem in Bale Robe. Great food, genuine Ethiopian coffee ceremony, and very reasonably priced rooms. We will definitely stay at Zerfe again!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

export const faqs = [
  {
    question: 'Where is Zerfe Hotel & Lounge located?',
    answer: 'We are centrally located along the main commercial corridor in Robe town (Bale Zone, Oromia, Ethiopia). Our Plus Code is 42J2+3WC, Robe, easily reached by Bajaj or taxi from the bus station or Robe Airport (GOB).',
  },
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is available 24/7 with our round-the-clock front desk (standard check-in from 2:00 PM) and check-out is by 12:00 PM. Flexible arrangements are available upon request.',
  },
  {
    question: 'Is hot water available 24 hours?',
    answer: 'Yes! We provide reliable, pressurized hot water showers in all rooms around the clock — perfect after long travels or highland hikes.',
  },
  {
    question: 'Do you have backup electricity during power outages?',
    answer: 'Yes, we are equipped with an on-site automatic power backup generator ensuring continuous electricity for lights, Wi-Fi, and essentials.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Telebirr, CBE Birr, Awash / Dashen Mobile Banking, and cash (ETB).',
  },
  {
    question: 'What dining options are available on-site?',
    answer: 'Our on-site restaurant and social lounge serves breakfast, authentic Ethiopian specialties (including Bale Special Shekla Tibs), international meals, cold beers, cocktails, and traditional Jebena Buna coffee ceremonies from 06:30 AM to 11:00 PM daily.',
  },
  {
    question: 'Can you assist with tours to Bale Mountains National Park?',
    answer: 'Yes, our front desk team can connect you with experienced local guides, 4x4 transport arrangements, and practical advice for visiting the Sanetti Plateau, Harenna Forest, and Sof Omar Caves.',
  },
  {
    question: 'Is parking available and secure?',
    answer: 'Yes, we provide complimentary secure on-site parking monitored by 24/7 security personnel.',
  },
]

export const mediaAssets = {
  heroBanner: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
  loungeInterior: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  diningArea: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  coffeeCeremony: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
}

export const galleryImages = [
  {
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    title: 'Standard Single Room',
  },
  {
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    title: 'Deluxe Double Room',
  },
  {
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    title: 'Executive Suite',
  },
  {
    category: 'restaurant',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    title: 'Restaurant & Dining Area',
  },
  {
    category: 'lobby',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    title: 'Vibrant Social Lounge',
  },
  {
    category: 'restaurant',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    title: 'Traditional Coffee Ceremony',
  },
  {
    category: 'outdoor',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    title: 'Hotel Entrance & Exterior',
  },
  {
    category: 'conference',
    url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    title: 'Meeting & Gathering Space',
  },
  {
    category: 'outdoor',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    title: 'Gateway to Bale Mountains',
  },
]
