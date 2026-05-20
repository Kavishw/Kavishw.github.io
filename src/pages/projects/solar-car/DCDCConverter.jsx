import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const dcdcImages = [
  "/Images/DCDC_Converter_Module/Pedal_Control_V2.png",
  "/Images/DCDC_Converter_Module/Pedal_Control_V2_1.png",
];


function DCDCConverter() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">
            Solar Car / DC-DC Converter Integration
          </p>

          <h1>DC-DC Converter</h1>

          <p className="hero-lead">
            Integration hardware supporting the vehicle low-voltage system from
            the high-voltage battery pack.
          </p>

          <p className="hero-description">
            This project focused on integrating a Vicor 75W DC-DC converter into
            the solar car electrical system through a dedicated interface board.
            The goal was to create a clean and practical integration solution
            that simplified wiring, mounting, and electrical interfacing for the
            vehicle low-voltage architecture.
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
            <h2>Project Purpose</h2>

            <p>
              The board was designed as an interface and integration platform
              for the Vicor 75W converter, allowing the converter to be more
              easily incorporated into the vehicle electrical system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>

            <div className="tag-row">
              <span>DC-DC Conversion</span>
              <span>Low-Voltage Systems</span>
              <span>Vehicle Integration</span>
              <span>PCB Design</span>
              <span>Power Distribution</span>
            </div>
          </article>

          <article className="project-info-card">
            <h2>Design Approach</h2>

            <p>
              The project emphasized simplicity and practical integration rather
              than designing a converter from scratch. The focus was on creating
              a reliable and easy-to-use module around the Vicor converter for
              use within the solar car electrical system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>What I Learned</h2>

            <p>
              This project helped reinforce practical PCB integration methods,
              connector interfacing, low-voltage power distribution concepts,
              and system-level electrical packaging inside a vehicle.
            </p>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Board renders</h2>
        </div>

        <div className="project-gallery-grid">
          {dcdcImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`DC-DC converter board ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DCDCConverter;