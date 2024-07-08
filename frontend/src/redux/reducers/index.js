import { combineReducers } from 'redux';
import userReducers from './users';
import productReducers from './products';

export default combineReducers({
    userReducers,
    productReducers
});