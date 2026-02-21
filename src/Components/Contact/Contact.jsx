import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="contact-adcure-wrapper">
      
      {/* --- GLOBAL VINTAGE OVERLAYS --- */}
      <div className="contact-adcure-grain"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="contact-adcure-hero" id="contact-adcure-hero">
        <div className="contact-adcure-hero-overlay"></div>
        <div className="contact-adcure-hero-content text-center">
          <div className="contact-adcure-crown-icon" data-aos="fade-down">
            <svg viewBox="0 0 24 24" width="60" height="60">
              <path fill="#C5A059" d="M12 2L2 19H22L12 2M12 5L18 16H6L12 5Z" />
            </svg>
          </div>
          <h5 className="contact-adcure-gold-sub" data-aos="fade-up">Correspondence</h5>
          <h1 className="contact-adcure-main-title" data-aos="zoom-in" data-aos-delay="200">
            Get In <span className="contact-adcure-script">Touch</span>
          </h1>
          <div className="contact-adcure-divider"></div>
          <p className="contact-adcure-lead-text" data-aos="fade-up" data-aos-delay="400">
            We’d love to hear from you! Whether you have questions about our Services, 
            need assistance, or want to share your feedback, our team is here to assist.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: CONTACT SPLIT LAYOUT --- */}
      <section className="contact-adcure-section" id="contact-adcure-main">
        <div className="contact-adcure-container">
          <div className="contact-adcure-split-wrapper">
            
            {/* LEFT: DARK INFO PANEL */}
            <div className="contact-adcure-info-panel" data-aos="fade-right">
              <h3 className="contact-adcure-panel-heading">Contact Information</h3>
              <p className="contact-adcure-panel-desc">
                Send a missive or visit our estate. We are at your service to discuss the future of your empire.
              </p>
              
              <div className="contact-adcure-info-list">
                
                {/* Phone */}
                <div className="contact-adcure-info-item">
                  <div className="contact-adcure-info-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#C5A059" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="contact-adcure-info-text">
                    <h4>Call Us</h4>
                    <p>+91 87449 96638</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-adcure-info-item">
                  <div className="contact-adcure-info-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#C5A059" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="contact-adcure-info-text">
                    <h4>Email Us</h4>
                    <p>info@adcrue.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-adcure-info-item">
                  <div className="contact-adcure-info-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#C5A059" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="contact-adcure-info-text">
                    <h4>Visit Us</h4>
                    <p>Indrapuram, Ghaziabad<br/>Uttar Pradesh – 201301</p>
                  </div>
                </div>

              </div>

              {/* Decorative Wax Seal */}
              <div className="contact-adcure-seal">
                 <span className="contact-adcure-seal-text">A</span>
              </div>
            </div>

            {/* RIGHT: VINTAGE FORM */}
            <div className="contact-adcure-form-panel" data-aos="fade-left" data-aos-delay="100">
              <h3 className="contact-adcure-form-heading">Send a Message</h3>
              <p className="contact-adcure-form-sub">Fill out the form and we’ll get back to you promptly.</p>
              
              <form className="contact-adcure-vintage-form">
                
                {/* Name */}
                <div className="contact-adcure-input-group">
                  <input type="text" id="name" required placeholder=" " />
                  <label htmlFor="name">Name *</label>
                  <span className="contact-adcure-bar"></span>
                </div>

                {/* Phone */}
                <div className="contact-adcure-input-group">
                  <input type="tel" id="phone" required placeholder=" " />
                  <label htmlFor="phone">Phone *</label>
                  <span className="contact-adcure-bar"></span>
                </div>

                {/* Email */}
                <div className="contact-adcure-input-group">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email *</label>
                  <span className="contact-adcure-bar"></span>
                </div>

                {/* Dropdown / Service */}
                <div className="contact-adcure-input-group">
                  <select id="service" required defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="seo">SEO & Content Marketing</option>
                    <option value="ppc">PPC & Paid Advertising</option>
                    <option value="social">Social Media Management</option>
                    <option value="web">Web Development</option>
                    <option value="analytics">Analytics & Data Insights</option>
                    <option value="brand">Brand Strategy</option>
                  </select>
                  <label htmlFor="service" className="contact-adcure-select-label">Select Service *</label>
                  <span className="contact-adcure-bar"></span>
                </div>

                {/* Message */}
                <div className="contact-adcure-input-group contact-adcure-textarea-group">
                  <textarea id="message" rows="4" required placeholder=" "></textarea>
                  <label htmlFor="message">Message *</label>
                  <span className="contact-adcure-bar"></span>
                </div>

                {/* Submit Button */}
                <div className="contact-adcure-btn-container">
                  <button type="button" className="contact-adcure-btn-draw-border">
                    <span>Send Message</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;