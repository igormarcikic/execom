import React, { useState } from 'react';
import * as styles from './SingleStory.module.scss';
import * as API from './../../API';

const SingleStory = (props) => {
    const stories = JSON.parse(localStorage.getItem('stories'));
    const [story] = stories.filter(story => story.id === parseFloat(props.match.params.id));

    // State for showing/hiding comments
    let [showState, setShowState] = useState(false);
    
    // State for comments fetched
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        setShowState(showState = !showState);
        if(showState) {
            if(comments.length === 0) {
            const allComments = [];
            for(const ID of story.kids) {
                const res = await fetch(`${API.singleComment+ID}.json`);
                const data = await res.json();
                allComments.push(data)
            }
            setComments(allComments)
            }
        }
    }

    let isLoading = 'Comments are loading...'
    if(comments.length > 0) {
        isLoading = comments.map((comm, index) => (
            <div key={comm.id}>
                <hr />
                <p>Comment <strong>{index+1}</strong>:</p>
                <p dangerouslySetInnerHTML={{__html: comm.text}} />
            </div>
        ))
    }
    
    
    return (
        <div className={styles.Story}>
            <h2>{story.title}</h2>
            <p>Story by: <strong>{story.by}</strong></p>
            <p>Score: <strong>{story.score}</strong></p>
            <button onClick={() => fetchComments() }>Comments: ({story.kids.length})</button>
            {showState ? isLoading : null}
        </div>
    )
}

export default SingleStory;