import { get } from "./requests"

const apiUrl = import.meta.env.VITE_API_URL;

export const GET_CONTROLS_WITH_TEMPLATE_ID = 'GET_CONTROLS_WITH_TEMPLATE_ID'
export const SET_TEMPLATE_ID = 'SET_TEMPLATE_ID'
export const GET_ANSWER_DEFAULT = 'GET_ANSWER_DEFAULT'

export const getControlWithTemplateId = (templateId) => (dispatch) => {
    templateId = parseInt(templateId);
    if(isNaN(templateId)) {
        dispatch({
            type : GET_CONTROLS_WITH_TEMPLATE_ID,
            payload : []
        })
    } else {
        get(`${apiUrl}/Controls/GetControlsWithTemplateId/${templateId}`).then(res => {
            res.data = res.data.map(itemX => {
                return {
                    ...itemX.taskData,
                    ...itemX,
                    taskData: undefined
                };
            });
            dispatch({
                type : GET_CONTROLS_WITH_TEMPLATE_ID,
                payload : res.data
            })
        })
    }
}

export const getAnswerDefault = (templateId) => (dispatch) => {
    templateId = parseInt(templateId);
    if(isNaN(templateId)) {
        dispatch({
            type : GET_ANSWER_DEFAULT,
            payload : []
        })
    } else {
        get(`${apiUrl}/Answers/GetAnswerDefault/${templateId}`).then(res => {
            dispatch({
                type : GET_ANSWER_DEFAULT,
                payload : res.data
            })
        })
    }
}

export const setTemplateId = (templateId) => (dispatch) => {
    dispatch({
        type : SET_TEMPLATE_ID,
        payload : templateId
    })
}