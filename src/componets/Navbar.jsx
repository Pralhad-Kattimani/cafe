import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Rova</div>

        <div className="nav-right">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#hours">Hours</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/919999999999"
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#hours">Hours</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}

export default Navbar;
