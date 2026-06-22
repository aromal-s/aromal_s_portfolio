import "./Navbar.css";
import contact from "../assets/contact.png";
import logo from "../assets/aromal_logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { Link } from "react-scroll";
import { useState } from "react";
function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktop-menu">
        <Link
          activeClass="active"
          className="desktopmenulist"
          to="intro"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="desktopmenulist"
          activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          to="intro"
          className="desktopmenulist"
          activeClass="active"
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktop-menu-btn"
        onClick={() => {
          document
            .getElementById("contactPage")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
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
        <Link
          activeClass="active"
          className="listItem"
          to="intro"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          to="intro"
          className="listItem"
          activeClass="active"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="contactPage"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
