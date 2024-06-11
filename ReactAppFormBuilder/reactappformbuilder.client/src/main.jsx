import React from 'react'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker"
import Store from './redux/Store';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';

render(
  <React.StrictMode>
    <Provider store={Store} >
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister();
