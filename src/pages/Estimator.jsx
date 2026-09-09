import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Estimator.css';

// COMMON CUSTOM DROPDOWN COMPONENT (UNIFIED STYLING & BEHAVIOR)
function CustomDropdown({ value, options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="custom-dropdown-container"
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      <div
        className="custom-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || placeholder}</span>
        <span className={`select-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {isOpen && (
        <div
          className="custom-dropdown-menu"
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
        >
          {placeholder && (
            <div
              className={`custom-dropdown-option ${value === '' ? 'selected' : ''}`}
              onMouseDown={() => {
                onChange('');
                setIsOpen(false);
              }}
            >
              {placeholder}
            </div>
          )}
          {options.map((opt) => (
            <div
              key={opt}
              className={`custom-dropdown-option ${value === opt ? 'selected' : ''}`}
              onMouseDown={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Estimator() {
  // INITIAL UNSELECTED STATES (NO AUTO-SELECTED DEFAULTS ON PAGE LANDING)
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [propertyDetails, setPropertyDetails] = useState({
    bhkType: '',
    projectType: '',
    city: '',
    area: '',
    floorLevel: '',
    carpetArea: 1000,
  });

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [numBathrooms, setNumBathrooms] = useState(0);

  const [selectedAC, setSelectedAC] = useState(null);
  const [numACUnits, setNumACUnits] = useState(0);

  const steps = [
    { id: 1, label: 'Design Package' },
    { id: 2, label: 'Property Details' },
    { id: 3, label: 'Room Config' },
    { id: 4, label: 'Air Conditioning' },
  ];

  const packages = [
    {
      id: 'essential',
      badge: 'ESSENTIAL',
      title: 'Essential',
      priceRange: '₹1,000 - ₹1,300 / sqft',
    },
    {
      id: 'comfort',
      badge: 'COMFORT',
      title: 'Comfort',
      priceRange: '₹1,500 - ₹2,000 / sqft',
    },
    {
      id: 'premium',
      badge: 'PREMIUM',
      title: 'Premium',
      priceRange: '₹2,000 - ₹3,500 / sqft',
    },
    {
      id: 'luxe',
      badge: 'LUXE',
      title: 'Luxe',
      priceRange: '₹3,500 - ₹5,500 / sqft',
    },
  ];

  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK / Villa'];
  const projectTypeOptions = [
    'New Home Interiors',
    'Renovation / Refurbishment',
    'Partial Interiors',
  ];
  const cityOptions = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai'];
  const areaOptions = [
    'Indiranagar',
    'Koramangala',
    'HSR Layout',
    'Whitefield',
    'Sarjapur Road',
    'Electronic City',
    'Yelahanka',
    'JP Nagar',
    'Bannerghatta Road',
    'Bellandur',
  ];
  const floorLevelOptions = [
    'G to 5th Floor',
    '6th to 15th Floor',
    '16th Floor & Above',
  ];

  // STEP 3: ROOM CONFIGURATION DATA & AUTO PRESET LOGIC
  const roomCategories = [
    {
      category: 'LIVING & COMMON AREAS',
      icon: '🛋️',
      rooms: [
        { id: 'living', label: 'Living Room', icon: '🛋️' },
        { id: 'dining', label: 'Dining Area', icon: '🍽️' },
        { id: 'foyer', label: 'Entry Foyer', icon: '🚪' },
        { id: 'family', label: 'Family / Lounge', icon: '🏡' },
        { id: 'tv', label: 'TV / Media Room', icon: '📺' },
        { id: 'balcony', label: 'Balcony / Deck', icon: '🌿' },
        { id: 'puja', label: 'Puja Room', icon: '🪔' },
        { id: 'other', label: 'Other Room', icon: '✏️' },
      ],
    },
    {
      category: 'BEDROOMS',
      icon: '🛏️',
      rooms: [
        { id: 'master', label: 'Master Bedroom', icon: '🛏️' },
        { id: 'bed2', label: 'Bedroom 2', icon: '🛏️' },
        { id: 'bed3', label: 'Bedroom 3', icon: '🛏️' },
        { id: 'bed4', label: 'Bedroom 4', icon: '🛏️' },
        { id: 'bed5', label: 'Bedroom 5', icon: '🛏️' },
        { id: 'bed6', label: 'Bedroom 6', icon: '🛏️' },
        { id: 'study', label: 'Study / Office', icon: '💻' },
        { id: 'kids', label: 'Kids Room', icon: '🎨' },
        { id: 'guest', label: 'Guest Room', icon: '🧳' },
      ],
    },
    {
      category: 'KITCHEN & UTILITY',
      icon: '🍳',
      rooms: [
        { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
        { id: 'utility', label: 'Utility / Maids', icon: '🧺' },
        { id: 'store', label: 'Store Room', icon: '📦' },
      ],
    },
  ];

  const bhkPresets = {
    '1 BHK': {
      rooms: ['living', 'dining', 'master', 'kitchen'],
      bathrooms: 1,
    },
    '2 BHK': {
      rooms: ['living', 'dining', 'foyer', 'master', 'bed2', 'kitchen', 'utility'],
      bathrooms: 2,
    },
    '3 BHK': {
      rooms: ['living', 'dining', 'foyer', 'family', 'master', 'bed2', 'bed3', 'kitchen', 'utility'],
      bathrooms: 3,
    },
    '4 BHK': {
      rooms: ['living', 'dining', 'foyer', 'family', 'master', 'bed2', 'bed3', 'bed4', 'kitchen', 'utility'],
      bathrooms: 4,
    },
    '5 BHK / Villa': {
      rooms: ['living', 'dining', 'foyer', 'family', 'master', 'bed2', 'bed3', 'bed4', 'bed5', 'kitchen', 'utility'],
      bathrooms: 5,
    },
  };

  // STEP 4: AIR CONDITIONING OPTIONS
  const acOptions = [
    {
      id: 'none',
      title: 'No A/C',
      price: '-',
      subtitle: 'Exclude from estimate',
    },
    {
      id: '3star',
      title: '3 Star Inverter',
      price: '₹38,000 - ₹42,000',
      subtitle: 'Per unit, incl. installation',
    },
    {
      id: '5star',
      title: '5 Star Inverter',
      price: '₹46,000 - ₹54,000',
      subtitle: 'Per unit, incl. installation',
    },
  ];

  // ROOM PRICE TABLES PER PACKAGE (in Lakhs [min, max])
  const roomPriceTable = {
    essential: {
      living: [2.8, 3.4],
      dining: [1.4, 1.8],
      foyer: [0.7, 1.0],
      family: [1.8, 2.4],
      tv: [1.5, 2.0],
      balcony: [0.5, 0.8],
      puja: [0.6, 0.9],
      other: [1.2, 1.6],

      master: [2.5, 3.1],
      bed2: [1.9, 2.4],
      bed3: [1.7, 2.2],
      bed4: [1.6, 2.1],
      bed5: [1.5, 2.0],
      bed6: [1.4, 1.9],
      study: [1.2, 1.6],
      kids: [1.8, 2.3],
      guest: [1.6, 2.1],

      kitchen: [1.9, 2.2],
      utility: [1.1, 1.5],
      store: [0.6, 0.9],
    },
    comfort: {
      living: [4.1, 5.4],
      dining: [2.2, 2.8],
      foyer: [1.1, 1.4],
      family: [3.0, 4.0],
      tv: [2.5, 3.3],
      balcony: [0.8, 1.2],
      puja: [1.0, 1.4],
      other: [1.8, 2.4],

      master: [3.6, 4.7],
      bed2: [3.0, 3.9],
      bed3: [2.7, 3.5],
      bed4: [2.5, 3.3],
      bed5: [2.4, 3.1],
      bed6: [2.2, 2.9],
      study: [1.8, 2.4],
      kids: [2.8, 3.6],
      guest: [2.5, 3.3],

      kitchen: [2.7, 3.4],
      utility: [1.8, 2.4],
      store: [1.0, 1.4],
    },
    premium: {
      living: [6.9, 11.0],
      dining: [3.6, 5.8],
      foyer: [1.8, 2.8],
      family: [4.8, 7.5],
      tv: [4.2, 6.5],
      balcony: [1.4, 2.1],
      puja: [1.6, 2.5],
      other: [3.0, 4.5],

      master: [6.0, 9.7],
      bed2: [4.9, 7.8],
      bed3: [4.6, 7.3],
      bed4: [4.2, 6.8],
      bed5: [4.0, 6.5],
      bed6: [3.8, 6.0],
      study: [3.0, 4.5],
      kids: [4.8, 7.5],
      guest: [4.2, 6.8],

      kitchen: [4.8, 6.5],
      utility: [3.0, 4.3],
      store: [1.6, 2.5],
    },
    luxe: {
      living: [13.0, 19.4],
      dining: [6.8, 10.1],
      foyer: [3.5, 5.2],
      family: [8.7, 12.9],
      tv: [7.5, 11.0],
      balcony: [2.5, 3.8],
      puja: [3.0, 4.5],
      other: [5.0, 7.5],

      master: [11.5, 17.1],
      bed2: [9.2, 13.7],
      bed3: [8.7, 12.9],
      bed4: [8.0, 11.9],
      bed5: [7.6, 11.2],
      bed6: [7.0, 10.5],
      study: [5.5, 8.2],
      kids: [8.5, 12.5],
      guest: [8.0, 11.9],

      kitchen: [8.3, 11.9],
      utility: [5.1, 7.4],
      store: [3.0, 4.5],
    },
  };

  const bathroomRates = {
    essential: [1.0, 1.5],
    comfort: [1.5, 2.0],
    premium: [2.0, 3.5],
    luxe: [3.5, 5.0],
  };

  const acRates = {
    '3star': [0.38, 0.42],
    '5star': [0.4625, 0.5375],
  };

  const getRoomMeta = (roomId) => {
    for (const cat of roomCategories) {
      const found = cat.rooms.find((r) => r.id === roomId);
      if (found) return found;
    }
    return { label: roomId, icon: '🏠' };
  };

  const formatPriceRange = (minInLakhs, maxInLakhs) => {
    const formatVal = (val) => {
      if (val < 1) {
        const rs = Math.round(val * 100000);
        return `₹${rs.toLocaleString('en-IN')}`;
      } else if (val >= 100) {
        return `₹${(val / 100).toFixed(2)} Cr`;
      } else {
        return `₹${val.toFixed(1)} L`;
      }
    };
    return `${formatVal(minInLakhs)} - ${formatVal(maxInLakhs)}`;
  };

  const formatItemPrice = (minInLakhs, maxInLakhs) => {
    const formatVal = (val) => {
      if (val < 1) {
        const rs = Math.round(val * 100000);
        return `₹${rs.toLocaleString('en-IN')}`;
      } else if (val >= 100) {
        return `₹${(val / 100).toFixed(2)} Cr`;
      } else {
        return `₹${val.toFixed(1)} L`;
      }
    };
    return `${formatVal(minInLakhs)}-${formatVal(maxInLakhs)}`;
  };

  // Update room selection & bathroom count ONLY when user explicitly selects/changes BHK Type
  useEffect(() => {
    if (!propertyDetails.bhkType) return;
    const preset = bhkPresets[propertyDetails.bhkType];
    if (preset) {
      setSelectedRooms(preset.rooms);
      setNumBathrooms(preset.bathrooms);
    }
  }, [propertyDetails.bhkType]);

  const handleACSelect = (acId) => {
    setSelectedAC(acId);
    if (acId !== 'none') {
      if (numACUnits === 0) setNumACUnits(1);
    } else {
      setNumACUnits(0);
    }
  };

  const toggleRoom = (roomId) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId]
    );
  };

  // REAL-TIME ESTIMATE CALCULATIONS
  const isPackageSelected = Boolean(selectedPackage);
  let roomItems = [];
  let totalMinLakhs = 0;
  let totalMaxLakhs = 0;

  if (isPackageSelected) {
    const pkgKey = selectedPackage;
    const pkgTable = roomPriceTable[pkgKey] || {};

    selectedRooms.forEach((rId) => {
      const meta = getRoomMeta(rId);
      const rates = pkgTable[rId] || [1.5, 2.0];
      roomItems.push({
        id: rId,
        label: meta.label,
        icon: meta.icon,
        min: rates[0],
        max: rates[1],
      });
      totalMinLakhs += rates[0];
      totalMaxLakhs += rates[1];
    });

    if (numBathrooms > 0) {
      const bRates = bathroomRates[pkgKey] || [1.5, 2.0];
      for (let i = 1; i <= numBathrooms; i++) {
        totalMinLakhs += bRates[0];
        totalMaxLakhs += bRates[1];
      }
    }

    if (selectedAC && selectedAC !== 'none' && numACUnits > 0) {
      const acRate = acRates[selectedAC] || [0.38, 0.42];
      const acMinSum = acRate[0] * numACUnits;
      const acMaxSum = acRate[1] * numACUnits;
      totalMinLakhs += acMinSum;
      totalMaxLakhs += acMaxSum;
    }
  }

  const gstMinLakhs = totalMinLakhs * 0.18;
  const gstMaxLakhs = totalMaxLakhs * 0.18;
  const grandTotalMinLakhs = totalMinLakhs + gstMinLakhs;
  const grandTotalMaxLakhs = totalMaxLakhs + gstMaxLakhs;

  const isStep1Completed = Boolean(selectedPackage);
  const isStep2Completed = Boolean(propertyDetails.bhkType && propertyDetails.carpetArea);
  const isStep3Completed = selectedRooms.length > 0 || numBathrooms > 0;
  const isStep4Completed = Boolean(selectedAC);

  return (
    <div className="estimator-page">
      {/* 1. TOP PROGRESS BAR (STICKY) */}
      <div className="estimator-progress-bar">
        <div className="progress-steps-container">
          {steps.map((step, index) => {
            let isCompleted = false;
            if (step.id === 1) isCompleted = isStep1Completed;
            if (step.id === 2) isCompleted = isStep2Completed;
            if (step.id === 3) isCompleted = isStep3Completed;
            if (step.id === 4) isCompleted = isStep4Completed;

            return (
              <div key={step.id} className={`progress-step-item ${isCompleted ? 'completed' : ''}`}>
                <div className={`step-circle-indicator ${isCompleted ? 'completed' : ''}`}>
                  {isCompleted && (
                    <svg className="step-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="step-label">{step.label}</span>
                {index < steps.length - 1 && <div className={`step-connector-line ${isCompleted ? 'completed' : ''}`} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. TOP ENCLOSED SECTION CARD (FULL WIDTH - ZERO LEFT/RIGHT GAP) */}
      <div className="estimator-top-section-card">
        {/* Navigation Bar Row */}
        <div className="estimator-nav-row">
          <Link to="/" className="back-website-btn" aria-label="Back to Website">
            &lsaquo; Back to Website
          </Link>
          <span className="estimator-brand-name">Glenser Interior Studio</span>
        </div>

        {/* Disclaimer Strip */}
        <div className="estimator-disclaimer-strip">
          <svg className="disclaimer-warning-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <p className="disclaimer-text">
            <strong>Disclaimer:</strong> All estimates are indicative only. Please review our full disclaimer and consult our studio team before making financial decisions based on this tool. Call <a href="tel:09902364086" className="disclaimer-phone">+91 99023 64086</a> / <a href="tel:08041235678" className="disclaimer-phone">+91 80 4123 5678</a>
          </p>
        </div>

        {/* Hero Intro Block */}
        <div className="estimator-hero-section">
          <div className="estimator-hero-container">
            <span className="estimator-subheading-brand">GLENSER</span>
            <h1 className="estimator-main-title">HOME INTERIOR COST ESTIMATOR</h1>
            <h2 className="estimator-large-headline">
              Get a <span className="highlight-brand">Realistic Budget</span> in 2 Minutes
            </h2>
            <p className="estimator-subtitle">
              Bengaluru market data reference - 2026 &middot; No personal details required to use this tool &middot; Your estimate updates live as you fill the form
            </p>
          </div>
        </div>
      </div>

      {/* 3. MAIN STEPS & SIDEBAR CONTAINER */}
      <div className="estimator-main-container">
        <main className="estimator-content-layout">
          {/* LEFT COLUMN: 4 SEPARATE STEP CARDS */}
          <div className="estimator-steps-column">
            {/* STEP 1 CARD: DESIGN PACKAGE */}
            <section className="estimator-card-section">
              <div className="section-header">
                <h3 className="section-title">1. Design Package</h3>
                <p className="section-subtitle">
                  Select the quality tier that matches your vision and budget. This drives all rate calculations.
                </p>
              </div>

              {/* 2x2 Grid of Package Cards */}
              <div className="package-cards-grid">
                {packages.map((pkg) => {
                  const isSelected = selectedPackage === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      className={`package-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedPackage(pkg.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedPackage(pkg.id);
                        }
                      }}
                    >
                      <div className="package-card-header">
                        <span className="package-badge">{pkg.badge}</span>
                        {isSelected && (
                          <div className="package-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <h4 className="package-title">{pkg.title}</h4>
                      <p className="package-price">{pkg.priceRange}</p>

                      {/* Watermark ₹ symbol */}
                      <div className="rupee-watermark" aria-hidden="true">
                        ₹
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rates Note Box */}
              <div className="rates-note-box">
                <svg className="rates-note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <p className="note-text">
                  <strong>Includes:</strong> Carpentry, false ceiling, electrical, painting, stonework &amp; civil. <strong>Excludes:</strong> Appliances, ACs, tiles, sanitaryware &amp; furniture.
                </p>
              </div>
            </section>

            {/* STEP 2 CARD: PROPERTY DETAILS */}
            <section className="estimator-card-section">
              <div className="section-header">
                <h3 className="section-title">2. Property Details</h3>
                <p className="section-subtitle">
                  Your property details calibrate location, floor-level, and project type adjustments.
                </p>
              </div>

              {/* Property Details Form Controls Grid */}
              <div className="property-form-grid">
                {/* BHK TYPE */}
                <div className="form-group">
                  <label className="form-label">BHK TYPE</label>
                  <CustomDropdown
                    value={propertyDetails.bhkType}
                    options={bhkOptions}
                    placeholder="- Select BHK -"
                    onChange={(val) =>
                      setPropertyDetails((prev) => ({ ...prev, bhkType: val }))
                    }
                  />
                </div>

                {/* PROJECT TYPE */}
                <div className="form-group">
                  <label className="form-label">PROJECT TYPE</label>
                  <CustomDropdown
                    value={propertyDetails.projectType}
                    options={projectTypeOptions}
                    placeholder="- Select Project Type -"
                    onChange={(val) =>
                      setPropertyDetails((prev) => ({ ...prev, projectType: val }))
                    }
                  />
                </div>

                {/* LOCATION (CITY + AREA) */}
                <div className="form-group">
                  <label className="form-label">SELECT YOUR LOCATION</label>
                  <div className="location-selects-container">
                    <CustomDropdown
                      value={propertyDetails.city}
                      options={cityOptions}
                      placeholder="- Select City -"
                      onChange={(val) =>
                        setPropertyDetails((prev) => ({ ...prev, city: val }))
                      }
                    />
                    <CustomDropdown
                      value={propertyDetails.area}
                      options={areaOptions}
                      placeholder="- Select Area -"
                      onChange={(val) =>
                        setPropertyDetails((prev) => ({ ...prev, area: val }))
                      }
                    />
                  </div>
                </div>

                {/* FLOOR LEVEL */}
                <div className="form-group">
                  <label className="form-label">FLOOR LEVEL</label>
                  <CustomDropdown
                    value={propertyDetails.floorLevel}
                    options={floorLevelOptions}
                    placeholder="- Select Floor Level -"
                    onChange={(val) =>
                      setPropertyDetails((prev) => ({ ...prev, floorLevel: val }))
                    }
                  />
                </div>
              </div>

              {/* CARPET AREA SLIDER SECTION BOX */}
              <div className="carpet-area-card-box">
                <label className="form-label">CARPET AREA</label>

                <div className="carpet-area-controls-row">
                  <div className="area-input-wrapper">
                    <input
                      type="number"
                      className="area-number-input"
                      value={propertyDetails.carpetArea}
                      min={300}
                      max={15000}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setPropertyDetails((prev) => ({ ...prev, carpetArea: val }));
                      }}
                    />
                    <span className="unit-label">sqft</span>
                  </div>

                  <div className="slider-track-container">
                    <input
                      type="range"
                      className="carpet-area-slider"
                      min={300}
                      max={15000}
                      step={50}
                      value={propertyDetails.carpetArea}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setPropertyDetails((prev) => ({ ...prev, carpetArea: val }));
                      }}
                    />
                  </div>
                </div>

                <div className="slider-limits-row">
                  <span className="limit-text">300 sqft</span>
                  <span className="limit-text">15,000 sqft</span>
                </div>
              </div>
            </section>

            {/* STEP 3 CARD: ROOM CONFIGURATION */}
            <section className="estimator-card-section">
              <div className="section-header">
                <h3 className="section-title">3. Room Configuration</h3>
                <p className="section-subtitle">
                  Select spaces to include. Deselect any room to exclude it from the estimate.
                </p>
              </div>

              {/* ROOM CONFIGURATION CATEGORIES & CHIPS */}
              <div className="room-config-container">
                {roomCategories.map((catGroup) => (
                  <div key={catGroup.category} className="room-category-group">
                    <h4 className="room-category-title">
                      <span className="cat-icon">{catGroup.icon}</span> {catGroup.category}
                    </h4>

                    <div className="room-chips-grid">
                      {catGroup.rooms.map((room) => {
                        const isChecked = selectedRooms.includes(room.id);
                        return (
                          <div
                            key={room.id}
                            className={`room-chip-card ${isChecked ? 'checked' : ''}`}
                            onClick={() => toggleRoom(room.id)}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                toggleRoom(room.id);
                              }
                            }}
                          >
                            <div className="room-chip-left">
                              <span className="room-icon">{room.icon}</span>
                              <span className="room-label-text">{room.label}</span>
                            </div>

                            <div className="room-checkbox-indicator">
                              {isChecked && (
                                <svg className="chip-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* BATHROOMS / TOILETS CATEGORY BOX */}
                <div className="room-category-group">
                  <h4 className="room-category-title">
                    <span className="cat-icon">🚿</span> BATHROOMS / TOILETS
                  </h4>

                  <div className="bathrooms-counter-card">
                    <div className="bathrooms-counter-row">
                      <div className="bathrooms-info">
                        <span className="shower-icon">🚿</span>
                        <div className="bathrooms-text-col">
                          <h5 className="bathrooms-title">No. of Bathrooms</h5>
                          <span className="bathrooms-subtitle">Complete Sanitary, Tiling &amp; Plumbing Scope</span>
                        </div>
                      </div>

                      <div className="counter-controls">
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setNumBathrooms((prev) => Math.max(0, prev - 1))}
                          aria-label="Decrease Bathrooms"
                        >
                          &minus;
                        </button>
                        <span className="counter-value">{numBathrooms}</span>
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setNumBathrooms((prev) => Math.min(10, prev + 1))}
                          aria-label="Increase Bathrooms"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Bathroom Rates Disclaimer Note Box */}
                    <div className="bathroom-disclaimer-box">
                      <p className="bathroom-disclaimer-text">
                        * <strong>Scope of Work:</strong> Includes end-to-end wet area waterproofing, premium tile installation, designer sanitaryware &amp; luxury bath fittings.
                        <br />
                        <span className="tier-rates-line">
                          <strong>Package Tier Rates:</strong> Essential ₹1.0L&ndash;1.5L &middot; Comfort ₹1.5L&ndash;2.0L &middot; Premium ₹2.0L&ndash;3.5L &middot; Luxe ₹3.5L&ndash;5.0L per bathroom
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 4 CARD: AIR CONDITIONING */}
            <section className="estimator-card-section">
              <div className="section-header">
                <h3 className="section-title">4. Air Conditioning</h3>
                <p className="section-subtitle">
                  1.5 Ton Inverter Split AC - reference market prices for budgeting (supply + standard installation, 2026).
                </p>
              </div>

              {/* 3-Column AC Option Cards Grid */}
              <div className="ac-cards-grid">
                {acOptions.map((opt) => {
                  const isSelected = selectedAC === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`ac-option-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleACSelect(opt.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleACSelect(opt.id);
                        }
                      }}
                    >
                      <h4 className="ac-card-title">{opt.title}</h4>
                      <p className="ac-card-price">{opt.price}</p>
                      <span className="ac-card-subtitle">{opt.subtitle}</span>

                      {isSelected && (
                        <div className="ac-check-icon">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* AC Unit Counter Control */}
              {selectedAC && selectedAC !== 'none' && (
                <div className="ac-counter-card">
                  <div className="ac-counter-row">
                    <div className="ac-info">
                      <span className="ac-counter-icon">❄️</span>
                      <div className="ac-text-col">
                        <h5 className="ac-title">No. of AC Units</h5>
                        <span className="ac-subtitle">1.5 Ton Split Inverter Units</span>
                      </div>
                    </div>

                    <div className="counter-controls">
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setNumACUnits((prev) => Math.max(1, prev - 1))}
                        aria-label="Decrease AC Units"
                      >
                        &minus;
                      </button>
                      <span className="counter-value">{numACUnits}</span>
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setNumACUnits((prev) => Math.min(15, prev + 1))}
                        aria-label="Increase AC Units"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* AC Disclaimer Note Box */}
              <div className="ac-disclaimer-box">
                <p className="ac-disclaimer-text">
                  * <strong>Budgeting Note:</strong> Air conditioning rates reflect market averages for budgeting purposes. Final pricing may adjust based on brand selection and site installation scope.
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: YOUR LIVE ESTIMATE SIDEBAR */}
          <aside className="estimator-sidebar-column">
            <div className="live-estimate-card" data-lenis-prevent>
              <h3 className="estimate-card-title">Your Live Estimate</h3>
              <div className="estimate-card-divider" />

              {!isPackageSelected ? (
                <div className="estimate-card-body">
                  <div className="estimate-empty-state">
                    <svg className="estimate-ruler-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18L3 3v18z" />
                      <path d="M7 17v-2m4 2v-4m4 4v-2" strokeLinecap="round" />
                    </svg>
                    <p className="estimate-empty-text">
                      Select a package and add rooms to see your estimate
                    </p>
                  </div>
                </div>
              ) : (
                <div className="estimate-filled-content">
                  {/* Top Header Card Box */}
                  <div className="estimate-main-header-box">
                    <span className="estimate-pkg-bhk-tag">
                      {packages.find((p) => p.id === selectedPackage)?.badge} PACKAGE &middot; {propertyDetails.bhkType || 'CUSTOM'}
                    </span>
                    <h2 className="estimate-main-price-range">
                      {formatPriceRange(totalMinLakhs, totalMaxLakhs)}
                    </h2>
                    <span className="excl-gst-subtext">excl. GST</span>
                  </div>

                  {/* Itemized Breakdown List */}
                  <div className="estimate-items-list" data-lenis-prevent>
                    {/* Selected Rooms */}
                    {roomItems.map((item) => (
                      <div key={item.id} className="estimate-item-row">
                        <div className="item-row-left">
                          <span className="item-row-icon">{item.icon}</span>
                          <span className="item-row-name">{item.label}</span>
                        </div>
                        <span className="item-row-price">
                          {formatItemPrice(item.min, item.max)}
                        </span>
                      </div>
                    ))}

                    {/* Bathrooms */}
                    {numBathrooms > 0 &&
                      Array.from({ length: numBathrooms }).map((_, idx) => {
                        const bRates = bathroomRates[selectedPackage] || [1.5, 2.0];
                        return (
                          <div key={`bath-${idx}`} className="estimate-item-row">
                            <div className="item-row-left">
                              <span className="item-row-icon">🚿</span>
                              <span className="item-row-name">Bathroom {idx + 1}</span>
                            </div>
                            <span className="item-row-price">
                              {formatItemPrice(bRates[0], bRates[1])}
                            </span>
                          </div>
                        );
                      })}

                    {/* Air Conditioning */}
                    {selectedAC && selectedAC !== 'none' && numACUnits > 0 && (
                      <div className="estimate-item-row">
                        <div className="item-row-left">
                          <span className="item-row-icon">❄️</span>
                          <span className="item-row-name">
                            1.5 Ton {selectedAC === '3star' ? '3 Star Inverter' : '5 Star Inverter'} &times; {numACUnits}
                          </span>
                        </div>
                        <span className="item-row-price">
                          {formatItemPrice(acRates[selectedAC][0] * numACUnits, acRates[selectedAC][1] * numACUnits)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Total Summary Cards */}
                  <div className="estimate-totals-section">
                    <div className="summary-total-box">
                      <span className="summary-label">Total without GST</span>
                      <span className="summary-price">{formatPriceRange(totalMinLakhs, totalMaxLakhs)}</span>
                    </div>

                    <div className="gst-row">
                      <span className="gst-label">GST @ 18%</span>
                      <span className="gst-price">{formatItemPrice(gstMinLakhs, gstMaxLakhs)}</span>
                    </div>

                    <div className="grand-total-box">
                      <span className="grand-total-label">TOTAL WITH GST</span>
                      <span className="grand-total-price">{formatPriceRange(grandTotalMinLakhs, grandTotalMaxLakhs)}</span>
                    </div>
                  </div>

                  {/* Call to Action Block */}
                  <div className="estimate-cta-block">
                    <p className="cta-heading">Need help discovering your perfect home interior style?</p>
                    <Link to="/room-types" className="explore-styles-btn">
                      🎨 Explore Room Styles &rarr;
                    </Link>

                    <p className="cta-subheading">Still confused? Let's figure it out together</p>
                    <Link to="/contact" className="consultation-cta-btn">
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </main>

        {/* BOTTOM ENCLOSED DISCLAIMER & CONTACT FOOTER CARD */}
        <section className="estimator-bottom-card">
          <div className="bottom-card-header">
            <span className="bottom-disclaimer-badge">
              <svg className="badge-warning-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              ESTIMATE DISCLAIMER &amp; POLICY
            </span>
            <h3 className="bottom-card-title">Important Information Regarding Your Estimate</h3>
            <p className="bottom-card-subtitle">
              This estimate provides early-stage reference figures based on 2026 Bengaluru market benchmarks. Final quotations are issued post site assessment.
            </p>
          </div>

          <div className="bottom-info-grid">
            {/* Column 1: Inclusions */}
            <div className="bottom-info-col">
              <h4 className="info-col-title">
                <span className="col-icon">📌</span> Standard Inclusions
              </h4>
              <ul className="info-bullets-list">
                <li>Fixed carpentry, custom wardrobes &amp; modular units</li>
                <li>False ceiling design, LED lighting &amp; electrical wiring</li>
                <li>Premium wall painting, texture finish &amp; surface prep</li>
                <li>Kitchen countertops, tiling &amp; civil modifications</li>
              </ul>
            </div>

            {/* Column 2: Exclusions */}
            <div className="bottom-info-col">
              <h4 className="info-col-title">
                <span className="col-icon">🚫</span> Exclusions &amp; Add-ons
              </h4>
              <ul className="info-bullets-list">
                <li>Loose sofas, dining furniture &amp; soft furnishings</li>
                <li>Kitchen appliances, chimneys &amp; hardware upgrades</li>
                <li>Gas pipeline extension &amp; major structural alterations</li>
              </ul>
            </div>

            {/* Column 3: Legal & Quotation Terms */}
            <div className="bottom-info-col">
              <h4 className="info-col-title">
                <span className="col-icon">⚖️</span> Terms &amp; Conditions
              </h4>
              <ul className="info-bullets-list">
                <li>Indicative estimate only; not a binding financial quote</li>
                <li>Prices vary by material grade, brand &amp; customization</li>
                <li>Glenser reserves rights for site-specific scope adjustments</li>
              </ul>
            </div>
          </div>

          {/* Bottom Action / Contact Bar */}
          <div className="bottom-contact-bar">
            <div className="contact-bar-item">
              <span className="bar-icon">📞</span>
              <span className="bar-text">
                Connect with Studio Team:{' '}
                <a href="tel:09902364086" className="contact-link">+91 99023 64086</a>
                {' '}/{' '}
                <a href="tel:08884908111" className="contact-link">+91 88849 08111</a>
              </span>
            </div>

            <div className="contact-bar-divider" />

            <div className="contact-bar-item">
              <span className="bar-icon">📋</span>
              <a href="/contact" className="contact-link btn-link">
                Contact Form &rarr;
              </a>
            </div>

            <div className="contact-bar-divider" />

            <div className="contact-bar-item">
              <span className="bar-icon">📍</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link map-link"
              >
                Glenser Studio on Google Maps &#8599;
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SINGLE-LINE SLEEK COPYRIGHT FOOTER BAR */}
      <footer className="estimator-copyright-bar">
        &copy; 2026 by <span className="highlight-brand-gold">Glenser Interior Studio</span>. All Rights Reserved.
      </footer>
    </div>
  );
}
