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
    inputValue?: string; 
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirm?: () => void;
  }

export interface GiftsProps {
    imgSrc: string;
    textContent: string
    variant: "A" | "B";
    linkHref?: string;
    inputValue?: string; 
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirm?: () => void;
}