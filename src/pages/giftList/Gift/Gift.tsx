import './gift.css'
import Dialog from "../Dialog"
import { GiftsProps } from "../../../interfaces/interface"
import { useRef } from 'react'

function Gift ({imgSrc, textContent, variant, linkHref}: GiftsProps): JSX.Element {
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
                <span>{textContent}</span>
                <button onClick={handleOpenModal} className="select">Selecionar</button>
                <Dialog ref={dialogRef} imgSrc={imgSrc} variant={variant} linkHref={linkHref} onClose={handleCloseModal}/>
            </li>
        </>
    )
}

export default Gift

 // const dialogRef = useRef<HTMLDialogElement | null>(null)dialogRef

    // useImperativeHandle(giftRef, () => ({
    //     open: () => {
            // if (dialogRef.current) {
            //   dialogRef.current.showModal();
            // }
    //     },
    //     close: () => {
    //         if (dialogRef.current) {
    //           dialogRef.current.close();
    //         }
    //     },
    // }));