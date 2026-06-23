import { useState, useEffect } from "react";
import "./Navbar.css";
import contact from "../assets/contact.png";
import logo from "../assets/aromal_logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("intro");

  useEffect(() => {
    const sections = ["intro", "skills", "contactPage"];
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
          onClick={() => handleScroll("intro")}
          style={{ cursor: "pointer" }}
        >
          Portfolio
        </a>
      </div>
      <button
        className="desktop-menu-btn"
        onClick={() => handleScroll("contactPage")}
      >
        <img src={contact} alt="contact" className="contact" />
        Contact me
      </button>
      <img
        src={showMenu ? close : menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
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
            handleScroll("intro");
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
