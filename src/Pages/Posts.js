import React, { useContext } from 'react';
import { Context } from './../Context/Context';

const Posts = () => {
    const poruka = useContext(Context);
    return (
        <>
            {poruka}
        </>
    )
}

export default Posts;