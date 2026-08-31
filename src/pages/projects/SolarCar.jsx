import { Link } from "react-router-dom";
// src/pages/projects/SolarCar.jsx
import Header from "../../components/Header";

const solarCarImages = [
  "/Images/Landing_Page/Im1.png",
  "/Images/Landing_Page/Im3.jpg",
  "/Images/Landing_Page/Im4.jpg",
  "/Images/Landing_Page/Im5.jpg",
  "/Images/Landing_Page/Im6.jpg",
  "/Images/Landing_Page/Im7.jpg",
  "/Images/Landing_Page/Im8.jpg",
  "/Images/Landing_Page/Im9.png",
  "/Images/Landing_Page/Im10.jpg",
  "/Images/Landing_Page/Im11.jpg",
  "/Images/Landing_Page/Im12.jpg",
  "/Images/Landing_Page/Im13.jpg",
  "/Images/Landing_Page/Im14.jpg",
  "/Images/Landing_Page/Im15.jpg",
  "/Images/Landing_Page/Im16.jpg",
  "/Images/Landing_Page/Im17.jpg",
  "/Images/Landing_Page/Im18.jpg",
  "/Images/Landing_Page/Im2.png",
  "/Images/Landing_Page/Im20.jpg",
];



function SolarCar() {
  return (
    <main className="site">
      <Header />

      <section className="solar-car-landing">
        <div className="solar-car-intro">
          <p className="section-label">McMaster Solar Car</p>

          <h1>Where my electrical engineering journey started.</h1>

          <p className="hero-lead">
            Solar Car was my starting point for hands-on electrical engineering.
            When I joined, I did not know how to design circuits, build PCBs, or
            integrate vehicle electrical systems.
          </p>

          <p className="hero-description">
            I learned through building, debugging, failing, redesigning, and
            slowly understanding how real hardware systems come together. Over
            several years, I worked across precharge systems, low-voltage power
            distribution, pedal control, DC-DC conversion, high-voltage
            interfacing, and full vehicle integration.
          </p>
        </div>

        <div className="project-carousel wide-carousel">
          <div className="carousel-track">
            {[...solarCarImages, ...solarCarImages].map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt={`Solar Car project image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="project-overview-section">
        <div className="project-overview-card">
          <p className="section-label">Project Pages</p>
          <h2>Solar Car electrical systems</h2>

          <div className="project-topic-grid">
            <Link to="/projects/solar-car/precharge" className="project-topic-card">
              <h3>Precharge Board</h3>
              <p>
                High-voltage precharge hardware for safely energizing the
                vehicle powertrain.
              </p>
            </Link>

            <Link to="/projects/solar-car/power-management" className="project-topic-card">
              <h3>Power Management</h3>
              <p>
                Low-voltage distribution and control boards for vehicle
                electrical loads.
              </p>
            </Link>

            <Link to="/projects/solar-car/pedal-control" className="project-topic-card">
              <h3>Pedal Control</h3>
              <p>
                Driver input sensing and pedal interface electronics for motor
                control integration.
              </p>
            </Link>

            <Link to="/projects/solar-car/hv-interfacing" className="project-topic-card">
              <h3>HV Interfacing</h3>
              <p>
                Battery, charger, contactor, motor controller, and high-voltage
                vehicle integration.
              </p>
            </Link>

            <Link to="/projects/solar-car/dcdc-converter" className="project-topic-card">
              <h3>DC-DC Converter</h3>
              <p>
                DC-DC conversion hardware supporting the vehicle low-voltage
                system from the high-voltage battery.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolarCar;