import React, { useState } from 'react';
import { GalleryItem, PageRoute } from '../types';
import { GALLERY_ITEMS, ROOMS } from '../data/hotelData';
import {
  Camera,
  Search,
  Filter,
  Sparkles,
  Calendar,
  ChevronRight,
  Maximize2,
  Tag,
  Bed,
  CheckCircle2
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (roomId?: string) => void;
  onOpenGalleryItem: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onOpenGalleryItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string>('All');

  const categories = ['All', 'Exterior', 'Rooms', 'Lobby', 'Dining', 'Amenities'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    // Category match
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;

    // Room specific match if filtered
    const roomMatch =
      selectedRoomFilter === 'All' || item.roomId === selectedRoomFilter;

    // Search query match
    const searchLower = searchQuery.toLowerCase().trim();
    const searchMatch =
      !searchLower ||
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchLower)));

    return categoryMatch && roomMatch && searchMatch;
  });

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <Camera className="w-4 h-4 text-amber-400" />
          <span>Official Photo Gallery • {GALLERY_ITEMS.length} Photos</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Explore Silk Hotel
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          Browse authentic photographs of our property on Susan Road, Madina Town — including exterior architecture, luxury king suites, marble reception lobby, gourmet restaurant, and en-suite bath amenities.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="pt-6 max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search photos (e.g. Executive Suite, Entrance, Breakfast, Bathroom)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 text-slate-100 placeholder:text-slate-500 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Room Filter Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0">
              <select
                value={selectedRoomFilter}
                onChange={(e) => setSelectedRoomFilter(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 text-slate-200 text-sm rounded-xl px-4 py-3 appearance-none pr-8 cursor-pointer"
              >
                <option value="All">All Rooms & Areas</option>
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
              <Bed className="w-4 h-4 text-amber-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Photo Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 max-w-lg mx-auto p-8 space-y-4">
            <Filter className="w-10 h-10 text-amber-400 mx-auto opacity-60" />
            <h3 className="font-serif text-xl font-bold text-white">No photos matched your search</h3>
            <p className="text-xs text-slate-400">
              Try clearing the search text or switching photo categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setSelectedRoomFilter('All');
              }}
              className="bg-amber-500 text-slate-950 font-bold px-5 py-2 rounded-lg text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const linkedRoom = ROOMS.find((r) => r.id === item.roomId);

              return (
                <div
                  key={item.id}
                  className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
                >
                  {/* Photo Thumbnail */}
                  <div
                    onClick={() => onOpenGalleryItem(item)}
                    className="relative h-64 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                      {item.category}
                    </div>

                    {/* Zoom Icon Button */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-500 hover:text-slate-950">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Overlay Title */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-serif font-bold text-sm truncate group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta & CTAs */}
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800/80 space-y-3">
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 text-[10px]">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        onClick={() => onOpenGalleryItem(item)}
                        className="flex-1 text-left text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <span>View Photo</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {linkedRoom ? (
                        <button
                          onClick={() => onOpenBookingModal(linkedRoom.id)}
                          className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow transition-colors"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>Book Room</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onOpenBookingModal()}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Book Stay
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto pt-8">
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Ready for Your Visit?</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Reserve Your Stay at Silk Hotel Faisalabad
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Enjoy top rates, instant confirmation, 24/7 room service, and secure valet parking on Susan Road, Madina Town.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm shadow-xl transition-all"
            >
              Book Room Now
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-4 rounded-xl text-sm border border-slate-700 transition-colors"
            >
              View Room Rates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
