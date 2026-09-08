import { Link } from 'react-router-dom';
import './StorySection.css';

export default function StorySection() {
  return (
    <section className="story-section" id="about" aria-label="About Glenser Interior Studio">
      <div className="story-overlay" />
      <div className="story-container">
        <h2 className="story-title">OUR STORY</h2>
        <p className="story-description">
          At Glenser Interior Studio, we specialize in crafting bespoke architectural interiors 
          that effortlessly unite modern sophistication with functional elegance. Our dedicated team of 
          interior designers works closely with you to transform your vision into living art, ensuring 
          every detail reflects luxury, comfort, and distinction.
        </p>
        <Link
          to="/about"
          className="story-btn"
          aria-label="Read More About Our Story"
        >
          READ MORE
        </Link>
      </div>
    </section>
  );
}
