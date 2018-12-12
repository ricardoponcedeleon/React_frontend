import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import ApiFetch from "./components/apifetch";
import ApiPost from "./components/apipost"

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/movies">Show Movies</Link>
            <Link to="/add/movies">Add New Movies</Link>
          </div> 
          <Route exact path="/" component={App} />
          <Route path="/movies" component={ApiFetch} />
          <Route path="/add/movies" component={ApiPost} />
        </div>
      </BrowserRouter>
      
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);