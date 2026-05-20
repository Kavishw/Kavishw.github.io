import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Publications from "./pages/Publications";
import SolarCar from "./pages/projects/SolarCar";
import Precharge from "./pages/projects/solar-car/Precharge";
import DCDCConverter from "./pages/projects/solar-car/DCDCConverter";
import PedalControl from "./pages/projects/solar-car/PedalControl";
import PowerManagement from "./pages/projects/solar-car/PowerManagement";
import HVInterfacing from "./pages/projects/solar-car/HVInterfacing";
import BatteryWorkforce from "./pages/projects/BatteryWorkforce";
import CMU from "./pages/projects/battery-workforce/CMU";
import HeatIntegration from "./pages/projects/battery-workforce/HeatIntegration";
import IntegrationBoard from "./pages/projects/battery-workforce/IntegrationBoard";
import HarnessDevelopment from "./pages/projects/battery-workforce/HarnessDevelopment";
import BDU from "./pages/projects/battery-workforce/BDU";
import "./App.css";

const skillGroups = [
  {
    title: "Programming & Development",
    description:
      "Programming languages and development tools used for embedded systems, automation, analysis, and engineering workflows.",
    items: ["C", "C++", "Python", "MATLAB / Simulink", "Java", "Unix", "Linux", "Shell Scripting", "Bash", "Git"],
  },
  {
    title: "Engineering Software & CAD",
    description:
      "Design, simulation, analysis, and CAD tools used across electrical, mechanical, and system-level engineering work.",
    items: ["Altium Designer", "KiCad", "NI Multisim", "LabVIEW", "SolidWorks", "Autodesk Inventor", "Fusion 360", "Eagle", "Ansys Granta"],
  },
  {
    title: "Embedded Systems",
    description:
      "Microcontroller platforms and communication protocols used for sensing, control, and vehicle hardware integration.",
    items: ["ESP32 Systems", "PIC18F Systems", "STM32", "NXP S32K", "SPI", "I2C", "CAN Bus", "LIN Bus", "UART"],
  },
  {
    title: "Battery Systems & Test Equipment",
    description:
      "Battery management hardware, cell testing equipment, and pack-level validation tools for EV battery systems.",
    items: ["Orion 2 BMS", "NXP HV BMS Hardware", "Arbin Cyclers", "Digitron Cyclers", "Cell Monitoring", "Voltage Sensing", "Temperature Sensing", "Pack Integration"],
  },
  {
    title: "Machine Learning & Data",
    description:
      "Modeling and data-driven methods used for SOC estimation, battery analytics, and experimental data analysis.",
    items: ["NARX Models", "LSTMs", "Neural Networks", "Basic ML Algorithms", "Data Processing", "SOC Estimation"],
  },
  {
    title: "Bench Tools & Validation",
    description:
      "Hands-on electrical testing, measurement, debugging, and validation tools used during hardware development.",
    items: ["Oscilloscopes", "Multimeters", "NI-DAQ Tools", "SMD Soldering", "Through-Hole Soldering", "Board Debugging", "Sensor Calibration"],
  },
  {
    title: "Hardware Design Skills",
    description:
      "Electrical design skills used to move hardware from schematic concepts to tested and integrated PCB assemblies.",
    items: ["PCBA Design", "Electronic Design", "Schematic Design", "PCB Layout", "Board Bring-Up", "Sensor Integration", "Circuit Debugging"],
  },
  {
    title: "Project Management & Execution",
    description:
      "Technical planning and execution methods used to coordinate hardware projects, validation work, and cross-functional teams.",
    items: ["Jira", "Confluence", "Sprint Planning", "Gantt Charts", "Critical Path Tracking", "Risk Tracking", "Milestone Planning", "Design Reviews"],
  },
  {
    title: "Professional Skills",
    description:
      "Team and communication skills developed through engineering leadership, student teams, internships, and technical project work.",
    items: ["Team Leadership", "Technical Communication", "Cross-Functional Collaboration", "Independent Problem-Solving", "Organization", "Mentorship", "Documentation", "Decision Making"],
  },
];

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Kavish Wadehra home">
        KW
      </Link>

      <div className="nav-links">
        <Link to="/#education">Education</Link>

        <div className="nav-dropdown">
<Link to="/#experience">Experience</Link>

        </div>

        <div className="nav-dropdown">
          <Link to="/#projects" className="dropdown-trigger">
            Projects
          </Link>

          <div className="dropdown-menu">
            <Link to="/projects/battery-workforce">
  Battery Workforce Challenge
</Link>
            <Link to="/projects/solar-car">McMaster Solar Car Project</Link>
          </div>
        </div>

        <Link to="/publications">Publications</Link>

        <a href="/Kavish_Wadehra_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>

        <Link to="/#contact">Contact</Link>
      </div>
    </nav>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-svg" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-svg" aria-hidden="true">
      <path d="M6.5 10v8" />
      <path d="M6.5 6.5v.1" />
      <path d="M11 18v-8" />
      <path d="M11 13.5c0-2.1 1.2-3.5 3.1-3.5 1.8 0 3 1.2 3 3.5V18" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-svg" aria-hidden="true">
      <path d="M9 19c-4 1.2-4-2-5.5-2.5" />
      <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 7c.1-.4.5-1.8-.1-3.5 0 0-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6 0C6.5 3.2 5.4 3.5 5.4 3.5 4.8 5.2 5.2 6.6 5.3 7A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
    </svg>
  );
}

function Home() {
  return (
    <main className="site">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Electrical Engineering Portfolio</p>
            <h1>Kavish Wadehra</h1>

            <p className="hero-lead">
              I’m an electrical engineering graduate student who likes building
              practical hardware systems from the ground up.
            </p>

            <p className="hero-description">
              My work focuses on battery systems, embedded electronics,
              high-voltage architecture, and EV system integration. I enjoy
              working close to the hardware — from PCB design and firmware to
              testing, debugging, and turning early concepts into real systems.
            </p>

            <div className="hero-buttons">
              <a href="/Kavish_Wadehra_Resume.pdf" className="primary-button">
                View Resume
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img src="/profile.jpg" alt="Kavish Wadehra" />
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
  <div className="experience-header">
    <p className="section-label">Experience</p>
    <h2>Professional experience</h2>
    <p>
      Engineering roles focused on vehicle power electronics, CAD automation,
      laboratory testing, and technical teaching.
    </p>
  </div>

  <div className="experience-timeline" id="professional-experience">
    <article className="experience-item">
      <div className="timeline-marker"></div>

      <div className="experience-card">
        <div className="experience-card-top">
          <div>
            <p className="experience-date">May 2025 – Sep 2025</p>
            <h3>Technical Program Manager Intern — Vehicle Power Electronics</h3>
            <p className="experience-company">Tesla — Palo Alto, CA</p>
          </div>
        </div>

        <p>
          Supported cross-functional execution of vehicle power electronics
          programs by coordinating hardware design, validation, test, and
          manufacturing teams across key program milestones.
        </p>

        <ul>
          <li>Supported FVT, Hi-Pot testing, and NPI builds for high-power electronic assemblies.</li>
          <li>Tracked validation blockers, failure trends, and manufacturing issues during build readiness.</li>
          <li>Worked with engineering teams to escalate risks, drive mitigation plans, and maintain program alignment.</li>
        </ul>
      </div>
    </article>

    <article className="experience-item">
      <div className="timeline-marker"></div>

      <div className="experience-card">
        <div className="experience-card-top">
          <div>
            <p className="experience-date">May 2023 – Apr 2024</p>
            <h3>Place-and-Route CAD Co-op</h3>
            <p className="experience-company">AMD — Markham, ON</p>
          </div>
        </div>

        <p>
          Worked on CAD automation and physical design support for PnR and VLSI
          flows, focusing on automation, debug workflows, and design analysis.
        </p>

        <ul>
          <li>Investigated PnR and VLSI flow issues including QoR degradation, runtime regressions, crashes, and instability.</li>
          <li>Used ICC2, Fusion Compiler, and Innovus to inspect layouts and debug timing, congestion, and power-related issues.</li>
          <li>Built automation tools in Python, shell scripting, and C++ to track metrics, disk usage, and testcase packaging.</li>
          <li>Used Linux workflows, cron jobs, and scripted automation to reduce manual CAD flow work.</li>
        </ul>
      </div>
    </article>

    <article className="experience-item">
      <div className="timeline-marker"></div>

      <div className="experience-card">
        <div className="experience-card-top">
          <div>
            <p className="experience-date">May 2022 – Apr 2023</p>
            <h3>Lab Assistant</h3>
            <p className="experience-company">Centre for Mechatronics and Hybrid Technologies — Hamilton, ON</p>
          </div>
        </div>

        <p>
          Supported laboratory testing, signal acquisition, and experimental
          validation work across mechatronics, battery, and electrical systems.
        </p>

        <ul>
          <li>Developed LabVIEW and Python scripts for automated data acquisition using NI-DAQmx drivers.</li>
          <li>Performed signal processing and analysis for op-amp circuits, sensor interfaces, motors, and lab test setups.</li>
          <li>Conducted electrical testing and characterization of 18650 lithium-ion cells.</li>
          <li>Supported lab setup, troubleshooting, and validation for repeatable experimental results.</li>
        </ul>
      </div>
    </article>

    <article className="experience-item">
      <div className="timeline-marker"></div>

      <div className="experience-card">
        <div className="experience-card-top">
          <div>
            <p className="experience-date">Jan 2022 – Present</p>
            <h3>Undergraduate Teaching Assistant</h3>
            <p className="experience-company">McMaster University — Hamilton, ON</p>
          </div>
        </div>

        <p>
          Supported first-year physics and engineering physics courses through
          tutorials, lab support, grading, and student mentorship.
        </p>

        <ul>
          <li>TA for Physics 1E03 and Engineering Physics 1P13A across multiple terms.</li>
          <li>Assisted students with mechanics, electricity and magnetism, engineering physics, and lab analysis.</li>
          <li>Evaluated exams, lab reports, design studio submissions, and technical assignments.</li>
          <li>Helped communicate technical concepts clearly to students from different academic backgrounds.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

      <section className="education-section" id="education">
        <div className="education-header">
          <p className="section-label">Education</p>
          <h2>Academic background</h2>
          <p>
            My academic path has focused on electrical engineering, battery
            systems, embedded hardware, and electric vehicle technologies.
          </p>
        </div>

        <div className="education-timeline">
          <article className="education-timeline-item">
            <div className="timeline-marker"></div>

            <div className="education-timeline-card">
              <div className="education-card-top">
                <div>
                  <p className="education-date">May 2026 – Present</p>
                  <h3>Master of Applied Science</h3>
                  <p className="education-school">
                    Electrical and Computer Engineering — McMaster University
                  </p>
                </div>

                <span className="education-status">Incoming</span>
              </div>

              <p className="education-summary">
                Graduate research focused on battery systems, embedded hardware,
                state-of-charge estimation, and electric vehicle applications.
              </p>

              <div className="education-details-row">
                <div>
                  <span>GPA</span>
                  <p>- / 4.00</p>
                </div>

                <div>
                  <span>Focus</span>
                  <p>Battery systems, embedded hardware, and SOC estimation</p>
                </div>
              </div>
            </div>
          </article>

          <article className="education-timeline-item">
            <div className="timeline-marker"></div>

            <div className="education-timeline-card">
              <div className="education-card-top">
                <div>
                  <p className="education-date">Sep 2020 – Apr 2026</p>
                  <h3>Bachelor of Engineering</h3>
                  <p className="education-school">
                    Electrical Engineering — McMaster University
                  </p>
                </div>

                <span className="education-status">Dean’s List</span>
              </div>

              <p className="education-summary">
                Completed an electrical engineering degree with technical work
                across power electronics, embedded systems, PCB design, signal
                acquisition, battery systems, and vehicle-level electrical
                integration.
              </p>

              <div className="education-details-row">
                <div>
                  <span>GPA</span>
                  <p>3.8 / 4.00</p>
                </div>

                <div>
                  <span>Focus</span>
                  <p>Power, embedded, and battery systems</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-header">
          <p className="section-label">Technical Skills</p>
          <p>
            A focused snapshot of the tools, systems, and hardware areas I work
            with most often.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">Contact</p>
        <h2>Interested in battery, power, and hardware design work.</h2>

        <div className="contact-icons">
          <a href="mailto:kavishwadehra@gmail.com" className="contact-icon" aria-label="Email Kavish" title="Email">
            <MailIcon />
          </a>

          <a href="https://www.linkedin.com/in/kavish-wadehra/" className="contact-icon" target="_blank" rel="noreferrer" aria-label="Kavish Wadehra LinkedIn" title="LinkedIn">
            <LinkedinIcon />
          </a>

          <a href="https://github.com/Kavishw" className="contact-icon" target="_blank" rel="noreferrer" aria-label="Kavish Wadehra GitHub" title="GitHub">
            <GithubIcon />
          </a>
        </div>
      </section>
    </main>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects/solar-car" element={<SolarCar />} />
        <Route path="/projects/solar-car/precharge" element={<Precharge />} />
        <Route   path="/projects/solar-car/dcdc-converter"   element={<DCDCConverter />} />
        <Route path="/projects/solar-car/pedal-control" element={<PedalControl />} />
        <Route path="/projects/battery-workforce/bdu" element={<BDU />} />
        <Route
  path="/projects/battery-workforce/harness-development"
  element={<HarnessDevelopment />}
/>
        <Route
  path="/projects/battery-workforce/integration-board"
  element={<IntegrationBoard />}
/>
        <Route
  path="/projects/battery-workforce/heat-integration"
  element={<HeatIntegration />}
/>
        <Route path="/projects/battery-workforce/cmu" element={<CMU />} />
        <Route
  path="/projects/battery-workforce"
  element={<BatteryWorkforce />}
/>
        <Route
  path="/projects/solar-car/power-management"
  element={<PowerManagement />}
/>
<Route
  path="/projects/solar-car/hv-interfacing"
  element={<HVInterfacing />}
/>
      </Routes>
    </HashRouter>
  );
}

export default App;