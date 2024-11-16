import './Footer.css'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="menuItems">
        <li className="menuItem">Terms Of Use</li>
        <li className="menuItem">Privacy-Policy</li>
        <li className="menuItem">About</li>
        <li className="menuItem">Blog</li>
        <li className="menuItem">FAQ</li>
      </div>
      <div className="infoText">
        <li>Welcome to Movix, your premier destination for a cinematic journey at your
          fingertips. Dive into an extensive library, enjoy seamless streaming, and
          explore a world of entertainment without borders. Movix offers personalized
          recommendations in a user-friendly interface, making every click a gateway
          to a tailored cinematic experience.</li>
      </div>
      <div className="socialIcons">
        <span className="icon">
          <FaFacebookF />
        </span>
        <span className="icon">
          <FaInstagram />
        </span>
        <span className="icon">
          <FaTwitter />
        </span>
        <span className="icon">
          <FaLinkedin />
        </span>
      </div>

    </footer>
  );
};

export default Footer;

