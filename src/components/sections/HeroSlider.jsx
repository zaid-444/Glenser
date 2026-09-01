import { useState, useEffect, useRef } from 'react';
import hero1 from '../../assets/images/hero/hero-1.jpeg';
import hero2 from '../../assets/images/hero/hero-2.jpeg';
import hero3 from '../../assets/images/hero/hero-3.jpeg';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Modern Luxury Living',
    alt: 'Glenser Interior Studio - Luxury Living Room Interior Design',
  },
  {
    id: 2,
    image: hero2,
    title: 'Bespoke Modular Kitchens',
    alt: 'Glenser Interior Studio - Premium Modular Kitchen Interior Design',
  },
  {
    id: 3,
    image: hero3,
    title: 'Master Bedroom Architecture',
    alt: 'Glenser Interior Studio - Master Bedroom Luxury Interior Design',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, currentSlide]);

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Glenser Portfolio Image Gallery"
    >
      <div className="slider-container">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
              <div className="slide-overlay" />

              <div className="slide-caption">
                <span className="caption-tag">{slide.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sleek Minimal Prev Arrow Button */}
      <button
        type="button"
        className="slider-arrow slider-arrow-prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
        title="Previous Image"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </button>

      {/* Sleek Minimal Next Arrow Button */}
      <button
        type="button"
        className="slider-arrow slider-arrow-next"
        onClick={nextSlide}
        aria-label="Next Slide"
        title="Next Image"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="slider-dots" role="tablist" aria-label="Slide Selection">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
