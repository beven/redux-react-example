import { combineReducers } from 'redux';
import postReducer from './postReducer';

// we only have one reducer here for this example
export default combineReducers({
    postsState: postReducer
})