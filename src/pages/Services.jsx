import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WorkProcessSection from '../components/sections/WorkProcessSection';
import './Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Interior Design',
    description:
      'Space planning, thematic design, modular and custom carpentry work, feature walls and false ceiling design',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM5 7h14v2H5zm0 4h10v2H5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Interior Decoration',
    description:
      'Custom furniture design Soft Furnishing selection Decor and accessories, Artwork, Wall textures and papers',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Landscape Design',
    description:
      'Indoor planting, vertical gardening, balcony and terrace landscape and all-inclusive garden design, Outdoor lighting',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.21 19.61 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM11 7h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Home Renovation',
    description:
      'Complete home makeover, space optimization, structural modification, kitchen and bath remodeling, floor upgrades',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Lighting Design',
    description:
      'Architectural lighting, cove lighting, ambient mood fixtures, accent spotlights and smart illumination control',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C8.77 12.16 8 10.66 8 9c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.66-.77 3.16-2.15 4.1z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Execution & Management',
    description:
      'End-to-end site management, skilled craftsmanship, quality inspection, material procurement and on-time delivery',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <Header />

      <main>
        {/* 1. Top Image Banner (Contains Title "OUR SERVICES") */}
        <section className="services-hero-banner" aria-label="Our Services Header">
          <div className="services-hero-overlay" />
          <div className="services-hero-container">
            <h1 className="services-hero-title">OUR SERVICES</h1>
          </div>
        </section>

        {/* 2. Standalone Introductory Text Section BELOW Image Banner */}
        <section className="services-intro-section" aria-label="Services Introduction">
          <div className="services-intro-container">
            <p className="services-intro-paragraph">
              At Glenser Interior Studio, we craft bespoke residential and commercial 
              interiors that seamlessly merge timeless elegance with client-centric design. 
              From initial space planning to complete turnkey execution, we handle every detail 
              to ensure your transformation journey is effortless and inspiring.
            </p>
          </div>
        </section>

        {/* 3. 6 Services Grid Section */}
        <section className="services-section-body" aria-label="Glenser Interior Services Grid">
          <div className="services-container">
            <div className="services-grid">
              {servicesList.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon-wrapper">{service.icon}</div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WORK PROCESS Section (Immediately Below Services Grid) */}
        <WorkProcessSection />
      </main>

      <Footer />
    </div>
  );
}
