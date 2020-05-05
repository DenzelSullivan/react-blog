import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

//React.lazy() is the new way to implement this without creating a new 
// component
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                {/* Way to change the active class name and style a specific link */}
                                <NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                                // example of a more complex way to use Link
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.auth ? 
                        <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts/" component={Posts} />
                    <Route render={() => <h1>Not Found - Unknown Route Example</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/posts/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;