import * as actionType from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case actionType.GET_IDS:
            return {
                ...state,
                IDs: action.payload
            }
    }
}

export default reducer;