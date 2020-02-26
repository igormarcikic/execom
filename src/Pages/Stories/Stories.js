import React, { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import StoryDetails from '../StoryDetails/StoryDetails';
import { setStories, loading } from './../../Context/actions';
import * as API from './../../API';
import * as styles from './Stories.module.scss';

const Posts = () => {
    const {state, dispatch} = useContext(Context);
    let [scrollStart, setScrollStart] = useState(10);
    console.log(state)

    // Function to fetch the next 6 stories
    const fetchStories = async (IDs) => {
        const allStories = [];
        for(const ID of IDs) {
            const res = await fetch(`${API.singleStory+ID}.json`);
            const data = await res.json();
            allStories.push(data);
        }
        dispatch(setStories(allStories))
    }

    let mapStories;
    if(state.stories.length > 0) {
        mapStories = state.stories.map(story => (
            <StoryDetails story={story} key={story.id}/>
        ))
        localStorage.setItem('stories', JSON.stringify(state.stories));
    }

    // Infinite scroll function
    window.onscroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !state.loading) {
            if(state.stories.length < state.IDs.length) {
                dispatch(loading())
                setScrollStart(scrollStart+10);
                fetchStories([...state.IDs].splice(scrollStart, 10))
            }
        }
    }

    return (
        <div className={styles.Posts}>
            {mapStories}
            {state.loading ? <h3>Stories loading...</h3> : null}
        </div>
    )
}

export default Posts;
