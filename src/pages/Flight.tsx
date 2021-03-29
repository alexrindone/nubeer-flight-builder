import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle,
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonText,
    IonCol,
    IonRow
} from '@ionic/react';
import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { DefaultContext } from '../DefaultContext';
import Beer from '../interfaces/Beer';
import FlightContainer from '../components/FlightContainer';
import FlightChalkboard from '../components/FlightChalkboard';
import getImageUrl from '../utils/getImageUrl';
import BeerImage from '../components/BeerImage';

const Flight: React.FC<RouteComponentProps> = () => {
    const { selected } = useContext(DefaultContext);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        My Flight
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <FlightContainer>
                    {[...selected].map((value: [key: number, beer: Beer]) => {
                        const [key, beer] = value
                        return (
                            <IonRow key={key}>
                                <IonCol className='ion-align-self-center'>
                                    <IonText class='chalk-txt'>
                                        <p>{beer.name}</p>
                                        </IonText>
                                    <IonText class='chalk-txt'>
                                        <p className='txt-small'>{beer.style}, abv. {beer.abv}</p>
                                    </IonText>
                                </IonCol>
                                <IonCol size={'4'} className='ion-align-self-center'>
                                    <BeerImage url={getImageUrl(beer.style)} size='large' />
                                </IonCol>
                            </IonRow>
                        )
                    })}
                    <FlightChalkboard />
                </FlightContainer>
            </IonContent>
        </IonPage>
    )
}

export default Flight;
