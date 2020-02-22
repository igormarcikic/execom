import React, { useContext, useState } from 'react';
import { Context } from './../../Context/Context';
import * as API from './../../API';
import { setComments } from './../../Context/actions';

const Comments = ({comments}) => {
    const {state, dispatch} = useContext(Context);

    let [showState, setShowState] = useState(false);

    const fetchComments = async () => {
        setShowState(showState = !showState);

        const allComments = [];
        for(const ID of comments) {
            const res = await fetch(`${API.singleComment+ID}.json`);
            const data = await res.json();
            allComments.push(data)
        }
        dispatch(setComments(allComments))
    }

    let isLoading = 'Loading comments...';
    if(state.comments.length > 0) {
        isLoading = state.comments.map(comm => (
            <div key={comm.id}>
                <li>{comm.text}</li>
            </div>
        ))
    }

    return (
        <>
            <button onClick={() => fetchComments() }>Comments: ({comments.length})</button>
            {showState ? isLoading : null}
        </>
    )
}

export default Comments;