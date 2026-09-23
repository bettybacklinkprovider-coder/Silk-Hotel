import React from 'react';
import { SERVICES, HOTEL_INFO } from '../data/hotelData';
import { PageRoute } from '../types';
import {
  UtensilsCrossed,
  Sparkles,
  Wifi,
  Car,
  Clock,
  Coffee,
  Headphones,
  Plane,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
  ShieldCheck
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-7 h-7" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7" />;
      case 'Wifi':
        return <Wifi className="w-7 h-7" />;
      case 'Car':
        return <Car className="w-7 h-7" />;
      case 'Clock':
        return <Clock className="w-7 h-7" />;
      case 'Coffee':
        return <Coffee className="w-7 h-7" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7" />;
      case 'Plane':
        return <Plane className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Hospitality & Guest Care</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Services & Guest Amenities
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          At Silk Hotel, we pride ourselves on providing comprehensive amenities and personalized assistance to ensure your stay in Faisalabad is perfectly seamless.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-6"
          >
            {service.image && (
              <div className="h-44 w-full overflow-hidden relative border-b border-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              </div>
            )}
            <div className={`space-y-4 ${service.image ? 'p-8 pt-2' : 'p-8'}`}>
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                {service.badge && (
                  <span className="bg-slate-950 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs text-amber-400/90 font-mono block mt-1">
                  Availability: {service.hours}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Desk: {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Special Request Callout */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Have a Custom Request or Airport Transfer Needed?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Whether you need early morning airport pickup from LYP Airport, late check-out, or custom dietary preparation, our guest relations team on Susan Road is ready to arrange it for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors"
          >
            Go to Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};
