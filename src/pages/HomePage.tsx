import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryItem } from '../types';
import { HOTEL_INFO, ROOMS, SERVICES, GALLERY_ITEMS, TESTIMONIALS } from '../data/hotelData';
import {
  Calendar,
  Phone,
  MapPin,
  Star,
  Wifi,
  UtensilsCrossed,
  Sparkles,
  Car,
  Clock,
  Coffee,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  ArrowRight,
  ShieldCheck,
  Building,
  HeartHandshake
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (roomId?: string) => void;
  onOpenGalleryItem: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onOpenGalleryItem,
}) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('All');
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);

  const heroImages = HOTEL_INFO.heroImages && HOTEL_INFO.heroImages.length > 0
    ? HOTEL_INFO.heroImages
    : [HOTEL_INFO.mainImage];

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const filteredGallery =
    activeGalleryFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeGalleryFilter);

  return (
    <div className="w-full space-y-0">
      {/* SECTION 1: HERO SECTION WITH AUTOMATIC SLIDER */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden group">
        {/* Background Hotel Images with smooth fade transition */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((imgUrl, idx) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Silk Hotel Exterior ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        {/* Hero Slider Controls */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="absolute left-4 z-20 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-amber-500 hover:text-slate-950 backdrop-blur-md transition-all border border-slate-700/50 opacity-80 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)}
              className="absolute right-4 z-20 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-amber-500 hover:text-slate-950 backdrop-blur-md transition-all border border-slate-700/50 opacity-80 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Luxury Accommodation in Faisalabad</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Silk Hotel</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Experience refined Pakistani hospitality, executive luxury suites, and supreme comfort in the vibrant heart of Faisalabad on Susan Road, Madina Town.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              id="hero-book-stay-btn"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              id="hero-contact-us-btn"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-amber-500/50 font-semibold px-8 py-4 rounded-xl text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Key Feature Chips */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Free High-Speed Wi-Fi
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> 24/7 Room Service
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Secure Valet Parking
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Prime Madina Town Location
            </span>
          </div>

          {/* Slider Indicator Dots */}
          {heroImages.length > 1 && (
            <div className="pt-6 flex items-center justify-center gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentHeroIndex
                      ? 'w-8 bg-amber-400'
                      : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: ABOUT SILK HOTEL */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src={HOTEL_INFO.mainImage}
                  alt="Silk Hotel Main Exterior"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-amber-400 font-serif font-bold text-lg">Silk Hotel</span>
                    <p className="text-xs text-slate-300">Susan Road, Madina Town, Faisalabad</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Card Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 p-6 rounded-2xl shadow-2xl flex-col items-center justify-center text-center max-w-[200px]">
                <span className="font-serif text-3xl font-bold">100%</span>
                <span className="text-xs font-semibold uppercase tracking-wider mt-1">
                  Comfort & Cleanliness
                </span>
              </div>
            </div>

            {/* Text Description Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <Building className="w-4 h-4" />
                <span>About Silk Hotel</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                A Refined Haven of Elegance & Warm Hospitality
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Welcome to <strong>Silk Hotel</strong>, your premier destination for comfortable, secure, and luxurious lodging in Faisalabad. Nestled strategically on Susan Road in Madina Town, our property offers unmatched accessibility to Faisalabad’s top commercial centers, textile markets, and fine dining hotspots.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you are visiting for business meetings, family functions, or casual getaways, Silk Hotel presents tastefully decorated rooms, modern climate control, high-speed fiber internet, and round-the-clock room service delivered with authentic Pakistani warmth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <HeartHandshake className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">Welcoming Ambience</h4>
                  <p className="text-xs text-slate-400 mt-1">Peaceful, pristine atmosphere for restful stay</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">24/7 Security</h4>
                  <p className="text-xs text-slate-400 mt-1">CCTV monitored premises & secure parking</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('rooms')}
                  className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors group"
                >
                  <span>Explore Rooms & Accommodations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Our Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Luxury Rooms & Executive Suites
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Select from our collection of meticulously curated rooms featuring orthopedic bedding, smart entertainment, and marble en-suite bathrooms.
              </p>
            </div>

            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shrink-0"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.filter((r) => r.featured).map((room) => (
              <div
                key={room.id}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col group"
              >
                {/* Room Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-amber-400 border border-amber-500/30">
                    {room.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-extrabold shadow-md">
                    PKR {room.pricePKR.toLocaleString()} / night
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Meta Badges */}
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      {room.capacity}
                    </span>
                    <span className="text-slate-400">{room.bedType}</span>
                    <span className="text-slate-400">{room.sizeSqFt} sq ft</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBookingModal(room.id)}
                      className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs transition-colors shadow-md text-center"
                    >
                      Book This Room
                    </button>
                    <button
                      onClick={() => onNavigate('rooms')}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 px-3 rounded-lg text-xs transition-colors"
                      title="View room details"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOTEL SERVICES & AMENITIES */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Guest Comfort & Convenience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Hotel Services & Premium Amenities
            </h2>
            <p className="text-slate-400 text-sm">
              We ensure every aspect of your stay is effortless, offering 24/7 guest care and modern conveniences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/736x/3d/3b/e3/3d3be3361990307189a8a9d7b626341b.jpg"
                  alt="High-Speed Fiber Wi-Fi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <Wifi className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">High-Speed Fiber Wi-Fi</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enjoy complimentary ultra-fast optical Wi-Fi connection in all rooms, lobby areas, and dining space.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/1200x/c5/a9/60/c5a960597530193de019cd69afd6b0be.jpg"
                  alt="24/7 Room Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">24/7 Room Service</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Freshly prepared local Faisalabadi, Pakistani, and continental dishes served right to your room anytime.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/736x/ec/0f/52/ec0f52fe9deef52fd91f3d309df2ed2f.jpg"
                  alt="Daily Housekeeping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Daily Housekeeping</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Thorough room sanitization, daily fresh linen replacement, and prompt dry cleaning options.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/736x/f7/19/fe/f719feeec8cda7f7e975665704a993fa.jpg"
                  alt="Secure Valet Parking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <Car className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Secure Valet Parking</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  CCTV-monitored safe on-site parking with helpful valet drivers available round the clock.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/1200x/1a/b8/9a/1ab89abd1d320459e69d56d68e1b0958.jpg"
                  alt="24/7 Front Reception"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">24/7 Front Reception</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Always-on desk support for express check-in, city transportation, and guest assistance.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all overflow-hidden group flex flex-col justify-between">
              <div className="h-36 overflow-hidden relative border-b border-slate-800/80">
                <img
                  src="https://i.pinimg.com/736x/10/51/b6/1051b6a145622940dd3a8847c9af66ca.jpg"
                  alt="Silk Fine Dining & Cafe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400">
                  <Coffee className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Silk Fine Dining & Cafe</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enjoy hot breakfast, gourmet teas, and appetizing dinners in our elegant dining lounge.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md"
            >
              <span>View Full Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOTEL GALLERY */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Visual Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Silk Hotel Photo Gallery
            </h2>
            <p className="text-slate-400 text-sm">
              Take a visual tour of our luxurious rooms, reception lobby, fine dining area, and hotel exterior.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['All', 'Rooms', 'Lobby', 'Dining', 'Amenities', 'Exterior'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeGalleryFilter === cat
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.slice(0, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenGalleryItem(item)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 shadow-md bg-slate-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-white font-bold text-sm truncate">{item.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
                    Click to enlarge photo
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-xl transition-all"
            >
              <span>Explore Full Photo Gallery Page ({GALLERY_ITEMS.length} Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / BOOKING CTA & GOOGLE MAPS */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Info & CTA Box */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Us in Faisalabad</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Plan Your Visit to Silk Hotel Today
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you wish to reserve an executive suite for tonight or inquire about corporate room packages, our team on Susan Road is at your service 24/7.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Hotel Phone Number</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-lg font-serif font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Hotel Address</span>
                    <p className="text-sm text-slate-200 leading-snug">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Full Contact Page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Embedded Google Map */}
            <div className="bg-slate-950 p-2 rounded-2xl border border-slate-800 shadow-2xl h-[380px] sm:h-[450px] relative overflow-hidden">
              <iframe
                title="Silk Hotel Faisalabad Location Map"
                src={HOTEL_INFO.googleMapsEmbed}
                className="w-full h-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
