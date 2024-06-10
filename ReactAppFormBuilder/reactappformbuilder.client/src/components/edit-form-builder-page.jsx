/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import * as variables from "../variables";
import { useLocation } from 'react-router';
import DemobarComponent from "./demobar-component";

// Add our stylesheets for the demo.
import "../assets/css/customformbuilder.css";
import { ReactFormBuilder } from "react-form-builder2";
import { useDispatch, useSelector } from "react-redux";
import { getControlWithTemplateId, setControlsIntoStore, setTemplateId } from "../redux/actions/FormBuilderAction";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IntlProvider } from "react-intl";
import { nanoid } from "nanoid";

const apiUrl = import.meta.env.VITE_API_URL;
// const url = `${apiUrl}/Template/GetControls`;
// const saveUrl = "/api/formdata";

const initialFormData = [{ "id": "6b7b17fa-8182-41f2-9104-1086c22e9d97", "element": "Header", "text": "Welcome to the form", "static": true, "required": false, "bold": false, "italic": false, "content": "Header content" }, { "id": "6b7b17fa-8182-41f2-9104-1086c22e9d98", "element": "TextInput", "label": "Name", "required": true }, { "id": "6b7b17fa-8182-41f2-9104-1086c22e9d99", "element": "TextInput", "label": "Email", "required": true }];

const locale = 'en';

const FormBuilderPage = () => {
    const FormBuilderReducer = useSelector(state => state.FormBuilderReducer)

    const [url, setUrl] = useState('');
    const [saveUrl, setSaveUrl] = useState(`${apiUrl}/Template/UpdateControlWithTemplateId/`);
    const [answerUrl, setAnswerUrl] = useState('');
    const location = useLocation();
    const myRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        let Id = parseInt(location.pathname.replace("/form-builder/", ""));
        if (!isNaN(Id)) {
            // setUrl(`${apiUrl}/Template/GetControl/${Id}`);
            // setSaveUrl(`${apiUrl}/Template/UpdateControlWithTemplateId/${Id}`);
            // setAnswerUrl(`${apiUrl}/Answer/GetAnswerDefault/${Id}`);
            dispatch(setTemplateId(Id));
            dispatch(getControlWithTemplateId(Id));
        }
    }, [location, dispatch])

    useEffect(() => {
        const node = myRef.current;
    }, []);

    const onPost = (data) => {
        dispatch(setControlsIntoStore(data.task_data, false));
    }

    return (

        <div ref={myRef}>
            <DemobarComponent variables={variables} answerUrl={answerUrl} templateId={FormBuilderReducer.templateId} />
            <DndProvider backend={HTML5Backend}>
                <IntlProvider locale={locale}>
                    {
                        FormBuilderReducer.data.length > 0 ?
                            (<ReactFormBuilder
                                key={nanoid()}
                                variables={variables}
                                url={url}
                                saveUrl={saveUrl}
                                locale="en"
                                saveAlways={true}
                                data={FormBuilderReducer.data}
                                onPost={onPost}
                            />) : <ReactFormBuilder
                                key={nanoid()}
                                variables={variables}
                                url={url}
                                saveUrl={saveUrl}
                                locale="en"
                                saveAlways={true}
                                data={[]}
                                onPost={onPost}
                            />
                    }
                </IntlProvider>
            </DndProvider>
        </div>

    );
};

export default FormBuilderPage;
