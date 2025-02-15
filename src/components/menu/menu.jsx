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
                    <div className="menu-item">
                        <a href="#">Saúde e Bem-estar</a>
                        <ul>
                            <li><a href="#">Beleza</a></li>
                            <li><a href="#">Cuidados Pessoais</a></li>
                            <li><a href="#">Esportes e Aventura</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Estilo</a>
                        <ul>
                            <li><a href="#">Vestuário</a></li>
                            <li><a href="#">Calçados</a></li>
                            <li><a href="#">Bijuterias e Acessórios</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Eletro</a>
                        <ul>
                            <li><a href="#">Eletrodomésticos</a></li>
                            <li><a href="#">Celulares, Tablets e Acessórios</a></li>
                            <li><a href="#">Câmeras e Acessórios</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Mais Departamentos</a>
                        <ul>
                            <li><a href="#">Petshop</a></li>
                            <li><a href="#">Produtos Regionais</a></li>
                            <li><a href="#">Brinquedos e Jogos</a></li>
                            <li><a href="#">Livros</a></li>
                            <li><a href="#">Música e Hobbies</a></li>
                            <li><a href="#">Bebês</a></li>
                            <li><a href="#">Alimentos e Bebidas</a></li>
                            <li><a href="#">Agro e Indústria</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Casa</a>
                        <ul>
                            <li><a href="#">Casa, Jardim e Limpeza</a></li>
                            <li><a href="#">Móveis e Decoração</a></li>
                            <li><a href="#">Construção</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Eletronicos</a>
                        <ul>
                            <li><a href="#">TV e Vídeo</a></li>
                            <li><a href="#">Informática</a></li>
                            <li><a href="#">Videogame</a></li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <a href="#">Esportes</a>
                        <ul>
                            <li><a href="#">Artigos esportivos</a></li>
                            <li><a href="#">Fitness</a></li>
                            <li><a href="#">Acessorios</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuComponent;