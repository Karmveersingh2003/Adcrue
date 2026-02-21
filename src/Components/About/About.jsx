import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="about-adcure-wrapper">
      
      {/* --- GLOBAL OVERLAYS --- */}
      <div className="about-adcure-grain"></div>
    

      {/* --- SECTION 1: HERO --- */}
      <section className="about-adcure-section about-adcure-hero" id="about-adcure-hero">
        <div className="about-adcure-hero-overlay"></div>
        <div className="about-adcure-content-layer">
          <div className="about-adcure-crown-icon" data-aos="fade-down">
            <svg viewBox="0 0 24 24" width="60" height="60">
              <path fill="#C5A059" d="M12 2L2 19H22L12 2M12 5L18 16H6L12 5Z" />
            </svg>
          </div>
          <h5 className="about-adcure-sub-title" data-aos="fade-up">Est. 2015</h5>
          <h1 className="about-adcure-main-title" data-aos="zoom-out" data-aos-delay="200">
            We Are Your <br/> <span className="about-adcure-gold-text">Growth Partner</span>
          </h1>
          <div className="about-adcure-divider"></div>
          <p className="about-adcure-lead-text" data-aos="fade-up" data-aos-delay="400">
            Born from a passion for assisting businesses thrive in the digital age, 
            Adcrue has evolved into one of the most trusted names in digital marketing. 
            We’re not here to be just another vendor—we’re here to be the catalyst for your transformation.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: ORIGIN STORY --- */}
      <section className="about-adcure-section about-adcure-split" id="about-adcure-story">
        <div className="about-adcure-col-text" data-aos="fade-right">
          <h2 className="about-adcure-heading">Where It All Began</h2>
          <p className="about-adcure-body">
            Every great agency has an origin story, and ours started with frustration. 
            Our founders, seasoned marketers from traditional agencies, saw a recurring problem: 
            businesses were being sold cookie-cutter solutions that looked good in presentations 
            but failed to deliver real, measurable results.
          </p>
          <p className="about-adcure-body">
            They witnessed too many brands waste budgets on flashy campaigns that generated vanity metrics 
            but didn’t move the needle on what really mattered. There had to be a better way.
          </p>
          <p className="about-adcure-body">
            In 2015, we were founded on a revolutionary principle: marketing should be accountable. 
            No more smoke and mirrors. Just strategic, data-driven marketing that delivers tangible results.
          </p>
        </div>
        <div className="about-adcure-col-img" data-aos="fade-left">
          <div className="about-adcure-img-frame">
            <div className="about-adcure-img-inner">
               {/* Placeholder for Vintage Office Image */}
               <span className="about-adcure-img-caption">The First Office<br/>Circa 2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MISSION & STATS (Dark) --- */}
      <section className="about-adcure-section about-adcure-dark" id="about-adcure-stats">
        <div className="about-adcure-container">
          <div className="about-adcure-mission-box text-center" data-aos="fade-up">
            <h5 className="about-adcure-gold-sub">Our Mission</h5>
            <h3 className="about-adcure-mission-text">
              "To empower businesses of all sizes to achieve extraordinary growth through strategic, 
              data-driven digital marketing that delivers measurable results and lasting competitive advantages."
            </h3>
          </div>

          <div className="about-adcure-stat-grid">
            <div className="about-adcure-stat-item" data-aos="fade-up" data-aos-delay="100">
              <span className="about-adcure-stat-num">25+</span>
              <span className="about-adcure-stat-label">Brands Transformed</span>
            </div>
            <div className="about-adcure-stat-item" data-aos="fade-up" data-aos-delay="200">
              <span className="about-adcure-stat-num">27+</span>
              <span className="about-adcure-stat-label">Team Members</span>
            </div>
            <div className="about-adcure-stat-item" data-aos="fade-up" data-aos-delay="300">
              <span className="about-adcure-stat-num">7+</span>
              <span className="about-adcure-stat-label">Years of Excellence</span>
            </div>
            <div className="about-adcure-stat-item" data-aos="fade-up" data-aos-delay="400">
              <span className="about-adcure-stat-num">98%</span>
              <span className="about-adcure-stat-label">Retention Rate</span>
            </div>
            <div className="about-adcure-stat-item" data-aos="fade-up" data-aos-delay="500">
              <span className="about-adcure-stat-num">3 Cr.+</span>
              <span className="about-adcure-stat-label">Revenue Generated</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: WHAT MAKES US DIFFERENT --- */}
      <section className="about-adcure-section about-adcure-bg-paper" id="about-adcure-usp">
        <div className="about-adcure-container">
          <h2 className="about-adcure-heading text-center" data-aos="fade-down">What Makes Us Different</h2>
          <p className="about-adcure-center-text">It’s not just what we do—it’s how we do it and why we do it.</p>
          
          <div className="about-adcure-usp-grid">
            <div className="about-adcure-card" data-aos="fade-up">
              <h3>Results-Obsessed</h3>
              <p>We measure success by one thing only: the impact we have on your business. Accountability built in from day one.</p>
            </div>
            <div className="about-adcure-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Data-Driven</h3>
              <p>Intuition has its place, but data drives our decisions. Advanced analytics ensure every dollar works harder.</p>
            </div>
            <div className="about-adcure-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Partnership Mindset</h3>
              <p>We're not vendors. We're strategic partners invested in your success. When you win, we win.</p>
            </div>
            <div className="about-adcure-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Innovation-First</h3>
              <p>We stay ahead of trends and master emerging platforms to give clients competitive advantages.</p>
            </div>
            <div className="about-adcure-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Creative Excellence</h3>
              <p>Data without creativity is sterile. We deliver campaigns that are strategically sound and creatively compelling.</p>
            </div>
            <div className="about-adcure-card" data-aos="fade-up" data-aos-delay="500">
              <h3>Radical Transparency</h3>
              <p>No hidden fees. No confusing jargon. No smoke and mirrors. Complete transparency in our reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CEO QUOTE --- */}
      <section className="about-adcure-section about-adcure-ceo" id="about-adcure-ceo">
        <div className="about-adcure-quote-frame" data-aos="zoom-in">
          <div className="about-adcure-quote-mark">“</div>
          <h2 className="about-adcure-quote-text">
            Success in digital marketing isn't about following trends—it's about understanding fundamentals, 
            leveraging data, and never losing sight of what truly matters: delivering real value to real businesses.
          </h2>
          <div className="about-adcure-ceo-sig">
            <span className="about-adcure-name">Sharmistha Barik</span>
            <span className="about-adcure-title">Founder & CEO</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CULTURE & VALUES --- */}
      <section className="about-adcure-section" id="about-adcure-culture">
        <div className="about-adcure-container">
          <h2 className="about-adcure-heading text-center" data-aos="fade-up">Our Culture & Values</h2>
          <div className="about-adcure-values-list">
            <div className="about-adcure-value-row" data-aos="fade-right">
              <span className="about-adcure-roman">I</span>
              <div className="about-adcure-val-content">
                <h4>Growth Mindset</h4>
                <p>We believe in continuous learning and improvement.</p>
              </div>
            </div>
            <div className="about-adcure-value-row" data-aos="fade-left">
              <span className="about-adcure-roman">II</span>
              <div className="about-adcure-val-content">
                <h4>Collaboration</h4>
                <p>The best ideas emerge when diverse minds work together.</p>
              </div>
            </div>
            <div className="about-adcure-value-row" data-aos="fade-right">
              <span className="about-adcure-roman">III</span>
              <div className="about-adcure-val-content">
                <h4>Accountability</h4>
                <p>We own our results and celebrate our successes together.</p>
              </div>
            </div>
            <div className="about-adcure-value-row" data-aos="fade-left">
              <span className="about-adcure-roman">IV</span>
              <div className="about-adcure-val-content">
                <h4>Excellence</h4>
                <p>Good enough never is. We push for exceptional work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* --- SECTION 8: WHY CLIENTS CHOOSE US (Support Stats) --- */}
      <section className="about-adcure-section about-adcure-dark" id="about-adcure-support">
        <div className="about-adcure-container text-center">
          <h2 className="about-adcure-heading text-light" data-aos="fade-down">Why Clients Stay</h2>
          <p className="about-adcure-lead-text text-light">
            In an industry where the average relationship lasts 18 months, our clients stay for years.
          </p>
          <div className="about-adcure-support-grid">
            <div className="about-adcure-support-box" data-aos="zoom-in">
              <span className="about-adcure-big-num">24<small>hrs</small></span>
              <p>Client Support</p>
            </div>
            <div className="about-adcure-support-box" data-aos="zoom-in" data-aos-delay="100">
              <span className="about-adcure-big-num">48<small>hrs</small></span>
              <p>Avg Response Time</p>
            </div>
            <div className="about-adcure-support-box" data-aos="zoom-in" data-aos-delay="200">
              <span className="about-adcure-big-num">100<small>%</small></span>
              <p>Project Completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: COMMITMENT / PROCESS --- */}
      <section className="about-adcure-section about-adcure-bg-paper" id="about-adcure-process">
        <div className="about-adcure-container">
          <h2 className="about-adcure-heading text-center">Our Commitment</h2>
          <div className="about-adcure-timeline">
            <div className="about-adcure-timeline-item" data-aos="fade-up">
              <div className="about-adcure-step-num">01</div>
              <h4>Discovery & Deep Understanding</h4>
              <p>We invest significant time understanding your business, industry, and customers before recommending any strategy.</p>
            </div>
            <div className="about-adcure-timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="about-adcure-step-num">02</div>
              <h4>Strategic Planning</h4>
              <p>We develop custom roadmaps designed specifically for your unique situation, challenges, and opportunities.</p>
            </div>
            <div className="about-adcure-timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="about-adcure-step-num">03</div>
              <h4>Flawless Execution</h4>
              <p>Our team brings strategies to life through meticulous project management and creative excellence.</p>
            </div>
            <div className="about-adcure-timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="about-adcure-step-num">04</div>
              <h4>Continuous Optimization</h4>
              <p>We don’t set and forget. We continuously monitor and optimize so your marketing gets more efficient over time.</p>
            </div>
          </div>
        </div>
      </section>

     

  
     {/* --- SECTION 9: CTA --- */}
      <section className="about-adcure-section about-adcure-transform-section" id="about-adcure-cta">
        {/* Cinematic Background Elements */}
        <div className="about-adcure-overlay-gradient"></div>
        <div className="about-adcure-gold-particles"></div>

        <div className="about-adcure-transform-container">
          
          {/* Left: The Decree */}
          <div className="about-adcure-transform-text" data-aos="fade-right">
            <h5 className="about-adcure-gold-sub">The Next Chapter</h5>
            <h2 className="about-adcure-transform-heading">
              Let's <span className="about-adcure-script-highlight">Transform</span> <br/> 
              Your Brand Together.
            </h2>
            <p className="about-adcure-transform-desc">
              Ready to experience what it’s like to work with an agency that’s truly invested in your success? 
              Breakthrough growth awaits those bold enough to seize it.
            </p>
            
            <div className="about-adcure-btn-wrapper" data-aos="fade-up" data-aos-delay="200">
               <button className="about-adcure-btn-draw-gold">
                <span>Schedule Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Right: The Seal of Excellence */}
          <div className="about-adcure-transform-visual" data-aos="zoom-in">
            <div className="about-adcure-seal-anim">
              {/* Rotating Text Ring */}
              <div className="about-adcure-ring-text">
                <svg viewBox="0 0 200 200" width="200" height="200">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text fontSize="14" fill="#C5A059" letterSpacing="2">
                    <textPath xlinkHref="#circlePath">
                      • ADCRUE DIGITAL • STRATEGY • GROWTH • EXCELLENCE
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Center Emblem */}
              <div className="about-adcure-center-emblem">
                <span className="about-adcure-emblem-text">A</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;