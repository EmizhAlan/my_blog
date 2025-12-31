import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link
          to="/"
          className="header__logo"
          onClick={() => setOpen(false)}
        >
          Dayone
        </Link>

        <nav className={`header__nav ${open ? "open" : ""}`}>
          <Link to="/about" onClick={() => setOpen(false)}>О нас</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Блог</Link>
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
