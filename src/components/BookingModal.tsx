import React, { useState } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types';
import { X, Calendar, Users, Phone, Mail, User, CheckCircle2, FileText, Download, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialRoomId?: string;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialRoomId,
  onClose,
  onSuccess,
}) => {
  const defaultRoom = ROOMS.find((r) => r.id === initialRoomId) || ROOMS[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(defaultRoom.id);
  const [checkIn, setCheckIn] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState<string>(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmationReceipt, setConfirmationReceipt] = useState<{
    bookingRef: string;
    room: Room;
    nights: number;
    totalAmountPKR: number;
    checkIn: string;
    checkOut: string;
    guests: number;
    guestName: string;
    phone: string;
  } | null>(null);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, checkOutDate.getTime() - checkInDate.getTime());
  const calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  const totalPricePKR = currentRoom.pricePKR * calculatedNights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your full name and contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refNumber = 'SILK-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationReceipt({
        bookingRef: refNumber,
        room: currentRoom,
        nights: calculatedNights,
        totalAmountPKR: totalPricePKR,
        checkIn,
        checkOut,
        guests,
        guestName: fullName,
        phone,
      });
      setIsSubmitting(false);
      onSuccess(`Room reservation request submitted successfully! Ref: ${refNumber}`);
    }, 800);
  };

  const handleWhatsAppConfirmation = () => {
    if (!confirmationReceipt) return;
    const msg = `Hello Silk Hotel! I have submitted a reservation on your website.%0A%0A*Ref:* ${confirmationReceipt.bookingRef}%0A*Guest:* ${confirmationReceipt.guestName}%0A*Room:* ${confirmationReceipt.room.name}%0A*Check-in:* ${confirmationReceipt.checkIn}%0A*Check-out:* ${confirmationReceipt.checkOut}%0A*Total:* PKR ${confirmationReceipt.totalAmountPKR.toLocaleString()}%0A%0APlease confirm availability. Thank you!`;
    window.open(`https://wa.me/923067222232?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold font-serif text-lg shadow">
              S
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Book Your Stay</h3>
              <p className="text-xs text-amber-400">Silk Hotel • Susan Road, Madina Town, Faisalabad</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!confirmationReceipt ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-slate-200">
            {/* Select Room */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Select Accommodation
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} — PKR {r.pricePKR.toLocaleString()} / night ({r.capacity})
                  </option>
                ))}
              </select>
            </div>

            {/* Room Preview Strip */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center gap-4">
              <img
                src={currentRoom.image}
                alt={currentRoom.name}
                className="w-20 h-16 rounded-lg object-cover shrink-0 border border-slate-800"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-white text-sm font-semibold truncate">{currentRoom.name}</h4>
                <p className="text-xs text-slate-400 truncate">{currentRoom.tagline}</p>
                <div className="text-xs font-bold text-amber-400 mt-1">
                  Rs. {currentRoom.pricePKR.toLocaleString()} <span className="text-slate-400 font-normal">/ night</span>
                </div>
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Muhammad Ali"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Special Requests or Arrival Time
              </label>
              <textarea
                rows={2}
                placeholder="Airport transfer, late check-in, extra bed, dietary requests..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Price Summary Box */}
            <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Total Est. Stay ({calculatedNights} Night{calculatedNights > 1 ? 's' : ''})</span>
                <span className="text-xl font-bold font-serif text-amber-400">
                  Rs. {totalPricePKR.toLocaleString()} <span className="text-xs font-normal text-slate-400">PKR</span>
                </span>
              </div>
              <div className="text-right text-xs text-slate-400">
                <span>No prepayment required</span>
                <span className="block text-emerald-400 font-medium">Free cancellation at desk</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processing Reservation...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm Reservation Request</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Confirmation Receipt View */
          <div className="p-6 space-y-6 text-slate-200 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Thank You, {confirmationReceipt.guestName}!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your reservation at Silk Hotel has been logged. Our guest desk will reach out shortly.
              </p>
            </div>

            {/* Receipt Details Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left text-sm space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-xs">Booking Reference:</span>
                <span className="font-mono font-bold text-amber-400">{confirmationReceipt.bookingRef}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs">Selected Room:</span>
                <span className="font-semibold text-white">{confirmationReceipt.room.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs">Check-in:</span>
                <span className="text-slate-200">{confirmationReceipt.checkIn} (02:00 PM)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs">Check-out:</span>
                <span className="text-slate-200">{confirmationReceipt.checkOut} (12:00 PM)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs">Duration:</span>
                <span className="text-slate-200">{confirmationReceipt.nights} Night(s)</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-800 pt-2 font-bold">
                <span className="text-slate-300">Total Due at Desk:</span>
                <span className="text-amber-400 font-serif text-lg">
                  PKR {confirmationReceipt.totalAmountPKR.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Booking Voucher via WhatsApp</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Desk Immediately: {HOTEL_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setConfirmationReceipt(null);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white underline pt-2"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
