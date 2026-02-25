import { useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <h2 className="logo">AVACASA</h2>

      <nav className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/listings" onClick={() => setOpen(false)}>Listings</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}