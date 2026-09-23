import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onOpenBookingModal?: (roomId?: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onOpenBookingModal,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((g) => g.id === item.id);
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
              {item.category}
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white line-clamp-1">
                {item.title}
              </h3>
              <span className="text-xs text-slate-400">
                Photo {activeIndex + 1} of {items.length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onOpenBookingModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBookingModal(item.roomId);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl shadow transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[420px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[58vh] w-auto max-w-full object-contain select-none"
          />

          {/* Nav arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-all border border-slate-700/50 shadow-xl"
                title="Previous photo (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-all border border-slate-700/50 shadow-xl"
                title="Next photo (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {items.length > 1 && (
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 overflow-x-auto flex items-center gap-2 scrollbar-thin">
            {items.map((gItem, idx) => (
              <button
                key={gItem.id}
                onClick={() => onSelect(gItem)}
                className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all border-2 ${
                  idx === activeIndex
                    ? 'border-amber-400 scale-105 shadow-md'
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={gItem.image}
                  alt={gItem.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Footer Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="italic text-slate-400 text-center sm:text-left">{item.description}</p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-amber-400 font-semibold whitespace-nowrap">
              Silk Hotel • Susan Road, Faisalabad
            </span>
            {onOpenBookingModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBookingModal(item.roomId);
                }}
                className="sm:hidden bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg"
              >
                Book
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
