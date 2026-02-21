import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="notfound-adcure-wrapper">
      
      {/* --- GLOBAL VINTAGE OVERLAYS --- */}
      <div className="notfound-adcure-grain"></div>
      
      {/* Fixed Ornamental Corners */}
      <div className="notfound-adcure-corner top-left"></div>
      <div className="notfound-adcure-corner top-right"></div>
      <div className="notfound-adcure-corner bottom-left"></div>
      <div className="notfound-adcure-corner bottom-right"></div>

      {/* --- MAIN CONTENT --- */}
      <section className="notfound-adcure-section">
        
        {/* Abstract Background Elements */}
        <div className="notfound-adcure-glow orb-1"></div>
        <div className="notfound-adcure-glow orb-2"></div>

        <div className="notfound-adcure-content text-center">
          
          {/* Keyhole Icon */}
          <div className="notfound-adcure-icon-wrap" data-aos="fade-down">
            <svg viewBox="0 0 24 24" width="50" height="50" className="notfound-adcure-icon">
              <path fill="#C5A059" d="M12.6,10C13.9,9.3 14.8,7.8 14.8,6c0-2.8-2.2-5-5-5S4.8,3.2 4.8,6c0,1.8 0.9,3.3 2.2,4v9h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-3H12.6z M9.8,7.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5s1.5,0.7 1.5,1.5S10.6,7.5,9.8,7.5z"/>
            </svg>
          </div>

          {/* The Massive 404 */}
          <h1 className="notfound-adcure-numbers" data-aos="zoom-in" data-aos-delay="200">
            404
          </h1>
          
          <div className="notfound-adcure-divider" data-aos="scale-x" data-aos-delay="400"></div>
          
          <h2 className="notfound-adcure-title" data-aos="fade-up" data-aos-delay="500">
            Uncharted <span className="notfound-adcure-script">Territory</span>
          </h2>
          
          <p className="notfound-adcure-desc" data-aos="fade-up" data-aos-delay="600">
            It appears you have wandered beyond the borders of our Digital Estate. 
            The decree you seek does not exist, has been moved, or is lost to the Royal Archives.
          </p>
          
          {/* CTA Button */}
          <div className="notfound-adcure-btn-wrapper">
            <a href="/" style={{ textDecoration: 'none' }}>
              <button className="notfound-adcure-btn-draw-gold">
                <span>Return to the Estate</span>
              </button>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default NotFound;