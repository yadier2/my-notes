// project imports
import config from 'config.js'

// action - state management
import * as actionTypes from './actions'

export const initialState = {
	isOpen: [], // for active default menu
	navType: config.theme,
	opened: true
}

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const customizationReducer = (state = initialState, action) => {
	let id
	switch (action.type) {
		case actionTypes.MENU_OPEN:
			id = action.id
			return {
				...state,
				isOpen: [id]
			}

		default:
			return state
	}
}

export default customizationReducer
