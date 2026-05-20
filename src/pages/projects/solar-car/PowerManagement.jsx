import { Link } from "react-router-dom";

const powerManagementImages = [
  "/Images/Power_Management/Power_Management_Arduino_Shield_V0.png",
  "/Images/Power_Management/Power_Management_Arduino_Shield_V0_1.png",
  "/Images/Power_Management/Power_Management_Arduino_Shield_V1.png",
  "/Images/Power_Management/Power_Management_Arduino_Shield_V1_1.png",
  "/Images/Power_Management/Power_Management_Arduino_Shield_V2.png",
  "/Images/Power_Management/Power_Management_Arduino_Shield_V2_1.png",
];

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Kavish Wadehra home">
        KW
      </Link>

      <div className="nav-links">
        <Link to="/#education">Education</Link>
        <Link to="/projects/solar-car">Solar Car</Link>
        <Link to="/publications">Publications</Link>

        <a href="/Kavish_Wadehra_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}

function PowerManagement() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">Solar Car / Power Management</p>

          <h1>Power Management</h1>

          <p className="hero-lead">
            Low-voltage power management hardware developed to support rapid
            vehicle integration before competition.
          </p>

          <p className="hero-description">
            This project went through several iterations as we moved from an
            early V0 prototype toward Arduino-shield-based boards for faster
            integration. The original PICkit-based firmware framework had a
            difficult learning curve, and with only a few weeks before
            competition, we shifted toward Arduino shields to prioritize a
            functional and testable vehicle.
          </p>

          <div className="hero-buttons">
            <Link to="/projects/solar-car" className="secondary-button">
              Back to Solar Car
            </Link>
          </div>
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-grid">
          <article className="project-info-card">
            <h2>Initial Prototype</h2>
            <p>
              The V0 board represented our first attempt at creating a dedicated
              power management solution for the vehicle. It helped us understand
              the electrical requirements, packaging constraints, and practical
              issues involved in moving from a concept to real hardware.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Shift to Arduino Shields</h2>
            <p>
              As competition approached, we shifted toward Arduino-shield-based
              hardware to simplify integration and reduce firmware complexity.
              This allowed us to focus on getting a working vehicle system
              instead of spending critical time fighting the development
              environment.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Firmware Challenge</h2>
            <p>
              The PICkit firmware workflow was difficult to work with at the
              time and had a large learning curve for the team. That experience
              taught me the importance of choosing tools that match the project
              timeline, team experience, and integration risk.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>Low-Voltage Power</span>
              <span>Arduino Shields</span>
              <span>Rapid Prototyping</span>
              <span>Vehicle Integration</span>
              <span>PCB Iteration</span>
              <span>Firmware Tradeoffs</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Prototype and shield iterations</h2>
        </div>

        <div className="project-gallery-grid">
          {powerManagementImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img
                src={src}
                alt={`Power management board iteration ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PowerManagement;