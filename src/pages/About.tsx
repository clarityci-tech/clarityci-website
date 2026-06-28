import { Award, Users, Target, Lightbulb, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Target />,
      title: 'Excellence',
      description: 'We settle for nothing less than exceptional. Every line of code, every design decision, every interaction reflects our commitment to quality.'
    },
    {
      icon: <Users />,
      title: 'Partnership',
      description: 'We dont just build software; we build relationships. Your success is our success, and were with you every step of the way.'
    },
    {
      icon: <Lightbulb />,
      title: 'Innovation',
      description: 'Technology moves fast, and so do we. We stay ahead of the curve so you dont have to, bringing cutting-edge solutions to every project.'
    },
    {
      icon: <Award />,
      title: 'Integrity',
      description: 'Transparency, honesty, and doing the right thing even when no one is watching. Thats how weve built trust for over two decades.'
    }
  ];

  const milestones = [
    { year: '2004', event: 'Clarity CI founded with a focus on enterprise middleware' },
    { year: '2010', event: 'Expanded into full-stack SaaS development' },
    { year: '2015', event: 'Launched mobile development division' },
    { year: '2018', event: 'Began AI/ML integration services' },
    { year: '2023', event: 'Launched TimeSCHEME, our flagship scheduling product' },
    { year: '2024', event: 'Serving clients nationwide with 20+ years of expertise' }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Building <span className="gradient-text">Clarity</span> Since 2004</h1>
          <p>
            For over 20 years, weve been transforming complex business challenges into 
            elegant software solutions. We bring clarity to chaos, simplicity to complexity, 
            and vision to reality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="story-section section">
        <div className="story-grid">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Clarity CI was born from a simple observation: businesses were drowning in 
              complexity. Too many systems, too many integrations, too many things that 
              didnt quite work together.
            </p>
            <p>
              We set out to change that. Starting with middleware solutions that connected 
              disparate enterprise systems, we grew into a full-service software consultancy 
              specializing in highly available commerce and scheduling systems.
            </p>
            <p>
              Today, we work with businesses of all sizes nationwide, bringing the same 
              commitment to clarity and excellence that defined us from day one.
            </p>
          </div>
          <div className="story-stats">
            <div className="story-stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years in Business</span>
            </div>
            <div className="story-stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="story-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="story-stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our <span className="gradient-text">Values</span></h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="grid grid-2">
          {values.map((value, index) => (
            <div key={index} className="card value-card">
              <div className="card-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="section-header">
          <h2>Our <span className="gradient-text">Journey</span></h2>
          <p>Two decades of innovation and growth</p>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-year">{milestone.year}</span>
              <div className="timeline-dot"></div>
              <p>{milestone.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="approach-section">
        <div className="approach-content">
          <div className="approach-text">
            <h2>Our <span className="gradient-text">Approach</span></h2>
            <p>
              We believe the best software comes from truly understanding your business. 
              Thats why we shadow your resources, learn your processes, and immerse 
              ourselves in your world before writing a single line of code.
            </p>
            <p>
              This discovery-first approach ensures we build exactly what you need—not 
              what we think you need. The result? Software that fits your business like 
              a glove, adopted enthusiastically by your team, and delivering measurable ROI.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore Our Services
              <ArrowRight />
            </Link>
          </div>
          <div className="approach-visual">
            <div className="approach-icon">
              <Zap className="icon-large" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Work Together?</h2>
          <p>Lets discuss how we can bring clarity to your next project.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
