import { Link } from "react-router-dom";

const hvImages = [
  {
    src: "/Images/HV_Interfacing/ACDC_Charger_Construction.jpg",
    caption: "AC-DC charger teardown and construction work",
  },
  {
    src: "/Images/HV_Interfacing/BMS_Setup_With_Prototype_Precharge_And_Power_Distribution_Center.jpg",
    caption: "BMS setup with prototype precharge and power distribution hardware",
  },
  {
    src: "/Images/HV_Interfacing/Competition_Work.jpg",
    caption: "Competition vehicle integration work",
  },
  {
    src: "/Images/HV_Interfacing/Competition_Work2.jpg",
    caption: "Low-voltage debugging during competition.",
  },
  {
    src: "/Images/HV_Interfacing/Heat_Stroke_Moment_At_Competition.png",
    caption: "Almost got a heat stroke from over working at competition.",
  },
  {
    src: "/Images/HV_Interfacing/HV_Interfacing_Onboard_Charger_Precharge_Contactor_Dual_Power_Supply_Integration.png",
    caption: "Onboard charger, precharge, contactor, and power supply integration",
  },
  {
    src: "/Images/HV_Interfacing/hvarc.png",
    caption: "High-voltage architecture diagram",
  },
  {
    src: "/Images/HV_Interfacing/INterfacing_With_BatteryPack_LV_Connections.png",
    caption: "Battery pack low-voltage connection interfacing",
  },
  {
    src: "/Images/HV_Interfacing/Solar_Car_Vehicle_Integration_Work.jpg",
    caption: "Solar car vehicle integration work",
  },
  {
    src: "/Images/HV_Interfacing/Vehicle_Load.jpg",
    caption: "Vehicle loading and competition logistics",
  },
];

const hvVideos = [
  "/Images/HV_Interfacing/Motor_On_Vehicle.mp4",
  "/Images/HV_Interfacing/Motor_Spin1.mp4",
  "/Images/HV_Interfacing/Pedal_test.mp4",
];

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Kavish Wadehra home">
        KW
      </Link>

      <div className="nav-links">
        <Link to="/#education">Education</Link>
        <Link to="/projects/solar-car">Solar Car</Link>
        <Link to="/publications">Publications</Link>

        <a href="/Kavish_Wadehra_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}

function HVInterfacing() {
  return (
    <main className="site">
      <Header />

      <section className="project-detail-hero project-detail-hero-centered">
        <div className="project-detail-text">
          <p className="section-label">
            Solar Car / High-Voltage Interfacing
          </p>

          <h1>HV Interfacing</h1>

          <p className="hero-lead">
            Vehicle-level integration of the battery pack, Orion 2 BMS, charger,
            motor controllers, pedal system, power management hardware, and CAN
            communication network.
          </p>

          <p className="hero-description">
            This work brought together the major high-voltage and low-voltage
            systems required to make the 2024 solar vehicle functional. I worked
            across CAN communication, charger handshaking, BMS configuration,
            battery pack sizing, precharge sequencing, motor controller
            interfacing, safety faults, temperature limits, isolation fault
            detection, and emergency shutdown integration.
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
            <h2>CAN Integration</h2>
            <p>
              I developed and integrated many of the CAN frames used throughout
              the 2024 solar vehicle. This included communication between the
              motor controllers, power management board, pedal control board,
              Orion 2 BMS, and charger system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Battery Pack Sizing</h2>
            <p>
              I supported battery pack sizing by running drive cycle simulations
              and vehicle glider model analysis to estimate the forces acting on
              the car throughout the race route. From this, we produced ABC
              parameters and estimated the required battery capacity for the
              competition route.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Cell Selection</h2>
            <p>
              I selected 21700-format cells for the pack architecture, and the
              team moved forward with Samsung cells based on performance needs,
              packaging constraints, and stock availability. This helped shape
              the pack configuration and downstream BMS setup.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Orion 2 BMS</h2>
            <p>
              I worked on integrating the Orion 2 BMS with safe fault behavior,
              battery temperature limits, cell voltage monitoring, and system
              shutdown logic. I also used Samsung 50S cell characterization data
              to build a more accurate SOC-OCV curve for the BMS configuration.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Charger Integration</h2>
            <p>
              I worked on the charger teardown, integration, and CAN-based
              handshake protocol. This included charger enable logic, charge
              state communication, and coordination with the BMS so the vehicle
              could charge safely.
            </p>
          </article>

          <article className="project-info-card">
            <h2>SAE Protocols</h2>
            <p>
              I incorporated J1772, J1939, and other SAE-related communication
              concepts for CAN-line behavior, charger integration, charger
              handshaking, and system-level fault detection.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Motor Controller Interface</h2>
            <p>
              The vehicle used two Mitsuba BLDC motors, each rated at 5 kW
              nominal power. I worked on interfacing the motor controllers using
              their built-in torque control mode, which internally relied on
              field-oriented control for motor operation.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Safety Logic</h2>
            <p>
              The integration work included precharge sequencing, emergency stop
              behavior, isolation fault detection, motor over-temperature
              considerations, battery temperature considerations, and safe fault
              handling across the vehicle electrical system.
            </p>
          </article>

          <article className="project-info-card">
            <h2>System Bring-Up</h2>
            <p>
              A major part of the project was debugging the vehicle as a full
              system rather than as isolated boards. This involved validating
              CAN behavior, checking power sequencing, confirming BMS limits,
              testing charger behavior, and resolving integration issues under
              competition timelines.
            </p>
          </article>

          <article className="project-info-card">
            <h2>Technical Focus</h2>
            <div className="tag-row">
              <span>CAN Bus</span>
              <span>Orion 2 BMS</span>
              <span>J1772</span>
              <span>J1939</span>
              <span>Charger Handshake</span>
              <span>Precharge</span>
              <span>Isolation Faults</span>
              <span>E-Stop</span>
              <span>Mitsuba BLDC</span>
              <span>Battery Pack Sizing</span>
              <span>SOC-OCV Mapping</span>
              <span>Vehicle Integration</span>
            </div>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Integration Gallery</p>
          <h2>Vehicle bring-up and HV system work</h2>
        </div>

        <div className="project-gallery-grid">
          {hvImages.map((image) => (
            <div className="project-gallery-card caption-card" key={image.src}>
              <img src={image.src} alt={image.caption} />

              <div className="image-caption">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-header">
          <p className="section-label">Testing Videos</p>
          <h2>Motor and pedal integration tests</h2>
        </div>

        <div className="project-gallery-grid">
          {hvVideos.map((src) => (
            <div className="project-gallery-card" key={src}>
              <video controls muted playsInline>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HVInterfacing;