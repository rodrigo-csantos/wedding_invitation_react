import WeddingCard from "../../components/weddingCard"
import Countdown from "../../components/countdown/Countdown"
import { useState } from "react"
import './home.css'
import Button from "../../components/Button"
import imagePaths from "../../assets/imagePaths"

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
           <div id="button-links">
                <Button link="#maps" img1={imagePaths.button1.img1} img2={imagePaths.button1.img2} alt1="Texto: Local da Recepção" alt2="ícone de localização" showComponent={show}/>
                <Button link="https://wa.me/5571993232877?text=Eu%20confirmo%20presença%20no%20evento%20do%20ano!" img1={imagePaths.button2.img1} img2={imagePaths.button1.img2} alt1="Texto: Local da Recepção" alt2="ícone de localização" showComponent={show}/>
                <Button link="#maps" img1={imagePaths.button3.img1} img2={imagePaths.button1.img2} alt1="Texto: Local da Recepção" alt2="ícone de localização" showComponent={show}/>
           </div>
           <Countdown showComponent={show} />
        </>     
    )
}

export default Home