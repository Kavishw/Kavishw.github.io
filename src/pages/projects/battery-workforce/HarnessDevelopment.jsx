import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const harnessImages = [
  "/Images/Harness Development/BDU_Harness_2.png",
  "/Images/Harness Development/BDU_Harness_3.png",
  "/Images/Harness Development/Contactor_1_Harness.jpg",
  "/Images/Harness Development/Contactor_1_Harness_In_Context_of_BDU.jpg",
  "/Images/Harness Development/Coolant_Sensor_Harness.png",
  "/Images/Harness Development/HV_Harness.png",
];



function HarnessDevelopment() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">
            Battery Workforce / Harness Development
          </p>

          <h1>Harness Development</h1>

          <p className="hero-lead">
            Electrical harness development, assembly, validation, and testing
            for the battery system and vehicle integration.
          </p>

          <p className="hero-description">
            The vehicle used 67 harnesses across the battery and vehicle
            electrical systems. My team and I supported harness design,
            connector selection, crimping, assembly, pinout verification,
            continuity checks, and HiPot testing to ensure the harnesses were
            safe and ready for integration.
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
              The harnessing work connected the electrical system together in a
              way that was reliable, serviceable, and suitable for vehicle-level
              integration. This included harnesses for the BDU, contactors,
              sensors, coolant system, high-voltage interfaces, and control
              wiring.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Assembly Work</h2>
            <p>
              I crimped connectors hundreds of times during assembly and worked
              with the team to build the harnesses needed for the full vehicle
              system. This included careful wire preparation, connector
              insertion, labeling, routing, and mechanical strain relief.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Validation</h2>
            <p>
              Each harness required verification before integration. We
              performed pinout checks, continuity testing, inspection, and HiPot
              testing where required to confirm the harnesses were assembled
              correctly and could be safely used in the vehicle.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Integration Lessons</h2>
            <p>
              This work taught me that harnesses are one of the most important
              parts of system reliability. Even strong PCB and pack designs can
              fail in practice if the wiring, connectorization, labeling, and
              validation process are not handled carefully.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Design Considerations</h2>
            <p>
              The harnesses had to account for routing constraints, connector
              accessibility, serviceability, electrical isolation, strain relief,
              bend radius, noise-sensitive signals, and the physical realities
              of assembling hardware inside a vehicle.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>Harness Design</span>
              <span>Crimping</span>
              <span>Pinout Verification</span>
              <span>Continuity Testing</span>
              <span>HiPot Testing</span>
              <span>Connector Selection</span>
              <span>BDU Harnesses</span>
              <span>Sensor Harnesses</span>
              <span>Vehicle Integration</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Harness Gallery</p>
          <h2>Harness design and assembly work</h2>
        </div>

        <div className="project-gallery-grid">
          {harnessImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`Harness development image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HarnessDevelopment;