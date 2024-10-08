import WeddingCard from "./weddingCard"
import Countdown from "./countdown"
import { useState, useEffect } from "react"
import './home.css'
import Button from "./Button"
import imagePaths from "../../assets/imagePaths"
import { Link } from "react-router-dom"
import Maps from "./maps"

function Home (): JSX.Element  {
    const [opening, setOpening] = useState('Open')
    const [show, setShow] = useState(false)

    function handleChangeHeight () {
        document.documentElement.classList.toggle('clicked')
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
        document.documentElement.classList.toggle('clicked')
    }, [opening])
    
    return (
        <>
           <WeddingCard state={opening}/>
           <div className="button">
                <button onClick={() => {
                    opening === 'Close' ? (setOpening('Open'), setShow(false)) : (setOpening('Close'), setShow(true))
                }} id="botao" 
                className="click">{opening}</button>
           </div>
           <div id="button-links">
                <a href="" onClick={handleScrollToMap}>
                    <Button img1={imagePaths.button1.img1} img2={imagePaths.button1.img2} alt1="Texto: Local da Recepção" alt2="ícone de localização" showComponent={show}/>
                </a>

                <a href="https://wa.me/5571993232877?text=Eu%20confirmo%20presença%20no%20evento%20do%20ano!">
                    <Button img1={imagePaths.button2.img1} img2={imagePaths.button2.img2} alt1="Texto: Confirmar preseça" alt2="ícone do whatsapp" showComponent={show}/>
                </a>
                
                < Link to={'/gifts'} onClick={handleChangeHeight}>
                    <Button img1={imagePaths.button3.img1} img2={imagePaths.button3.img2} alt1="Texto: Lista de presentes" alt2="ícone de presentes" showComponent={show}/>
                </Link>
           </div>
           <Countdown showComponent={show} />
           <Maps showComponent={show} />
        </>     
    )
}

export default Home