import './catalogo.css'
import Background from '../../assets/background.png'
import Artesanato from '../../assets/artesanato.svg'

function catalogo() {

    return (
        <div>
            <div className="catalogo">
                <img src={Background} alt="Background" className="background" />
                <p className='desc'>Descontos cliente <strong>Unimed Natal</strong></p>
                <div className='categorys'>
                    <img src={Artesanato} alt="Artesanato" className="artesanato" />
                    <p className='txt1'>Garrafa de areia colorida</p>
                </div>
                <div className='categorys'>
                    <img src={Artesanato} alt="Artesanato" className="artesanato" />
                    <p className='txt1'>Garrafa de areia colorida</p>
                </div>
                <div className='categorys'>
                    <img src={Artesanato} alt="Artesanato" className="artesanato" />
                    <p className='txt1'>Garrafa de areia colorida</p>
                </div>
                <div className='categorys'>
                    <img src={Artesanato} alt="Artesanato" className="artesanato" />
                    <p className='txt1'>Garrafa de areia colorida</p>
                </div>
                <div className='categorys'>
                    <img src={Artesanato} alt="Artesanato" className="artesanato" />
                    <p className='txt1'>Garrafa de areia colorida</p>
                </div>
            </div>
        </div>
    );
}

export default catalogo;