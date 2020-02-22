import React from 'react';
import * as styles from './StoryDetails.module.scss';

const StoryDetails = ({story}) => {
    return story.kids? (
        <div className={styles.Story}> 
            <div>
                <h2>{story.title}</h2>
                <p>Story by: {story.by}</p>
                <p>Score: {story.score}</p>
            </div>
            <button>{story.kids.length}</button>
        </div>
    ) : (
        <div className={styles.Story}> 
            <div>
                <h2>{story.title}</h2>
                <p>Story by: {story.by}</p>
                <p>Score: {story.score}</p>
            </div>
            <p>The story has no comments yet.</p>
        </div>
    )
}

export default StoryDetails;