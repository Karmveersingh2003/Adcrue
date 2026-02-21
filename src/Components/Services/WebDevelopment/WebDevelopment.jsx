import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WebDevelopment.css';

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="webdev-adcure-wrapper">
      
      {/* --- GLOBAL OVERLAYS --- */}
      <div className="webdev-adcure-grain"></div>
   

      {/* --- SECTION 1: HERO --- */}
      <section className="webdev-adcure-section webdev-adcure-hero" id="webdev-adcure-hero">
        <div className="webdev-adcure-hero-overlay"></div>
        <div className="webdev-adcure-content-layer">
          <div className="webdev-adcure-crown-icon" data-aos="fade-down">
            <svg viewBox="0 0 24 24" width="60" height="60">
              <path fill="#C5A059" d="M12 2L2 19H22L12 2M12 5L18 16H6L12 5Z" />
            </svg>
          </div>
          <h5 className="webdev-adcure-sub-title" data-aos="fade-up">Est. in Delhi, India</h5>
          <h1 className="webdev-adcure-main-title" data-aos="zoom-out" data-aos-delay="200">
            Architects of the <br/> <span className="webdev-adcure-gold-text">Digital Realm</span>
          </h1>
          <div className="webdev-adcure-divider"></div>
          <p className="webdev-adcure-lead-text" data-aos="fade-up" data-aos-delay="400">
            Best Website Designing Services in Delhi. We transform ideas into stunning digital 
            estates and turn them into successful online empires.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: THE INTRODUCTION (Story) --- */}
      <section className="webdev-adcure-section webdev-adcure-split" id="webdev-adcure-intro">
        <div className="webdev-adcure-col-text" data-aos="fade-right">
          <h5 className="webdev-adcure-gold-sub">The Craft</h5>
          <h2 className="webdev-adcure-heading">More Than Just Code. <br/> We Build Legacies.</h2>
          
          <p className="webdev-adcure-body">
            We are a team of skilled web designers and developers based in Delhi, India, dedicated to transforming ideas into stunning websites. Though headquartered in the capital, we collaborate with noble clients worldwide across diverse industries.
          </p>
          
          <p className="webdev-adcure-body">
            Our expertise goes beyond website design—we strive to be the best web design company in Delhi NCR. What started as a freelance venture has grown into a top website design agency, known for its transparent, client-focused approach.
          </p>

          <div className="webdev-adcure-highlight">
            <p>
              "Unlike many agencies, we keep all work in-house, ensuring quality and direct communication between clients and designers."
            </p>
          </div>
        </div>
        
        <div className="webdev-adcure-col-visual" data-aos="fade-left">
          <div className="webdev-adcure-img-frame">
             <div className="webdev-adcure-code-bg">
                {/* Abstract representation of code on parchment */}
                <div className="webdev-adcure-code-line"></div>
                <div className="webdev-adcure-code-line short"></div>
                <div className="webdev-adcure-code-line medium"></div>
                <div className="webdev-adcure-code-line"></div>
             </div>
             <div className="webdev-adcure-badge">
                Delhi's Finest<br/>Web Architects
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE PROCESS (Blueprint) --- */}
      <section className="webdev-adcure-section webdev-adcure-dark" id="webdev-adcure-process">
        <div className="webdev-adcure-container">
          <h2 className="webdev-adcure-heading text-light text-center" data-aos="fade-down">The Construction Protocol</h2>
          <p className="text-light-dim text-center mb-5">Our Website Designing Process</p>

          <div className="webdev-adcure-process-grid">
            
            {/* Step 1 */}
            <div className="webdev-adcure-process-card" data-aos="fade-up">
              <div className="webdev-adcure-step-num">I</div>
              <h3>Discovery</h3>
              <div className="webdev-adcure-divider-small"></div>
              <p>We analyze your requirements, industry, and goals. We map the terrain before laying the first stone.</p>
            </div>

            {/* Step 2 */}
            <div className="webdev-adcure-process-card" data-aos="fade-up" data-aos-delay="100">
              <div className="webdev-adcure-step-num">II</div>
              <h3>Plan</h3>
              <div className="webdev-adcure-divider-small"></div>
              <p>We draft the blueprints. Wireframes, sitemaps, and user journeys are crafted with precision.</p>
            </div>

            {/* Step 3 */}
            <div className="webdev-adcure-process-card" data-aos="fade-up" data-aos-delay="200">
              <div className="webdev-adcure-step-num">III</div>
              <h3>Execute</h3>
              <div className="webdev-adcure-divider-small"></div>
              <p>The construction begins. We code, design, and animate your digital presence with absolute rigor.</p>
            </div>

            {/* Step 4 */}
            <div className="webdev-adcure-process-card" data-aos="fade-up" data-aos-delay="300">
              <div className="webdev-adcure-step-num">IV</div>
              <h3>Deliver</h3>
              <div className="webdev-adcure-divider-small"></div>
              <p>The Coronation. We launch your website, ensuring it is optimized, fast, and ready to rule.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: WHY CHOOSE US (Conclusion) --- */}
      <section className="webdev-adcure-section webdev-adcure-bg-paper" id="webdev-adcure-why">
        <div className="webdev-adcure-container-narrow text-center">
          <h2 className="webdev-adcure-heading" data-aos="fade-down">Choosing The Best</h2>
          <p className="webdev-adcure-body">
            In conclusion, investing in web designing and development services is essential for any business looking to thrive in the digital landscape. With a professional website, you not only improve your chances of being discovered but also enhance customer engagement and drive sales.
          </p>
          <p className="webdev-adcure-body">
            As you consider your options, remember to choose a reliable website designing company in Delhi like Adcrue. We offer website design, development, and redesign services with ongoing support—without complex contracts.
          </p>
          <div className="webdev-adcure-sig" data-aos="zoom-in">
             <span className="webdev-adcure-sig-line">Adcrue Digital</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CTA (Royal Invitation) --- */}
      <section className="webdev-adcure-section webdev-adcure-cta-section" id="webdev-adcure-cta">
        <div className="webdev-adcure-cta-container">
          
          <div className="webdev-adcure-cta-text" data-aos="fade-right">
            <h5 className="webdev-adcure-gold-sub">The Next Step</h5>
            <h2 className="webdev-adcure-cta-heading">
              Ready to take your business to the <span className="webdev-adcure-script">Next Level?</span>
            </h2>
            <p className="webdev-adcure-cta-desc">
              Reach out to us today to explore how our tailored services can boost your sales and brand visibility!
            </p>
            
            <div className="webdev-adcure-btn-wrapper">
               <button className="webdev-adcure-btn-draw-gold">
                <span>Contact Us Today</span>
              </button>
            </div>
          </div>

          <div className="webdev-adcure-cta-visual" data-aos="zoom-in">
            <div className="webdev-adcure-seal-anim">
              <div className="webdev-adcure-ring-text">
                <svg viewBox="0 0 200 200" width="200" height="200">
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                  <text fontSize="14" fill="#C5A059" letterSpacing="2">
                    <textPath xlinkHref="#circlePath">
                      • WEB DESIGN • DELHI • DEVELOPMENT •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="webdev-adcure-center-emblem">
                <span className="webdev-adcure-emblem-text">A</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;