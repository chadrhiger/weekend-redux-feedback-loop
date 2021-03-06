// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// reducer for feeling data
const feelingReducer = (state = 0, action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  }
  return state;
};

// reducer for understanding data
const understandingReducer = (state = 0, action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  }
  return state;
};

// reducer for support data
const supportReducer = (state = 0, action) => {
  if (action.type === 'SET_SUPPORT') {
    return action.payload;
  }
  return state;
};

// reducer for comment data
const commentReducer = (state = '', action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  }
  return state;
};

// reducer for review data


// redux store
const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer
  }),
  applyMiddleware(logger)
);


// Wrap the App in a Provider
ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
