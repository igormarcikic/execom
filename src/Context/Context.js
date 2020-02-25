import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import * as API from './../API';
import { setIDs } from './actions';

export const Context = createContext();
const initialState = {
    IDs: [],
    stories: [],
    comments: [],
    loading: false
}

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Pull top stories IDs
    useEffect(()=>{
        const fetchIDs = async (URL) => {
            const res = await fetch(URL);
            const data = await res.json()
            dispatch(setIDs(data));
        }
        fetchIDs(API.topStories);
    }, [])

    

    

    return (
        <>
            <Context.Provider value={{state, dispatch}}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default Provider;