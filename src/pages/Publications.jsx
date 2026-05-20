import { Link } from "react-router-dom";
import Header from "../../../components/Header";



function Publications() {
  return (
    <main className="site">
      <Header />

      <section className="publications-page">
        <div className="publications-header">
          <p className="section-label">Publications</p>
          <h1>Research and technical writing.</h1>
          <p>
            A collection of academic publications, conference submissions, and
            technical research work related to battery systems, power
            electronics, embedded hardware, and electric vehicle applications.
          </p>
        </div>

        <div className="publication-list">
          <article className="publication-card">
            <div className="publication-meta">
              <span>IEEE ITEC/EATS</span>
              <span>2025</span>
              <span>Conference Paper</span>
            </div>

            <h2>
              Thermal Performance Evaluation and Design Optimization of a
              Battery Disconnect Unit for High-Power EV Applications
            </h2>

            <p className="publication-authors">K. Wadehra, et al.</p>

            <p className="publication-description">
              This work evaluates the thermal performance of a battery
              disconnect unit designed for high-power electric vehicle
              applications, with emphasis on design optimization, power
              distribution, and pack-level integration.
            </p>

            <div className="publication-actions">
              <a
                href="https://ieeexplore.ieee.org/document/11098064"
                target="_blank"
                rel="noreferrer"
                className="publication-button"
              >
                View on IEEE Xplore
              </a>
            </div>

            <div className="tag-row publication-tags">
              <span>Battery Disconnect Unit</span>
              <span>Thermal Design</span>
              <span>EV Systems</span>
              <span>Power Distribution</span>
            </div>
          </article>

          <article className="publication-card publication-card-muted">
            <div className="publication-meta">
              <span>IEEE SAES</span>
              <span>In Progress</span>
              <span>Conference Paper</span>
            </div>

            <h2>
              Dual-Model Edge-to-Cloud SOC Estimation Framework for Wireless
              Battery Management Systems
            </h2>

            <p className="publication-authors">K. Wadehra, et al.</p>

            <p className="publication-description">
              Ongoing research focused on embedded and cloud-based SOC
              estimation using wireless battery management hardware, edge
              inference, and cloud-supervised model validation.
            </p>

            <div className="tag-row publication-tags">
              <span>Wireless BMS</span>
              <span>SOC Estimation</span>
              <span>NARX</span>
              <span>LSTM</span>
              <span>ESP32-S3</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Publications;