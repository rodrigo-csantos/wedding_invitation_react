import WeddingCard from "../../components/weddingCard"
import Countdown from "../../components/countdown/Countdown"
import { useState } from "react"
import './home.css'

function Home (): JSX.Element  {
    const [opening, setOpening] = useState('Open')
    const [show, setShow] = useState(false)
    
    return (
        <>
           <WeddingCard state={opening}/>
           <div className="button">
                <button onClick={() => {opening === 'Close' ? (setOpening('Open'), setShow(false)) : (setOpening('Close'), setShow(true))}} id="botao" 
                className="click">{opening}</button>
           </div>
           <Countdown showComponent={show} />
        </>     
    )
}

export default Home