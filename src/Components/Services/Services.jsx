import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="service-adcure-wrapper">
      
      {/* --- GLOBAL VINTAGE OVERLAYS --- */}
      <div className="service-adcure-grain"></div>
     
      {/* --- SECTION 1: HERO --- */}
      <section className="service-adcure-section service-adcure-hero" id="service-adcure-hero">
        <div className="service-adcure-hero-overlay"></div>
        <div className="service-adcure-content-layer">
          <div className="service-adcure-crown-icon" data-aos="fade-down">
            <svg viewBox="0 0 24 24" width="60" height="60">
              <path fill="#C5A059" d="M12 2L2 19H22L12 2M12 5L18 16H6L12 5Z" />
            </svg>
          </div>
          <h5 className="service-adcure-sub-title" data-aos="fade-up">Est. Excellence</h5>
          <h1 className="service-adcure-main-title" data-aos="zoom-out" data-aos-delay="200">
            Our Digital Marketing <br/> <span className="service-adcure-gold-text">Arsenal</span>
          </h1>
          <div className="service-adcure-divider"></div>
          <p className="service-adcure-lead-text" data-aos="fade-up" data-aos-delay="400">
            Comprehensive, data-driven digital marketing solutions designed to accelerate your growth, 
            dominate your market, and transform your brand into an industry powerhouse.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: SERVICE NAV (Sticky-ish look) --- */}
      <div className="service-adcure-nav-strip">
        <span className="service-adcure-nav-item">SEO & Content</span>
        <span className="service-adcure-nav-sep">•</span>
        <span className="service-adcure-nav-item">Social Media</span>
        <span className="service-adcure-nav-sep">•</span>
        <span className="service-adcure-nav-item">PPC & Paid Ads</span>
        <span className="service-adcure-nav-sep">•</span>
        <span className="service-adcure-nav-item">Web Development</span>
        <span className="service-adcure-nav-sep">•</span>
        <span className="service-adcure-nav-item">Analytics</span>
      </div>

      {/* --- SERVICE BLOCK 1: SEO & CONTENT --- */}
      <section className="service-adcure-section service-adcure-block service-adcure-bg-cream" id="service-adcure-seo">
        <div className="service-adcure-container">
          <div className="service-adcure-split-row">
            <div className="service-adcure-text-col" data-aos="fade-right">
              <h5 className="service-adcure-gold-sub">01. Organic Growth</h5>
              <h2 className="service-adcure-heading">SEO & Content Marketing</h2>
              <p className="service-adcure-body">
                Dominate search rankings and establish your brand as the go-to authority through strategic SEO and compelling content that converts.
              </p>
              
              <div className="service-adcure-highlight-box">
                <h4>The Power of Organic Visibility</h4>
                <p>
                  In today’s digital landscape, being found online isn’t optional—it’s essential. 
                  Our approach is built on white-hat techniques, rigorous data analysis, and a deep understanding of algorithms.
                </p>
              </div>

              <div className="service-adcure-list-grid">
                 <ul className="service-adcure-ul">
                   <li>Technical SEO Audit</li>
                   <li>Keyword Research & Strategy</li>
                   <li>On-Page Optimization</li>
                 </ul>
                 <ul className="service-adcure-ul">
                   <li>Content Creation</li>
                   <li>Link Building</li>
                   <li>Local SEO</li>
                 </ul>
              </div>
            </div>
            
            <div className="service-adcure-visual-col" data-aos="fade-left">
              <div className="service-adcure-img-frame">
                 <div className="service-adcure-img-inner seo-img"></div>
                 <div className="service-adcure-stat-float">
                    <span>275%</span>
                    <small>Organic Traffic Increase</small>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE BLOCK 2: PPC (Dark) --- */}
      <section className="service-adcure-section service-adcure-block service-adcure-dark" id="service-adcure-ppc">
        <div className="service-adcure-container">
          <div className="service-adcure-split-row reverse">
            <div className="service-adcure-text-col" data-aos="fade-left">
              <h5 className="service-adcure-gold-sub">02. Paid Acceleration</h5>
              <h2 className="service-adcure-heading text-light">PPC & Paid Advertising</h2>
              <p className="service-adcure-body text-light-dim">
                Maximize ROI and accelerate growth with precision-targeted paid advertising campaigns across Google, Meta, and LinkedIn.
              </p>
              
              <div className="service-adcure-highlight-box dark-mode">
                <h4 className="text-gold">Performance Marketing That Delivers</h4>
                <p className="text-light-dim">
                  We believe every advertising dollar should work harder for your business. 
                  We obsess over metrics that matter: cost per acquisition and ROAS.
                </p>
              </div>

              <div className="service-adcure-stat-row">
                 <div className="service-adcure-mini-stat">
                    <strong>240%</strong>
                    <span>Lead Vol Increase</span>
                 </div>
                 <div className="service-adcure-mini-stat">
                    <strong>-58%</strong>
                    <span>Cost Per Lead</span>
                 </div>
                 <div className="service-adcure-mini-stat">
                    <strong>4.5x</strong>
                    <span>ROAS</span>
                 </div>
              </div>
            </div>
            
            <div className="service-adcure-visual-col" data-aos="fade-right">
              <div className="service-adcure-img-frame gold-border">
                 <div className="service-adcure-img-inner ppc-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE BLOCK 3: SOCIAL MEDIA --- */}
      <section className="service-adcure-section service-adcure-block service-adcure-bg-paper" id="service-adcure-social">
        <div className="service-adcure-container">
          <div className="service-adcure-center-intro text-center">
            <h5 className="service-adcure-gold-sub">03. Community Building</h5>
            <h2 className="service-adcure-heading">Social Media Management</h2>
            <p className="service-adcure-body-narrow">
              Build engaged communities, amplify your brand voice, and turn followers into loyal customers.
              Beyond posting—we foster movements.
            </p>
          </div>

          <div className="service-adcure-grid-3">
             <div className="service-adcure-card" data-aos="fade-up">
                <h3>Social Strategy</h3>
                <p>Comprehensive strategy defining goals, audiences, and content themes.</p>
             </div>
             <div className="service-adcure-card" data-aos="fade-up" data-aos-delay="100">
                <h3>Content Creation</h3>
                <p>Professional photography, video production, and copywriting.</p>
             </div>
             <div className="service-adcure-card" data-aos="fade-up" data-aos-delay="200">
                <h3>Influencer Partnerships</h3>
                <p>Collaborating with relevant voices to expand reach and credibility.</p>
             </div>
          </div>
          
          <div className="service-adcure-social-stats" data-aos="zoom-in">
             <div className="service-adcure-stat-circle">
                <span>3M+</span>
                <small>Followers Grown</small>
             </div>
             <div className="service-adcure-stat-circle">
                <span>265%</span>
                <small>Engagement Growth</small>
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE BLOCK 4: WEB DEV (Dark) --- */}
      <section className="service-adcure-section service-adcure-block service-adcure-dark" id="service-adcure-web">
        <div className="service-adcure-container">
          <div className="service-adcure-split-row">
            <div className="service-adcure-text-col" data-aos="fade-right">
              <h5 className="service-adcure-gold-sub">04. Digital Infrastructure</h5>
              <h2 className="service-adcure-heading text-light">Web Development & CRO</h2>
              <p className="service-adcure-body text-light-dim">
                Your website is your digital storefront. We build lightning-fast, conversion-optimized websites 
                that provide exceptional user experiences.
              </p>

              <div className="service-adcure-tech-list">
                 <span>Custom Design</span>
                 <span>Responsive</span>
                 <span>Speed Optimization</span>
                 <span>E-commerce</span>
                 <span>Security</span>
              </div>
              
              <div className="service-adcure-cro-process">
                 <h4>The CRO Methodology</h4>
                 <ul>
                    <li>Research & Analysis</li>
                    <li>Hypothesis Development</li>
                    <li>A/B Testing</li>
                    <li>Implementation & Iteration</li>
                 </ul>
              </div>
            </div>
            
            <div className="service-adcure-visual-col" data-aos="fade-left">
              <div className="service-adcure-browser-mockup">
                 <div className="service-adcure-browser-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                 </div>
                 <div className="service-adcure-browser-body web-img"></div>
                 <div className="service-adcure-stat-tag">
                    126% Avg Conv. Rate Increase
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE BLOCK 5: ANALYTICS --- */}
      <section className="service-adcure-section service-adcure-block service-adcure-bg-cream" id="service-adcure-data">
        <div className="service-adcure-container">
          <div className="service-adcure-center-intro text-center">
            <h5 className="service-adcure-gold-sub">05. Data Intelligence</h5>
            <h2 className="service-adcure-heading">Analytics & Insights</h2>
            <p className="service-adcure-body-narrow">
              Transform raw data into actionable insights. We cut through the noise to focus on metrics that matter.
            </p>
          </div>

          <div className="service-adcure-data-grid">
             <div className="service-adcure-data-box" data-aos="flip-up">
                <h4>10 TB+</h4>
                <p>Data Analyzed</p>
             </div>
             <div className="service-adcure-data-box" data-aos="flip-up" data-aos-delay="100">
                <h4>500+</h4>
                <p>Custom Dashboards</p>
             </div>
             <div className="service-adcure-data-box" data-aos="flip-up" data-aos-delay="200">
                <h4>98%</h4>
                <p>Tracking Accuracy</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: BRAND STRATEGY (The Seal) --- */}
      <section className="service-adcure-section service-adcure-brand-block" id="service-adcure-brand">
        <div className="service-adcure-brand-overlay"></div>
        <div className="service-adcure-container text-center" style={{position: 'relative', zIndex: 2}}>
          <h5 className="service-adcure-gold-sub">06. Identity & Soul</h5>
          <h2 className="service-adcure-heading text-light">Brand Strategy & Design</h2>
          <p className="service-adcure-body-narrow text-light-dim">
            Craft a compelling brand identity that resonates deeply. From visual identity to brand voice, 
            we build brands that stand the test of time.
          </p>

          <div className="service-adcure-brand-deliverables">
             <span>Logo & Identity</span>
             <span>Brand Guidelines</span>
             <span>Market Positioning</span>
             <span>Visual Systems</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CTA (ROYAL INVITATION STYLE) --- */}
      <section className="service-adcure-section service-adcure-cta-section" id="service-adcure-cta">
        <div className="service-adcure-cta-container">
          <div className="service-adcure-cta-text" data-aos="fade-right">
            <h2 className="service-adcure-cta-heading">
              Ready to <span className="service-adcure-script">Transform</span> <br/>
              Your Digital Presence?
            </h2>
            <p className="service-adcure-cta-desc">
              Whether you need one service or a complete transformation, we’re here to help you achieve breakthrough growth.
            </p>
            <button className="service-adcure-btn-draw-gold">
              <span>Schedule Free Consultation</span>
            </button>
          </div>
          
          <div className="service-adcure-cta-visual" data-aos="zoom-in">
             <div className="service-adcure-rotating-badge">
                <svg viewBox="0 0 100 100" width="150" height="150">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="12" fill="#C5A059">
                     <textPath xlinkHref="#circlePath">
                        ADCRUE DIGITAL • STRATEGY • GROWTH •
                     </textPath>
                  </text>
                </svg>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;