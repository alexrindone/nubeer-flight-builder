import './Search.scss';
import React, { Dispatch, SetStateAction } from 'react';
import { IonItem, IonLabel, IonIcon, IonInput } from '@ionic/react'

interface SearchProps {
    placeholder: string;
    searchState: {
        text: string,
        setText: Dispatch<SetStateAction<string>>
    }
}

const Search: React.FC<SearchProps> = ({ placeholder, searchState }) => {

    const { text, setText } = searchState;

    return (
        <div className='search-container'>
            <IonItem>
                <IonLabel>
                    <IonIcon name='search-outline'></IonIcon>
                </IonLabel>
                <IonInput
                    autocorrect='on'
                    value={text}
                    inputmode='search' 
                    pattern='search'
                    onIonChange={e => setText(e.detail.value!)}
                    debounce={500}
                    placeholder={placeholder}>
                </IonInput>
            </IonItem>
        </div>
    )
}

export default Search
