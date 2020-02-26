import React from 'react';
import * as styles from './StoryDetails.module.scss';
import Comments from './../Comments/Comments';
import { Link } from 'react-router-dom';

const StoryDetails = ({story}) => {
    return story.kids? (
        <div className={styles.Story}> 
            <div className={styles.inner}>
                <h2><Link target="_blank" to={`posts/${story.id}`}>{story.title}</Link></h2>
                <hr />
                <p>Story by: <strong>{story.by}</strong></p>
                <p>Score: <strong>{story.score}</strong></p>
            </div>
            <Comments comments={story.kids} />
        </div>
    ) : (
        <div className={styles.Story}> 
            <div className={styles.inner}>
                <h2><Link target="_blank" to={`posts/${story.id}`}>{story.title}</Link></h2>
                <hr />
                <p>Story by: <strong>{story.by}</strong></p>
                <p>Score: <strong>{story.score}</strong></p>
            </div>
            <p><strong>The story has no comments yet.</strong></p>
        </div>
    )
}

export default StoryDetails;