import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import img11 from './11.jpg'
import img12 from './12.jpg'
import img13 from './13.jpg'
import img14 from './14.jpg'
import img15 from './15.jpg'
import img16 from './16.jpg'
import img17 from './17.jpg'
import img18 from './18.jpg'
import img19 from './19.jpg'
import img20 from './20.jpg'
import img21 from './21.jpg'
import img22 from './22.jpg'
import img23 from './23.jpg'
import img24 from './24.jpg'
import img25 from './25.jpg'
import img26 from './26.jpg'
import img27 from './27.jpg'
import img28 from './28.jpg'
import img29 from './29.jpg'
import img30 from './30.jpg'
import img31 from './31.jpg'
import img32 from './32.jpg'
import img33 from './33.jpg'
import img34 from './34.jpg'
import img35 from './35.jpg'
import img36 from './36.jpg'
import img37 from './37.jpg'
import img38 from './38.jpg'
import jantar from './jantar.jpg'
import passagem_aerea from './passagem_aerea.jpg'
import passeio_barco from './passeio_barco.jpg'
import passeio_ilhas from './passeio_ilhas.jpg'

export const giftImagesPaths = {
    imgPix: {
        jantar,
        passagem_aerea,
        passeio_barco,
        passeio_ilhas
    },
    imgGifts: {
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
    }
}

export function renderGift (idImage: number) {
    const imgGifts = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
    ]

    const resultImgGift = imgGifts.find((_gift, index) => index === idImage - 1)
    return resultImgGift
}