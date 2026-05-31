import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Hammer, Building2, PanelTop, BriefcaseBusiness, Mail, Phone, CheckCircle, Upload, Menu, X } from "lucide-react";
import "./style.css";

function AstroVisionWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const services = [
    { title: "Fixture Installation", icon: <BriefcaseBusiness />, text: "Retail fixtures, merchandising displays, shelving systems, kiosks, store remodels, and rollout installations." },
    { title: "Millwork Installation", icon: <PanelTop />, text: "Custom millwork, feature walls, trim packages, reception desks, wall panel systems, custom woodwork, and specialty installations." },
    { title: "Cabinetry Installation", icon: <Building2 />, text: "Commercial casework, office cabinetry, built-ins, storage systems, and custom cabinet installations." },
    { title: "Interior Signage, Displays & Graphics", icon: <PanelTop />, text: "Interior signage, dimensional lettering, display systems, wall graphics, vinyl graphics, wayfinding systems, branded environments, window graphics, and corporate identity installations." },
    { title: "Finish Carpentry", icon: <Hammer />, text: "Doors, hardware, trim, molding, wall panel systems, detailed finish work, and project punch-list completion." },
  ];

  const industries = ["Retail", "Hospitality", "Corporate Offices", "Healthcare", "Education", "Commercial Real Estate", "Developers", "General Contractors", "Property Management"];

  const projectCategories = [
    {
      title: "Retail Rollout",
      description:
        "Retail fixture installation, shelving systems, store setup, merchandising displays, and rollout support for commercial retail environments.",
      video: "/assets/retail-rollout-walkthrough.mp4",
      photos: [
        "/assets/retail-rollout-1.jpg",
        "/assets/retail-rollout-2.jpg",
        "/assets/retail-rollout-3.jpg",
      ],
    },
    {
      title: "Millwork Installation",
      description: "Custom millwork, feature walls, trim packages, reception desks, wall panel systems, custom woodwork, and specialty installations.",
      photos: [],
    },
    {
      title: "Cabinetry Installation",
      description: "Commercial casework, office cabinetry, built-ins, storage systems, and custom cabinet installations.",
      photos: [],
    },
    {
      title: "Interior Signage, Displays & Graphics",
      description: "Interior signage, displays, wall graphics, wayfinding systems, branded environments, and vinyl graphics.",
      photos: [],
    },
    {
      title: "Finish Carpentry",
      description: "Doors, hardware, trim, molding, wall panel systems, detailed finish work, and punch-list completion.",
      photos: [],
    },
  ];

  const chooseUs = ["Experienced Installation Professionals", "Commercial Construction Expertise", "Reliable Scheduling & Coordination", "Detail-Oriented Craftsmanship", "Safety-Focused Work Practices", "Commitment to Client Satisfaction"];

  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <a href="#home" className="brand"><img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations" /></a>
          <nav className="nav desktop-nav">
            <a href="#services">Services</a><a href="#projects">Projects</a><a href="#industries">Industries</a><a href="#contact">Contact</a>
            <button onClick={() => setQuoteOpen(true)} className="btn small">Request a Quote</button>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="mobile-nav"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><button onClick={() => { setMenuOpen(false); setQuoteOpen(true); }} className="btn">Request a Quote</button></div>}
      </header>

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
            <div className="actions"><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><a href="#projects" className="btn secondary">View Our Work</a></div>
          </div>
        </section>

        <section className="section about">
          <img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations secondary logo" className="about-logo" />
          <div className="two-col"><div><p className="eyebrow">About Us</p><h2>Bringing Concepts to Completion</h2></div><div className="copy"><p>At Astro Vision Installations, we transform plans, designs, and ideas into finished spaces through expert installation and craftsmanship.</p><p>From retail fixtures and custom millwork to cabinetry, interior signage, displays, graphics, and finish carpentry, we bring reliability, attention to detail, and professionalism to every project.</p><p>We partner with general contractors, developers, retailers, facility managers, and commercial property owners to ensure projects are completed safely, efficiently, and to the highest standards.</p></div></div>
        </section>

        <section id="services" className="section tinted"><p className="eyebrow">Our Services</p><h2>Commercial installation services built around execution.</h2><div className="cards">{services.map(s => <div className="card" key={s.title}><div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>

        <section id="projects" className="projects-showcase">
          <div className="projects-inner">
            <div className="section-head projects-head">
              <div>
                <p className="eyebrow">Project Gallery</p>
                <h2>Featured Work by Category</h2>
              </div>
              <p>
                Explore completed work organized by service category. More project photos will be added as new installations are completed.
              </p>
            </div>

            <div className="retail-feature">
              <div className="category-header">
                <p className="eyebrow">Featured Category</p>
                <h3>Retail Rollout</h3>
                <p>
                  Retail fixture installation, shelving systems, store setup, merchandising displays, and rollout support for commercial retail environments.
                </p>
              </div>

              <video
                className="retail-video"
                src="/assets/retail-rollout-walkthrough.mp4"
                controls
                muted
                playsInline
              />

              <div className="retail-photo-grid">
                <img src="/assets/retail-rollout-1.jpg" alt="Retail rollout project 1" />
                <img src="/assets/retail-rollout-2.jpg" alt="Retail rollout project 2" />
                <img src="/assets/retail-rollout-3.jpg" alt="Retail rollout project 3" />
              </div>
            </div>

            <div className="coming-categories">
              {projectCategories
                .filter((category) => category.title !== "Retail Rollout")
                .map((category) => (
                  <div className="coming-card" key={category.title}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <div className="coming-soon">Photos coming soon.</div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="section tinted"><div className="two-col"><div><p className="eyebrow">Why Choose Us</p><h2>Reliable workmanship for commercial project teams.</h2></div><div className="checks">{chooseUs.map(c=><div className="check" key={c}><CheckCircle /> <span>{c}</span></div>)}</div></div></section>
        <section id="industries" className="section center"><p className="eyebrow">Industries We Serve</p><h2>Supporting commercial spaces from rollout to completion.</h2><div className="industries">{industries.map(i=><div key={i}>{i}</div>)}</div></section>
        <section className="section cta"><div className="cta-box"><p className="eyebrow">Ready to Get Started?</p><h2>Taking Your Vision Above and Beyond</h2><p>Whether you're planning a retail rollout, office build-out, millwork package, cabinetry installation, or interior signage project, Astro Vision Installations has the experience and craftsmanship to bring your project to completion.</p><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><small>The quote button opens a project questionnaire that can be connected to email submissions.</small></div></section>
      </main>

      <footer id="contact" className="footer"><div><img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations" className="footer-logo" /><h3>Astro Vision Installations</h3><p>Taking Your Vision Above and Beyond</p></div><div className="contact"><a href="tel:4078109979"><Phone /> (407) 810-9979</a><a href="tel:6073425483"><Phone /> (607) 342-5483</a><a href="mailto:astrovisioninstallations@gmail.com"><Mail /> astrovisioninstallations@gmail.com</a></div><div className="foot-note"><p>Commercial fixture, millwork, cabinetry, signage, graphics, and finish carpentry installation services.</p><p>© 2020 Astro Vision Installations. All rights reserved.</p></div></footer>

      {quoteOpen && <div className="modal"><div className="modal-box"><div className="modal-head"><div><p className="eyebrow">Request a Quote</p><h2>Project Questionnaire</h2><p>Submit project details for review and quoting.</p></div><button onClick={() => setQuoteOpen(false)}><X /></button></div><form
  className="quote-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thank you. Your quote request has been sent.");
      form.reset();
      setQuoteOpen(false);
    } else {
      alert("Something went wrong. Please call us at (407) 810-9979.");
    }
  }}
><input type="hidden" name="form-name" value="quote-request"/><div className="form-grid"><input name="company" placeholder="Company Name"/><input name="name" placeholder="Contact Name"/><input name="phone" placeholder="Phone Number"/><input name="email" placeholder="Email Address" type="email"/></div><input name="location" placeholder="Project Location"/><select name="projectType" defaultValue=""><option value="" disabled>Project Type</option><option>Fixture Installation</option><option>Millwork</option><option>Cabinetry</option><option>Interior Signage, Displays & Graphics</option><option>Finish Carpentry</option><option>Multiple Services</option></select><div className="form-grid"><input name="startDate" placeholder="Estimated Start Date"/><input name="deadline" placeholder="Completion Deadline"/></div><textarea name="description" placeholder="Project Description"></textarea><textarea name="notes" placeholder="Site Access Requirements / Additional Notes"></textarea><label className="upload"><Upload /> Upload Plans, Drawings, Photos, or Scope Documents<input type="file" name="files" multiple /></label><button className="btn">Submit Request</button><small>Form destination: astrovisioninstallations@gmail.com</small></form></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<AstroVisionWebsite />);

createRoot(document.getElementById("root")).render(<AstroVisionWebsite />);
