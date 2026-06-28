import { Code, Cpu, Cloud, Shield, Zap, Smartphone, Database, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'SaaS Development',
      description: 'End-to-end SaaS solutions built with modern frameworks. We architect scalable, multi-tenant applications that grow with your business.',
      features: ['React & Angular Frontend', 'Node.js & C# APIs', 'Microservices Architecture', 'Multi-tenant Design']
    },
    {
      icon: <Cpu />,
      title: 'Middleware Solutions',
      description: 'Seamless system integration services connecting your enterprise applications. We build robust APIs and data pipelines that just work.',
      features: ['API Development', 'System Integration', 'ETL Pipelines', 'Message Queuing']
    },
    {
      icon: <Cloud />,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions on AWS, Azure, and GCP. We design infrastructure that scales automatically and minimizes costs.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery']
    },
    {
      icon: <Shield />,
      title: 'Highly Available Systems',
      description: 'Mission-critical commerce and scheduling systems designed for 99.99% uptime. We understand that downtime is not an option.',
      features: ['99.99% Uptime SLA', 'Load Balancing', 'Failover Systems', '24/7 Monitoring']
    },
    {
      icon: <Zap />,
      title: 'AI Integration',
      description: 'Cutting-edge AI solutions using LLMs, MCPs, and best-in-class tooling. We help you leverage AI to automate and optimize.',
      features: ['LLM Integration', 'MCP Implementation', 'Process Automation', 'Predictive Analytics']
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications using Maui and React Native. One codebase, multiple platforms, exceptional performance.',
      features: ['React Native', '.NET Maui', 'iOS & Android', 'Offline-first Design']
    }
  ];

  const techStack = [
    { category: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'C# / .NET', 'Python', 'Go'] },
    { category: 'Mobile', items: ['React Native', '.NET Maui', 'iOS', 'Android'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Kubernetes'] },
    { category: 'AI/ML', items: ['OpenAI', 'Anthropic', 'LangChain', 'Vector DBs'] }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We shadow your team and dive deep into your business processes to truly understand your needs.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We architect a solution that aligns with your goals, budget, and timeline.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with regular demos and feedback loops to ensure we\'re building the right thing.'
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'Smooth production deployment with monitoring, documentation, and team training.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our <span className="gradient-text">Services</span></h1>
          <p>
            From concept to deployment, we deliver end-to-end software solutions 
            that drive business growth and operational excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="grid grid-2">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="section-header">
          <h2>Our <span className="gradient-text">Tech Stack</span></h2>
          <p>Modern technologies we use to build world-class solutions</p>
        </div>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-category">
              <h4>{tech.category}</h4>
              <div className="tech-items">
                {tech.items.map((item, idx) => (
                  <span key={idx} className="tech-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="process-section section">
        <div className="section-header">
          <h2>Our <span className="gradient-text">Process</span></h2>
          <p>How we deliver exceptional results, every time</p>
        </div>
        <div className="process-steps">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how we can help bring your vision to life.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Start a Conversation
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
