import CardFront from "../cardFront"
import CardInside from "../cardInside"
import './weddingCard.css'

interface props {
    state: string
}

function WeddingCard ({ state }: props): JSX.Element {
    return (
       <div className="weddingCard">
            <CardFront state={state}/>
            <CardInside/>
       </div>
    )
}

export default WeddingCard