export const GET_IDS = 'GET_IDS';
export const GET_STORIES = 'GET_STORIES';

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