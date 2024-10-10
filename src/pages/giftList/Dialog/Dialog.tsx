import './dialog.css'
import { DialogProps } from '../../../interfaces/interface'

function Dialog ({isOpen, variant, imgSrc, linkHref, onClose, onConfirm, className}: DialogProps): JSX.Element | null{
    if (!isOpen) return null

    return (
        <dialog className={className} open={isOpen}>
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
}

export default Dialog