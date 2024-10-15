export interface imagesProps {
    img1: string
    img2: string
    alt1: string
    alt2: string
    showComponent?: boolean
}

export interface stateProp {
    state: string
}

export interface showProp {
    showComponent: boolean
}

export interface DialogProps {
    onClose: () => void;
    variant: "A" | "B"; 
    imgSrc?: string; 
    linkHref?: string; 
    idGift?: number
}

export interface GiftsProps {
    imgSrc: string | undefined;
    textContent: string
    variant: "A" | "B";
    linkHref?: string;
    idGift?: number
    selectedGift?: boolean
}

export interface giftListProps {
    giftGiver: string
    giftName: string
    idGift: number
    idImage: number
    selected: boolean
}