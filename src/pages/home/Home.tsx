import WeddingCard from "./weddingCard"
import Countdown from "./countdown"
import { useState, useEffect } from "react"
import './home.css'
import Button from "./Button"
import imagePaths from "../../assets/imagePaths"
import { Link } from "react-router-dom"
import Maps from "./maps"

function Home (): JSX.Element  {
    const [opening, setOpening] = useState(false) 

    function handleChangeHeight () {
        document.documentElement.classList.toggle('clicked')
        window.scrollTo(0, 0);
    }

    function handleScrollToMap(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        event.preventDefault()
        const element = document.getElementById('maps');
  
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', window.location.pathname);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('clicked', opening)
        }
    }, [opening])
    
    return (
        <>
           <WeddingCard state={opening}/>
           <div className="button">
                <button onClick={() => {
                    opening ? setOpening(false) : setOpening(true)
                }} id="botao" 
                className="click">{opening ? 'Close' : 'Open'}</button>
           </div>
           { opening && <div id="button-links">
                <a href="" onClick={handleScrollToMap}>
                    <Button img1={imagePaths.button1.img1} img2={imagePaths.button1.img2} alt1="Texto: Local da Recepção" alt2="ícone de localização" showComponent={opening}/>
                </a>

                <a href="https://wa.me/5571993232877?text=Eu%20confirmo%20presença%20no%20evento%20do%20ano!">
                    <Button img1={imagePaths.button2.img1} img2={imagePaths.button2.img2} alt1="Texto: Confirmar preseça" alt2="ícone do whatsapp" showComponent={opening}/>
                </a>
                
                < Link to={'/gifts'} onClick={handleChangeHeight}>
                    <Button img1={imagePaths.button3.img1} img2={imagePaths.button3.img2} alt1="Texto: Lista de presentes" alt2="ícone de presentes" showComponent={opening}/>
                </Link>
           </div>}
           <Countdown showComponent={opening} />
           <Maps showComponent={opening} />
        </>     
    )
}

export default Home