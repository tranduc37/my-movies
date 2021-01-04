import React, { createContext, useReducer } from 'react';
import {loadingRecuder} from '../recuder/loadingRecuder';

export const LoadingContext = createContext();
const initialState = {
  data: {},
  loading: false
}

export const LoadingContextProvider = (props) => {
  const [state, dispatch] = useReducer(loadingRecuder, initialState);

  return (
    <LoadingContext.Provider value={[state, dispatch]}>
      {props.children}
    </LoadingContext.Provider>
  );
}