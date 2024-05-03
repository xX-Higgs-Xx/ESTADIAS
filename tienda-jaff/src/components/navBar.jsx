import React from 'react';
import '../styles/navBarStyle.css';
import logoJAFF from '../assets/img/logoJAFF-V.png';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="tittle">
                <a href="./App.jsx">
                    <img src={logoJAFF} className='imgLogo' alt="logo de JAFF vertical" />
                </a>
            </div>
            <nav className='nav'>
                <ul className='options'>
                    <li>Dama</li>
                    <li>Caballero</li>
                    <li>Hogar y estilo de vida</li>
                    <li>Libros</li>
                    <li>Antonio Figueroa</li>
                    <li>Uniformes empresariales</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
