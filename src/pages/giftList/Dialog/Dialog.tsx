import './dialog.css'
import { DialogProps } from '../../../interfaces/interface'
import { forwardRef } from 'react'

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ variant, imgSrc, linkHref, onClose, onConfirm}, dialogRef) => {
   
    return (
        <dialog className='gift-dialog' ref={dialogRef}>
            {variant === "A" && (
                <>
                    <img className='gift-image2' src={imgSrc} />
                    <a className='link-pix' href={linkHref} target='_blank'>
                        Clique aqui para contribuir (PIX)
                    </a>
                    <br />
                    <button className='select' onClick={onClose}>Fechar</button>
                </>
            )}
            {variant === 'B' && (
                <>
                    <input className='gift-input' type='text' placeholder='Seu nome aqui' />
                    <br />
                    <button className='confirm-button' onClick={onConfirm}>Confirmar presente</button>
                    <button className='cancel-button' onClick={onClose} >Cancelar</button>
                </>
            )}
        </dialog>
    )
})

export default Dialog