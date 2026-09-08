import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './About.css';

const corePrinciples = [
  {
    id: 1,
    title: 'Thoughtful Design',
    description: 'Spaces designed around your lifestyle and needs.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.21 19.61 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM11 7h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Personalized Interiors',
    description: 'Every detail is considered to create a space that feels uniquely yours.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Quality & Craftsmanship',
    description: 'Carefully selected materials and attention to every detail.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Timely Execution',
    description: 'A structured process focused on delivering your project smoothly.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
];

export default function About() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animElements = document.querySelectorAll('.about-reveal');
    animElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <Header />

      <main>
        {/* 1. ABOUT HERO BANNER */}
        <section className="about-hero-banner" aria-label="About Glenser Hero">
          <div className="about-hero-overlay" />
          <div className="about-hero-container">
            <h1 className="about-hero-title">ABOUT GLENSER</h1>
            <p className="about-hero-subtitle">
              Crafting bespoke luxury interiors with architectural precision and timeless sophistication.
            </p>
          </div>
        </section>

        {/* 2. GLENSER INTRODUCTION */}
        <section className="about-intro-section" aria-label="Glenser Design Philosophy">
          <div className="about-intro-container about-reveal">
            <h2 className="about-intro-title">INTERIOR DESIGN, CRAFTED AROUND YOU</h2>
            <p className="about-intro-text">
              At Glenser Interior Studio, we believe exceptional design is born at the intersection 
              of aesthetic refined beauty, practical spatial utility, and deeply personalized living experiences. 
              We transform empty structures into curated sanctuaries that reflect your distinct lifestyle, 
              combining timeless craftsmanship with meticulous attention to detail.
            </p>
          </div>
        </section>

        {/* 3. FOUNDER'S NOTE SECTION */}
        <section className="about-founders-section" aria-label="Founders Note">
          <div className="about-section-header about-reveal">
            <span className="about-section-tag">LEADERSHIP & VISION</span>
            <h2 className="about-section-title">FOUNDER'S NOTE</h2>
          </div>

          {/* Founder 1 Block */}
          <div className="about-split-row founder-row-1 about-reveal">
            {/* Left-flush Image Container Placeholder */}
            <div className="about-img-frame-wrapper left-flush">
              <div className="about-img-placeholder">
                <div className="placeholder-inner">
                  <svg viewBox="0 0 24 24" className="placeholder-icon" aria-hidden="true">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="placeholder-label">FOUNDER PHOTO PLACEHOLDER</span>
                </div>
              </div>
            </div>

            {/* Founder 1 Details */}
            <div className="about-split-content right-padded">
              <h3 className="founder-name">____________________</h3>
              <span className="founder-role">Founder & Principal Designer</span>
              <p className="about-split-paragraph">
                Passionate about redefining residential and commercial interior spaces, our Principal Designer 
                brings extensive professional expertise in architectural space planning, luxury aesthetics, 
                and client-centric interior design.
              </p>
              <p className="about-split-paragraph">
                Our journey began with a commitment to bridge the gap between creative design concepts and flawless 
                on-site execution. Every project is approached as a bespoke story crafted around the client’s lifestyle.
              </p>
            </div>
          </div>

          {/* Founder 2 Block */}
          <div className="about-split-row founder-row-2 about-reveal">
            {/* Founder 2 Details */}
            <div className="about-split-content left-padded">
              <h3 className="founder-name">____________________</h3>
              <span className="founder-role">Co-Founder & Operations Director</span>
              <p className="about-split-paragraph">
                With over two decades of experience overseeing high-value construction and interior projects, 
                our Operations Director ensures every Glenser project is delivered with uncompromised precision, 
                strict quality control, and timely site execution.
              </p>
              <p className="about-split-paragraph">
                By combining meticulous project planning with master craftsmanship, we ensure that every design 
                vision comes to life seamlessly from initial 3D visualization to final site handover.
              </p>
            </div>

            {/* Right-flush Image Container Placeholder */}
            <div className="about-img-frame-wrapper right-flush">
              <div className="about-img-placeholder">
                <div className="placeholder-inner">
                  <svg viewBox="0 0 24 24" className="placeholder-icon" aria-hidden="true">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="placeholder-label">CO-FOUNDER PHOTO PLACEHOLDER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR CORE PRINCIPLES SECTION */}
        <section className="about-principles-section" aria-label="Our Core Principles">
          <div className="about-container">
            <div className="about-section-header about-reveal">
              <span className="about-section-tag">FOUNDATIONAL VALUES</span>
              <h2 className="about-section-title">OUR CORE PRINCIPLES</h2>
            </div>

            <div className="principles-grid about-reveal">
              {corePrinciples.map((principle) => (
                <div key={principle.id} className="principle-card">
                  <div className="principle-icon-wrapper">{principle.icon}</div>
                  <h3 className="principle-card-title">{principle.title}</h3>
                  <p className="principle-card-desc">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section className="about-cta-section" aria-label="Call to Action">
          <div className="about-cta-container about-reveal">
            <h2 className="about-cta-title">LET'S CREATE YOUR SPACE</h2>
            <p className="about-cta-subtext">
              Ready to elevate your home into a bespoke masterpiece? Schedule a consultation with our studio team.
            </p>
            <Link to="/contact" className="about-cta-button">
              GET IN TOUCH
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
