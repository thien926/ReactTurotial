/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import * as variables from "../variables";
import { useLocation } from 'react-router';
import DemobarComponent from "./demobar-component";

// Add our stylesheets for the demo.
import "../assets/css/customformbuilder.css";
import { ReactFormBuilder } from "react-form-builder2";
import formBuilderStore from '../stores/FormBuilderStore'


const apiUrl = import.meta.env.VITE_API_URL;
// const url = `${apiUrl}/Template/GetControls`;
// const saveUrl = "/api/formdata";

const initialFormData = [{ "id": "6b7b17fa-8182-41f2-9104-1086c22e9d97", "element": "Header", "text": "Welcome to the form", "static": true, "required": false, "bold": false, "italic": false, "content": "Header content" }, { "id": "6b7b17fa-8182-41f2-9104-1086c22e9d98", "element": "TextInput", "label": "Name", "required": true }, { "id": "6b7b17fa-8182-41f2-9104-1086c22e9d99", "element": "TextInput", "label": "Email", "required": true }];


const FormBuilderPage = () => {
    const [data, setData] = useState(formBuilderStore.state.data);
    const [templateId, setTemplateId] = useState(formBuilderStore.state.templateId)
    const [url, setUrl] = useState('');
    const [saveUrl, setSaveUrl] = useState(`${apiUrl}/Template/UpdateControlWithTemplateId/`);
    const [answerUrl, setAnswerUrl] = useState('');
    // const location = useLocation();

    // useEffect(() => {
    //     let Id = parseInt(location.pathname.replace("/form-builder/", ""));
    //     if (!isNaN(Id)) {
    //         // setUrl(`${apiUrl}/Template/GetControl/${Id}`);
    //         // setSaveUrl(`${apiUrl}/Template/UpdateControlWithTemplateId/${Id}`);
    //         // setAnswerUrl(`${apiUrl}/Answer/GetAnswerDefault/${Id}`);
    //         dispatch(setTemplateId(Id));
    //         dispatch(getControlWithTemplateId(Id));
    //     }
    // }, [location, dispatch])

    // useEffect(() => {
    //     let Id = parseInt(location.pathname.replace("/form-builder/", ""));
    //     if (!isNaN(Id)) {
    //         const unsubscribe = formBuilderStore.subscribe((state) => {
    //             setData(state.data);
    //             setTemplateId(state.templateId);
    //         });
            
    //         formBuilderStore.dispatch("setTemplateId", Id);
    //         formBuilderStore.dispatch("getControlWithTemplateId", Id);
    
    //         // return () => {
    //         //     unsubscribe();
    //         // };
    //     }
    // },[location])

    useEffect(() => {
        let url = window.location.href;
        let lastSlashIndex = url.lastIndexOf("/");
        let lastPart = url.substring(lastSlashIndex + 1);
        let Id = parseInt(lastPart);
        if (!isNaN(Id)) {
            const unsubscribe = formBuilderStore.subscribe((state) => {
                setData(state.data);
                setTemplateId(state.templateId);
            });
            
            formBuilderStore.dispatch("setTemplateId", Id);
            formBuilderStore.dispatch("getControlWithTemplateId", Id);
            // return () => {
            //     unsubscribe();
            // };
        }
    },[])

    const onChange = (data) => {
        console.log(data);
    }

    return (
        
        <div>
            <DemobarComponent variables={variables} />
            <ReactFormBuilder
                variables={variables}
                url={url}
                saveUrl={saveUrl}
                locale="en"
                saveAlways={false}
                data={initialFormData}
                show_description={true} 
            />
        </div>

        // <>
        //     <DemobarComponent variables={variables} answerUrl={answerUrl} templateId={formBuilderStore.state.templateId}/>
        //     {
        //         formBuilderStore.state.data.length > 0 ?
        //             (<ReactFormBuilder
        //                 key={1}
        //                 variables={variables}
        //                 url={url}
        //                 saveUrl={saveUrl}
        //                 locale="en"
        //                 saveAlways={false}
        //                 data={formBuilderStore.state.data}
        //                 // onChange={onChange}
        //             />) : <ReactFormBuilder
        //                 key={2}
        //                 variables={variables}
        //                 url={url}
        //                 saveUrl={saveUrl}
        //                 locale="en"
        //                 saveAlways={false}
        //                 data={[]}
        //                 // onChange={onChange}
        //             />
        //     }
        // </>

    );
};

export default FormBuilderPage;
