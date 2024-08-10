import './button.css'

interface props {
    link: string
    img1: string
    img2: string
    alt1: string
    alt2: string
    showComponent?: boolean
}

function Button ({ img1, img2, alt1, alt2, showComponent}: props): JSX.Element {
    return (
        <> 
            {showComponent && (<div className="img-back">
                <div id='bts'>
                    <img className="imgBk" src={img1} alt={alt1} />
                    <img className="imgLinks" src={img2} alt={alt2} />    
                </div>                
            </div>)}
        </>
    )
}

export default Button