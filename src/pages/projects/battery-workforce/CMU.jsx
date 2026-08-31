import { Link } from "react-router-dom";
// src/pages/projects/battery-workforce/CMU.jsx
import Header from "../../../components/Header";

const cmuImages = [
  "/Images/CMU/F1.png",
  "/Images/CMU/F1_1.png",
  "/Images/CMU/F2.png",
  "/Images/CMU/F2_1.png",
  "/Images/CMU/Physical_Module_Implementation.jpg",
  "/Images/CMU/Physical_Module_Implementation_2.jpg",
  "/Images/CMU/V1.png",
  "/Images/CMU/V1_1.png",
  "/Images/CMU/V2.png",
  "/Images/CMU/V2_1.png",
];


function CMU() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">Battery Workforce / Cell Monitoring Unit</p>

          <h1>Cell Monitoring Unit</h1>

          <p className="hero-lead">
            Custom battery monitoring hardware designed around tight mechanical
            spacing constraints inside the module.
          </p>

          <p className="hero-description">
            The CMU was developed because the available module spacing was too
            constrained for a simple off-the-shelf monitoring layout. We needed
            a custom board architecture that could physically fit the module,
            interface with the battery management system, and support reliable
            voltage and temperature monitoring across the pack.
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
              The goal was to create a custom cell monitoring solution that fit
              within the mechanical constraints of the battery module while
              still supporting the electrical sensing needs of the battery
              system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Leader-Follower Architecture</h2>
            <p>
              The system used a leader-follower style architecture where the
              main cell monitoring unit coordinated with additional monitoring
              boards. This helped distribute sensing while keeping the module
              wiring and packaging more manageable.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Design Constraints</h2>
            <p>
              The biggest challenge was designing around the limited physical
              spacing inside the module. Connector placement, board outline,
              routing, assembly access, and serviceability all had to be
              considered alongside the sensing requirements.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Iteration Lessons</h2>
            <p>
              This project went through multiple design iterations as we learned
              more about mechanical fit, assembly constraints, connector
              orientation, signal routing, and how the monitoring boards would
              actually be installed inside the battery module.
            </p>
          </article>

          <article className="project-info-card">
            <h2>What Went Wrong</h2>
            <p>
              Early versions exposed several real integration issues: tight
              routing space, connector access problems, mechanical interference,
              assembly difficulty, and the need to better align the electrical
              design with the module manufacturing process.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>Cell Monitoring</span>
              <span>Custom PCB Design</span>
              <span>Voltage Sensing</span>
              <span>Temperature Sensing</span>
              <span>Battery Modules</span>
              <span>Mechanical Constraints</span>
              <span>Leader-Follower Architecture</span>
              <span>Pack Integration</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>CMU design iterations and module implementation</h2>
        </div>

        <div className="project-gallery-grid">
          {cmuImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`CMU design image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CMU;