import { FETCH_POSTS, NEW_POST } from './types';

// export function fetchPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts 
//         }));        
//     }
// }

// dispatch the action which contains {type, payload} to redux reducer so the application can update the state
export const fetchPosts = () => dispatch => {
    console.log('Fetching posts');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts 
        })
    );        
}

// dispatch the action which contains {type, payload} to redux reducer so the application can update the state
export const createPost = (postData) => dispatch => {
    console.log('Create post');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch( {
            type: NEW_POST,
            payload: post
        }
    ));
}