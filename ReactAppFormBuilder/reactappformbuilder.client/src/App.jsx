import { Navigate, Route, Routes } from 'react-router';
import HomePage from './components/home-page';
import FormBuilderPage from './components/edit-form-builder-page';
import AnswerPage from './components/edit-asnwer-page';

function App() {

    return (
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
            <Route path='/form-builder' element={<FormBuilderPage />} />
            <Route path='/form-builder/:Id' element={<FormBuilderPage />} />
            <Route path="/answer/:Id" element={<AnswerPage />} />
        </Routes>
      );
}

export default App;

// import { ReactFormBuilder } from "react-form-builder2";
// import * as variables from "./variables";
// import "./assets/css/customformbuilder.css";
// import DemobarComponent from "./components/demobar-component";

// const url = "/api/formdata";
// const saveUrl = "/api/formdata";

// // const App = () => (
// //   <ReactFormBuilder
// //     variables={variables}
// //     url={url}
// //     saveUrl={saveUrl}
// //     locale="en"
// //     saveAlways={false}
// //   />
// // );

// const App = () => (
//   <>
//     <DemobarComponent variables={variables} />
//     <ReactFormBuilder
//       variables={variables}
//       url={url}
//       saveUrl={saveUrl}
//       locale="en"
//       saveAlways={false}
//     />
//   </>
// );

// export default App;
