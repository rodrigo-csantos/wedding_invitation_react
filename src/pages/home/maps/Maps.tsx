import { useRef } from 'react'
import './maps.css'

interface prop {
    showComponent: boolean
}

function Maps ({showComponent}: prop): JSX.Element {

    const iframeProps = {
        style: {border: 0},
        allowFullScreen: true, 
        loading: "lazy" as "lazy",
        referrerPolicy: "no-referrer-when-downgrade" as "no-referrer-when-downgrade",
    }

    const textRef = useRef<HTMLHeadingElement>(null)

    const copiarTexto = () => {
        if (textRef.current) {
            const texto = textRef.current.innerText
            navigator.clipboard.writeText(texto)
            .then(() => {
                alert(`Texto copiado: ${texto}`)
            })
            .catch((err) => {
                console.error(`Erro ao copiar o texto: ${err}`)
            })
        } else {
            console.log('erro');
        }
    }

    return (
        <>
            {showComponent && (<div className="mapsContainer">
                <div className="address">
                    <h3 ref={textRef} id="textocopy">
                        Restaurante Di Liana <br/>
                        R. Macapá, 314 - Ondina, Salvador - BA, 40170-150
                    </h3>
                    <button className="buttonCopy" onClick={copiarTexto} title="Copiar"></button>
                </div>
                <div id="maps" className="mapBox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4326328240613!2d-38.51061262483964!3d-13.008098760544415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036723ad21f1%3A0xb389268f6893f751!2sRestaurante%20Di%20Liana!5e0!3m2!1spt-BR!2sbr!4v1705611737770!5m2!1spt-BR!2sbr" style={iframeProps.style} allowFullScreen={iframeProps.allowFullScreen} loading={iframeProps.loading} referrerPolicy={iframeProps.referrerPolicy}></iframe>
                </div>
            </div>)}
        </>
    )
}

export default Maps