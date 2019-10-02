import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initalState = {
    items: [],
    item: {}
}

/**
 * This will update the state based on the action
 */
export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('FETCH_POSTS - updating the "state.items" with new posts');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            console.log('NEW_POST - updating the "state.item" with new post');
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;    
    }
}