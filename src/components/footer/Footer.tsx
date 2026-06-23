
import "./Footer.css";
import insta from "../assets/instagram.png";
import linked from "../assets/linkedin.png";
import whatapp from "../assets/square-whatsapp.svg";
import facebook from "../assets/facebook.png";
import github from "../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="connect">
        <a href="https://github.com/aromal-s" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="footimg" />
        </a>
        <a href="https://www.linkedin.com/in/aromals2000" target="_blank" rel="noopener noreferrer">
          <img src={linked} alt="linkedin" className="footimg" />
        </a>
        <a href="https://www.instagram.com/_a.r.o.m.a.l_s/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="instagram" className="footimg" />
        </a>
        <a href="https://www.facebook.com/aromal.aromal.9047/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" className="footimg" />
        </a>
        <a href="https://wa.me/917594951627" target="_blank" rel="noopener noreferrer">
          <img src={whatapp} alt="whatsapp" className="footimg" />
        </a>
      </div>
      <p className="copyright">All Copyright &copy; Reserved By Aromal S</p>
    </footer>
  );
}

export default Footer;
