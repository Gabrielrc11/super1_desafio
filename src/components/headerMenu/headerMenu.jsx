import './headerMenu.css'
import Menu from '../../assets/menu.svg'
import Arrow from '../../assets/arrowDown.svg'
import React, { useState } from 'react';

function headerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="header-menu">
                <div className='menu' onClick={toggleMenu}>
                    <img src={Menu} alt="Menu" className="menu-icon"/>
                    <a className="menu-text">Departamentos</a>
                    <img src={Arrow} alt="Menu" className="arrow-icon"/>
                    {isMenuOpen && (
                        <div className="menu-suspenso">
                            <a href="#">Item</a>
                            <a href="#">Item</a>
                            <a href="#">Item</a>
                        </div>
                    )}
                </div>
                <a className="link-center">Descontos Cliente Unimed Natal</a>
                <a className="link-end">Venda no Uniclube</a>
            </div>
        </div>
    );
}

export default headerMenu;