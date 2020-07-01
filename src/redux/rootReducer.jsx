import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'
import trolleyReducer from './trolley/trolley.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
    user: userReducer,
    modal: modalReducer,
    trolley: trolleyReducer
})