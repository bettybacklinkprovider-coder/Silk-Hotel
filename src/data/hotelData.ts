import { Room, HotelService, GalleryItem, Testimonial } from '../types';

export const HOTEL_INFO = {
  name: 'Silk Hotel',
  tagline: 'Refined Comfort & Timeless Elegance in Faisalabad',
  phone: '+92 306 7222232',
  phoneRaw: '+923067222232',
  email: 'info@silkhotel.pk',
  address: 'C498+F55, Susan Road, Madina Town, Faisalabad, 38000, Pakistan',
  city: 'Faisalabad',
  area: 'Madina Town, Susan Road',
  mainImage: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158779/unnamed_6.jpg',
  heroImages: [
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158779/unnamed_6.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158492/unnamed_5.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158237/unnamed_4.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158067/unnamed_3.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790157810/unnamed.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790156561/unnamed_1.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790157360/unnamed_2.jpg',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
  ],
  whatsappUrl: 'https://wa.me/923067222232?text=Hello%20Silk%20Hotel,%20I%20would%20like%20to%20inquire%20about%20room%20reservation%20and%20rates.',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.998471188339!2d73.10984831510255!3d31.41416498140411!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a42dd6a6a1%3A0x6b10214a1a6b0c20!2sSusan%20Rd%2C%20Madina%20Town%2C%20Faisalabad%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  checkInTime: '02:00 PM',
  checkOutTime: '12:00 PM',
};

export const ROOMS: Room[] = [
  {
    id: 'silk-deluxe-king',
    name: 'Deluxe King Room',
    category: 'Deluxe',
    tagline: 'Modern luxury with ergonomic workspace and plush king bedding.',
    pricePKR: 12500,
    priceUSD: 45,
    capacity: '2 Guests',
    bedType: '1 King Bed',
    sizeSqFt: 380,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed for both business travelers and couples, the Deluxe King Room offers a sanctuary of peace featuring premium silk linens, custom hardwood furniture, smart climate control, and a sleek marble en-suite bathroom.',
    amenities: [
      'High-Speed Wi-Fi',
      '55" 4K Smart TV',
      'In-Room Safe',
      'Tea & Coffee Station',
      '24/7 Room Service',
      'Climate Control AC',
      'Rainfall Shower',
      'Mini Refrigerator'
    ],
    featured: true,
  },
  {
    id: 'silk-executive-suite',
    name: 'Executive Silk Suite',
    category: 'Executive',
    tagline: 'Spacious parlor with city views and tailored VIP hospitality.',
    pricePKR: 18500,
    priceUSD: 66,
    capacity: '2 Adults, 1 Child',
    bedType: '1 Super King Bed',
    sizeSqFt: 550,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience refined luxury in our Executive Suite. Featuring a separate seating lounge, dedicated work area with high-speed desk connectivity, complimentary executive breakfast, and panoramic views of Madina Town.',
    amenities: [
      'Complimentary Gourmet Breakfast',
      'Separate Living Room Lounge',
      '65" 4K Smart TV',
      'Espresso Machine',
      'Executive Work Desk',
      'Deep Soaking Bathtub',
      'Personal Valet Service',
      'VIP Welcome Drinks'
    ],
    featured: true,
  },
  {
    id: 'silk-royal-presidential',
    name: 'Royal Silk Suite',
    category: 'Suite',
    tagline: 'The pinnacle of luxury with master bedroom, dining space, and private butler.',
    pricePKR: 28000,
    priceUSD: 100,
    capacity: '4 Guests',
    bedType: '1 Emperor Bed + Sofa Bed',
    sizeSqFt: 850,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Our crown jewel residence for distinguished guests, VIP diplomats, and grand celebrations. The Royal Silk Suite includes a spacious master suite, dining table for 4, luxurious bath setup, and dedicated concierge assistance.',
    amenities: [
      '24/7 Dedicated Butler Service',
      'Private Dining Area',
      'Luxury Marble Bathroom & Jacuzzi',
      'Free Airport Transfer',
      'Complimentary Mini Bar',
      'Soundproof Panoramic Windows',
      'Premium Silk Bathrobes & Slippers',
      'Gourmet Breakfast Included'
    ],
    featured: true,
  },
  {
    id: 'silk-deluxe-twin',
    name: 'Superior Twin Comfort',
    category: 'Deluxe',
    tagline: 'Ideal for corporate colleagues or friends traveling together.',
    pricePKR: 11500,
    priceUSD: 41,
    capacity: '2 Guests',
    bedType: '2 Single Twin Beds',
    sizeSqFt: 360,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Functional elegance crafted with two orthopedic twin beds, individually controlled reading lights, quiet air conditioning, and full room service menu.',
    amenities: [
      'High-Speed Wi-Fi',
      'Smart TV with HD Cable',
      'Tea & Coffee Maker',
      'Work Desk & Chair',
      'En-suite Bathroom with Amenities',
      'Daily Housekeeping'
    ],
    featured: false,
  },
  {
    id: 'silk-family-suite',
    name: 'Grand Family Suite',
    category: 'Family',
    tagline: 'Connecting layout for families needing extra space and comfort.',
    pricePKR: 22500,
    priceUSD: 80,
    capacity: '4-5 Guests',
    bedType: '1 King Bed + 2 Twin Beds',
    sizeSqFt: 700,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed specifically for family visits to Faisalabad. Offers spacious accommodations, two separate bedrooms, two private bathrooms, and cozy seating area.',
    amenities: [
      'Two Interconnected Rooms',
      '2 Smart TVs',
      'Family Dining Setup',
      'Kid-Friendly Amenities',
      'Daily Room Service',
      'Spacious Wardrobes',
      'Complimentary Water Bottles'
    ],
    featured: false,
  }
];

export const SERVICES: HotelService[] = [
  {
    id: 'room-service',
    title: '24/7 In-Room Dining',
    description: 'Enjoy delicious local Pakistani delicacies and continental favorites delivered straight to your door at any hour.',
    iconName: 'UtensilsCrossed',
    hours: '24 Hours Daily',
    badge: 'Popular',
    details: [
      'Freshly prepared hot Pakistani, Asian & Continental dishes',
      'Express breakfast tray service',
      'Custom dietary & health option requests',
      'Late-night tea & refreshment menu'
    ]
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping & Laundry',
    description: 'Impeccable cleanliness, sanitized rooms, daily towel changes, and same-day dry cleaning services.',
    iconName: 'Sparkles',
    hours: '08:00 AM - 10:00 PM',
    badge: 'Hygiene Assured',
    details: [
      'Daily thorough deep cleaning & linen changes',
      'Express same-day laundry & pressing service',
      'Eco-friendly laundry detergent options',
      'Shoe shine and garment care on request'
    ]
  },
  {
    id: 'wifi',
    title: 'High-Speed Optical Wi-Fi',
    description: 'Seamless optical fiber internet throughout the entire hotel building for work, streaming, and family calls.',
    iconName: 'Wifi',
    hours: 'Always Active',
    badge: 'Free Ultra-Fast',
    details: [
      'Dedicated high bandwidth optical connection',
      'Unlimited devices per room',
      'Secure encrypted guest Wi-Fi network',
      'Work desk ethernet access points available'
    ]
  },
  {
    id: 'parking',
    title: 'Secure Valet & On-Site Parking',
    description: '24-hour guarded parking space for guests traveling with private vehicles in Madina Town.',
    iconName: 'Car',
    hours: '24/7 Security Patrol',
    badge: 'Complimentary',
    details: [
      'CCTV monitored safe parking zone',
      'Friendly valet service on arrival',
      'Spacious spots suitable for SUVs & cars',
      'Driver waiting rest area available'
    ]
  },
  {
    id: 'reception',
    title: '24/7 Front Desk & Concierge',
    description: 'Warm Pakistani hospitality with express check-in, city travel guidance, luggage assistance, and taxi calls.',
    iconName: 'Clock',
    hours: '24/7 Active Desk',
    badge: 'Always Available',
    details: [
      'Instant check-in and luggage portage',
      'Local market & shopping area guides (Susan Road, D Ground)',
      'Taxi & car rental arrangement',
      'Safe deposit box and luggage storage'
    ]
  },
  {
    id: 'dining',
    title: 'Silk Restaurant & Coffee Lounge',
    description: 'Indulge in authentic traditional recipes, sizzling kebabs, fresh bakery treats, and premium tea blends.',
    iconName: 'Coffee',
    hours: '07:00 AM - 11:30 PM',
    badge: 'Gourmet Dining',
    details: [
      'Daily buffet & à la carte breakfast',
      'Traditional Lahori & Faisalabadi specialities',
      'Artisanal espresso bar & high tea setup',
      'Private dining options for family gatherings'
    ]
  },
  {
    id: 'guest-support',
    title: 'Dedicated Guest Relations',
    description: 'Personal assistance for special requests, birthday arrangements, anniversary surprises, and corporate bookings.',
    iconName: 'Headphones',
    hours: '08:00 AM - 11:00 PM',
    badge: 'VIP Care',
    details: [
      'Event decor & room floral decorations',
      'Wake-up call & schedule reminders',
      'Foreign currency exchange guidance',
      'Medical emergency support & doctor-on-call'
    ]
  },
  {
    id: 'transfers',
    title: 'Airport & Intercity Pickup',
    description: 'Comfortable air-conditioned car transfers from Faisalabad International Airport or Daewoo bus terminal.',
    iconName: 'Plane',
    hours: 'Prior Booking',
    badge: 'Chauffeur Driven',
    details: [
      'Direct pickup from Faisalabad Airport (LYP)',
      'Luxury sedan fleet with driver',
      'Flight tracking for timely arrivals',
      'Luggage assistance included'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- EXTERIOR PHOTOS ---
  {
    id: 'g-ext-view-6',
    title: 'Silk Hotel Iconic Exterior',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158779/unnamed_6.jpg',
    description: 'Silk Hotel flagship perspective on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Silk Hotel', 'Susan Road', 'Facade', 'Main View', 'Iconic', 'Primary']
  },
  {
    id: 'g-ext-view-5',
    title: 'Silk Hotel Premier Architecture',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158492/unnamed_5.jpg',
    description: 'Silk Hotel flagship exterior view on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Silk Hotel', 'Susan Road', 'Facade', 'Main View', 'Primary']
  },
  {
    id: 'g-ext-view-4',
    title: 'Silk Hotel Flagship Elevation',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158237/unnamed_4.jpg',
    description: 'Silk Hotel premier flagship exterior view located on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Silk Hotel', 'Susan Road', 'Facade', 'Flagship View', 'Main']
  },
  {
    id: 'g-ext-view-3',
    title: 'Silk Hotel Grand Perspective',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790158067/unnamed_3.jpg',
    description: 'Silk Hotel grand exterior view located on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Silk Hotel', 'Susan Road', 'Facade', 'Grand View']
  },
  {
    id: 'g-ext-primary',
    title: 'Silk Hotel Premier Showcase',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790157810/unnamed.jpg',
    description: 'Silk Hotel exterior property view on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Premier Showcase', 'Susan Road', 'Facade', 'Main View']
  },
  {
    id: 'g-ext-main',
    title: 'Silk Hotel Main Elevation',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790156561/unnamed_1.jpg',
    description: 'Silk Hotel main exterior elevation on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Main Entrance', 'Susan Road', 'Facade']
  },
  {
    id: 'g-ext-view-2',
    title: 'Silk Hotel Building View',
    category: 'Exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790157360/unnamed_2.jpg',
    description: 'Exterior property view of Silk Hotel situated on Susan Road, Madina Town.',
    tags: ['Exterior', 'Silk Hotel', 'Susan Road', 'Facade', 'Building']
  },
  {
    id: 'g-ext-1',
    title: 'Silk Hotel Main Premier Entrance',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'Main premier front entrance view of Silk Hotel on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Entrance', 'Susan Road', 'Facade']
  },
  {
    id: 'g-ext-2',
    title: 'Silk Hotel Premier Exterior Facade',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier exterior facade view of Silk Hotel on Susan Road, Madina Town, Faisalabad.',
    tags: ['Exterior', 'Facade', 'Building']
  },
  {
    id: 'g-ext-3',
    title: 'Silk Hotel Main Building Exterior',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier exterior building view of Silk Hotel on Susan Road.',
    tags: ['Exterior', 'Building', 'Madina Town']
  },
  {
    id: 'g-ext-night',
    title: 'Silk Hotel Illuminated Night Facade',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm night lights glowing across the Silk Hotel property facade.',
    tags: ['Exterior', 'Night View', 'Lighting']
  },

  // --- LOBBY & RECEPTION PHOTOS ---
  {
    id: 'g-lobby-1',
    title: 'Grand Welcome Lobby & Reception',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious marble lobby with plush seating for arriving guests.',
    tags: ['Lobby', 'Reception', 'Marble Floor']
  },
  {
    id: 'g-lobby-2',
    title: 'Executive Lounge & Seating Area',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1561501813-97bee73c3842?auto=format&fit=crop&w=1200&q=80',
    description: 'Comfortable waiting area for business meetings and coffee.',
    tags: ['Lobby', 'Lounge', 'Seating']
  },
  {
    id: 'g-lobby-3',
    title: 'Concierge Desk & Guest Helpdesk',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: '24/7 Concierge desk ready to assist with reservations and transportation.',
    tags: ['Lobby', 'Concierge', 'Front Desk']
  },
  {
    id: 'g-lobby-4',
    title: 'Main Elevator Hall & Corridor',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Elegant marble foyer leading to elevator bank and guest rooms.',
    tags: ['Lobby', 'Corridor', 'Elevator']
  },

  // --- ROOMS & SUITES PHOTOS ---
  {
    id: 'g-room-deluxe-king-1',
    title: 'Deluxe King Bedroom View',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean, serene interior with plush King bed and ambient bedside reading lamps.',
    roomId: 'silk-deluxe-king',
    tags: ['Deluxe King', 'King Bed', 'Rooms']
  },
  {
    id: 'g-room-deluxe-king-2',
    title: 'Deluxe King Bedroom Desk & Lighting',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    description: 'Ergonomic study desk with fast optical Wi-Fi and smart temperature controls.',
    roomId: 'silk-deluxe-king',
    tags: ['Deluxe King', 'Work Desk']
  },
  {
    id: 'g-room-exec-1',
    title: 'Executive Silk Suite Master Bed',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    description: 'Master bedroom with premium silk linens and mood lighting.',
    roomId: 'silk-executive-suite',
    tags: ['Executive Suite', 'Super King Bed']
  },
  {
    id: 'g-room-exec-2',
    title: 'Executive Suite Private Seating Parlor',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    description: 'Separate living room lounge in the Executive Suite with sofa seating.',
    roomId: 'silk-executive-suite',
    tags: ['Executive Suite', 'Lounge', 'Parlor']
  },
  {
    id: 'g-room-royal-1',
    title: 'Royal Silk Presidential Suite Master Suite',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description: 'The Royal Silk Suite master bedroom featuring custom woodwork and emperor bed.',
    roomId: 'silk-royal-presidential',
    tags: ['Royal Suite', 'Emperor Bed', 'Presidential']
  },
  {
    id: 'g-room-twin-1',
    title: 'Superior Twin Comfort Room',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    description: 'Two orthopedic single twin beds ideal for corporate partners.',
    roomId: 'silk-deluxe-twin',
    tags: ['Twin Room', 'Two Beds']
  },
  {
    id: 'g-room-family-1',
    title: 'Grand Family Suite Bedroom Setup',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious connecting room layout crafted for family comfort.',
    roomId: 'silk-family-suite',
    tags: ['Family Suite', 'Connecting Room']
  },
  {
    id: 'g-room-interior-detail',
    title: 'Soft Linen & Bedside Hospitality Tray',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    description: 'In-room tea & coffee setup with fresh bottled water and daily fruit basket.',
    tags: ['Room Amenities', 'Tea Station']
  },

  // --- DINING & RESTAURANT PHOTOS ---
  {
    id: 'g-dining-1',
    title: 'Silk Fine Dining Restaurant Area',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm atmosphere for breakfast, lunch, and memorable family dinners.',
    tags: ['Dining', 'Restaurant', 'Seating']
  },
  {
    id: 'g-dining-2',
    title: 'Fresh Gourmet Breakfast Buffet',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
    description: 'Rich assortment of continental pastries, egg stations, fruits, and traditional tea.',
    tags: ['Dining', 'Breakfast Buffet', 'Gourmet']
  },
  {
    id: 'g-dining-3',
    title: 'Artisanal Coffee & High Tea Station',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    description: 'Freshly brewed espresso, green tea, and evening snacks served daily.',
    tags: ['Dining', 'Coffee Bar', 'Tea']
  },
  {
    id: 'g-dining-4',
    title: 'Authentic Pakistani Grill & BBQ Dishes',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    description: 'Mouthwatering traditional kebabs, karahi, and fresh naan baked to order.',
    tags: ['Dining', 'Pakistani Food', 'BBQ']
  },
  {
    id: 'g-dining-5',
    title: 'In-Room Breakfast Tray Service',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Private 24/7 room service breakfast delivered straight to your suite.',
    tags: ['Dining', 'Room Service', 'In-Room Breakfast']
  },

  // --- BATHROOMS & AMENITIES PHOTOS ---
  {
    id: 'g-bath-1',
    title: 'Luxury En-Suite Bathroom & Rain Shower',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    description: 'Sparkling marble bathroom with hot rainfall shower and premium toiletries.',
    tags: ['Amenities', 'Bathroom', 'Rain Shower']
  },
  {
    id: 'g-bath-2',
    title: 'Deep Soaking Bathtub in Executive Suite',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Relaxing marble bathtub with fluffy plush towels and bath accessories.',
    tags: ['Amenities', 'Bathtub', 'Executive Bath']
  },
  {
    id: 'g-bath-3',
    title: 'Silk Hotel Toiletries & Plush Bathrobes',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80',
    description: 'Complimentary high-end hygiene kit, slippers, and embroidered bathrobes.',
    tags: ['Amenities', 'Toiletries', 'Bathrobe']
  },
  {
    id: 'g-amenities-parking',
    title: 'Guarded Valet Parking Entrance',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    description: '24/7 CCTV monitored safe parking space on Susan Road, Madina Town.',
    tags: ['Amenities', 'Parking', 'Valet']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Muhammad Usman Khan',
    location: 'Lahore, Pakistan',
    rating: 5,
    comment: 'Exceptional hospitality during my business trip to Faisalabad! The Executive Suite was spotlessly clean, Wi-Fi was fast, and the staff on Susan Road went out of their way to make me feel at home.',
    date: 'August 2026',
    roomType: 'Executive Silk Suite'
  },
  {
    id: 't-2',
    name: 'Dr. Ayesha Tariq',
    location: 'Islamabad, Pakistan',
    rating: 5,
    comment: 'The location in Madina Town is fantastic. Quiet, central, and very close to top markets. The room service food was hot and delicious. Highly recommend Silk Hotel!',
    date: 'September 2026',
    roomType: 'Deluxe King Room'
  },
  {
    id: 't-3',
    name: 'Tariq & Family',
    location: 'Karachi, Pakistan',
    rating: 5,
    comment: 'We stayed in the Grand Family Suite for 3 nights for a family wedding in Faisalabad. Outstanding 24/7 service, warm staff, and very comfortable beds!',
    date: 'July 2026',
    roomType: 'Grand Family Suite'
  }
];

export const FAQS = [
  {
    question: 'Where is Silk Hotel located in Faisalabad?',
    answer: 'Silk Hotel is conveniently situated at C498+F55, Susan Road, Madina Town, Faisalabad, 38000, Pakistan — right in the heart of the city’s top commercial and dining district.'
  },
  {
    question: 'What are the standard Check-in and Check-out times?',
    answer: 'Standard Check-in begins at 02:00 PM and Check-out is until 12:00 PM. Early check-in or late check-out can be arranged based on room availability.'
  },
  {
    question: 'How can I book a room or contact the front desk?',
    answer: 'You can easily place a booking using the "Book Your Stay" button on this website, call our desk directly at +92 306 7222232, or send us a message on WhatsApp.'
  },
  {
    question: 'Is parking available on site?',
    answer: 'Yes! We provide complimentary 24/7 guarded secure parking with valet service for all stay guests.'
  },
  {
    question: 'Do rooms include free Wi-Fi and Breakfast?',
    answer: 'All rooms include high-speed fiber Wi-Fi. Breakfast is included with our Executive and Suite categories, and available as an add-on for Deluxe rooms.'
  }
];
