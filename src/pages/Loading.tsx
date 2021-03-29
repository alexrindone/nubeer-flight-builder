import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonLoading
} from '@ionic/react';
import { DefaultContext } from '../DefaultContext';
import { RouteComponentProps } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import StorageService from '../services/StorageService';

const Loading: React.FC<RouteComponentProps> = ({ history }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { setSelected } = useContext(DefaultContext)

    useEffect(() => {
        const initialize = async () => {
            const res = await StorageService.getInstance().getData('selected')
            .catch(e => console.log(e.message))
            if (res) {
                setSelected(res)
            }
            setLoading(false)
        }

        initialize()
    }, [setLoading, setSelected])

    useEffect(() => {
        if (!loading) {
            history.push('/home')
        }
    }, [loading, history])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Nubeer Flight Builder
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading 
                    isOpen={loading}
                    message={'Loading preferences...'}
                />
            </IonContent>
        </IonPage>
    )
}

export default Loading;