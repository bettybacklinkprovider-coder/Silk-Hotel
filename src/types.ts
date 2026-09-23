export type PageRoute = 'home' | 'rooms' | 'gallery' | 'services' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: 'Deluxe' | 'Executive' | 'Suite' | 'Family';
  tagline: string;
  pricePKR: number;
  priceUSD: number;
  capacity: string;
  bedType: string;
  sizeSqFt: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
}

export interface HotelService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  hours: string;
  badge?: string;
  details: string[];
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rooms' | 'Dining' | 'Lobby' | 'Amenities' | 'Exterior';
  image: string;
  description: string;
  roomId?: string;
  tags?: string[];
}

export interface BookingDetails {
  roomCategory: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  roomType: string;
}
