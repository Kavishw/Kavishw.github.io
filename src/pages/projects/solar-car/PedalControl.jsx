import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const pedalImages = [
  "/Images/Pedal_Control_Board/Pedal_Control_V1.png",
  "/Images/Pedal_Control_Board/Pedal_Control_V1_1.png",
  "/Images/Pedal_Control_Board/Pedal_Control_V2.png",
  "/Images/Pedal_Control_Board/Pedal_Control_V2_1.png",
];



function PedalControl() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">Solar Car / Pedal Control Board</p>

          <h1>Pedal Control Board</h1>

          <p className="hero-lead">
            A pedal interface board used to connect a 6-pin accelerator pedal to
            the solar car motor controller.
          </p>

          <p className="hero-description">
            This project introduced me to accelerator pedal signal interfaces
            and how driver input is passed into a vehicle motor controller. The
            pedal used two potentiometer-based output signals. For our system,
            we relied on one signal path, but in a production-style design both
            pedal signals should be monitored for redundancy and fault checking.
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
              The board was designed to simplify the electrical interface
              between the accelerator pedal and the motor controller. It helped
              package the pedal wiring into a cleaner board-level solution
              instead of relying on loose wiring during vehicle integration.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Pedal Signals</h2>
            <p>
              Through this project, I learned that accelerator pedals can use
              different sensing methods, including potentiometer-based and
              Hall-effect-based sensing. This pedal used two potentiometer-based
              signal outputs through a 6-pin connector.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Redundancy Lesson</h2>
            <p>
              In our implementation, only one of the potentiometer outputs was
              used for the motor controller input. Looking back, both outputs
              should be considered in the control logic so the system can
              compare the signals and detect pedal faults.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>Pedal Interface</span>
              <span>Motor Controller</span>
              <span>Potentiometer Signals</span>
              <span>Driver Input</span>
              <span>PCB Design</span>
              <span>Vehicle Controls</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Hardware Gallery</p>
          <h2>Board design iterations</h2>
        </div>

        <div className="project-gallery-grid">
          {pedalImages.map((src, index) => (
            <div className="project-gallery-card" key={src}>
              <img src={src} alt={`Pedal control board image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PedalControl;