import './cardFront.css'
import { stateProp } from '../../../interfaces/interface'

function CardFront ({ state }: stateProp): JSX.Element {
    return (
        <>
            <div className={state? 'Close' : 'Open'} id="cardFront">
                <div className="imgLogo">
                    <img className="logoKR" src="/rodrigo_karina-brasao.png" alt="Brasão Rodrigo e Karina" />
                </div>
            </div>
        </>
    )
}

export default CardFront