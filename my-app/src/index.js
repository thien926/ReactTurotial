import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import DemoBar from "./demobar";
import * as serviceWorker from "./serviceWorker";
import * as variables from "./variables";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/js/all.min.js";

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.render(<App />, document.getElementById("form-builder"));

// ReactDOM.render(
//   <DemoBar variables={variables} />,
//   document.getElementById("demo-bar")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
