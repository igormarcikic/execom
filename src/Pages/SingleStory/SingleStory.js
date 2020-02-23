import React from 'react';

const SingleStory = (props) => {
    return (
        <>
        {props.match.params.id}
        </>
    )
}

export default SingleStory;