import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Zap className="logo-icon" />
              <span className="logo-text">Clarity</span>
              <span className="logo-accent">CI</span>
            </Link>
            <p className="footer-description">
              Transforming businesses through innovative SaaS and middleware solutions. 
              20+ years of experience delivering highly available systems nationwide.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://github.com/clarityci-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/timescheme">TimeSCHEME</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">SaaS Development</Link></li>
              <li><Link to="/services">Middleware Solutions</Link></li>
              <li><Link to="/services">AI Integration</Link></li>
              <li><Link to="/services">Mobile Development</Link></li>
              <li><Link to="/services">Cloud Architecture</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Mail className="contact-icon" />
                <a href="mailto:info@clarityci.com">info@clarityci.com</a>
              </li>
              <li>
                <Phone className="contact-icon" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </li>
              <li>
                <MapPin className="contact-icon" />
                <span>Nationwide Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Clarity CI. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;