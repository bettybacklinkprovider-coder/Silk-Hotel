import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Calendar, Menu, X, Hotel, ChevronRight, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (roomCategory?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Silk Hotel"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 truncate max-w-md">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{HOTEL_INFO.area}, {HOTEL_INFO.city}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Reservation</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-amber-400 font-medium">Check-in: 02:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
            id="header-brand-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                SILK HOTEL
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-400/90 font-medium -mt-0.5">
                FAISALABAD
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              id="header-book-now-btn"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold px-5 py-2.5 rounded-md text-sm shadow-md hover:shadow-amber-500/20 transition-all transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-3 py-1">
              Navigation Pages
            </div>
            {navItems.map((item) => {
              const isActive = activeRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400 border-l-4 border-amber-500'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-lg shadow-md transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay Online</span>
              </button>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Desk: {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
