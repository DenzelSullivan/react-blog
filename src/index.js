import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// setting base url
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

//example of setting and auth token and content type
// json is already default.
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercepts every request sent using axios. (common config)
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config. headers ect..
    return request;
}, error => { // network errors
    console.log(error);
    return Promise.reject(error);
});

// intercepts responses 
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => { // response errors
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
