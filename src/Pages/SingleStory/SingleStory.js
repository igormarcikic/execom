import React from 'react';
import * as styles from './SingleStory.module.scss';

const SingleStory = (props) => {
    const stories = JSON.parse(localStorage.getItem('stories'));
    const [story] = stories.filter(story => story.id === parseFloat(props.match.params.id));
    console.log(story)
    
    return (
        <div className={styles.Story}>
            <h2>{story.title}</h2>
            <p>Story by: <strong>{story.by}</strong></p>
            <p>Score: <strong>{story.score}</strong></p>
            <button >Comments ({story.kids.length})</button>
        </div>
    )
}

export default SingleStory;