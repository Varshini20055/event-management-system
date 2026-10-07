import { useState } from "react";

function Navbar({ onRegisterClick }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">E</span>
          Event Management System
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => {
              setOpen(false);
              onRegisterClick();
            }}
          >
            Register
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
