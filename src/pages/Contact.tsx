import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'info@clarityci.com',
      link: 'mailto:info@clarityci.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Nationwide Service',
      link: null
    },
    {
      icon: <Clock />,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Let's Connect</h1>
          <p>
            Ready to transform your business? We'd love to hear about your project 
            and discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Whether you have a specific project in mind or just want to explore 
              possibilities, we're here to help.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-details">
                    <span className="method-title">{info.title}</span>
                    {info.link ? (
                      <a href={info.link} className="method-value">{info.value}</a>
                    ) : (
                      <span className="method-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-note">
              <h3>What happens next?</h3>
              <ol>
                <li>We'll review your message within 24 hours</li>
                <li>Schedule a discovery call to understand your needs</li>
                <li>Provide a tailored proposal with timeline and estimate</li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <CheckCircle className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="saas">SaaS Development</option>
                    <option value="middleware">Middleware Solutions</option>
                    <option value="ai">AI Integration</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="cloud">Cloud Architecture</option>
                    <option value="timescheme">TimeSCHEME</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large form-submit">
                  Send Message
                  <Send />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>What industries do you specialize in?</h4>
            <p>We specialize in highly available commerce and scheduling systems, with particular expertise in convention centers, event venues, and enterprise SaaS platforms.</p>
          </div>
          <div className="faq-item">
            <h4>How long does a typical project take?</h4>
            <p>Project timelines vary based on scope. A typical MVP takes 3-4 months, while full enterprise solutions may take 6-12 months. We'll provide a detailed timeline during our proposal.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer ongoing support?</h4>
            <p>Yes, we offer various support and maintenance packages to ensure your systems continue running smoothly after launch.</p>
          </div>
          <div className="faq-item">
            <h4>What is your pricing model?</h4>
            <p>We work on both fixed-price and time-and-materials bases, depending on project requirements. After discovery, we'll recommend the best approach for your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
