import './cardFront.css'

interface props {
    state: string
}

function CardFront (props: props): JSX.Element {
    return (
        <>
            <div className={props.state} id="cardFront">
                <div className="imgLogo">
                    <img className="logoKR" src="/rodrigo_karina-brasao.png" alt="Brasão Rodrigo e Karina" />
                </div>
            </div>
        </>
    )
}

export default CardFront