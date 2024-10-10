import './gift.css'
import Dialog from "../Dialog"
import { useState } from "react"
import { GiftsProps } from "../../../interfaces/interface"

function Gift ({imgSrc, textContent, variant, linkHref, className}: GiftsProps): JSX.Element {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false)

    return (
        <>
            <li>
                <img className="gift-image" src={imgSrc} alt={textContent} />
                <span>{textContent}</span>
                <button onClick={() => {setDialogOpen(true)}} className="select">Selecionar</button>
                <Dialog isOpen={dialogOpen} imgSrc={imgSrc} variant={variant} linkHref={linkHref} onClose={() => {setDialogOpen(false)}} className={className}/>
            </li>
        </>
    )
}

export default Gift