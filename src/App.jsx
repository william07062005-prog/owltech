import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
const [openService, setOpenService] = useState(null);
 const [selectedProject, setSelectedProject] = useState(null);
 const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
});
 const projects = [
  {
    id: 1,
    title: "HR & Job Portal",
    category: "FULL STACK",
    image: "/projects/hr-portal.png",
    description:
      "A full-stack job portal connecting companies, HR teams and candidates through a modern web application.",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "User registration and login",
      "HR job posting",
      "Candidate job applications",
      "Job management",
    ],
  },

  {
    id: 2,
    title: "Professional Network + AI",
    category: "AI APPLICATION",
    image: "/projects/linkedin-ai-chatbot.png",
    description:
      "A professional networking platform enhanced with an AI chatbot for intelligent user interaction.",
    technologies: ["React", "JavaScript", "AI Chatbot"],
    features: [
      "Professional profiles",
      "Post and networking features",
      "AI chatbot",
      "Interactive user interface",
    ],
  },

  {
    id: 3,
    title: "BookStore",
    category: "REACT PROJECT",
    image: "/projects/bookstore.png",
    description:
      "A responsive online bookstore with category filtering, search functionality and shopping cart interactions.",
    technologies: ["React", "CSS", "JavaScript"],
    features: [
      "Book search",
      "Category filtering",
      "Shopping cart",
      "Responsive design",
    ],
  },

  {
    id: 4,
    title: "Penguin Artwork",
    category: "CREATIVE DESIGN",
    image: "/projects/penguin-design.png",
    description:
      "A creative Photoshop project focused on digital illustration, composition and visual design.",
    technologies: ["Photoshop", "Graphic Design"],
    features: [
      "Digital illustration",
      "Creative composition",
      "Visual design",
      "Image editing",
    ],
  },
];
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          <img src="/owltech-logo.svg" alt="OwlTech logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Let's Talk */}
        <button
          className="nav-btn"
          onClick={() => scrollToSection("contact")}
        >
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>


      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>

        <a href="#home" onClick={() => scrollToSection("home")}>
          Home
        </a>

        <a href="#services" onClick={() => scrollToSection("services")}>
          Services
        </a>

        <a href="#work" onClick={() => scrollToSection("work")}>
          Our Work
        </a>

        <a href="#about" onClick={() => scrollToSection("about")}>
          About
        </a>

        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </a>

        <button
          className="mobile-talk-btn"
          onClick={() => scrollToSection("contact")}
        >
          Let's Talk →
        </button>

      </div>


      <main>

       {/* ================= HERO ================= */}
<section className="hero" id="home">

  <div className="hero-content">

    <div className="eyebrow">
      SMART TECHNOLOGY • DIGITAL GROWTH
    </div>

    <h1>
      We Build
      <br />
      <span>Digital Experiences</span>
      <br />
      That Matter.
    </h1>

    <p>
      OwlTech helps businesses turn ideas into
      modern websites, powerful applications and
      intelligent digital solutions.
    </p>

    <div className="hero-actions">

      <button
        className="primary-btn"
        onClick={() => scrollToSection("contact")}
      >
        Start Your Project →
      </button>

      <button
        className="outline-btn"
        onClick={() => scrollToSection("work")}
      >
        View Our Work
      </button>

    </div>

  </div>


  {/* ================= OWLTECH OWL ================= */}
  <div className="hero-visual">

    <div className="glow"></div>

    <div className="orbit orbit-one">
      <span className="orbit-dot dot-one"></span>
    </div>

    <div className="orbit orbit-two">
      <span className="orbit-dot dot-two"></span>
    </div>

    <div className="orbit orbit-three"></div>


    {/* NEW OWL MASCOT */}
    <div className="logo-circle owl-character">

      <img
        src="/owl-mascot.png"
        alt="OwlTech mascot"
        className="owl-mascot"
      />

    </div>


    {/* FLOATING TECHNOLOGY CARDS */}

    <div className="floating-card card-react">
      <strong>⚛</strong>
      <span>React</span>
    </div>

    <div className="floating-card card-ai">
      <strong>AI</strong>
      <span>AI Solutions</span>
    </div>

    <div className="floating-card card-mern">
      <strong>⚡</strong>
      <span>MERN Stack</span>
    </div>

  </div>

</section>

        {/* ================= TRUST BAR ================= */}
        <section className="trust-bar">

          <div>
            <strong>Modern</strong>
            <span>Technology</span>
          </div>

          <div>
            <strong>Responsive</strong>
            <span>Design</span>
          </div>

          <div>
            <strong>Scalable</strong>
            <span>Solutions</span>
          </div>

          <div>
            <strong>Client</strong>
            <span>Focused</span>
          </div>

        </section>


        {/* ================= SERVICES ================= */}
       {/* ================= SERVICES ================= */}
<section className="services-section" id="services">

  <div className="section-heading">

    <div className="eyebrow">
      WHAT WE DO
    </div>

    <h2>
      Complete Digital
      <span> Solutions.</span>
    </h2>

    <p>
      From websites and applications to AI, branding and
      deployment, OwlTech helps turn your ideas into
      professional digital solutions.
    </p>

  </div>


  <div className="services-grid">

    {/* 01 */}
    <div className="service-card">

      <div className="service-icon">🌐</div>

      <h3>Website Development</h3>

      <p>
        Modern, responsive and business-focused websites
        built for a strong online presence.
      </p>

      {openService === 1 && (
        <div className="service-details">
          <span>✓ Business Websites</span>
          <span>✓ Portfolio Websites</span>
          <span>✓ Landing Pages</span>
          <span>✓ Responsive Design</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 1 ? null : 1)
        }
      >
        {openService === 1 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">01</span>

    </div>


    {/* 02 */}
    <div className="service-card">

      <div className="service-icon">⚛️</div>

      <h3>React Development</h3>

      <p>
        Fast and interactive web applications built with
        modern React development practices.
      </p>

      {openService === 2 && (
        <div className="service-details">
          <span>✓ Interactive React Websites</span>
          <span>✓ Single Page Applications</span>
          <span>✓ Reusable Components</span>
          <span>✓ API Integration</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 2 ? null : 2)
        }
      >
        {openService === 2 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">02</span>

    </div>


    {/* 03 */}
    <div className="service-card">

      <div className="service-icon">🟢</div>

      <h3>MERN Stack Applications</h3>

      <p>
        Full-stack applications using MongoDB, Express,
        React and Node.js.
      </p>

      {openService === 3 && (
        <div className="service-details">
          <span>✓ MongoDB Database</span>
          <span>✓ Express.js Backend</span>
          <span>✓ React Frontend</span>
          <span>✓ Node.js APIs</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 3 ? null : 3)
        }
      >
        {openService === 3 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">03</span>

    </div>


    {/* 04 */}
    <div className="service-card">

      <div className="service-icon">🤖</div>

      <h3>AI & AI Agents</h3>

      <p>
        AI chatbots, AI integrations and intelligent
        agents designed to automate digital tasks.
      </p>

      {openService === 4 && (
        <div className="service-details">
          <span>✓ AI Chatbots</span>
          <span>✓ AI API Integration</span>
          <span>✓ AI Agents</span>
          <span>✓ Task Automation</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 4 ? null : 4)
        }
      >
        {openService === 4 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">04</span>

    </div>


    {/* 05 */}
    <div className="service-card">

      <div className="service-icon">🎨</div>

      <h3>UI/UX & Responsive Design</h3>

      <p>
        Clean, attractive and responsive interfaces
        designed for desktop, tablet and mobile.
      </p>

      {openService === 5 && (
        <div className="service-details">
          <span>✓ UI Design</span>
          <span>✓ UX Improvements</span>
          <span>✓ Mobile Responsive Design</span>
          <span>✓ Modern Interfaces</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 5 ? null : 5)
        }
      >
        {openService === 5 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">05</span>

    </div>


    {/* 06 */}
    <div className="service-card">

      <div className="service-icon">🔧</div>

      <h3>Website Maintenance</h3>

      <p>
        Bug fixes, updates, content changes, improvements
        and ongoing website support.
      </p>

      {openService === 6 && (
        <div className="service-details">
          <span>✓ Bug Fixes</span>
          <span>✓ Website Updates</span>
          <span>✓ Content Changes</span>
          <span>✓ Ongoing Support</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 6 ? null : 6)
        }
      >
        {openService === 6 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">06</span>

    </div>


    {/* 07 */}
    <div className="service-card">

      <div className="service-icon">🚀</div>

      <h3>Deployment & Hosting</h3>

      <p>
        Website deployment, domain and hosting setup,
        configuration and production support.
      </p>

      {openService === 7 && (
        <div className="service-details">
          <span>✓ Website Deployment</span>
          <span>✓ Domain Setup</span>
          <span>✓ Hosting Setup</span>
          <span>✓ Production Support</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 7 ? null : 7)
        }
      >
        {openService === 7 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">07</span>

    </div>


    {/* 08 */}
    <div className="service-card">

      <div className="service-icon">📣</div>

      <h3>Branding & Digital Presence</h3>

      <p>
        Brand promotion, logo design and professional
        portfolio websites for individuals and businesses.
      </p>

      {openService === 8 && (
        <div className="service-details">
          <span>✓ Logo Design</span>
          <span>✓ Brand Promotion</span>
          <span>✓ Portfolio Websites</span>
          <span>✓ Digital Presence</span>
        </div>
      )}

      <button
        className="learn-more-btn"
        onClick={() =>
          setOpenService(openService === 8 ? null : 8)
        }
      >
        {openService === 8 ? "Show Less ↑" : "Learn More →"}
      </button>

      <span className="service-number">08</span>

    </div>

  </div>

</section>


        {/* ================= OUR WORK ================= */}
        <section className="work-section" id="work">

          <div className="section-heading">

            <div className="eyebrow">
              OUR WORK
            </div>

            <h2>
              Projects We've <span>Built.</span>
            </h2>

            <p>
              Real projects created using modern development,
              design and AI technologies.
            </p>

          </div>


         <div className="work-grid">

  {/* Project 1 */}
  <div className="work-card">
    <div className="real-project-image">
      <img
        src="/projects/hr-portal.png"
        alt="HR and Job Portal"
      />
      <span className="project-category">FULL STACK</span>
    </div>

    <div className="work-content">
      <span className="work-number">01</span>
      <h3>HR & Job Portal</h3>

      <p>
        A full-stack job portal connecting companies, HR teams
        and candidates through a modern web application.
      </p>

      <div className="tech-tags">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>

     <button
  className="project-btn"
  onClick={() => setSelectedProject(projects[0])}
>
  View Project →
</button>
    </div>
  </div>


  {/* Project 2 */}
  <div className="work-card">
    <div className="real-project-image">
      <img
        src="/projects/linkedin-ai-chatbot.png"
        alt="Professional Network and AI Chatbot"
      />
      <span className="project-category">AI APPLICATION</span>
    </div>

    <div className="work-content">
      <span className="work-number">02</span>
      <h3>Professional Network + AI</h3>

      <p>
        A professional networking platform enhanced with
        an AI chatbot for intelligent user interaction.
      </p>

      <div className="tech-tags">
        <span>React</span>
        <span>AI Chatbot</span>
        <span>JavaScript</span>
      </div>

      <button
  className="project-btn"
  onClick={() => setSelectedProject(projects[1])}
>
  View Project →
</button>
    </div>
  </div>


  {/* Project 3 */}
  <div className="work-card">
    <div className="real-project-image">
      <img
        src="/projects/bookstore.png"
        alt="BookStore React application"
      />
      <span className="project-category">REACT PROJECT</span>
    </div>

    <div className="work-content">
      <span className="work-number">03</span>
      <h3>BookStore</h3>

      <p>
        A clean and responsive bookstore interface designed
        to provide a simple and enjoyable browsing experience.
      </p>

      <div className="tech-tags">
        <span>React</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

     <button
  className="project-btn"
  onClick={() => setSelectedProject(projects[2])}
>
  View Project →
</button>
    </div>
  </div>


  {/* Project 4 */}
  <div className="work-card">
    <div className="real-project-image">
      <img
        src="/projects/penguin-design.png"
        alt="Penguin Photoshop artwork"
      />
      <span className="project-category">CREATIVE DESIGN</span>
    </div>

    <div className="work-content">
      <span className="work-number">04</span>
      <h3>Penguin Artwork</h3>

      <p>
        A creative Photoshop project focused on visual
        composition, editing and digital artwork.
      </p>

      <div className="tech-tags">
        <span>Photoshop</span>
        <span>Graphic Design</span>
      </div>

      <button
  className="project-btn"
  onClick={() => setSelectedProject(projects[3])}
>
  View Project →
</button>
    </div>
  </div>

</div>

      

        </section>


        {/* ================= ABOUT ================= */}
        <section className="about-section" id="about">

          <div className="about-content">

            <div className="eyebrow">
              ABOUT OWLTECH
            </div>

            <h2>
              Technology With
              <span> Purpose.</span>
            </h2>

            <p>
              OwlTech is focused on building modern digital
              experiences for businesses, creators and individuals.
              We combine development, design and intelligent
              technology to turn ideas into useful digital products.
            </p>

            <div className="about-points">

              <div>
                <strong>01</strong>
                <span>Modern Technology</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Creative Design</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Client Focused</span>
              </div>

            </div>

          </div>

         <div className="about-circle">
 <img
  src="/owl-mascot.png"
  alt="OwlTech mascot"
  className="about-owl"
/>
</div>

        </section>


        {/* ================= PROCESS ================= */}
        <section className="process-section">

          <div className="section-heading">

            <div className="eyebrow">
              OUR PROCESS
            </div>

            <h2>
              From Idea
              <span> To Reality.</span>
            </h2>

            <p>
              A simple process designed to turn your idea
              into a working digital product.
            </p>

          </div>


          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <div>💡</div>
              <h3>Discover</h3>
              <p>
                We understand your idea, goals and requirements.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <div>🎨</div>
              <h3>Design</h3>
              <p>
                We create a clean and user-friendly digital experience.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <div>💻</div>
              <h3>Build</h3>
              <p>
                We develop your product using modern technologies.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <div>🚀</div>
              <h3>Launch</h3>
              <p>
                We test, deploy and help your product go live.
              </p>
            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="contact">

          <div className="contact-content">

            <div className="eyebrow">
              LET'S BUILD SOMETHING
            </div>

            <h2>
              Have An Idea?
              <span> Let's Talk.</span>
            </h2>

            <p>
              Tell us about your project and let's create
              something amazing together.
            </p>

            <a
              className="contact-email"
              href="mailto:william07062005@gmail.com"
            >
              william07062005@gmail.com
            </a>

          </div>


          <div className="contact-action">

    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=william07062005@gmail.com&su=Project%20Inquiry%20-%20OwlTech"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn contact-btn"
>
  📧 Send Email →
</a>

            <a
              href="https://wa.me/918015353891?text=Hi%20OwlTech,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp className="whatsapp-icon" />
              <span>WhatsApp Us →</span>
            </a>

          </div>
<div className="contact-form-wrapper">
  <form
    className="contact-form"
    onSubmit={(e) => {
      e.preventDefault();

      const subject = encodeURIComponent(
        `OwlTech Project Inquiry - ${contactForm.name}`
      );

      const body = encodeURIComponent(
        `Hello OwlTech,

Name: ${contactForm.name}
Email: ${contactForm.email}
Service: ${contactForm.service}
Budget: ${contactForm.budget}

Project Details:
${contactForm.message}

Thank you.`
      );

      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=william07062005@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
    }}
  >
    <div className="form-row">
     <input
  id="name"
  name="name"
  type="text"
  placeholder="Your Name"
  autoComplete="name"
  value={contactForm.name}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      name: e.target.value,
    })
  }
  required
/>

     <input
  id="email"
  name="email"
  type="email"
  placeholder="Your Email"
  autoComplete="email"
  value={contactForm.email}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      email: e.target.value,
    })
  }
  required
/>
    </div>

    <div className="form-row">
     <select
  id="service"
  name="service"
  value={contactForm.service}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      service: e.target.value,
    })
  }
  required
>
        <option value="">Select Service</option>
        <option value="Website Development">
          Website Development
        </option>
        <option value="React Development">
          React Development
        </option>
        <option value="MERN Application">
          MERN Application
        </option>
        <option value="AI & AI Agents">
          AI & AI Agents
        </option>
        <option value="UI/UX Design">
          UI/UX Design
        </option>
        <option value="Website Maintenance">
          Website Maintenance
        </option>
        <option value="Deployment & Hosting">
          Deployment & Hosting
        </option>
        <option value="Branding & Digital Presence">
          Branding & Digital Presence
        </option>
      </select>

     <select
  id="budget"
  name="budget"
  value={contactForm.budget}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      budget: e.target.value,
    })
  }
  required
>
        <option value="">Select Budget</option>
        <option value="Under ₹10,000">Under ₹10,000</option>
        <option value="₹10,000 - ₹25,000">
          ₹10,000 - ₹25,000
        </option>
        <option value="₹25,000 - ₹50,000">
          ₹25,000 - ₹50,000
        </option>
        <option value="₹50,000+">₹50,000+</option>
      </select>
    </div>

  <textarea
  id="message"
  name="message"
  placeholder="Tell us about your project..."
  rows="6"
  value={contactForm.message}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      message: e.target.value,
    })
  }
  required
/>

    <button type="submit" className="contact-submit-btn">
      🚀 Send Project Inquiry →
    </button>
  </form>
</div>
        </section>
{/* PROJECT DETAILS MODAL */}
{selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="project-modal-close"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="project-modal-image"
      />

      <div className="project-modal-content">
        <span className="project-modal-category">
          {selectedProject.category}
        </span>

        <h2>{selectedProject.title}</h2>

        <p>{selectedProject.description}</p>

        <h3>Technologies</h3>

        <div className="modal-tech-tags">
          {selectedProject.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <h3>Key Features</h3>

        <div className="modal-features">
          {selectedProject.features.map((feature) => (
            <span key={feature}>✓ {feature}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
)}
      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-brand">

          <img
            src="/owltech-logo.svg"
            alt="OwlTech logo"
          />

          <p>
            Building modern digital experiences
            that matter.
          </p>

        </div>


        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 OwlTech. All rights reserved.
          </span>

          <span>
            Built with React ⚛
          </span>

        </div>

      </footer>
{/* FOOTER */}
<footer className="footer-section">
  <div className="footer-container">

    <div className="footer-brand">
      <img
        src="/owltech-logo.svg"
        alt="OwlTech"
        className="footer-logo"
      />

      <p>
        Building modern websites, applications and intelligent digital
        solutions that help businesses grow.
      </p>

      <div className="footer-contact">
        <a href="mailto:william07062005@gmail.com">
          📧 william07062005@gmail.com
        </a>

        <a
          href="https://wa.me/918015353891"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>

    <div className="footer-column">
      <h3>Quick Links</h3>

      <button onClick={() => scrollToSection("home")}>Home</button>
      <button onClick={() => scrollToSection("services")}>Services</button>
      <button onClick={() => scrollToSection("work")}>Our Work</button>
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </div>

    <div className="footer-column">
      <h3>Services</h3>

      <span>Website Development</span>
      <span>React Development</span>
      <span>MERN Applications</span>
      <span>AI & AI Agents</span>
      <span>UI/UX Design</span>
      <span>Website Maintenance</span>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} OwlTech. All rights reserved.
    </p>

    <span>Built with ❤️ by OwlTech</span>
  </div>
</footer>
    </div>
  );
}

export default App;