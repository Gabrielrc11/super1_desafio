import './headerMenu.css'
import Menu from '../menu/menu.jsx';

function headerMenu() {

    return (
        <div>
            <div className="header-menu">
                <Menu />
                <a className="link-center">Descontos Cliente Unimed Natal</a>
                <a className="link-end">Venda no Uniclube</a>
            </div>
        </div>
    );
}

export default headerMenu;