import React from 'react';

const StoryDetails = ({story}) => {
    return story.kids? (
        <> 
            <h2>{story.title}</h2>
            <p>Story by: {story.by}</p>
            <p>Score: {story.score}</p>
            <button>{story.kids.length}</button>
        </>
    ) : (
        <> 
            <h2>{story.title}</h2>
            <p>Story by: {story.by}</p>
            <p>Score: {story.score}</p>
            <p>The story has no comments yet.</p>
        </>
    )
}

export default StoryDetails;