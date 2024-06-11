/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useLocation } from 'react-router';
import * as variables from "../variables";
import DemobarComponent from "./demobar-component";
import { nanoid } from "nanoid";
import { ReactFormBuilder } from "react-form-builder2";
import { useDispatch, useSelector } from "react-redux";
import { getControlWithTemplateId, saveControlsTemplate, setControlsIntoStore, setTemplateId } from "../redux/actions/FormBuilderAction";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

// Add our stylesheets for the demo.
import "../assets/css/customformbuilder.css";

const DndWrapper = React.memo((props) => {
    const [context, setContext] = useState(null);

    useEffect(() => {
        setContext(document.getElementById(props.id))
    }, [props.id])

    return context ? (
        <DndProvider backend={HTML5Backend} options={{ rootElement: context }}>
            {props.children}
        </DndProvider>
    ) : null;
});

const FormBuilderPage = React.memo(() => {
    const FormBuilderReducer = useSelector(state => state.FormBuilderReducer)

    const location = useLocation();
    const myRef = useRef(null);

    const dispatch = useDispatch();
    const formBuilderRef = useRef(null);

    useEffect(() => {
        let Id = parseInt(location.pathname.replace("/form-builder/", ""));
        if (!isNaN(Id)) {
            dispatch(setTemplateId(Id));
            dispatch(getControlWithTemplateId(Id));
        }
    }, [location, dispatch])

    const saveFormData = () => {
        dispatch(saveControlsTemplate(FormBuilderReducer.templateId, formBuilderRef.current.props.data));
    }

    const onLoadTaskData = () => {
        dispatch(setControlsIntoStore(formBuilderRef.current.props.data, false));
    }

    const myFirstId = nanoid();

    return (

        <div ref={myRef}>
            <DemobarComponent variables={variables} templateId={FormBuilderReducer.templateId} saveFormData={saveFormData} onLoadTaskData={onLoadTaskData}/>
            {/* <input type="text" placeholder="Nhập tên đơn ở đây..." value="" className="clearfix"  style={{ width: '70%', padding: '0.5rem 1rem', marginBottom: '0.5rem', backgroundColor: 'white', cursor: 'pointer', opacity: 1 }}></input> */}
            <div id={myFirstId}>
                <DndWrapper id={myFirstId}>
                    {
                        FormBuilderReducer.taskData.length > 0 ?
                            (<ReactFormBuilder
                                key={nanoid()}
                                variables={variables}
                                // url={url}
                                // saveUrl={saveUrl}
                                locale="en"
                                saveAlways={true}
                                data={FormBuilderReducer.taskData}
                                ref={formBuilderRef}
                            />) : <ReactFormBuilder
                                key={nanoid()}
                                variables={variables}
                                // url={url}
                                // saveUrl={saveUrl}
                                locale="en"
                                saveAlways={true}
                                data={[]}
                                ref={formBuilderRef}
                            />
                    }
                </DndWrapper>
            </div>
        </div>

    );
});

export default FormBuilderPage;
