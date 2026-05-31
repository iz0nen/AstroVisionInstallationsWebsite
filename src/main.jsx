import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Hammer, Building2, PanelTop, BriefcaseBusiness, Mail, Phone, CheckCircle, Upload, Menu, X, Images, Users, Home } from "lucide-react";
import "./style.css";

function AstroVisionWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "gallery" || hash === "join") setPage(hash);
      else setPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    updatePage();
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  const goTo = (nextPage) => {
    setMenuOpen(false);
    window.location.hash = nextPage === "home" ? "home" : nextPage;
  };

  const services = [
    { title: "Fixture Installation", icon: <BriefcaseBusiness />, text: "Retail fixtures, merchandising displays, shelving systems, kiosks, store remodels, and rollout installations." },
    { title: "Millwork Installation", icon: <PanelTop />, text: "Custom millwork, feature walls, trim packages, reception desks, wall panel systems, custom woodwork, and specialty installations." },
    { title: "Cabinetry Installation", icon: <Building2 />, text: "Commercial casework, office cabinetry, built-ins, storage systems, and custom cabinet installations." },
    { title: "Interior Signage, Displays & Graphics", icon: <PanelTop />, text: "Interior signage, dimensional lettering, display systems, wall graphics, vinyl graphics, wayfinding systems, branded environments, window graphics, and corporate identity installations." },
    { title: "Finish Carpentry", icon: <Hammer />, text: "Doors, hardware, trim, molding, wall panel systems, detailed finish work, and project punch-list completion." },
  ];

  const industries = ["Retail", "Hospitality", "Corporate Offices", "Healthcare", "Education", "Commercial Real Estate", "Developers", "General Contractors", "Property Management"];
  const chooseUs = ["Experienced Installation Professionals", "Commercial Construction Expertise", "Reliable Scheduling & Coordination", "Detail-Oriented Craftsmanship", "Safety-Focused Work Practices", "Commitment to Client Satisfaction"];
  const futureCategories = ["Millwork Installation", "Cabinetry Installation", "Interior Signage, Displays & Graphics", "Finish Carpentry"];

  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <a href="#" className="brand brand-logo" onClick={() => setPage("home")}>
  <img src="/assets/astro-vision-header-logo.png" alt="Astro Vision Installations" />
</a>
          <nav className="nav desktop-nav">
  <button className="nav-pill" onClick={() => setPage("home")}>
    Home
  </button>

  <button className="nav-pill" onClick={() => setPage("gallery")}>
    Project Gallery
  </button>

  <button className="nav-pill" onClick={() => setPage("join")}>
    Join Our Team
  </button>

  <button className="nav-pill nav-pill-primary" onClick={() => setQuoteOpen(true)}>
    Request a Quote
  </button>
</nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            <button onClick={() => goTo("home")}><Home /> Home</button>
            <button onClick={() => goTo("gallery")}><Images /> Project Gallery</button>
            <button onClick={() => goTo("join")}><Users /> Join Our Team</button>
            <button onClick={() => { setMenuOpen(false); setQuoteOpen(true); }} className="btn">Request a Quote</button>
          </div>
        )}
      </header>

      {page === "home" && (
        <main id="home">
          <section className="hero">
            <div className="grid-bg"></div>
            <div className="hero-inner">
              <div className="hero-logo-card"><img src="/assets/astro-vision-main-logo.jpg" alt="Astro Vision Installations main logo" className="hero-logo" /></div>
              <p className="eyebrow">Commercial Installation Contractor</p>
              <h1>Astro Vision Installations</h1>
              <p className="tagline">Taking Your Vision Above and Beyond</p>
              <p className="service-line">Professional Fixture Installation • Millwork • Cabinetry • Interior Signage, Displays & Graphics • Finish Carpentry</p>
              <p className="summary">Delivering quality installation services for commercial, retail, hospitality, healthcare, education, and corporate environments.</p>
              <div className="actions"><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><button onClick={() => goTo("gallery")} className="btn secondary">View Project Gallery</button></div>
            </div>
          </section>

          <section className="section about">
            <img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations secondary logo" className="about-logo" />
            <div className="two-col"><div><p className="eyebrow">About Us</p><h2>Bringing Concepts to Completion</h2></div><div className="copy"><p>At Astro Vision Installations, we transform plans, designs, and ideas into finished spaces through expert installation and craftsmanship.</p><p>From retail fixtures and custom millwork to cabinetry, interior signage, displays, graphics, and finish carpentry, we bring reliability, attention to detail, and professionalism to every project.</p><p>We partner with general contractors, developers, retailers, facility managers, and commercial property owners to ensure projects are completed safely, efficiently, and to the highest standards.</p></div></div>
          </section>

          <section id="services" className="section tinted"><p className="eyebrow">Our Services</p><h2>Commercial installation services built around execution.</h2><div className="cards">{services.map(s => <div className="card" key={s.title}><div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>

          <section className="section tinted-dark"><div className="two-col"><div><p className="eyebrow">Why Choose Us</p><h2>Reliable workmanship for commercial project teams.</h2></div><div className="checks">{chooseUs.map(c => <div className="check" key={c}><CheckCircle /> <span>{c}</span></div>)}</div></div></section>

          <section id="industries" className="section center"><p className="eyebrow">Industries We Serve</p><h2>Supporting commercial spaces from rollout to completion.</h2><div className="industries">{industries.map(i => <div key={i}>{i}</div>)}</div></section>

          <section className="section cta"><div className="cta-box"><p className="eyebrow">Ready to Get Started?</p><h2>Taking Your Vision Above and Beyond</h2><p>Whether you're planning a retail rollout, office build-out, millwork package, cabinetry installation, or interior signage project, Astro Vision Installations has the experience and craftsmanship to bring your project to completion.</p><div className="actions"><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><button onClick={() => goTo("gallery")} className="btn secondary">View Our Work</button></div></div></section>
        </main>
      )}

      {page === "gallery" && (
  <main className="gallery-page">
    <section className="gallery-hero">
      <p className="eyebrow">Project Gallery</p>
      <h1>Completed Commercial Installation Projects</h1>
      <p>
        Explore a selection of completed retail rollout and commercial installation work by Astro Vision Installations. 
        Our projects highlight fixture installation, merchandising displays, shelving systems, Interior Signage and Graphics, interior build-outs, Millwork, Desks, Cashwraps, Cabinetry, and 
        professional execution for commercial environments.
      </p>
    </section>

    <section className="completed-projects">
      <div className="section-head simple">
        <div>
          <p className="eyebrow">Completed Projects</p>
          <h2>Retail Rollout Installation Work</h2>
        </div>
        <p>
          Photos from completed commercial retail installation projects, including fixture systems, shelving, displays, and store setup.
        </p>
      </div>

      <div className="photo-grid gallery-overview-grid">
        <img src="/assets/retail-rollout-1.jpg" alt="Retail rollout completed project photo 1" />
        <img src="/assets/retail-rollout-2.jpg" alt="Retail rollout completed project photo 2" />
        <img src="/assets/retail-rollout-3.jpg" alt="Retail rollout completed project photo 3" />
      </div>

      <div className="gallery-video-section">
        <div className="video-intro">
          <p className="eyebrow">Project Walkthrough</p>
          <h2>Retail Rollout Video Overview</h2>
          <p>
            A walkthrough look at commercial retail fixture installation and project execution in progress.
          </p>
        </div>

        <video
          className="retail-video"
          src="/assets/retail-rollout-walkthrough.mp4"
          controls
          muted
          playsInline
        />
      </div>
    </section>
  </main>
)}

      {page === "join" && (
        <main>
          <section className="page-hero compact"><p className="eyebrow">Join Our Team</p><h1>Build With Astro Vision Installations</h1><p>We are looking for dependable, detail-oriented professionals interested in commercial fixture installation, millwork, cabinetry, signage, graphics, and finish carpentry projects.</p></section>
          <section className="section join-section"><div className="two-col join-layout"><div><p className="eyebrow">Now Accepting Applications</p><h2>Apply to work with us.</h2><p className="join-copy">Complete the application below and your information will be sent directly to Astro Vision Installations for review.</p><div className="join-highlights"><div><CheckCircle /> Commercial project experience preferred</div><div><CheckCircle /> Dependability and attention to detail required</div><div><CheckCircle /> Travel availability is a plus</div><div><CheckCircle /> Tools and transportation preferred</div></div></div>
            <form className="application-form" onSubmit={async (e) => { e.preventDefault(); const form=e.currentTarget; const data=Object.fromEntries(new FormData(form).entries()); const response=await fetch("/api/application",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}); if(response.ok){alert("Thank you. Your application has been sent."); form.reset();} else {alert("Something went wrong. Please email astrovisioninstallations@gmail.com.");}}}>
              <div className="form-grid"><input name="firstName" placeholder="First Name" required /><input name="lastName" placeholder="Last Name" required /><input name="phone" placeholder="Phone Number" required /><input name="email" placeholder="Email Address" type="email" required /></div>
              <input name="cityState" placeholder="City / State" />
              <select name="positionInterest" defaultValue="" required><option value="" disabled>Position / Work Interest</option><option>Fixture Installation</option><option>Millwork Installation</option><option>Cabinetry Installation</option><option>Interior Signage, Displays & Graphics</option><option>Finish Carpentry</option><option>General Helper / Labor Support</option></select>
              <div className="form-grid"><input name="yearsExperience" placeholder="Years of Experience" /><input name="availability" placeholder="Availability / Start Date" /></div>
              <select name="travelAvailable" defaultValue=""><option value="" disabled>Available to Travel?</option><option>Yes</option><option>No</option><option>Sometimes / Depends on project</option></select>
              <select name="transportation" defaultValue=""><option value="" disabled>Reliable Transportation?</option><option>Yes</option><option>No</option></select>
              <textarea name="experience" placeholder="Tell us about your relevant experience"></textarea>
              <textarea name="toolsSkills" placeholder="Tools, skills, certifications, or additional notes"></textarea>
              <input name="resumeLink" placeholder="Resume / Portfolio Link, if available" />
              <button className="btn">Submit Application</button><small>Applications are sent to astrovisioninstallations@gmail.com</small>
            </form></div></section>
        </main>
      )}

      <footer id="contact" className="footer"><div><img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations" className="footer-logo" /><h3>Astro Vision Installations</h3><p>Taking Your Vision Above and Beyond</p></div><div className="contact"><a href="tel:4078109979"><Phone /> (407) 810-9979</a><a href="tel:6073425483"><Phone /> (607) 342-5483</a><a href="mailto:astrovisioninstallations@gmail.com"><Mail /> astrovisioninstallations@gmail.com</a></div><div className="foot-note"><p>Commercial fixture, millwork, cabinetry, signage, graphics, and finish carpentry installation services.</p><p>© 2020 Astro Vision Installations. All rights reserved.</p></div></footer>

      {quoteOpen && <div className="modal"><div className="modal-box"><div className="modal-head"><div><p className="eyebrow">Request a Quote</p><h2>Project Questionnaire</h2><p>Submit project details for review and quoting.</p></div><button onClick={() => setQuoteOpen(false)}><X /></button></div><form className="quote-form" onSubmit={async (e)=>{e.preventDefault(); const form=e.currentTarget; const data=Object.fromEntries(new FormData(form).entries()); const response=await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}); if(response.ok){alert("Thank you. Your quote request has been sent."); form.reset(); setQuoteOpen(false);} else {alert("Something went wrong. Please call us at (407) 810-9979.");}}}><input type="hidden" name="form-name" value="quote-request"/><div className="form-grid"><input name="company" placeholder="Company Name"/><input name="name" placeholder="Contact Name"/><input name="phone" placeholder="Phone Number"/><input name="email" placeholder="Email Address" type="email"/></div><input name="location" placeholder="Project Location"/><select name="projectType" defaultValue=""><option value="" disabled>Project Type</option><option>Fixture Installation</option><option>Millwork</option><option>Cabinetry</option><option>Interior Signage, Displays & Graphics</option><option>Finish Carpentry</option><option>Multiple Services</option></select><div className="form-grid"><input name="startDate" placeholder="Estimated Start Date"/><input name="deadline" placeholder="Completion Deadline"/></div><textarea name="description" placeholder="Project Description"></textarea><textarea name="notes" placeholder="Site Access Requirements / Additional Notes"></textarea><label className="upload"><Upload /> Upload Plans, Drawings, Photos, or Scope Documents<input type="file" name="files" multiple /></label><button className="btn">Submit Request</button><small>Form destination: astrovisioninstallations@gmail.com</small></form></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<AstroVisionWebsite />);
