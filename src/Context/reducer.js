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
        case actionType.RESET_COMMENTS:
            return {
                ...state,
                comments: []
            }
        case actionType.LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;