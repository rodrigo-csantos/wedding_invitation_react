import CardFront from "../cardFront"
import CardInside from "../cardInside"
import './weddingCard.css'

interface props {
    state: string
}

function WeddingCard (props: props): JSX.Element {
    return (
       <div className="weddingCard">
            <CardFront state={props.state}/>
            <CardInside/>
       </div>
    )
}

export default WeddingCard