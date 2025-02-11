import './header.css'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search-icon.svg'

function header() {
return (
    <div className='header'>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="search">
            <input type="text" placeholder="Search..." className="search-bar"/>
            <button type="submit" className="search-button">
                <img src={Search} alt="Search" className="search-icon" />
            </button>
        </div>
    </div>
)
}

export default header