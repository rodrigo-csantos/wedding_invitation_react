import './gift.css'
import Dialog from "../Dialog"
import { GiftsProps } from "../../../interfaces/interface"
import { useRef } from 'react'

function Gift ({imgSrc, textContent, variant, linkHref}: GiftsProps): JSX.Element {
    const giftRef = useRef<{ open: () => void; close: () => void } | null>(null);
    
    const handleOpenModal = () => {
        giftRef.current?.open(); 
    };
    
    const handleCloseModal = () => {
        giftRef.current?.close(); 
    };

    return (
        <>
            <li>
                <img className="gift-image" src={imgSrc} alt={textContent} />
                <span>{textContent}</span>
                <button onClick={handleOpenModal} className="select">Selecionar</button>
                <Dialog ref={giftRef} imgSrc={imgSrc} variant={variant} linkHref={linkHref} onClose={handleCloseModal}/>
            </li>
        </>
    )
}

export default Gift