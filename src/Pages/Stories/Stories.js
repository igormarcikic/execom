import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Context';
import StoryDetails from '../StoryDetails/StoryDetails';
import { setStories, loading } from './../../Context/actions';
import debounce from 'lodash.debounce';
import * as API from './../../API';
import * as styles from './Stories.module.scss';

const Posts = () => {
    const {state, dispatch} = useContext(Context);
    let [scrollStart, setScrollStart] = useState(6);
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

    // Variable which is showing loading/data
    let isLoading = `Stories are loading...`;

    if(state.stories.length > 0) {
        isLoading = state.stories.map(story => (
            <StoryDetails story={story} key={story.id}/>
        ))
        localStorage.setItem('stories', JSON.stringify(state.stories));
    }

    // Infinite scroll function
    window.onscroll = debounce(() => {
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(state.stories.length < state.IDs.length) {
                dispatch(loading())
                setScrollStart(scrollStart+6);
                fetchStories([...state.IDs].splice(scrollStart, 6))
            }
        }
    }, 100)

    return (
        <div className={styles.Posts}>
            {isLoading}
            {state.loading ? <h2>More stories loading...</h2> : null}
        </div>
    )
}

export default Posts;
