import { useEffect, useRef } from 'react';
import whyImage from '../../assets/images/common/why-glenser.jpeg';
import './WhyGlenserSection.css';

const pillars = [
  {
    number: '01',
    title: 'End-to-End Turnkey Execution',
    description:
      'From initial 3D visualization to final site handover, every detail is seamlessly managed by our expert interior architects.',
  },
  {
    number: '02',
    title: 'Bespoke Architectural Concepts',
    description:
      'Custom spatial solutions tailored specifically to reflect your lifestyle, personal aesthetic, and functional requirements.',
  },
  {
    number: '03',
    title: 'Precision Engineering & Fittings',
    description:
      'Crafted using top-tier long-lasting materials, German & Italian hardware fittings, and flawless surface finishes.',
  },
  {
    number: '04',
    title: 'On-Time Handover Guarantee',
    description:
      'Complete budget transparency, strict project milestone tracking, and zero hidden costs during execution.',
  },
];

export default function WhyGlenserSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="why-glenser-section"
      aria-label="Why Choose Glenser Interior Studio"
    >
      <div className="why-glenser-container">
        {/* Left Column: Showcase Image */}
        <div className="why-image-wrapper why-reveal-left">
          <img
            src={whyImage}
            alt="Glenser Interior Studio - Architectural Interior Excellence"
            className="why-image"
            loading="lazy"
          />
          <div className="why-image-badge">THE GLENSER STANDARD</div>
        </div>

        {/* Right Column: Value Pillars List */}
        <div className="why-content why-reveal-right">
          <header className="why-header">
            <h2 className="why-title">WHY GLENSER</h2>
            <p className="why-subtitle">
              Transforming living spaces through bespoke architectural precision, 
              uncompromising craftsmanship, and transparent project execution.
            </p>
          </header>

          <div className="pillars-list">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="pillar-card">
                <span className="pillar-number">{pillar.number}</span>
                <div className="pillar-info">
                  <h3 className="pillar-heading">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
