import React from 'react';
import logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header:React.FC = () => {
    return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo textuel Kasa avec une maison à la place de la première lettre A" />
                </div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </header>
    );
};
