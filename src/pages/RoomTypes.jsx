import { useState, useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import heroImg from '../assets/images/projects/img4.jpeg';
import './RoomTypes.css';

const roomTypeOptions = [
  'Bed Rooms',
  'Dining Room',
  'Kids Room',
  'Kitchen',
  'Living Room',
  'Mandir',
  'Study Room',
  'Toilet',
  'Wardrobe',
];

const categoryPlaceholderData = {
  'Bed Rooms': [
    { id: 1, label: 'BEDROOM PHOTO 01 (TALL PORTRAIT)', type: 'tall' },
    { id: 2, label: 'BEDROOM PHOTO 02 (SQUARE)', type: 'square' },
    { id: 3, label: 'BEDROOM PHOTO 03 (EXTRA TALL)', type: 'portrait' },
    { id: 4, label: 'BEDROOM PHOTO 04 (LANDSCAPE)', type: 'wide' },
    { id: 5, label: 'BEDROOM PHOTO 05 (MEDIUM TALL)', type: 'tall' },
    { id: 6, label: 'BEDROOM PHOTO 06 (SQUARE)', type: 'square' },
  ],
  'Dining Room': [
    { id: 1, label: 'DINING PHOTO 01 (LANDSCAPE)', type: 'wide' },
    { id: 2, label: 'DINING PHOTO 02 (TALL PORTRAIT)', type: 'tall' },
    { id: 3, label: 'DINING PHOTO 03 (SQUARE)', type: 'square' },
    { id: 4, label: 'DINING PHOTO 04 (EXTRA TALL)', type: 'portrait' },
    { id: 5, label: 'DINING PHOTO 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'DINING PHOTO 06 (TALL PORTRAIT)', type: 'tall' },
  ],
  'Kids Room': [
    { id: 1, label: 'KIDS ROOM 01 (TALL PORTRAIT)', type: 'tall' },
    { id: 2, label: 'KIDS ROOM 02 (LANDSCAPE)', type: 'wide' },
    { id: 3, label: 'KIDS ROOM 03 (SQUARE)', type: 'square' },
    { id: 4, label: 'KIDS ROOM 04 (EXTRA TALL)', type: 'portrait' },
    { id: 5, label: 'KIDS ROOM 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'KIDS ROOM 06 (TALL PORTRAIT)', type: 'tall' },
  ],
  'Kitchen': [
    { id: 1, label: 'KITCHEN 01 (LANDSCAPE)', type: 'wide' },
    { id: 2, label: 'KITCHEN 02 (TALL PORTRAIT)', type: 'tall' },
    { id: 3, label: 'KITCHEN 03 (EXTRA TALL)', type: 'portrait' },
    { id: 4, label: 'KITCHEN 04 (SQUARE)', type: 'square' },
    { id: 5, label: 'KITCHEN 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'KITCHEN 06 (TALL PORTRAIT)', type: 'tall' },
  ],
  'Living Room': [
    { id: 1, label: 'LIVING ROOM 01 (EXTRA TALL)', type: 'portrait' },
    { id: 2, label: 'LIVING ROOM 02 (LANDSCAPE)', type: 'wide' },
    { id: 3, label: 'LIVING ROOM 03 (SQUARE)', type: 'square' },
    { id: 4, label: 'LIVING ROOM 04 (TALL PORTRAIT)', type: 'tall' },
    { id: 5, label: 'LIVING ROOM 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'LIVING ROOM 06 (SQUARE)', type: 'square' },
  ],
  'Mandir': [
    { id: 1, label: 'MANDIR 01 (TALL PORTRAIT)', type: 'portrait' },
    { id: 2, label: 'MANDIR 02 (SQUARE)', type: 'square' },
    { id: 3, label: 'MANDIR 03 (LANDSCAPE)', type: 'wide' },
    { id: 4, label: 'MANDIR 04 (TALL PORTRAIT)', type: 'tall' },
    { id: 5, label: 'MANDIR 05 (SQUARE)', type: 'square' },
    { id: 6, label: 'MANDIR 06 (LANDSCAPE)', type: 'wide' },
  ],
  'Study Room': [
    { id: 1, label: 'STUDY ROOM 01 (TALL PORTRAIT)', type: 'tall' },
    { id: 2, label: 'STUDY ROOM 02 (LANDSCAPE)', type: 'wide' },
    { id: 3, label: 'STUDY ROOM 03 (SQUARE)', type: 'square' },
    { id: 4, label: 'STUDY ROOM 04 (EXTRA TALL)', type: 'portrait' },
    { id: 5, label: 'STUDY ROOM 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'STUDY ROOM 06 (TALL PORTRAIT)', type: 'tall' },
  ],
  'Toilet': [
    { id: 1, label: 'TOILET 01 (TALL PORTRAIT)', type: 'portrait' },
    { id: 2, label: 'TOILET 02 (LANDSCAPE)', type: 'wide' },
    { id: 3, label: 'TOILET 03 (SQUARE)', type: 'square' },
    { id: 4, label: 'TOILET 04 (TALL PORTRAIT)', type: 'tall' },
    { id: 5, label: 'TOILET 05 (LANDSCAPE)', type: 'wide' },
    { id: 6, label: 'TOILET 06 (SQUARE)', type: 'square' },
  ],
  'Wardrobe': [
    { id: 1, label: 'WARDROBE 01 (EXTRA TALL)', type: 'portrait' },
    { id: 2, label: 'WARDROBE 02 (TALL PORTRAIT)', type: 'tall' },
    { id: 3, label: 'WARDROBE 03 (LANDSCAPE)', type: 'wide' },
    { id: 4, label: 'WARDROBE 04 (SQUARE)', type: 'square' },
    { id: 5, label: 'WARDROBE 05 (TALL PORTRAIT)', type: 'tall' },
    { id: 6, label: 'WARDROBE 06 (LANDSCAPE)', type: 'wide' },
  ],
};

export default function RoomTypes() {
  const [selectedRoom, setSelectedRoom] = useState('Study Room');
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('Study Room');
  const selectorRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setActiveKey(room);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentPlaceholders = categoryPlaceholderData[selectedRoom] || categoryPlaceholderData['Study Room'];

  return (
    <div className="room-types-page">
      <Header />

      <main>
        {/* 1. HERO / BANNER SECTION */}
        <section 
          className="room-types-hero" 
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-label="Explore By Room Types Banner"
        >
          <div className="room-types-hero-overlay" />
          <div className="room-types-hero-container">
            <h1 className="room-types-hero-title">EXPLORE BY ROOM TYPES</h1>
          </div>
        </section>

        {/* 2. ROOM TYPE SELECTOR AREA */}
        <section className="room-types-selector-section" aria-label="Room Type Selection">
          <div className="room-types-selector-container" ref={selectorRef}>
            <button 
              type="button" 
              className={`room-type-selector-btn ${isOpen ? 'active' : ''}`}
              onClick={toggleDropdown}
              aria-expanded={isOpen}
              aria-label="Select Room Type"
            >
              <span className="selector-label">{selectedRoom}</span>
              <svg 
                className={`selector-chevron ${isOpen ? 'open' : ''}`}
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>

            {/* Dropdown Options Menu */}
            {isOpen && (
              <div className="selector-dropdown-menu" role="menu" data-lenis-prevent="true">
                {roomTypeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`dropdown-option-btn ${selectedRoom === option ? 'active' : ''}`}
                    onClick={() => handleSelectRoom(option)}
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. ASYMMETRIC MASONRY PLACEHOLDER GALLERY GRID */}
        <section className="room-types-gallery-section" aria-label={`${selectedRoom} Gallery`}>
          <div className="room-types-gallery-container">
            <div key={activeKey} className="asymmetric-gallery-grid">
              {currentPlaceholders.map((item) => (
                <div 
                  key={item.id} 
                  className={`gallery-tile tile-${item.type}`}
                >
                  <div className="tile-image-frame placeholder-frame">
                    <div className="placeholder-inner-content">
                      <svg viewBox="0 0 24 24" className="placeholder-icon-svg" aria-hidden="true">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                      <span className="placeholder-text-label">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
