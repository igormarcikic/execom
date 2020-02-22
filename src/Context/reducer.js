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
    }
}

export default reducer;