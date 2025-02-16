import './App.css'
import Header from './components/header/header.jsx'
import HeaderMenu from './components/headerMenu/headerMenu.jsx'
import Banner1 from './assets/banner1.svg'
import Rectangle from './assets/rectangle.svg'
import Book from './assets/book.svg'
import Servico from './assets/servico.svg'
import Saude from './assets/saude.svg'
import Roupa from './assets/roupa.svg'
import Movel from  './assets/movel.svg'
import Bebe from './assets/bebe.svg'
import Esporte from './assets/esporte.svg'
import Beleza from './assets/beleza.svg'
import Chave from './assets/chave.svg'
import Oculos from './assets/oculos.svg'
import { useState, useEffect } from 'react';
import Banner2 from './assets/banner2.svg'; // Import the second banner

  function App() {
    const [currentBanner, setCurrentBanner] = useState(Banner1);
    const [showRectangles, setShowRectangles] = useState(false);

    const handleRectangleClick = () => {
      setCurrentBanner(currentBanner === Banner1 ? Banner2 : Banner1);
    };
    useEffect(() => {
      const interval = setInterval(() => {
      setCurrentBanner(prevBanner => prevBanner === Banner1 ? Banner2 : Banner1);
      }, 5000);

      return () => clearInterval(interval);
    }, []);
    return (
      <div>
        <Header className="header"/>
        <HeaderMenu className="header-menu"/>
          <div className="banner" onMouseEnter={() => setShowRectangles(true)} onMouseLeave={() => setShowRectangles(false)}>
            {showRectangles && (
            <>
              <img src={Rectangle} alt="Rectangle" className="rectangle1" onClick={handleRectangleClick} />
              <img src={Rectangle} alt="Rectangle" className="rectangle2" onClick={handleRectangleClick} />
            </>
            )}
            <img src={currentBanner} alt="Banner" className="banner1" />
          </div>
          <div className="content">
            <div className='category'>
              <img src={Book} alt="Book" className="book" />
              <p>Arte, Papelaria e Armarinhos</p>
            </div>
            <div className='category'>
              <img src={Saude} alt="Book" className="book" />
              <p>Saúde</p>
            </div>
            <div className='category'>
              <img src={Roupa} alt="Book" className="book" />
              <p>Calçados, Roupas e Bolsas</p>
            </div>
            <div className='category'>
              <img src={Bebe} alt="Book" className="book" />
              <p>Bebês</p>
            </div>
            <div className='category'>
              <img src={Movel} alt="Book" className="book" />
              <p>Casa, Móveis e Decoração</p>
            </div>
            <div className='category'>
              <img src={Esporte} alt="Book" className="book" />
              <p>Esportes e Fitness</p>
            </div>
            <div className='category'>
              <img src={Beleza} alt="Book" className="book" />
              <p>Beleza e Cuidado Pessoal</p>
            </div>
            <div className='category'>
              <img src={Chave} alt="Book" className="book" />
              <p>Imóveis</p>
            </div>
            <div className='category'>
              <img src={Oculos} alt="Book" className="book" />
              <p>Óculos</p>
            </div>
            <div className='category'>
              <img src={Servico} alt="Book" className="book" />
              <p>Serviços</p>
            </div>
          </div>
      </div>
    );
  }

export default App