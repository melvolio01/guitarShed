import actionTypes from '../actionTypes';

const INITIAL_STATE = {
    modalVisible: false
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                modalVisible: true
            }
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        default:
            return state
    }
}

export default modalReducer;