import './Footer.scss';
import logo from '../assets/LOGO.png';

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} alt="Logo textuel Kasa avec une maison à la place de la première lettre A" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;