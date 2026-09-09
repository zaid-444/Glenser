import { useState, useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import heroImg from '../assets/images/projects/img4.jpeg';
import './RoomTypes.css';

import roomTypesData from '../data/roomTypesData.json';

const { roomTypeOptions, categories: categoryGalleryData } = roomTypesData;

export default function RoomTypes() {
  const [selectedRoom, setSelectedRoom] = useState('Bed Rooms');
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('Bed Rooms');
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

  const currentGalleryItems = categoryGalleryData[selectedRoom] || categoryGalleryData['Bed Rooms'];

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

        {/* 3. MASONRY GALLERY GRID */}
        <section className="room-types-gallery-section" aria-label={`${selectedRoom} Gallery`}>
          <div className="room-types-gallery-container">
            <div key={activeKey} className="asymmetric-gallery-grid">
              {currentGalleryItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`gallery-tile ${item.type ? `tile-${item.type}` : ''}`}
                >
                  {item.src ? (
                    <div className="tile-image-frame real-image-frame">
                      <img 
                        src={item.src} 
                        alt={item.alt || selectedRoom} 
                        className="gallery-tile-img" 
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="tile-image-frame placeholder-frame">
                      <div className="placeholder-inner-content">
                        <svg viewBox="0 0 24 24" className="placeholder-icon-svg" aria-hidden="true">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                        <span className="placeholder-text-label">{item.label}</span>
                      </div>
                    </div>
                  )}
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
