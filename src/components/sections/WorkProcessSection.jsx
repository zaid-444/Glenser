import { useEffect, useRef } from 'react';
import './WorkProcessSection.css';

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Requirement Mapping',
    description:
      'We begin with a detailed discovery session to understand your lifestyle, spatial vision, functional needs, and budget expectations.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Concept & Spatial Design',
    description:
      'Our interior architects translate your ideas into 2D layout planning, mood boards, and customized architectural design concepts.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: '3D Visualization & Planning',
    description:
      'Experience your future interior space before execution through high-definition 3D renders, material boards, and lighting previews.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7l-3 3.72L6 13l-3 4h18l-6-8z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Material & Cost Finalization',
    description:
      'Selection of top-tier hardware fittings, woodwork finishes, lighting fixtures, and a transparent itemized quotation with zero hidden costs.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Precision Execution & Installation',
    description:
      'Off-site precision manufacturing followed by meticulous on-site assembly, overseen by skilled master craftsmen and project supervisors.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.6C.4 7 1 10 3 12c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.3z" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'Final Quality Audit & Handover',
    description:
      'Rigorous multi-stage quality inspections, deep cleaning, and a seamless on-time handover of your dream living space.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
];

export default function WorkProcessSection() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="work-process-section" aria-label="Our Work Process">
      <div className="work-process-container">
        {/* Section Header */}
        <header className="work-process-header">
          <h2 className="work-process-title">WORK PROCESS</h2>
          <p className="work-process-subtitle">
            We follow a structured 6-step approach from understanding your initial vision 
            to the flawless handover of your final interior space.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-spine" />

          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={step.step}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
              >
                <div className="timeline-node">{step.icon}</div>

                <div className="timeline-card">
                  <span className="step-badge">STEP {step.step}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
