import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-adcure-main">
      <div className="footer-adcure-grain"></div>
      
      {/* --- TOP ORNAMENT --- */}
      <div className="footer-adcure-ornament">
        <div className="footer-adcure-line"></div>
        <div className="footer-adcure-crown">
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path fill="#C5A059" d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
          </svg>
        </div>
        <div className="footer-adcure-line"></div>
      </div>

      <div className="footer-adcure-container">
        <div className="footer-adcure-grid">
          
          {/* COLUMN 1: THE BRAND */}
          <div className="footer-adcure-col brand-col">
            <div className="footer-adcure-logo">
              <span className="footer-adcure-logo-text">ADCRUE</span>
              <span className="footer-adcure-logo-sub">Digital Estate</span>
            </div>
            <p className="footer-adcure-about">
              Architects of eternal code and digital heritage. We transform ambitious brands into 
              sovereign industry leaders through the fusion of AI and classical strategy.
            </p>
            <div className="footer-adcure-socials">
             <a href="#" className="footer-adcure-social-link">
  <FaFacebookF />
</a>

<a href="/Insta" className="footer-adcure-social-link">
  <FaInstagram />
</a>

<a href="/Linkedin" className="footer-adcure-social-link">
  <FaLinkedinIn />
</a>

<a href="/Twitter" className="footer-adcure-social-link">
  <FaXTwitter />
</a>
            </div>
          </div>

          {/* COLUMN 2: THE ARSENAL (Services) */}
          <div className="footer-adcure-col">
            <h4 className="footer-adcure-title">The Arsenal</h4>
            <ul className="footer-adcure-links">
              <li><a href="/services">SEO & Content</a></li>
              <li><a href="/services">Paid Advertising</a></li>
              <li><a href="/services">Social Movements</a></li>
              <li><a href="/web-dev">Web Architecture</a></li>
              <li><a href="/services">Data Intelligence</a></li>
            </ul>
          </div>

          {/* COLUMN 3: THE GROUNDS (Quick Links) */}
          <div className="footer-adcure-col">
            <h4 className="footer-adcure-title">The Grounds</h4>
            <ul className="footer-adcure-links">
              <li><a href="/about">Our Story</a></li>
              <li><a href="/contact">Correspondence</a></li>
              <li><a href="/">The Archives</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Service</a></li>
            </ul>
          </div>

          {/* COLUMN 4: THE DECREE (Newsletter) */}
          <div className="footer-adcure-col newsletter-col">
            <h4 className="footer-adcure-title">The Decree</h4>
            <p className="footer-adcure-news-p">Subscribe to receive strategic insights directly to your inbox.</p>
            <form className="footer-adcure-form">
              <input type="email" placeholder="Email Address" className="footer-adcure-input" />
              <button type="button" className="footer-adcure-btn-draw">
                <span>Subscribe</span>
              </button>
            </form>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="footer-adcure-bottom">
          <div className="footer-adcure-copyright">
            © {new Date().getFullYear()} Adcrue Digital. All Rights Reserved. 
            <span className="footer-adcure-location">Indrapuram, Ghaziabad, UP.</span>
          </div>
          <div className="footer-adcure-elevate" onClick={scrollToTop}>
            <span className="footer-adcure-elevate-text">Elevate</span>
            <div className="footer-adcure-arrow">↑</div>
          </div>
        </div>
      </div>

      {/* Finishing Signature */}
      <div className="footer-adcure-signature">
        Crafting Digital Legacies
      </div>
    </footer>
  );
};

export default Footer;