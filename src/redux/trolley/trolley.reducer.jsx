import actionTypes from '../actionTypes'
import { addTrolleyItem, removeTrolleyItemSingle } from '../../helpers/helpers';

const INITIAL_STATE = {
    trolleyHidden: true,
    trolleyItems: [],
    trolleyTotal: 0
}

const trolleyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TROLLEY_HIDDEN:
            return {
                ...state,
                trolleyHidden: !state.trolleyHidden
            }
        case actionTypes.ADD_ITEM_TO_TROLLEY:
            return {
                ...state,
                trolleyItems: addTrolleyItem(state.trolleyItems, action.payload)
            }
        case actionTypes.REMOVE_SINGLE_ITEM_FROM_TROLLEY:
            return {
                ...state,
                trolleyItems: removeTrolleyItemSingle(state.trolleyItems, action.payload)
            }
        case actionTypes.REMOVE_ALL_ITEM_INSTANCES_FROM_TROLLEY:
            return {
                ...state,
                trolleyItems: state.trolleyItems.filter(item =>
                    item.newItem.id !== action.payload.newItem.id)
            }
        case actionTypes.UPDATE_TROLLEY_TOTAL:
            return {
                ...state,
                trolleyTotal: action.payload
            }
        default:
            return state
    }
}

export default trolleyReducer;