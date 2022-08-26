import {INITIALIZED__SUCCESS} from "../Actions/app-actions";

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED__SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state

    }
}
export default appReducer;
