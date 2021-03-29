import './BeerImage.scss';
import { IonImg } from '@ionic/react';

interface BeerImageProps {
    url: string,
    size?: string,
    onClick?: (e: any) => void
}

const BeerImage: React.FC<BeerImageProps> = ({ url, onClick, size }) => {

    const ASSETS_URL = `assets/style-icons/${url}`

    return (
        <>
            <IonImg onClick={onClick} src={ASSETS_URL} className={`${size ? size : ''}`}/>
        </>
    )
}

export default BeerImage;