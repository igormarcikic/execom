export const GET_IDS = 'GET_IDS';

export const setIDs = data => {
    return {
        type: GET_IDS,
        payload: data.splice(0,10)
    }
}