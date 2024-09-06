import logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo textuel Kasa avec une maison à la place de la première lettre A" />
                </div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/src/pages/Apropos">A propos</Link>
                </nav>
            </header>
    );
};

export default Header;