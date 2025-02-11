import './header.css'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search-icon.svg'
import Pin from '../../assets/pin-icon.svg'
import Person from '../../assets/person-icon.svg'
import Cart from '../../assets/cart-icon.svg'

function header() {
return (
    <div className='header'>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="search">
            <input type="text" placeholder="O que você gostaria hoje?" className="search-bar"/>
            <button type="submit" className="search-button">
                <img src={Search} alt="Search" className="search-icon" />
            </button>
        </div>
        <div className="box-local">
            <img src={Pin} alt="Local" className="pin-icon" />
            <p className='local-text'><strong>Onde</strong><br/>Você está?</p>
        </div>
        <div className="box-login">
            <img src={Person} alt="Usuário" className="person-icon" />
            <p className='login-text'><strong>Faça login</strong><br/>ou cadastre-se</p>
        </div>
        <img src={Cart} alt="Carrinho" className="cart-icon" />
    </div>
)
}

export default header