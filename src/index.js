import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./store"
// import App from './App';
import Router from './router'
// import './index.css';
import 'todomvc-app-css/index.css'
import * as serviceWorker from './serviceWorker';

console.log(store.getState())

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
}
render(Router)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
