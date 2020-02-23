import React, { useContext, useState } from 'react';
import { Context } from './../../Context/Context';
import * as API from './../../API';
import { setComments, resetComments } from './../../Context/actions';

const Comments = ({comments}) => {
    const {state, dispatch} = useContext(Context);

    // State for showing/hiding comments
    let [showState, setShowState] = useState(false);

    // Pull comments based on the id passed from the props
    const fetchComments = async () => {
        setShowState(showState = !showState);
        // Dispatch to reset the comments state
        dispatch(resetComments())

        const allComments = [];
        for(const ID of comments) {
            const res = await fetch(`${API.singleComment+ID}.json`);
            const data = await res.json();
            allComments.push(data)
        }
        dispatch(setComments(allComments))
    }

    // Variable which is showing loading/data 
    let isLoading = 'Loading comments...';
    if(state.comments.length > 0) {
        isLoading = state.comments.map((comm, index) => (
            <div key={comm.id}>
                <hr />
                <p>Comment <strong>{index+1}</strong>:</p>
                <p dangerouslySetInnerHTML={{__html: comm.text}} />
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