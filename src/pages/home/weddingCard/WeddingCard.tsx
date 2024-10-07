import CardFront from "../cardFront"
import CardInside from "../cardInside"
import './weddingCard.css'
import { stateProp } from "../../../interfaces/interface"



function WeddingCard ({ state }: stateProp): JSX.Element {
    return (
       <div className="weddingCard">
            <CardFront state={state}/>
            <CardInside/>
       </div>
    )
}

export default WeddingCard