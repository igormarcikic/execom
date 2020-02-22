import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import * as API from './../API';
import { setIDs } from './actions';

export const Context = createContext();
const initialState = {
    IDs: []
}

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

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
            <Context.Provider value={'Hii'}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default Provider;