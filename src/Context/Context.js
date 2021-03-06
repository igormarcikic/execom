import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import * as API from './../API';
import { setIDs, setStories, loading } from './actions';

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

     // Pull stories data using the IDs
     useEffect(()=> {
        dispatch(loading())
        const fetchStories = async (IDs) => {
            const allStories = [];
            for(const ID of IDs) {
                const res = await fetch(`${API.singleStory+ID}.json`);
                const data = await res.json();
                allStories.push(data);
            }
            dispatch(setStories(allStories))
        }
        fetchStories([...state.IDs].splice(0, 10))
    }, [state.IDs])

    

    return (
        <>
            <Context.Provider value={{state, dispatch}}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default Provider;