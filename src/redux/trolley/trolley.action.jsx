import actionTypes from '../actionTypes';

export const toggleTrolleyHidden = () => ({
    type: actionTypes.TOGGLE_TROLLEY_HIDDEN
})

export const addItemToTrolley = item => ({
    type: actionTypes.ADD_ITEM_TO_TROLLEY,
    payload: item
})

export const removeSingleItemFromTrolley = item => ({
    type: actionTypes.REMOVE_SINGLE_ITEM_FROM_TROLLEY,
    payload: item
})

export const removeAllItemInstancesFromTrolley = item => ({
    type: actionTypes.REMOVE_ALL_ITEM_INSTANCES_FROM_TROLLEY,
    payload: item
})

export const updateTrolleyTotal = total => ({
    type: actionTypes.UPDATE_TROLLEY_TOTAL,
    payload: total
})

