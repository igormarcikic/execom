export const GET_IDS = 'GET_IDS';
export const GET_STORIES = 'GET_STORIES';
export const GET_COMMENTS = 'GET_COMMENTS'; 
export const RESET_COMMENTS = 'RESET_COMMENTS';

export const setIDs = data => {
    return {
        type: GET_IDS,
        payload: data.splice(0,10)
    }
}

export const setStories = data => {
    return {
        type: GET_STORIES,
        payload: data
    }
}

export const setComments = data => {
    return {
        type: GET_COMMENTS,
        payload: data
    }
}

export const resetComments = () => {
    return {
        type: RESET_COMMENTS
    }
}