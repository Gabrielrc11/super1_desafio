import React, { useState, useEffect, useRef } from 'react';
import Menu from '../../assets/menu.svg';
import Arrow from '../../assets/arrowDown.svg';
import './menu.css';

function MenuComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='menu' onClick={toggleMenu} ref={menuRef}>
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
    );
}

export default MenuComponent;