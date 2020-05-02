import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

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
