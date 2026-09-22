import React, { useState } from 'react';
import { HOTEL_INFO, FAQS } from '../data/hotelData';
import { Phone, MapPin, Mail, MessageSquare, Send, Clock, CheckCircle2, Building, ChevronDown, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onSuccessToast: (message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSuccessToast }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Room Reservation Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone || !formMessage) {
      alert('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onSuccessToast('Thank you! Your message has been sent to Silk Hotel desk.');
    }, 700);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Faisalabad City Center</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Contact Silk Hotel
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          We welcome your inquiries, room reservations, corporate stays, and special requests. Connect with our front desk directly at any hour.
        </p>
      </div>

      {/* Main Grid: Direct Contact Buttons + Form + Maps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Action Buttons & Hotel Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Direct Buttons */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h2 className="font-serif text-2xl font-bold text-white border-b border-slate-800 pb-3">
              Direct Desk Reach
            </h2>

            {/* Call Now Button */}
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              id="contact-call-now-btn"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold p-4 rounded-2xl flex items-center justify-between shadow-lg transition-transform active:scale-98 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-900 block">
                    Call Desk Now
                  </span>
                  <span className="text-base font-serif font-bold text-slate-950">{HOTEL_INFO.phone}</span>
                </div>
              </div>
              <span className="text-xs bg-slate-950 text-amber-400 font-bold px-3 py-1 rounded-lg">
                24/7 Active
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-4 rounded-2xl flex items-center justify-between shadow-lg transition-transform active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-300 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200 block">
                    WhatsApp Chat
                  </span>
                  <span className="text-sm font-semibold">{HOTEL_INFO.phone}</span>
                </div>
              </div>
              <span className="text-xs bg-emerald-950 text-emerald-300 font-bold px-3 py-1 rounded-lg">
                Instant Chat
              </span>
            </a>

            {/* Address Info */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3 text-xs">
              <div className="flex items-start gap-3 text-slate-300">
                <Building className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Silk Hotel Faisalabad</span>
                  <span className="text-slate-400 leading-relaxed block">{HOTEL_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 pt-2 border-t border-slate-800">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Front Desk: Open 24 Hours • 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Booking Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Send an Inquiry
          </h2>
          <p className="text-xs text-slate-400 mb-6">
            Fill out the form below and our guest relations executive will respond promptly.
          </p>

          {!submittedSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usman Chaudhry"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Subject</label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Room Reservation Inquiry">Room Reservation Inquiry</option>
                    <option value="Corporate / Bulk Booking">Corporate / Bulk Booking</option>
                    <option value="Event / Dining Query">Event / Dining Query</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Your Message or Requirements *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Specify check-in dates, number of rooms, or special requests..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-slate-950 border border-emerald-500/40 rounded-2xl space-y-4 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Inquiry Received!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you for reaching out to Silk Hotel. Our front desk officer will contact you shortly on <strong>{formPhone}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmittedSuccess(false);
                  setFormMessage('');
                }}
                className="text-xs text-amber-400 underline font-semibold hover:text-amber-300"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Google Maps Location Section */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase text-amber-400 tracking-widest">
              Exact Location
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Google Maps Location Guide
            </h2>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              HOTEL_INFO.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>Open in Google Maps App</span>
          </a>
        </div>

        <div className="bg-slate-900 p-3 rounded-3xl border border-slate-800 shadow-2xl h-[400px] overflow-hidden">
          <iframe
            title="Silk Hotel Location Map"
            src={HOTEL_INFO.googleMapsEmbed}
            className="w-full h-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto space-y-8 pt-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>Guest Information</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-white hover:text-amber-300"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
