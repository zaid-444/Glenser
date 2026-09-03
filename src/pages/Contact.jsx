import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only form handler as instructed (No backend/database/API submission)
  };

  return (
    <div className="contact-page">
      <Header />

      <main>
        {/* Top Hero Banner */}
        <section className="contact-hero-banner" aria-label="Get In Touch Header">
          <div className="contact-hero-overlay" />
          <div className="contact-hero-container">
            <h1 className="contact-hero-title">GET IN TOUCH</h1>
            <p className="contact-hero-subtitle">
              Have a project in mind? Reach out to schedule a consultation with our 
              interior architects and transform your dream space into reality.
            </p>
          </div>
        </section>

        {/* Contact Main 2-Column Section */}
        <section className="contact-main-body" aria-label="Contact Details and Form">
          <div className="contact-container">
            
            {/* LEFT SIDE: Contact Information */}
            <div className="contact-info-panel">
              <div className="info-header">
                <h2 className="info-title">Studio Info</h2>
                <p className="info-subtitle">
                  Visit our design studio or reach out via phone, email, or WhatsApp. 
                  We look forward to discussing your interior aspirations.
                </p>
              </div>

              <div className="info-items-list">
                {/* Studio Office Address */}
                <div className="info-item-card">
                  <div className="info-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">Studio Address</span>
                    <span className="info-value">
                      4th Floor, #295-296, 100 Feet Rd, First Stage, Indiranagar, Bengaluru, Karnataka, India
                    </span>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="info-item-card">
                  <div className="info-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">Phone</span>
                    <span className="info-value">
                      <a href="tel:09902364086">+91 99023 64086</a> / <a href="tel:09902364086">099023 64086</a>
                    </span>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="info-item-card">
                  <div className="info-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">WhatsApp</span>
                    <span className="info-value">
                      <a href="https://wa.me/919902364086" target="_blank" rel="noopener noreferrer">
                        +91 99023 64086
                      </a>
                    </span>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="info-item-card">
                  <div className="info-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">Email</span>
                    <span className="info-value">
                      <a href="mailto:enquiry@glenser.com">enquiry@glenser.com</a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="info-socials-block">
                <div className="socials-title">Follow Glenser Studio</div>
                <div className="socials-row">
                  <a
                    href="https://wa.me/919902364086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1Bo2A47neG/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/glenser_design_studio?igsi=dGZ5M3JzdGQ0MzR2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form (UI Only) */}
            <div className="contact-form-panel">
              <div className="form-header">
                <h2 className="form-title">Request Consultation</h2>
                <p className="form-subtitle">
                  Fill in your project details below and our design team will get back to you shortly.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-input"
                      placeholder="e.g. Rahul Sharma"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="e.g. rahul@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="e.g. +91 99023 64086"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectType">Project Type</label>
                    <select id="projectType" className="form-select" defaultValue="Luxury Apartment">
                      <option value="Luxury Apartment">Luxury Apartment (2BHK / 3BHK / 4BHK)</option>
                      <option value="Independent Villa">Independent Villa / Penthouse</option>
                      <option value="Commercial Space">Commercial / Office Interior</option>
                      <option value="Modular Kitchen & Renovation">Modular Kitchen & Renovation</option>
                      <option value="Architectural Lighting">Architectural Lighting & Decor</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="location">Project Location</label>
                  <input
                    type="text"
                    id="location"
                    className="form-input"
                    placeholder="e.g. Indiranagar / Whitefield, Bengaluru"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Project Requirements / Message</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Tell us about your space, timeline, and design preferences..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  SCHEDULE CONSULTATION
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* MAP SECTION */}
        <section className="contact-map-section" aria-label="Studio Location Map">
          <div className="map-container">
            <iframe
              title="Glenser Interior Studio Location Map"
              src="https://maps.google.com/maps?q=100%20Feet%20Rd,%20Indiranagar,%20Bengaluru,%20Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
