import React from 'react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, MessageSquare, ArrowUpRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner Feature Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-white font-semibold">Premium Hospitality</h4>
              <p className="text-xs text-slate-400">Refined luxury, pristine clean rooms, & modern amenities</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-white font-semibold">24/7 Front Reception</h4>
              <p className="text-xs text-slate-400">Always available for guest assistance & room service</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-white font-semibold">Best Rate Guarantee</h4>
              <p className="text-xs text-slate-400">Direct booking advantages & instant WhatsApp support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-serif font-bold text-xl">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                SILK HOTEL
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Silk Hotel offers world-class accommodations, executive suites, gourmet in-room dining, and 24/7 guest services in Madina Town, Faisalabad.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenBookingModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2 rounded transition-colors"
              >
                Book Online
              </button>
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800/60 hover:bg-emerald-700/80 text-emerald-300 border border-emerald-600/30 text-xs font-medium px-4 py-2 rounded flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">
              Website Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rooms')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Rooms & Suites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Hotel Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Contact & Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Categories */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">
              Our Room Types
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-amber-300 cursor-pointer" onClick={() => handleNavClick('rooms')}>
                Executive Silk Suite
              </li>
              <li className="hover:text-amber-300 cursor-pointer" onClick={() => handleNavClick('rooms')}>
                Royal Silk Presidential Suite
              </li>
              <li className="hover:text-amber-300 cursor-pointer" onClick={() => handleNavClick('rooms')}>
                Deluxe King Room
              </li>
              <li className="hover:text-amber-300 cursor-pointer" onClick={() => handleNavClick('rooms')}>
                Superior Twin Comfort
              </li>
              <li className="hover:text-amber-300 cursor-pointer" onClick={() => handleNavClick('rooms')}>
                Grand Family Suite
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">
              Hotel Contact
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-amber-300 font-medium">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300">
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Silk Hotel Faisalabad. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Susan Road, Madina Town, Faisalabad</span>
            <span>•</span>
            <button onClick={() => handleNavClick('contact')} className="hover:text-amber-400 transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
