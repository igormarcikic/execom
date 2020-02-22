import React from 'react';
import * as styles from './StoryDetails.module.scss';
import Comments from './../Comments/Comments';

const StoryDetails = ({story}) => {
    return story.kids? (
        <div className={styles.Story}> 
            <div className={styles.inner}>
                <h2>{story.title}</h2>
                <hr />
                <p>Story by: <strong>{story.by}</strong></p>
                <p>Score: <strong>{story.score}</strong></p>
            </div>
            <Comments comments={story.kids} />
        </div>
    ) : (
        <div className={styles.Story}> 
            <div className={styles.inner}>
                <h2>{story.title}</h2>
                <hr />
                <p>Story by: <strong>{story.by}</strong></p>
                <p>Score: <strong>{story.score}</strong></p>
            </div>
            <p><strong>The story has no comments yet.</strong></p>
        </div>
    )
}

export default StoryDetails;