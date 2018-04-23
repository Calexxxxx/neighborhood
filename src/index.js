/**
 * @description import react packages
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @description import styles
 */
import './styles/index.css';

/**
 * @description import app component
 */
import App from './components/App';

/**
 * @description import service worker only works when npm run build script is run
 */
import registerServiceWorker from './registerServiceWorker';

/**
 * @description render the app to the root id
 */
ReactDOM.render(<App />, document.getElementById('root'));

/**
 * @description call service worker
 */
registerServiceWorker();
