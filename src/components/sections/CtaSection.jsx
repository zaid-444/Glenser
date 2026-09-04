import { Link } from 'react-router-dom';
import './CtaSection.css';

export default function CtaSection() {
  return (
    <section className="cta-section" aria-label="Schedule a Consultation with Glenser Interior Studio">
      <div className="cta-overlay" />
      <div className="cta-container">
        <h2 className="cta-headline">
          Ready to design your personalized interior design solutions?
        </h2>

        <div className="cta-divider" />

        <div className="cta-brand-name">GLENSER INTERIOR STUDIO</div>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn-primary">
            SCHEDULE A CONSULTATION
          </Link>
          <a
            href="https://wa.me/919902364086"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-secondary"
          >
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}
