import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from '../../../axios';
// individual axios instance I created
//import axiosInstance from '../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("/posts")
            .then(response => { // promise
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/posts/' + id })
        // this.props.history.push('/' + id) same as above
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link key={post.id} to={"/" + post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* nested route */}
                <Route path={this.props.match.url + "/:postId"} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;