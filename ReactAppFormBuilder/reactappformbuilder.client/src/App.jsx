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

// const App = () => (
//   <ReactFormBuilder
//     variables={variables}
//     url={url}
//     saveUrl={saveUrl}
//     locale="en"
//     saveAlways={false}
//   />
// );

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

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from 'react-router';
// const apiUrl = import.meta.env.VITE_API_URL;
// const App = () => {
//   // const FormBuilderReducer = useSelector(state => state.FormBuilderReducer)

//     const [url, setUrl] = useState('');
//     const [saveUrl, setSaveUrl] = useState(`${apiUrl}/Template/UpdateControlWithTemplateId/`);
//     const [answerUrl, setAnswerUrl] = useState('');
//     const location = useLocation();

//     const dispatch = useDispatch();

//     useEffect(() => {
//         let Id = 1;
//         if (!isNaN(Id)) {
//             // setUrl(`${apiUrl}/Template/GetControl/${Id}`);
//             // setSaveUrl(`${apiUrl}/Template/UpdateControlWithTemplateId/${Id}`);
//             // setAnswerUrl(`${apiUrl}/Answer/GetAnswerDefault/${Id}`);
//             dispatch(setTemplateId(Id));
//             dispatch(getControlWithTemplateId(Id));
//         }
//     }, [location, dispatch])

//     const onChange = (data) => {
//         console.log(data);
//     }

//     console.log(FormBuilderReducer.data)

//     return (
//         <>
//             <DemobarComponent variables={variables} answerUrl={answerUrl} templateId={FormBuilderReducer.templateId}/>
//             {
//                 FormBuilderReducer.data.length > 0 ?
//                     (<ReactFormBuilder
//                         variables={variables}
//                         url={url}
//                         saveUrl={saveUrl}
//                         locale="en"
//                         saveAlways={false}
//                         data={FormBuilderReducer.data}
//                         // onChange={onChange}
//                     />) : null
//             }

//         </>
//         // <div>
//         //     <DemobarComponent variables={variables} />
//         //     <ReactFormBuilder
//         //         variables={variables}
//         //         url={url}
//         //         saveUrl={saveUrl}
//         //         locale="en"
//         //         saveAlways={false}
//         //         data={initialFormData}
//         //     />
//         // </div>

//     );
// }

// export default App;
