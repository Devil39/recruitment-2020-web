import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/arbn2plt.ttf';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://20f2c5d277a3414fabb7cf4558de02f0@sentry.io/1848842"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
