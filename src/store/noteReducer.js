// action - state management
import * as actionTypes from './actions'

export const initialState = {
    notes: [],
    pending: false,
    note: {},
    error: false
}

// ===========================|| NOTES REDUCER ||=========================== //

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTE_PENDING:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case actionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.data,
                pending: false,
            }
        case actionTypes.FETCH_NOTE_SUCCESS:
            return {
                ...state,
                note: action.data,
                pending: false,
            }
        case actionTypes.FETCH_NOTE_ERROR:
            return {
                ...state,
                pending: false,
                error: true,
            }
        case actionTypes.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.id),
            }


        default:
            return state
    }
}

export default newsReducer
