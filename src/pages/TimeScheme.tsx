import { Clock, Users, Calendar, Shield, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TimeScheme.css';

const TimeScheme = () => {
  const features = [
    {
      icon: <Calendar />,
      title: 'Intelligent Scheduling',
      description: 'AI-powered scheduling that optimizes staff allocation based on demand, skills, and labor laws.'
    },
    {
      icon: <Users />,
      title: 'Multi-Venue Support',
      description: 'One login for employees working across multiple conference centers. Data isolation ensures privacy.'
    },
    {
      icon: <Clock />,
      title: 'Real-Time Availability',
      description: 'Instant visibility into staff availability, time-off requests, and shift swaps.'
    },
    {
      icon: <Shield />,
      title: 'Compliance Built-In',
      description: 'Automatic enforcement of labor laws, union rules, and venue-specific requirements.'
    },
    {
      icon: <BarChart3 />,
      title: 'Advanced Analytics',
      description: 'Deep insights into labor costs, productivity, and scheduling efficiency.'
    },
    {
      icon: <Clock />,
      title: 'Mobile-First',
      description: 'Native mobile apps for iOS and Android. Manage schedules from anywhere.'
    }
  ];

  const benefits = [
    'Reduce scheduling time by 75%',
    'Eliminate double-booking conflicts',
    'Improve employee satisfaction',
    'Cut labor costs by up to 15%',
    'Ensure 100% compliance',
    'Real-time notifications'
  ];

  return (
    <div className="timescheme-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-content">
          <div className="product-hero-badge">Our Flagship Product</div>
          <h1>TimeSCHEME</h1>
          <p className="product-hero-subtitle">
            Employee scheduling reimagined for convention centers. 
            Intelligent, compliant, and built for the unique challenges of event staffing.
          </p>
          <div className="product-hero-cta">
            <Link to="/contact" className="btn btn-primary btn-large">
              Request a Demo
              <ArrowRight />
            </Link>
            <a href="#features" className="btn btn-secondary btn-large">
              Explore Features
            </a>
          </div>
        </div>
        <div className="product-hero-image">
          <img src="/images/office.jpg" alt="Convention center scheduling" />
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="problem-solution">
        <div className="problem-solution-grid">
          <div className="problem-box">
            <h3>The Problem</h3>
            <ul>
              <li>Complex multi-venue scheduling</li>
              <li>Union and labor law compliance</li>
              <li>Last-minute event changes</li>
              <li>High employee turnover</li>
              <li>Manual, error-prone processes</li>
            </ul>
          </div>
          <div className="solution-box">
            <h3>Our Solution</h3>
            <ul>
              <li>Single platform, multiple venues</li>
              <li>Automated compliance checks</li>
              <li>Real-time schedule adjustments</li>
              <li>Employee-centric mobile experience</li>
              <li>AI-powered optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="product-features section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to manage your workforce efficiently</p>
        </div>
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="card feature-card">
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>Why Choose TimeSCHEME?</h2>
            <p>
              Built from the ground up with input from convention center operators, 
              TimeSCHEME addresses the real challenges you face every day.
            </p>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <CheckCircle className="benefit-icon" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="benefits-visual">
            <img src="/images/meeting.jpg" alt="Team meeting" className="benefits-image" />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="audience-section section">
        <div className="section-header">
          <h2>Built For You</h2>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <h3>Convention Centers</h3>
            <p>Manage staff across multiple halls, meeting rooms, and event spaces with ease.</p>
          </div>
          <div className="audience-card">
            <h3>Event Venues</h3>
            <p>Handle the unpredictable nature of events with flexible, real-time scheduling.</p>
          </div>
          <div className="audience-card">
            <h3>Conference Centers</h3>
            <p>Coordinate complex multi-day events with overlapping staff requirements.</p>
          </div>
          <div className="audience-card">
            <h3>Stadiums & Arenas</h3>
            <p>Scale from intimate gatherings to massive crowds with intelligent staffing.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Scheduling?</h2>
          <p>Join leading convention centers already using TimeSCHEME</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Schedule a Demo
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TimeScheme;
