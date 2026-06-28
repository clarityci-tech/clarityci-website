import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Cloud, Shield, Zap, BarChart3 } from 'lucide-react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Code />,
      title: 'Custom SaaS Development',
      description: 'End-to-end SaaS solutions built with React, Angular, and modern frameworks tailored to your business needs.'
    },
    {
      icon: <Cpu />,
      title: 'Middleware Integration',
      description: 'Seamless integration services connecting your systems with robust Node.js, C#, and Python APIs.'
    },
    {
      icon: <Cloud />,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions on AWS, Azure, and GCP with Postgres and MongoDB backend expertise.'
    },
    {
      icon: <Shield />,
      title: 'Highly Available Systems',
      description: 'Mission-critical commerce and scheduling systems designed for 99.99% uptime and reliability.'
    },
    {
      icon: <Zap />,
      title: 'AI Integration',
      description: 'Cutting-edge AI solutions using LLMs, MCPs, and best-in-class tooling for intelligent automation.'
    },
    {
      icon: <BarChart3 />,
      title: 'Discovery Process',
      description: 'In-depth discovery including shadowing client resources to truly understand your business operations.'
    }
  ];

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '50+', label: 'Enterprise Clients' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Trusted by businesses nationwide</span>
          </div>
          <h1 className="hero-title">
            Building Clarity in Complex Systems
          </h1>
          <p className="hero-subtitle">
            We transform businesses through innovative SaaS and middleware solutions. 
            With 20+ years of experience, we deliver highly available commerce and 
            scheduling systems that power enterprises nationwide.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary btn-large">
              Explore Services
              <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-large">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src="/images/hero-team.jpg" 
            alt="Team collaboration" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="section-header">
          <h2>What We Do Best</h2>
          <p>Comprehensive technology solutions that drive business growth and operational excellence</p>
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

      {/* TimeSCHEME CTA */}
      <section className="product-cta">
        <div className="product-cta-content">
          <div className="product-cta-text">
            <h2>Meet TimeSCHEME</h2>
            <p>
              Our flagship employee scheduling solution designed specifically for 
              convention centers. Streamline workforce management with intelligent 
              scheduling, real-time availability tracking, and automated compliance.
            </p>
            <Link to="/timescheme" className="btn btn-primary btn-large">
              Learn More
              <ArrowRight />
            </Link>
          </div>
          <div className="product-cta-visual">
            <img 
              src="/images/scheduling.jpg" 
              alt="TimeSCHEME Scheduling" 
              className="product-cta-image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's discuss how we can transform your business with cutting-edge technology solutions.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Start Your Project
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
