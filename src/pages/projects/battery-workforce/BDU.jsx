import { Link } from "react-router-dom";
// src/pages/projects/battery-workforce/BDU.jsx
import Header from "../../../components/Header";

const bduImages = [
  "/Images/BDU/20250325_124641.jpg",
  "/Images/BDU/20250325_151307.jpg",
  "/Images/BDU/20250618_175658.jpg",
  "/Images/BDU/20260427_132152.jpg",
  "/Images/BDU/Media.jpg",
  "/Images/BDU/TempRise.png",
  "/Images/BDU/TempRise2.png",
  "/Images/BDU/Thermal_Model.png",
];



function BDU() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">
            Battery Workforce / Battery Disconnect Unit
          </p>

          <h1>Battery Disconnect Unit</h1>

          <p className="hero-lead">
            A high-power battery disconnect and protection system integrating
            power distribution, thermal analysis, harnessing, and vehicle-level
            electrical integration.
          </p>

          <p className="hero-description">
            The BDU became one of the most system-level projects I worked on
            during Battery Workforce Challenge. The project combined electrical
            integration, harnessing, thermal modelling, PCB integration,
            mechanical packaging, safety constraints, and manufacturing into one
            tightly integrated assembly.
          </p>

          <div className="hero-buttons">
            <Link to="/projects/battery-workforce" className="secondary-button">
              Back to Battery Workforce
            </Link>
          </div>
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-grid">
          <article className="project-info-card">
            <h2>Project Purpose</h2>

            <p>
              The BDU acted as the primary high-voltage disconnect and power
              distribution system for the battery pack. It integrated
              contactors, protection systems, current paths, harnessing,
              sensing, and vehicle interfaces into a single assembly.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Integration Boards</h2>

            <p>
              I worked heavily on the electrical integration hardware that fit
              within the BDU. This included interface boards, sensing systems,
              harness integration, relay control paths, and ensuring the
              electrical systems could physically fit alongside the mechanical
              architecture.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Harness Development</h2>

            <p>
              A significant portion of the BDU work involved harnessing and
              electrical assembly. This included routing, connector integration,
              crimping, validation, pinout verification, and ensuring the
              harnesses could be assembled and serviced safely within the
              enclosure.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Thermal Modelling</h2>

            <p>
              The BDU also involved thermal modelling and temperature-rise
              analysis for high-current operation. This work later contributed
              to a published conference paper focused on thermal performance and
              design optimization for high-power EV battery disconnect systems.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Mechanical Integration</h2>

            <p>
              I worked closely with Lewis throughout the BDU development. He
              led much of the mechanical busbar architecture and packaging work,
              including busbar fitment and ensuring the system met creepage and
              clearance requirements. Through this collaboration, I learned a
              great deal about designing electrical systems around real
              mechanical constraints rather than treating mechanical integration
              as a secondary step.
            </p>
          </article>

          <article className="project-info-card">
            <h2>System-Level Lessons</h2>

            <p>
              This project reinforced how tightly coupled electrical and
              mechanical engineering become in real EV systems. Packaging,
              cooling, clearances, manufacturability, serviceability, and
              assembly constraints all directly influenced the electrical
              architecture and PCB integration strategy.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Design Challenges</h2>

            <p>
              Some of the biggest challenges involved balancing compact
              packaging with electrical safety requirements, fitting harnesses
              and PCBs around busbar structures, managing thermal rise under
              load, and making the assembly manufacturable while still meeting
              competition constraints.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>

            <div className="tag-row">
              <span>Battery Disconnect Unit</span>
              <span>Power Distribution</span>
              <span>Busbar Design</span>
              <span>Thermal Modelling</span>
              <span>Harness Integration</span>
              <span>Creepage & Clearance</span>
              <span>High-Voltage Safety</span>
              <span>Mechanical Packaging</span>
              <span>Vehicle Integration</span>
              <span>PCB Integration</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">BDU Gallery</p>
          <h2>Integration, thermal analysis, and assembly</h2>
        </div>

        <div className="project-gallery-grid">
          {bduImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`BDU image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BDU;