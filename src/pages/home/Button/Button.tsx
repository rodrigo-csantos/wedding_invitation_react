import './button.css'
import { imagesProps } from '../../../interfaces/interface'

function Button ({ img1, img2, alt1, alt2, showComponent}: imagesProps): JSX.Element {

    return (
        <> 
            {showComponent && (<div className="img-back">
                <button id='bts'>
                    <img className="imgBk" src={img1} alt={alt1} />
                    <img className="imgLinks" src={img2} alt={alt2} />
                </button>               
            </div>)}
        </>
    )
}

export default Button