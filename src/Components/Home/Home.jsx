import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="royal-wrapper">
      
      {/* --- GLOBAL EFFECTS --- */}
      <div className="vintage-noise"></div>
      
      {/* Fixed Ornamental Corners */}
      <div className="corner-ornament top-left"></div>
      <div className="corner-ornament top-right"></div>
      <div className="corner-ornament bottom-left"></div>
      <div className="corner-ornament bottom-right"></div>

      {/* --- SECTION 1: HERO (THE EMPIRE) --- */}
      <section className="section hero-section" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="crown-icon" data-aos="fade-down" data-aos-delay="200">
            <svg viewBox="0 0 24 24" width="60" height="60">
              <path fill="#C5A059" d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
          </div>
          
          <h1 className="hero-title" data-aos="zoom-out" data-aos-delay="300">
            The Adcrue <br/> <span className="gold-text-shimmer">Digital Empire</span>
          </h1>
          
          <div className="hero-divider"></div>
          
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="500">
            Unlock cutting-edge digital marketing strategies tailored for your business.
            We harness the power of AI to transform your brand into a Digital Powerhouse.
          </p>

          <div className="btn-container" data-aos="fade-up" data-aos-delay="700">
            {/* Added 'light-mode' class to button for dark background visibility */}
            <button className="btn-draw-border light-mode">
              <span>Enter The Estate</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: STATS (THE LEDGER) --- */}
      <section className="section bg-dark text-light" id="stats">
        <div className="container-wide">
          <div className="stats-grid">
            <div className="stat-box" data-aos="fade-up">
              <span className="stat-num gold-text">180%</span>
              <span className="stat-label">Avg ROI Increase</span>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-num gold-text">50+</span>
              <span className="stat-label">Brands Elevated</span>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-num gold-text">$50M+</span>
              <span className="stat-label">Growth Driven</span>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
              <span className="stat-num gold-text">98%</span>
              <span className="stat-label">Client Fealty</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE MANIFESTO --- */}
      <section className="section text-center bg-cream" id="manifesto">
        <div className="container-narrow">
          <h4 className="sub-header" data-aos="fade-up">The Manifesto</h4>
          <h2 className="section-heading" data-aos="fade-up" data-aos-delay="100">
            We Do Not Simply Market.<br/> We Inscribe History.
          </h2>
          <p className="body-text" data-aos="fade-up" data-aos-delay="200">
            In an age of fleeting pixels, we craft digital infrastructures built to last generations. 
            We are not merely developers; we are artisans of the binary. Our expert team crafts 
            customized campaigns that drive growth and engagement with the precision of a Swiss watch.
          </p>
          <div style={{ marginTop: '40px' }} data-aos="zoom-in">
             <button className="btn-draw-border">
              <span>Read Our Decree</span>
            </button>
          </div>
        </div>
      </section>

    {/* --- SECTION 4: THE MOVEMENT (Redesigned) --- */}
      <section className="section movement-section" id="marketing-philosophy">
        <div className="movement-container">
          
          {/* LEFT: The Content */}
          <div className="movement-text">
            <h5 className="sub-header" data-aos="fade-right">The Philosophy</h5>
            <h2 className="section-heading text-light" data-aos="fade-up">
              We Don't Just Marketing. <br/> 
              <span className="gold-text-shimmer">We Create Movements.</span>
            </h2>
            <p className="intro-paragraph text-dim" data-aos="fade-up" data-aos-delay="100">
              Elevating brands with strategic creativity. We are the bridge between 
              forgotten heritage and the digital future.
            </p>
            
            <div className="movement-features">
              {/* Feature 1 */}
              <div className="feature-row" data-aos="fade-up" data-aos-delay="200">
                <span className="feature-num">01</span>
                <div className="feature-detail">
                  <h3 className="feature-title">Brand Storytelling</h3>
                  <p className="feature-desc">Cutting through the noise to make your unique story heard across the realm.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-row" data-aos="fade-up" data-aos-delay="300">
                <span className="feature-num">02</span>
                <div className="feature-detail">
                  <h3 className="feature-title">Strategic & Creative</h3>
                  <p className="feature-desc">Data-driven insights fused with artistic mastery to deliver exceptional results.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-row" data-aos="fade-up" data-aos-delay="400">
                <span className="feature-num">03</span>
                <div className="feature-detail">
                  <h3 className="feature-title">Human-Centric</h3>
                  <p className="feature-desc">Leveraging technology to create meaningful, human experiences.</p>
                </div>
              </div>
            </div>

            <div className="btn-container" style={{marginTop: '40px'}} data-aos="fade-up" data-aos-delay="500">
              <button className="btn-draw-border light-mode">
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>

          {/* RIGHT: The Visual Masterpiece */}
          <div className="movement-visual" data-aos="zoom-in-left">
            <div className="image-composition">
              {/* Main Image */}
              <div className="main-img-box">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" 
                  alt="Strategic Meeting" 
                  className="vintage-img" 
                />
                <div className="img-overlay"></div>
              </div>
              
              {/* Offset Gold Border (Pure CSS decoration) */}
              <div className="offset-border"></div>

              {/* Floating Stat Card */}
              <div className="floating-stat-card" data-aos="fade-left" data-aos-delay="600">
                <span className="huge-num">98%</span>
                <span className="small-label">Success Rate</span>
              </div>

              {/* Rotating Stamp */}
              <div className="rotating-stamp">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="12">
                    <textPath xlinkHref="#circle">
                      ADCRUE DIGITAL • EST. 2024 • ROYALTY •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: OUR CODE OF HONOR --- */}
      <section className="section bg-paper" id="code-of-honor">
        <div className="container">
          <h2 className="section-heading text-center" data-aos="fade-up">Our Code of Honor</h2>
          
          <div className="card-grid">
            <div className="honor-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-border">
                <span className="roman-num">I</span>
                <h3>Strategy-First</h3>
                <div className="divider-small"></div>
                <p>We begin with in-depth research and tailor custom strategies for your brand’s unique goals.</p>
              </div>
            </div>

            <div className="honor-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-border">
                <span className="roman-num">II</span>
                <h3>Data-Driven</h3>
                <div className="divider-small"></div>
                <p>Every campaign is supported by analytics and continuous optimization, ensuring measurable ROI.</p>
              </div>
            </div>

            <div className="honor-card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-border">
                <span className="roman-num">III</span>
                <h3>Creative Excellence</h3>
                <div className="divider-small"></div>
                <p>We blend creativity with strategy, delivering campaigns that are both impactful and effective.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SERVICES GRID --- */}
      <section className="section" id="services">
        <div className="container">
           <div className="text-center mb-5">
            <h5 className="sub-header">Our Expertise</h5>
            <h2 className="section-heading">The Royal Arsenal</h2>
          </div>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <h3>SEO & Content</h3>
              <p>Dominate search rankings with strategic SEO and content that converts.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <h3>PPC & Ads</h3>
              <p>Maximize ROI with data-driven ad campaigns across Google and Meta.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Web Development</h3>
              <p>Build high-performance websites optimized for conversions.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Brand Strategy</h3>
              <p>Craft compelling identities that resonate and differentiate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: PARALLAX BANNER --- */}
      <section className="section parallax-banner" data-aos="zoom-in">
        <div className="overlay-dark"></div>
        <div className="banner-content">
          <h2 className="banner-quote">"Quality is the politeness of kings."</h2>
          <button className="btn-draw-border light-mode">
            <span>Explore The Vault</span>
          </button>
        </div>
      </section>

      {/* --- SECTION 8: OUR PROVEN PROCESS (Timeline) --- */}
      <section className="section bg-paper" id="process">
        <div className="container">
          <h2 className="section-heading text-center" data-aos="fade-down">Our Proven Process</h2>
          <p className="text-center sub-text">Success is not accidental. It is engineered.</p>

          <div className="timeline-wrapper">
            <div className="timeline-item" data-aos="fade-right">
              <div className="step-content">
                <span className="step-number">01</span>
                <h3>Discovery & Research</h3>
                <p>We dive deep into your business, industry, competitors, and target audience. This phase is about understanding what makes you unique.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right">
              <div className="step-content">
                <span className="step-number">02</span>
                <h3>Strategy Development</h3>
                <p>Based on our research, we craft a comprehensive marketing strategy tailored to your goals. A custom roadmap designed for success.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right">
              <div className="step-content">
                <span className="step-number">03</span>
                <h3>Creative Execution</h3>
                <p>Our creative team brings the strategy to life with compelling content, stunning visuals, and campaigns that grab attention.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right">
              <div className="step-content">
                <span className="step-number">04</span>
                <h3>Launch & Optimize</h3>
                <p>We launch your campaigns with precision, then continuously monitor, test, and optimize every element to maximize ROI.</p>
              </div>
            </div>
          </div>
          
          <div className="btn-center" style={{marginTop: '60px'}}>
             <button className="btn-draw-border">
              <span>Start The Process</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: TESTIMONIALS --- */}
      <section className="section" id="testimonials">
        <div className="container-narrow text-center">
          <h2 className="section-heading" data-aos="fade-down">Voices of the Realm</h2>
          <div className="testimonial-card" data-aos="flip-up">
            <p className="quote">"Working with Adcrue completely transformed our online presence. Within six months, we saw a 250% increase in qualified leads."</p>
            <h4 className="author">- Richa Chadda</h4>
          </div>
        </div>
      </section>

    

    </div>
  );
};

export default Home;