import './OrderButton.scss';
import { IonButton } from '@ionic/react';

interface OrderButtonProps {
    text: string;
    disabled: boolean;
    onClick: (e: any) => void
}

const OrderButton: React.FC<OrderButtonProps> = ({ text, disabled, onClick }) => {
    return (
        <IonButton disabled={disabled} onClick={onClick}>{text}</IonButton>
    )
}

export default OrderButton;