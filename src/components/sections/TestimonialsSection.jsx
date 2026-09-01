import { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Vandana Das',
    quote:
      'We hired Glenser Interior Studio for our new home. They designed our living room and modular kitchen beautifully. The work was finished right on time and the quality is top class!',
  },
  {
    id: 2,
    name: 'Rajesh & Sunita Sharma',
    quote:
      'Amazing experience working with the Glenser team! Their interior designs are modern, elegant, and very practical. Highly recommended for interior design work in Bangalore.',
  },
  {
    id: 3,
    name: 'Rohit & Family',
    quote:
      'Glenser transformed our 3BHK flat completely. The lighting design, wardrobe fittings, and wooden paneling work look super luxurious. Thank you team Glenser!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const nextTestimonial = () => {
    const nextIdx = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    changeSlide(nextIdx);
  };

  const prevTestimonial = () => {
    const prevIdx = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeSlide(prevIdx);
  };

  // Auto rotate testimonials every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeReview = testimonials[currentIndex];

  return (
    <section className="testimonials-section" aria-label="Client Reviews">
      <div className="testimonials-overlay" />
      <div className="testimonials-container">
        <div className="testimonial-content-wrapper">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="t-arrow t-arrow-prev"
            onClick={prevTestimonial}
            aria-label="Previous Review"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Minimal Pure Floating Text Display (No Card Box) */}
          <div className={`testimonial-display ${isAnimating ? 'animating' : ''}`}>
            <span className="quote-mark">”</span>
            <p className="testimonial-text">"{activeReview.quote}"</p>
            <h3 className="client-name">{activeReview.name}</h3>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="t-arrow t-arrow-next"
            onClick={nextTestimonial}
            aria-label="Next Review"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
