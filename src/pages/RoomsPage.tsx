import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { Room, GalleryItem } from '../types';
import { Users, Wifi, Tv, Coffee, Shield, Sparkles, Calendar, Phone, Check, ChevronRight, SlidersHorizontal, Camera, Image as ImageIcon } from 'lucide-react';

interface RoomsPageProps {
  onOpenBookingModal: (roomId?: string) => void;
  onOpenGalleryItem?: (item: GalleryItem) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBookingModal, onOpenGalleryItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRoomDetail, setActiveRoomDetail] = useState<Room | null>(null);

  const categories = ['All', 'Deluxe', 'Executive', 'Suite', 'Family'];

  const filteredRooms =
    selectedCategory === 'All'
      ? ROOMS
      : ROOMS.filter((r) => r.category === selectedCategory);

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Accommodations & Living</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Rooms & Executive Suites
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          Discover Silk Hotel’s selection of rooms engineered for ultimate tranquility, equipped with premium orthopedic mattresses, high-speed Wi-Fi, and 24/7 in-room dining.
        </p>

        {/* Category Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat} {cat !== 'All' ? 'Rooms' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Rooms List Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Room Image Gallery Box */}
            <div
              onClick={() => {
                if (onOpenGalleryItem) {
                  onOpenGalleryItem({
                    id: `g-room-page-${room.id}`,
                    title: room.name,
                    category: 'Rooms',
                    image: room.image,
                    description: room.description,
                    roomId: room.id
                  });
                }
              }}
              className="lg:col-span-5 relative group min-h-[300px] lg:min-h-full overflow-hidden cursor-pointer"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-slate-950/90 text-amber-400 font-bold px-3 py-1 rounded-md text-xs border border-amber-500/30">
                {room.category} Category
              </div>
              <div className="absolute top-4 right-4 bg-amber-500/90 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-md text-xs shadow flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" />
                <span>{room.gallery.length} Photos</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="bg-slate-950/80 px-2.5 py-1 rounded-md">{room.sizeSqFt} sq ft space</span>
                <span className="bg-slate-950/80 px-2.5 py-1 rounded-md">{room.bedType}</span>
              </div>
            </div>

            {/* Room Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {room.name}
                    </h2>
                    <p className="text-xs text-amber-400/90 italic mt-0.5">{room.tagline}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs text-slate-400 block">Rate starting at</span>
                    <span className="font-serif text-2xl font-bold text-amber-400">
                      PKR {room.pricePKR.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block">/ night (approx. ${room.priceUSD} USD)</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {room.description}
                </p>

                {/* Key Amenity Pills */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Included Amenities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-400 w-full sm:w-auto justify-between sm:justify-start">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    Max {room.capacity}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">Instant Confirmation</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveRoomDetail(room)}
                    className="w-1/2 sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-3 rounded-xl transition-colors"
                  >
                    Quick Specs
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(room.id)}
                    className="w-1/2 sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Room</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Room Detail Modal Popup */}
      {activeRoomDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-xl font-bold text-white">{activeRoomDetail.name}</h3>
              <button
                onClick={() => setActiveRoomDetail(null)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <img
              src={activeRoomDetail.image}
              alt={activeRoomDetail.name}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="text-sm space-y-2 text-slate-300">
              <p>{activeRoomDetail.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 font-mono text-amber-400">
                <div>Capacity: {activeRoomDetail.capacity}</div>
                <div>Bedding: {activeRoomDetail.bedType}</div>
                <div>Room Size: {activeRoomDetail.sizeSqFt} sq ft</div>
                <div>Rate: PKR {activeRoomDetail.pricePKR.toLocaleString()} / night</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => {
                  const id = activeRoomDetail.id;
                  setActiveRoomDetail(null);
                  onOpenBookingModal(id);
                }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs"
              >
                Proceed to Book {activeRoomDetail.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
