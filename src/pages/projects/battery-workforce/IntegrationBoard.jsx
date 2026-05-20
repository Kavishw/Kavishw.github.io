import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const integrationBoardImages = [
  "/Images/Integration_Board/Final_Iteration.jpg",
  "/Images/Integration_Board/INT_Board_V1.png",
  "/Images/Integration_Board/INT_Board_V1_1.png",
  "/Images/Integration_Board/INT_Board_V2.png",
  "/Images/Integration_Board/INT_Board_V2_1.png",
  "/Images/Integration_Board/INT_Board_V3.png",
  "/Images/Integration_Board/INT_Board_V3_1.png",
  "/Images/Integration_Board/INT_Board_V4.png",
  "/Images/Integration_Board/INT_Board_V4_1.png",
  "/Images/Integration_Board/INT_Board_V5.png",
  "/Images/Integration_Board/INT_Board_V5_1.png",
  "/Images/Integration_Board/INT_Board_V6.png",
  "/Images/Integration_Board/INT_Board_V6_1.png",
  "/Images/Integration_Board/INT_Board_V7.png",
  "/Images/Integration_Board/INT_Board_V7_1.png",
];


function IntegrationBoard() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">Battery Workforce / Integration Board</p>

          <h1>Integration Board</h1>

          <p className="hero-lead">
            Vehicle integration hardware designed to connect an off-the-shelf
            battery management unit with the rest of the battery pack and vehicle
            electrical system.
          </p>

          <p className="hero-description">
            The integration board evolved through many design iterations as
            competition requirements changed and the system architecture became
            more defined. The board was intended to simplify how the BMS,
            contactors, sensors, relays, communication lines, and vehicle
            interfaces connected together inside the battery system.
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
              The board acted as the electrical bridge between the battery
              management system and the vehicle-level battery hardware. It
              helped organize sensing, communication, relay control, and
              protection interfaces into one cleaner integration platform.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Design Iterations</h2>
            <p>
              This board went through several revisions as rules, system
              requirements, packaging constraints, and vehicle integration needs
              changed. Each iteration improved connector placement, routing,
              subsystem access, and overall usability.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Communication Interfaces</h2>
            <p>
              The design incorporated communication hardware such as CAN
              transceivers and LIN transceivers to support communication between
              the battery system, vehicle systems, and off-the-shelf BMS
              hardware.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Control and Sensing</h2>
            <p>
              The board included support for relay drivers, ADCs, sensing
              signals, and control interfaces used to monitor and actuate parts
              of the battery system. This helped centralize many of the pack
              electrical interfaces.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Integration Lessons</h2>
            <p>
              A major lesson from this project was that integration boards are
              rarely just “simple breakout boards.” Connector choices, signal
              naming, debugging access, harness compatibility, serviceability,
              and changing requirements all heavily affect whether the system is
              usable in practice.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>CAN Transceivers</span>
              <span>LIN Transceivers</span>
              <span>Relay Drivers</span>
              <span>ADCs</span>
              <span>BMS Integration</span>
              <span>Vehicle Interfaces</span>
              <span>PCB Iteration</span>
              <span>Harness Interfaces</span>
              <span>Pack Integration</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Integration board design iterations</h2>
        </div>

        <div className="project-gallery-grid">
          {integrationBoardImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`Integration board image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default IntegrationBoard;