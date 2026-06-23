import { useState, useEffect } from "react";
import "./Navbar.css";
import contact from "../assets/contact.png";
import logo from "../assets/aromal_logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const sections = ["intro", "skills", "portfolio", "contactPage"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.disconnect();
      });
    };
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktop-menu">
        <a
          className={`desktopmenulist ${activeSection === "intro" ? "active" : ""}`}
          onClick={() => handleScroll("intro")}
          style={{ cursor: "pointer" }}
        >
          Home
        </a>
        <a
          className={`desktopmenulist ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => handleScroll("skills")}
          style={{ cursor: "pointer" }}
        >
          About
        </a>
        <a
          className={`desktopmenulist ${activeSection === "portfolio" ? "active" : ""}`}
          onClick={() => handleScroll("portfolio")}
          style={{ cursor: "pointer" }}
        >
          Portfolio
        </a>
      </div>
      <div className="right-section">
        <button
          className="desktop-menu-btn"
          onClick={() => handleScroll("contactPage")}
        >
          <img src={contact} alt="contact" className="contact" />
          Contact me
        </button>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "dark" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <a
          className={`listItem ${activeSection === "intro" ? "active" : ""}`}
          onClick={() => {
            handleScroll("intro");
            setShowMenu(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Home
        </a>
        <a
          className={`listItem ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => {
            handleScroll("skills");
            setShowMenu(false);
          }}
          style={{ cursor: "pointer" }}
        >
          About
        </a>
        <a
          className={`listItem ${activeSection === "portfolio" ? "active" : ""}`}
          onClick={() => {
            handleScroll("portfolio");
            setShowMenu(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Portfolio
        </a>
        <a
          className={`listItem ${activeSection === "contactPage" ? "active" : ""}`}
          onClick={() => {
            handleScroll("contactPage");
            setShowMenu(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
