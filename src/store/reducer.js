import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer'
import noteReducer from './noteReducer'

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
	customization: customizationReducer,
	note: noteReducer
})

export default reducer
