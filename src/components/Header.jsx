import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Kavish Wadehra home">
        KW
      </Link>

      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="mobile-menu-toggle"
      />

      <label htmlFor="mobile-menu-toggle" className="mobile-menu-button">
        ☰
      </label>

      <div className="nav-links">
        <Link to="/#education">Education</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/projects/battery-workforce">Battery Workforce</Link>
        <Link to="/projects/solar-car">Solar Car</Link>
        <Link to="/publications">Publications</Link>

        <a href="/Kavish_Wadehra_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>

        <Link to="/#contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;