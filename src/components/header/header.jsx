import './header.css'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search-icon.svg'
import Pin from '../../assets/pin-icon.svg'
import Person from '../../assets/person-icon.svg'
import Cart from '../../assets/cart-icon.svg'

function header() {
return (
    <div>
        <div className='header'>
            <a href='#home'>
                <img src={Logo} alt="Logo" className="logo" />
            </a>
            <div className="search">
                <input type="text" placeholder="O que você gostaria hoje?" className="search-bar"/>
                <button type="submit" className="search-button">
                    <img src={Search} alt="Search" className="search-icon" />
                </button>
            </div>
            <div className="box-local">
                <a href='#pin'>
                    <img src={Pin} alt="Local" className="pin-icon" />
                    <p className='local-text'><strong>Onde</strong><br/>Você está?</p>
                </a>
            </div>
            <div className="box-login">
                <a href='#user'>
                    <img src={Person} alt="Usuário" className="person-icon" />
                    <p className='login-text'><strong>Faça login</strong><br/>ou cadastre-se</p>
                </a>
            </div>
            <a href='#cart'>
                <img src={Cart} alt="Carrinho" className="cart-icon" />
            </a>
        </div>
        <div className="header-menu">
            <a>Departamentos</a>
            <a>Descontos Cliente Unimed Natal</a>
            <a>Venda no Uniclube</a>
        </div>
    </div>
)
}

export default header