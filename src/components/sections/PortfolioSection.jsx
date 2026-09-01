import { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/images/projects/img1.jpeg';
import img2 from '../../assets/images/projects/img2.jpeg';
import img3 from '../../assets/images/projects/img3.jpeg';
import img4 from '../../assets/images/projects/img4.jpeg';
import img5 from '../../assets/images/projects/img5.jpeg';
import img6 from '../../assets/images/projects/img6.jpeg';
import img7 from '../../assets/images/projects/img7.jpeg';
import './PortfolioSection.css';

const projects = [
  {
    id: 1,
    title: 'The Celestial Living Suite',
    image: img1,
  },
  {
    id: 2,
    title: 'Aura Minimalist Residence',
    image: img2,
  },
  {
    id: 3,
    title: 'Serenade Luxury Penthouse',
    image: img3,
  },
  {
    id: 4,
    title: 'Verdant Modern Estate',
    image: img4,
  },
  {
    id: 5,
    title: 'Elixir Architectural Duplex',
    image: img5,
  },
  {
    id: 6,
    title: 'Opulent Manor Interiors',
    image: img6,
  },
  {
    id: 7,
    title: 'Imperia Urban Sanctuary',
    image: img7,
  },
];

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const cardsRef = useRef([]);

  // Display initial 6 cards or all 7 cards when expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const handleCardClick = (e, project) => {
    e.preventDefault();
    // Detail view / modal interaction will be hooked as instructed by Lead
  };

  // Intersection Observer for Scroll Reveal & On-Demand Viewport Loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px 0px', // Pre-load slightly before scrolling into view
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section className="portfolio-section" aria-label="Glenser Interior Studio Portfolio">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-title">PORTFOLIO</h2>
        </header>

        {/* 3-Column Grid */}
        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="portfolio-card scroll-reveal"
              style={{ transitionDelay: `${(index % 3) * 0.22}s` }}
              onClick={(e) => handleCardClick(e, project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title}`}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-info">
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button Action */}
        <div className="portfolio-actions">
          <button
            type="button"
            className={`show-more-btn ${showAll ? 'expanded' : ''}`}
            onClick={toggleShowAll}
            aria-expanded={showAll}
          >
            <span>{showAll ? 'SHOW LESS' : 'SHOW MORE'}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
