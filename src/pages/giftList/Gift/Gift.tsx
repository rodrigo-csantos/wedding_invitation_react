import './gift.css'
import Dialog from "../Dialog"
import { GiftsProps } from "../../../interfaces/interface"
import { useRef } from 'react'

function Gift ({imgSrc, textContent, variant, linkHref, idGift, selectedGift}: GiftsProps): JSX.Element {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    
    const handleOpenModal = () => {
        dialogRef.current?.showModal(); 
    };
    
    const handleCloseModal = () => {
        dialogRef.current?.close(); 
    };

    return (
        <>
            <li>
                <img className="gift-image" src={imgSrc} alt={textContent} />
                <span className={selectedGift ? 'selected-gift' : undefined}>{textContent}</span>
                {!selectedGift && (<button onClick={handleOpenModal} className="select">Selecionar</button>)}
                <Dialog ref={dialogRef} imgSrc={imgSrc} variant={variant} linkHref={linkHref} onClose={handleCloseModal} idGift={idGift}/>
            </li>
        </>
    )
}

export default Gift