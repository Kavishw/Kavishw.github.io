import { Link } from "react-router-dom";

const bwcImages = [
  "/Images/Landing_Page_BWC/Im1.jpg",
  "/Images/Landing_Page_BWC/Im2.jpg",
  "/Images/Landing_Page_BWC/Im3.jpg",
  "/Images/Landing_Page_BWC/Im4.jpg",
  "/Images/Landing_Page_BWC/Im5.jpg",
  "/Images/Landing_Page_BWC/Im6.jpg",
  "/Images/Landing_Page_BWC/Im7.jpg",
  "/Images/Landing_Page_BWC/Im8.jpg",
  "/Images/Landing_Page_BWC/Im9.jpg",
  "/Images/Landing_Page_BWC/Im10.jpg",
  "/Images/Landing_Page_BWC/Im11.jpg",
  "/Images/Landing_Page_BWC/Im12.jpg",
  "/Images/Landing_Page_BWC/Im13.jpg",
  "/Images/Landing_Page_BWC/Im14.jpg",
  "/Images/Landing_Page_BWC/Im15.jpg",
  "/Images/Landing_Page_BWC/Im16.JPG",
  "/Images/Landing_Page_BWC/Im17.jpg",
  "/Images/Landing_Page_BWC/Im18.jpg",
  "/Images/Landing_Page_BWC/Im19.JPG",
];

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        KW
      </Link>

      <div className="nav-links">
        <Link to="/#education">Education</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/publications">Publications</Link>

        <a href="/Kavish_Wadehra_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}

function BatteryWorkforce() {
  return (
    <main className="site">
      <Header />

      <section className="solar-car-landing">
        <div className="solar-car-intro">
          <p className="section-label">Battery Workforce Challenge</p>

          <h1>System-level EV battery engineering.</h1>

          <p className="hero-lead">
            Battery Workforce Challenge gave me the opportunity to work on
            large-scale EV battery systems spanning electrical integration,
            battery management hardware, harness development, thermal
            integration, manufacturing, and vehicle-level validation.
          </p>

          <p className="hero-description">
            Through this project, I worked alongside an incredible group of
            engineers and mentors. I want to especially thank Romulo and Lewis
            for giving me the opportunity to contribute and grow within the
            program. I also had the chance to work closely with talented leads
            and teammates including Mahir, Primo, Thomas, Anand, Grigor, Kun, and Mohamed,
            all of whom helped shape the engineering environment and team
            culture throughout the competition. Due to all of our team's efforts, we managed to get fourth overall in first year, first overall in our second year, and second overall in our final year. 
            Our team was the only team with a completed and functioning pack with our own custom cell monitoring unit designs (led by myself, Mohamed, Kun, and Grigor), serpentine cooling design (Led by Mahir, Thomas, and Anand). 
          </p>
        </div>

        <div className="project-carousel wide-carousel">
          <div className="carousel-track">
            {[...bwcImages, ...bwcImages].map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt={`Battery Workforce Challenge image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="project-overview-section">
        <div className="project-overview-card">
          <p className="section-label">Project Pages</p>

          <h2>Battery system development</h2>

          <div className="project-topic-grid">
            <Link
              to="/projects/battery-workforce/cmu"
              className="project-topic-card"
            >
              <h3>Cell Monitoring Unit</h3>

              <p>
                Custom cell monitoring hardware designed around strict
                mechanical spacing constraints and modular battery integration.
              </p>
            </Link>

            <Link
              to="/projects/battery-workforce/integration-board"
              className="project-topic-card"
            >
              <h3>Integration Board</h3>

              <p>
                Vehicle integration hardware connecting the BMS, CAN systems,
                LIN communication, sensors, relays, and external subsystems.
              </p>
            </Link>

            <Link
              to="/projects/battery-workforce/harness-development"
              className="project-topic-card"
            >
              <h3>Harness Development</h3>

              <p>
                Development and assembly of vehicle harnesses including crimping,
                validation, continuity testing, and HiPot verification.
              </p>
            </Link>

            <Link
              to="/projects/battery-workforce/heat-integration"
              className="project-topic-card"
            >
              <h3>Heat Integration Sensor System</h3>

              <p>
                Thermal sensing hardware intended to integrate with custom
                cooling architecture and distributed battery monitoring systems.
              </p>
            </Link>

            <Link
              to="/projects/battery-workforce/bdu"
              className="project-topic-card"
            >
              <h3>Battery Disconnect Unit</h3>

              <p>
                High-power battery disconnect and protection system integrating
                contactors, thermal considerations, and vehicle power routing.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BatteryWorkforce;