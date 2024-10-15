import './dialog.css'
import { DialogProps } from '../../../interfaces/interface'
import { forwardRef, useState } from 'react'

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ variant, imgSrc, linkHref, onClose, idGift}, dialogRef) => {
    const [guestName, setGuestName] = useState<string>('')
    const [showTag, setShowTag] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
   
    const handleSelectGift = async (idGift: number | undefined) => {
        if (guestName.trim() === '') {
            setShowTag(true)
            setTimeout(() => {
                setShowTag(false)
            }, 2500)
            return
        } 

        setIsSubmitting(true)

        try {

            const requestBody = {
                giftGiver: guestName
            }

            const response = await fetch(`https://api.rodrigoekarina.com.br/select/${idGift}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody) 
            })

            if (!response.ok) {
                throw new Error('Erro ao selecionar presente');
            }

            const selectedGift = await response.json();
            console.log('Presente selecionado com sucesso:', selectedGift);

        } catch (error) {
            console.error('Erro ao selecionar presente:', error);
            return null
        } finally {
            setIsSubmitting(false) 
            window.location.reload()
        }
    }

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
                    <input className='gift-input' type='text' placeholder='Seu nome aqui' value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}/>
                    <br />
                    {showTag && <p className="pInvalid">Por favor, insira seu nome!</p>}
                    <button className='confirm-button' onClick={() => handleSelectGift(idGift)} disabled={isSubmitting} >
                    Confirmar presente
                    </button>
                    <button className='cancel-button' onClick={() => { onClose(); setGuestName('');}} >Cancelar</button>
                </>
            )}
        </dialog>
    )
})

export default Dialog