import React, { useState, useEffect } from 'react';
import { ReactFormGenerator } from 'react-form-builder2';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerDefault } from '../redux/actions/FormBuilderAction';

const apiUrl = import.meta.env.VITE_API_URL;

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    OPTIONS: '',
};

const DemobarComponent = (props) => {
    const FormBuilderReducer = useSelector(state => state.FormBuilderReducer)
    // eslint-disable-next-line react/prop-types
    const { variables, answerUrl, templateId } = props;
    const [data, setData] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [shortPreviewVisible, setShortPreviewVisible] = useState(false);
    const [roPreviewVisible, setRoPreviewVisible] = useState(false);
    const [answer, setAnswer] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAnswerDefault(templateId));
    }, [dispatch, templateId]);

    useEffect(() => {
        setAnswer(FormBuilderReducer.answer);
    }, [FormBuilderReducer.answer])

    useEffect(() => {
        setData(FormBuilderReducer.data);
    }, [FormBuilderReducer.data])

    const showPreview = () => {
        setPreviewVisible(true);
    };

    const showShortPreview = () => {
        saveFormData();
        setShortPreviewVisible(true);
    };

    const showRoPreview = () => {
        saveFormData();
        setRoPreviewVisible(true);
    };

    const closePreview = () => {
        setPreviewVisible(false);
        setShortPreviewVisible(false);
        setRoPreviewVisible(false);
    };

    const _onSubmit = (data) => {
        // const currentUrl = window.location.href;
        // const lastSegment = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

        // if (!isNaN(lastSegment)) {
        //   console.log(JSON.stringify({
        //     id: parseInt(answerId),
        //     templateId: parseInt(lastSegment),
        //     answerData: data,
        //   }));
        //   fetch(`${apiUrl}/Answer/UpdateAnswerDefaultWithTemplateId/${lastSegment}`, {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify({
        //       id: parseInt(answerId),
        //       templateId: parseInt(lastSegment),
        //       answerData: data,
        //     }),
        //   }).then(response => {
        //     if (window.confirm("Update thành công")) {
        //       window.location.reload();
        //     } else {
        //       window.location.reload();
        //     }
        //   });
        // } else {
        //   alert("Chưa save Template");
        // }
    };

    const saveFormData = () => {
        // store.dispatch('post');
    };

    let modalClass = 'modal';
    if (previewVisible) {
        modalClass += ' show d-block';
    }

    let shortModalClass = 'modal short-modal';
    if (shortPreviewVisible) {
        shortModalClass += ' show d-block';
    }

    let roModalClass = 'modal ro-modal';
    if (roPreviewVisible) {
        roModalClass += ' show d-block';
    }

    return (
        <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
            <h4 className="float-left">Preview</h4>
            <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={showPreview}>Preview Form</button>
            <button className="btn btn-default float-right" style={{ marginRight: '10px' }} onClick={showShortPreview}>Alternate/Short Form</button>
            <button className="btn btn-default float-right" style={{ marginRight: '10px' }} onClick={showRoPreview}>Read Only Form</button>
            <button className="btn btn-default float-right" style={{ marginRight: '10px' }} onClick={saveFormData}>Save Form</button>

            {previewVisible &&
                <div className={modalClass} role="dialog">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <ReactFormGenerator
                                download_path=""
                                // back_action="/"
                                // back_name="Back"
                                answer_data={answer}
                                action_name="Save"
                                form_action={answerUrl}
                                form_method="POST"
                                onSubmit={_onSubmit}
                                variables={variables}
                                data={data}
                                locale='en' />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={closePreview}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {roPreviewVisible &&
                <div className={roModalClass}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <ReactFormGenerator
                                download_path=""
                                // back_action="/"
                                // back_name="Back"
                                answer_data={answer}
                                action_name="Save"
                                form_action="/"
                                form_method="POST"
                                read_only={true}
                                variables={variables}
                                hide_actions={true}
                                data={data}
                                locale='en' />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={closePreview}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {shortPreviewVisible &&
                <div className={shortModalClass}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content border border-light p-3 mb-4">
                            <ReactFormGenerator
                                download_path=""
                                // back_action=""
                                answer_data={answer}
                                form_action="/"
                                form_method="POST"
                                data={data}
                                display_short={true}
                                variables={variables}
                                hide_actions={false}
                                locale='en' />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={closePreview}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DemobarComponent;
