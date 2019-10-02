import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentWillMount () {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState( {posts: data}));
    // }

    componentWillMount() {
        this.props.fetchPosts(); // the method fetchPosts is put into the props via connect (see bottom of file where we export the component)
    }

    // this lifycycle method is called when the props are updated
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost); // add the newPost to the top of posts list
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

/**
 * This will map our state to props of this component so that it can be used in this component
 */
const mapStateToProps = state => ({
    posts: state.postsState.items, // the 'postsState' from state.postsState.items is the name we have given in the reducer in reducers/index.js
    newPost: state.postsState.item
});

// export default Posts

// connect your redux store with the react component - connect to map the state to props using the "FetchPosts"
export default connect(mapStateToProps, { fetchPosts })(Posts);