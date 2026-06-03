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

    if (hash === "gallery" || hash === "join") {
      setPage(hash);
    } else {
      setPage("home");
    }
  };

  updatePage();

  window.addEventListener("hashchange", updatePage);

  return () =>
    window.removeEventListener("hashchange", updatePage);
}, []);

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, [page]);

  const goTo = (nextPage) => {
    setMenuOpen(false);
    window.location.hash = nextPage === "home" ? "home" : nextPage;
  };

  const services = [
    { title: "Fixture Installation", icon: <BriefcaseBusiness />, text: "Retail fixtures, merchandising displays, shelving systems, kiosks, store remodels, and rollout installations." },
    { title: "Millwork Installation", icon: <PanelTop />, text: "Custom millwork, feature walls, cashwraps, trim packages, reception/office desks, wall panel systems, custom woodwork, and specialty installations." },
    { title: "Casework Installation", icon: <Building2 />, text: "Commercial casework, office cabinetry, built-ins, storage systems, cabinet & Countertop installations." },
    { title: "Interior Signage, Displays & Graphics", icon: <PanelTop />, text: "Interior wall & LIT signage, dimensional lettering, display systems, wall graphics, vinyl graphics, wayfinding systems, branded environments, window graphics, and corporate identity installations." },
    { title: "Rough & Finish Carpentry", icon: <Hammer />, text: "Doors, hardware, trim, molding, wall panel systems, detailed finish work." },
  ];

  const industries = ["Retail", "Hospitality", "Corporate Offices", "Healthcare", "Education", "Commercial Real Estate", "Developers", "General Contractors", "Property Management"];
  const chooseUs = ["Experienced Installation Professionals", "Commercial Construction Expertise", "Reliable Scheduling & Coordination", "Detail-Oriented Craftsmanship", "Safety-Focused Work Practices", "Commitment to Client Satisfaction"];
  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <a
  href="#home"
  className="brand brand-logo"
  onClick={() => goTo("home")}
>
  <img src="/assets/astro-vision-header-logo.png" alt="Astro Vision Installations" />
</a>
          <nav className="nav desktop-nav">
  <button className="nav-pill" onClick={() => goTo("home")}>
    Home
  </button>

 <button className="nav-pill" onClick={() => goTo("gallery")}>
    Project Gallery
  </button>

  <button className="nav-pill" onClick={() => goTo("join")}>
    Join Our Team
  </button>

  <button className="nav-pill nav-pill-primary" onClick={() => setQuoteOpen(true)}>
    Request a Quote
  </button>
</nav>
          <button
  className="mobile-menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <Menu size={28} />
</button>
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
              <p className="tagline">Bringing Your Vision Above and Beyond Expectations.</p>    
              <p className="service-line">Professional Fixture Installation • Millwork • Casework • Interior Signage, Displays & Graphics • Rough & Finish Carpentry</p>
              <p className="summary">Delivering quality installation services</p>
              <div className="actions"><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><button onClick={() => goTo("gallery")} className="btn secondary">View Project Gallery</button></div>
            </div>
          </section>

          <section className="section about">
            <div className="two-col">
  <div>
    <p className="eyebrow">About Us</p><h2>Bringing Visions to Life Through Precision, Partnership, and Outstanding Performance.</h2><h2>Concepts to Completion</h2></div><div className="copy">
              <p>At Astro Vision Installations, we believe every successful project begins with a vision and is defined by the quality of its execution. With over 15 years of hands-on installation experience, we partner with businesses, retailers, and commercial clients to transform ideas into professional, functional environments that leave a lasting impression and support long-term success.</p>
              <p>Our team is built on trust, communication, reliability, and a commitment to delivering exceptional results. We understand that every project comes with its own unique challenges, timelines, and expectations. That's why we approach each job with a problem-solving mindset, combining critical thinking, industry knowledge, and real-world experience to identify the right solutions and keep projects moving forward. No matter the complexity, we remain focused on overcoming obstacles, maintaining momentum, and delivering the results our clients expect.</p>
              <p>We partner with general contractors, developers, retailers, facility managers, and commercial property owners to ensure projects are completed safely, efficiently, and to the highest standards. Bringing years of expertise, craftsmanship, and attention to detail necessary to execute projects with precision. We take pride in meeting deadlines, maintaining high standards, and ensuring every phase of the project is completed with professionalism and accountability.</p>
            <p>We believe successful projects are built through strong partnerships. By working as an extension of your team, we provide clear communication, dependable service, and a collaborative approach from project kickoff to final completion. Our commitment is not only to the quality of our work, but to the confidence and trust we build with every client we serve.</p>
            <p>At Astro Vision Installations, your vision becomes our mission. We don't just install fixtures or complete projects; we create solutions, solve challenges, build lasting partnerships, and bring visions to life. With a foundation built on experience, integrity, and dedication, we strive to deliver results that exceed expectations and provide the confidence that your project is in the right hands from start to finish. Utilizing walkthroughs and project completion Punch-Lists to make sure we've brought your vision to life.</p></div></div>
          </section>

          <section id="services" className="section tinted"><p className="eyebrow">Our Services</p><h2>Installation Services Built Around Execution.</h2><div className="cards">{services.map(s => <div className="card" key={s.title}><div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>

          <section className="team-showcase">
  <div className="field-experience-header">
  <span className="field-badge">FIELD EXPERIENCE</span>

  <h2>Delivering Professional Results Across Every Project</h2>

  <p>
  We focus on quality workmanship, safety, efficiency, and attention to detail from project start to completion.
  </p>
</div>

  <div className="team-showcase-grid">
    <div className="team-showcase-card">
      <img
        src="/assets/corey-working.jpg"
        alt="Retail Signage, merchandising, and shelf installation"
      />
    </div>

    <div className="team-showcase-card">
      <img
        src="/assets/tim-working.jpg"
        alt="Cabinet and fixture installation"
      />
    </div>
  </div>
</section>
          
          <section className="section tinted-dark"><div className="two-col"><div><p className="eyebrow">Why Choose Us</p><h2>Reliable Workmanship for Commercial Project Teams.</h2></div><div className="checks">{chooseUs.map(c => <div className="check" key={c}><CheckCircle /> <span>{c}</span></div>)}</div></div></section>

          <section id="industries" className="section center"><p className="eyebrow">Industries We Serve</p><h2>Supporting Commercial Spaces From Rollout to Completion.</h2><div className="industries">{industries.map(i => <div key={i}>{i}</div>)}</div></section>

          <section className="section cta"><div className="cta-box"><p className="eyebrow">Ready to Get Started?</p><h2>Bringing Your Vision Above and Beyond Expectations.</h2><p>Whether you're planning a retail rollout, office build-out, millwork package, cabinetry installation, or interior signage project, Astro Vision Installations has the experience and craftsmanship to bring your project to completion.</p><div className="actions"><button onClick={() => setQuoteOpen(true)} className="btn">Request a Quote</button><button onClick={() => goTo("gallery")} className="btn secondary">View Our Work</button></div></div></section>
        </main>
      )}

      {page === "gallery" && (
  <main className="gallery-page">
    <section className="gallery-intro">
  <span className="eyebrow">PROJECT PORTFOLIO</span>

  <h1>Projects Across Multiple Industries</h1>

  <p>

    Our gallery showcases a selection of completed projects
    demonstrating quality workmanship, precision, and attention
    to detail.
  </p>
</section>

    <section className="completed-projects">
      <div className="section-head simple">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Installation Work</h2>
        </div>
      </div>

      <section className="portfolio-showcase">
  <div className="project-grid">

    <img src="/assets/Fixture half built.jpg" alt="Fixture installation project" />
    <img src="/assets/retail-rollout-1.jpg" alt="Retail rollout project" />
    <img src="/assets/retail-rollout-2.jpg" alt="Retail rollout project" />
    <img src="/assets/Signage Display Walls 2.jpeg" alt="Dicks Signage 2" />
    <img src="/assets/Signage Display Walls.jpeg" alt="Dicks Signage" />

    <img src="/assets/skechers-work-wall.jpg" alt="Skechers display wall" />
    <img src="/assets/workwear-display-wall.jpg" alt="Workwear display wall" />
    

    <img src="/assets/cashwrap.jpg" alt="Cashwrap installation" />
    <img src="/assets/slatwall-installation.jpg" alt="Slatwall installation" />
    <img src="/assets/residential-cabinets.jpg" alt="Cabinet installation" /> 
    <img src="/assets/nike-kids-finished-display.jpg" alt="Nike completed display" />
    <img src="/assets/nike-kids-wall.jpg" alt="Nike display wall" />
    <img src="/assets/retail-rollout-3.jpg" alt="Retail rollout project" />
    
    <img src="/assets/Signage nike 1.jpg" alt="Nike retail project" />
    <img src="/assets/Signage nike 2.jpg" alt="Nike womens display" />

    

  </div>
</section>

      <div className="gallery-video-section">
        <div className="video-intro">
          <p className="eyebrow">Project Walkthrough</p>
          <p>
            A walkthrough look at retail fixture installation and project execution in progress.
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
          <section className="page-hero compact"><p className="eyebrow">Join Our Team</p><h1>Build With Astro Vision Installations</h1><p>We are looking for dependable, detail-oriented professionals interested in commercial fixture installation, millwork, cabinetry, signage, graphics, rough and finish carpentry projects.</p></section>
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

      <footer id="contact" className="footer"><div><img src="/assets/astro-vision-secondary-logo.png" alt="Astro Vision Installations" className="footer-logo" /><h3>Astro Vision Installations</h3><p>Bringing Your Vision Above and Beyond Expectations.</p><p>
  Retail rollouts and remodels, commercial construction projects, and nationwide project support.
</p></div><div className="contact"><a href="tel:4078109979"><Phone /> (407) 810-9979</a><a href="tel:6073425483"><Phone /> (607) 342-5483</a><a href="mailto:astrovisioninstallations@gmail.com"><Mail /> astrovisioninstallations@gmail.com</a></div><div className="foot-note"><p>© 2020 Astro Vision Installations. All rights reserved.</p></div></footer>

      {quoteOpen && <div className="modal"><div className="modal-box"><div className="modal-head"><div><p className="eyebrow">Request a Quote</p><h2>Project Questionnaire</h2><p>Submit project details for review and quoting.</p></div><button onClick={() => setQuoteOpen(false)}><X /></button></div><form className="quote-form" onSubmit={async (e)=>{e.preventDefault(); const form=e.currentTarget; const data=Object.fromEntries(new FormData(form).entries()); const response=await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}); if(response.ok){alert("Thank you. Your quote request has been sent."); form.reset(); setQuoteOpen(false);} else {alert("Something went wrong. Please call us at (407) 810-9979.");}}}><input type="hidden" name="form-name" value="quote-request"/><div className="form-grid"><input name="company" placeholder="Company Name"/><input name="name" placeholder="Contact Name"/><input name="phone" placeholder="Phone Number"/><input name="email" placeholder="Email Address" type="email"/></div><input name="location" placeholder="Project Location"/><select name="projectType" defaultValue=""><option value="" disabled>Project Type</option><option>Fixture Installation</option><option>Millwork</option><option>Cabinetry</option><option>Interior Signage, Displays & Graphics</option><option>Finish Carpentry</option><option>Multiple Services</option></select><div className="form-grid"><input name="startDate" placeholder="Estimated Start Date"/><input name="deadline" placeholder="Completion Deadline"/></div><textarea name="description" placeholder="Project Description"></textarea><textarea name="notes" placeholder="Site Access Requirements / Additional Notes"></textarea><label className="upload"><Upload /> Upload Plans, Drawings, Photos, or Scope Documents<input type="file" name="files" multiple /></label><button className="btn">Submit Request</button><small>Form destination: astrovisioninstallations@gmail.com</small></form></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<AstroVisionWebsite />);
