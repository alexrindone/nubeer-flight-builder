import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonList } from '@ionic/react';
import Header from '../components/Header';
import BeerPlaceholder from '../components/BeerPlaceholder';
import Menu from '../components/Menu';
import Search from '../components/Search';
import './Home.scss';
import React, { useEffect, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BeerItem from '../components/BeerItem';
import OrderButton from '../components/OrderButton';
import Spacer from '../components/Spacer';
import Beer from '../interfaces/Beer';
import BeerImage from '../components/BeerImage';
import searchBeers from '../services/BeerAPI'
import getImageUrl from '../utils/getImageUrl';
import { DefaultContext } from '../DefaultContext';
import StorageService from '../services/StorageService';
import { findEmptyKey, mapContains, removeSelected } from '../utils/mapHelpers';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { selected, setSelected } = useContext(DefaultContext);
  let [readyToOrder, setReadyToOrder] = useState<boolean>(false);
  let [menuBeers, setMenuBeers] = useState<Beer[]>([]);
  let [ text, setText ] = useState<string>('');

  useEffect(() => {   
    let hasLoaded = false;

    if (!hasLoaded) {
      hasLoaded = true
      searchBeers({ search: text }).then((result: any) => {
        setMenuBeers(result.payload.data)
      })
    }
  }, [text, setMenuBeers])

  useEffect(() => {
    !findEmptyKey(selected) ? setReadyToOrder(true) : setReadyToOrder(false)
  }, [selected, setReadyToOrder])

  useEffect(() => {
    const store = async () => {
      await StorageService.getInstance().setData('selected', selected)
      .catch(e => console.log(e.message));
    }
    store()
  }, [selected])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nubeer Flight Builder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
        fullscreen
      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Nubeer Flight Builder</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Header>
          <IonRow className='ion-justify-content-evenly'>
            {[...selected].map((value: [key: number, beer: Beer]) => {
              const [key, beer] = value
              return (
                <IonCol key={key}>
                  <BeerPlaceholder onClick={e => {
                    let newState = removeSelected(key, selected)
                    setSelected(newState)
                  }} 
                  additionalClass={`green-${(key).toString()}`}>
                    {'id' in beer && <BeerImage url={getImageUrl(beer.style)} />}
                  </BeerPlaceholder>
                </IonCol>
              )
            })}
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <Spacer height={5} />
            <OrderButton text={'Order Flight'} disabled={!readyToOrder} onClick={e => {
              e.preventDefault();
              history.push('/flight')
            }} />
          </IonRow>
          <Menu title={'MENU'} />
          <Search placeholder={'Search'} searchState={{text, setText}} />
        </Header>
        <IonList className='bg-override'>
          {menuBeers.map((beer: Beer )=> {
            return (
              <BeerItem key={beer.id} beer={beer} selected={mapContains(beer, selected)}>
                <BeerImage onClick={e => {
                  setSelected((prevState) => {
                    let found = mapContains(beer, selected)
                    if (!found) {
                      // find an empty key
                      let key = findEmptyKey(selected)
                      if (typeof key === 'number') {
                        let newState = new Map<number, Beer>([...prevState])
                        newState.set(key, beer)
                        return newState
                      }
                    }
                    return prevState
                  })
                }} url={getImageUrl(beer.style)} />
              </BeerItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
