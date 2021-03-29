import './BeerItem.scss';
import { IonText, IonRow, IonCol } from '@ionic/react';
import Beer from '../interfaces/Beer';

interface BeerItemProps {
    beer: Beer,
    selected?: boolean,
}

const BeerItem: React.FC<BeerItemProps> = ({ beer, selected, children }) => {
    return (
        <>
            <IonRow className={`${selected ? 'selected' : ''}`}>
                <IonCol>
                    <IonRow>
                        <IonCol size='3'>
                            { children }
                        </IonCol>
                        <IonCol>
                            <IonText color='brown' className='name'>
                                <p className='name'>{beer.name}</p>
                            </IonText>
                            <IonText color='brown' className='style'>
                                <p className='style'>{beer.style}</p>
                            </IonText>
                            <IonText color='brown' className='brewery'>
                                <p className='brewery'>{beer.brewery.name}</p>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size='2.1' className='ion-align-self-center'>
                    <IonText color='brown' className='abv'>
                        <p className='abv'>abv. {beer.abv}</p>
                    </IonText>
                </IonCol>
            </IonRow>
        </>
    )
}

export default BeerItem;