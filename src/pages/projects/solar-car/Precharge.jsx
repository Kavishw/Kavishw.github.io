import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const prechargeImages = [
  "/Images/Precharge/Precharge_V1.png",
  "/Images/Precharge/Precharge_V1_1.png",
];



function Precharge() {
  return (
    <main className="site">
      <Header />

      
<section className="project-detail-hero project-detail-hero-centered">
  <div className="project-detail-text">
    <p className="section-label">Solar Car / Precharge Board</p>

    <h1>Precharge Board</h1>

    <p className="hero-lead">
      One of my first serious electrical hardware projects: a board used to
      support safe high-voltage precharge sequencing for the solar car
      powertrain.
    </p>

    <p className="hero-description">
      This project introduced me to high-voltage vehicle architecture,
      contactor control, power distribution, PCB design, and the safety logic
      needed before energizing an inverter or motor controller. It was one of
      the projects where I started moving from basic circuit theory into real
      vehicle electrical design.
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
              The precharge board was designed to help control the sequence used
              to safely charge the motor controller input capacitance before the
              main high-voltage contactor closes. This reduces inrush current
              and protects vehicle powertrain components.
            </p>
          </article>

          <article className="project-info-card">
            <h2>What I Learned</h2>
            <p>
              This board taught me practical PCB design, high-voltage system
              thinking, relay and contactor control, connector selection,
              electrical safety considerations, and the importance of designing
              hardware that can be debugged during vehicle integration.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>

            <div className="tag-row">
              <span>Precharge Sequencing</span>
              <span>High-Voltage Safety</span>
              <span>Contactor Control</span>
              <span>PCB Design</span>
              <span>Vehicle Integration</span>
              <span>Powertrain Interface</span>
            </div>
          </article>

          <article className="project-info-card">
            <h2>Role</h2>
            <p>
    I worked on this project primarily with my teammate Grigor. Together, we
    designed the PCB, selected and tested the MOSFETs, developed the switching
    and control approach, and handled the bring-up and debugging ourselves.
    This project was one of my first real experiences taking a board from
    concept to tested hardware.
            </p>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Board design views</h2>
        </div>

        <div className="project-gallery-grid">
          {prechargeImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`Precharge board image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Precharge;