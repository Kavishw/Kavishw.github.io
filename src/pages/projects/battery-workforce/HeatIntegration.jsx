import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const heatIntegrationImages = [
  "/Images/Heat Integration Sensor System/HISS_V1.png",
  "/Images/Heat Integration Sensor System/HISS_V1_1.png",
  "/Images/Heat Integration Sensor System/HISS_V2.png",
  "/Images/Heat Integration Sensor System/HISS_V2_1.png",
  "/Images/Heat Integration Sensor System/HISS_V3.png",
  "/Images/Heat Integration Sensor System/HISS_V4.png",
  "/Images/Heat Integration Sensor System/HISS_V4_1.png",
  "/Images/Heat Integration Sensor System/HISS_V5.png",
  "/Images/Heat Integration Sensor System/HISS_V5_1.png",
  "/Images/Heat Integration Sensor System/HISS_V6.png",
  "/Images/Heat Integration Sensor System/HISS_V6_1.png",
  "/Images/Heat Integration Sensor System/HISS_V7.png",
  "/Images/Heat Integration Sensor System/HISS_V7_1.png",
];



function HeatIntegration() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">
            Battery Workforce / Heat Integration Sensor System
          </p>

          <h1>Heat Integration Sensor System</h1>

          <p className="hero-lead">
            A thermal sensing system designed to support a custom battery module
            cooling architecture.
          </p>

          <p className="hero-description">
            This project was intended to integrate electrical sensing directly
            with the module’s custom thermal design. The initial concept used an
            ESP32-based system that could work alongside the existing cell
            monitoring units to collect thermal data and support better
            visibility into module-level temperature behavior.
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
              The goal was to create a sensor board that could fit within the
              battery module and provide fine-grained temperature measurements
              around the custom cooling system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Thermal Integration</h2>
            <p>
              The board was designed around the idea that electrical sensing
              should match the physical thermal system. Since the module used a
              custom cooling approach, the sensing layout needed to support that
              geometry rather than being treated as an afterthought.
            </p>
          </article>

          <article className="project-info-card">
            <h2>ESP32 Concept</h2>
            <p>
              The initial architecture was based around an ESP32 so the system
              could support local acquisition, flexible communication, and easier
              development during early prototyping.
            </p>
          </article>

          <article className="project-info-card">
            <h2>CMU Compatibility</h2>
            <p>
              The design was intended to work alongside the existing cell
              monitoring units, allowing thermal sensing to complement voltage
              monitoring and improve module-level observability.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Design Motivation</h2>
            <p>
              The broader goal was to move toward a battery module where the
              electrical sensing, thermal design, and mechanical packaging were
              developed together as one integrated system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>Thermal Sensing</span>
              <span>ESP32</span>
              <span>Battery Modules</span>
              <span>Custom Cooling</span>
              <span>Sensor Integration</span>
              <span>Temperature Monitoring</span>
              <span>CMU Compatibility</span>
              <span>Module Packaging</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Sensor board design views</h2>
        </div>

        <div className="project-gallery-grid">
          {heatIntegrationImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img
                src={src}
                alt={`Heat integration sensor system image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HeatIntegration;