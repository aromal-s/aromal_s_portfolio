
import "./Footer.css";
import insta from "../assets/instagram.png";
import linked from "../assets/linkedin.png";
import whatapp from "../assets/square-whatsapp.svg";
import facebook from "../assets/facebook.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="connect">
        <a href="https://www.linkedin.com/in/aromals2000">
          <img src={linked} alt="linkedin" className="footimg" />
        </a>
        <a href="https://www.instagram.com/_a.r.o.m.a.l_s/">
          <img src={insta} alt="instagram" className="footimg" />
        </a>
        <a href="https://www.facebook.com/aromal.aromal.9047/">
          <img src={facebook} alt="facebook" className="footimg" />
        </a>
        <a href="https://wa.me/917594951627">
          <img src={whatapp} alt="whatsaapp" className="footimg" />
        </a>
      </div>
      <p className="copyright">All Copyright &copy; Reserved By Aromal S</p>
    </footer>
  );
}

export default Footer;
