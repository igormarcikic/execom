import * as actionType from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case actionType.GET_IDS:
            return {
                ...state,
                IDs: action.payload
            }
        case actionType.GET_STORIES:
            return {
                ...state,
                stories: action.payload
            }
        case actionType.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }
}

export default reducer;