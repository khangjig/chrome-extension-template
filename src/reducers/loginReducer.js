import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
} from '../const/ActionTypes'

const initialState = {
    isLoading: true,
    messages : null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                messages: action.payload,
                isLoading: false
            }
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                messages: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}
export default loginReducer