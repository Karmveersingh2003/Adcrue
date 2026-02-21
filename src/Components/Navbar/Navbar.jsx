import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-adcure-main ${isScrolled ? 'nav-adcure-scrolled' : ''}`}>
      <div className="nav-adcure-container">
        
        {/* --- LOGO / EMBLEM --- */}
        <div className="nav-adcure-logo">
          <div className="nav-adcure-emblem">A</div>
          <div className="nav-adcure-logo-text">
            <span className="nav-adcure-brand">ADCRUE</span>
            <span className="nav-adcure-tagline">Digital Estate</span>
          </div>
        </div>

        {/* --- DESKTOP NAV LINKS --- */}
        <ul className="nav-adcure-links">
          <li><a href="/" className="nav-adcure-link">Home</a></li>
          <li><a href="/about" className="nav-adcure-link">Our Story</a></li>
          <li><a href="/services" className="nav-adcure-link">Arsenal</a></li>
          <li><a href="/web-dev" className="nav-adcure-link">Architecture</a></li>
          <li><a href="/contact" className="nav-adcure-link">Contact Us</a></li>
        </ul>

        {/* --- ROYAL CTA --- */}
        <div className="nav-adcure-cta">
          <button className="nav-adcure-btn-draw">
            <span>Request Audience</span>
          </button>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <div 
          className={`nav-adcure-hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div className={`nav-adcure-mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-adcure-overlay-bg"></div>
        <ul className="nav-adcure-mobile-links">
          <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setIsMenuOpen(false)}>Our Story</a></li>
          <li><a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="/web-dev" onClick={() => setIsMenuOpen(false)}>Architecture</a></li>
          <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
          <li className="mobile-cta-li">
             <button className="nav-adcure-btn-draw">
                <span>Book A Call</span>
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;