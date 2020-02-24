import React, { createContext, useReducer, useEffect, useState } from 'react';
import reducer from './reducer';
import * as API from './../API';
import { setIDs, setStories } from './actions';

export const Context = createContext();
const initialState = {
    IDs: [],
    stories: [],
    comments: []
}

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let [scrollState, setScrollState] = useState(10)
    console.log(state);

    const infiniteScroll = () => {
        if((window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
            if(scrollState <= 300) {
                setScrollState(scrollState+10)
            }
        }
    }
    window.addEventListener('scroll', infiniteScroll)

    // Pull top stories IDs
    useEffect(()=>{
        const fetchIDs = async (URL) => {
            const res = await fetch(URL);
            const data = await res.json()
            dispatch(setIDs(data.splice(0, scrollState)));
        }
        fetchIDs(API.topStories);

    }, [scrollState])

    // Pull stories data using the IDs
    useEffect(()=>{
        const fetchStories = async (IDs) => {
            const allStories = [];
            for(const ID of IDs) {
                const res = await fetch(`${API.singleStory+ID}.json`);
                const data = await res.json();
                allStories.push(data);
            }
            dispatch(setStories(allStories))
        }
        fetchStories(state.IDs)
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