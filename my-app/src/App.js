import React from "react";
import { ReactFormBuilder } from "react-form-builder2";
import * as variables from "./variables";
import "./css/customformbuilder.css";
import Demobar from "./demobar";

const url = "/api/formdata";
const saveUrl = "/api/formdata";

// const App = () => (
//   <ReactFormBuilder
//     variables={variables}
//     url={url}
//     saveUrl={saveUrl}
//     locale="en"
//     saveAlways={false}
//   />
// );

const App = () => (
  <>
  <Demobar variables={variables} />
    <ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale="en"
    saveAlways={false}
  />
  </>
);

export default App;
