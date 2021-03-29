import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import Beer from './interfaces/Beer';

const initialState = {
    selected: new Map([
      [1, {} as Beer],
      [2, {} as Beer],
      [3, {} as Beer],
      [4, {} as Beer],
    ]),
    setSelected: () => null
  }

type initialStateType = {
    selected: Map<number, Beer>,
    setSelected: Dispatch<SetStateAction<Map<number, Beer>>>
}

export const DefaultContext = createContext<initialStateType>(initialState);

export const DefaultContextProvider: React.FC = ({ children }) => {
    const [selected, setSelected ] =  useState<Map<number, Beer>>(initialState.selected);

    let state = { 
        selected, 
        setSelected 
    };

    return <DefaultContext.Provider value={state}>{children}</DefaultContext.Provider>
}

export default DefaultContext;