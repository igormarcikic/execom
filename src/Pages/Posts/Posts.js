import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import StoryDetails from '../StoryDetails/StoryDetails';
import * as styles from './Posts.module.scss';

const Posts = () => {
    const {state, dispatch} = useContext(Context);

    let isLoading = 'Stories are loading...';

    if(state.stories.length > 0) {
        isLoading = state.stories.map(story => (
            <StoryDetails story={story} key={story.id}/>
        ))
    }

    return (
        <div className={styles.Posts}>
            {isLoading}
        </div>
    )
}

export default Posts;