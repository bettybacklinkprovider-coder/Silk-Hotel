import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { GalleryModal } from './components/GalleryModal';
import { Toast, ToastMessage } from './components/Toast';
import { GALLERY_ITEMS } from './data/hotelData';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Sync hash routing if user opens with #rooms, #services, #contact
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'rooms', 'services', 'contact'].includes(hash)) {
        setActiveRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setActiveRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({
      id: Date.now().toString(),
      type,
      title,
      message,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Global Navigation Header */}
      <Header
        activeRoute={activeRoute}
        onNavigate={navigateTo}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page Area - 4 Separate Routes */}
      <main className="flex-1 w-full">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBookingModal={handleOpenBookingModal}
            onOpenGalleryItem={(item) => setSelectedGalleryItem(item)}
          />
        )}

        {activeRoute === 'rooms' && (
          <RoomsPage onOpenBookingModal={handleOpenBookingModal} />
        )}

        {activeRoute === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenBookingModal()}
          />
        )}

        {activeRoute === 'contact' && (
          <ContactPage
            onSuccessToast={(msg) => showToast('Message Sent', msg, 'success')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Universal Online Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialRoomId={selectedRoomId}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={(msg) => {
          showToast('Reservation Request Received', msg, 'success');
        }}
      />

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
