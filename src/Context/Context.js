import React, { createContext, useReducer, useEffect } from 'react';

export const Context = createContext();

const Provider = props => {
    return (
        <>
            <Context.Provider value={'Hii'}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default Provider;