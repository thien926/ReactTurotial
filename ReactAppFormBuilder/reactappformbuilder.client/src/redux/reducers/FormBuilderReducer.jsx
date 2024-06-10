import { GET_ANSWER_DEFAULT, GET_CONTROLS_WITH_TEMPLATE_ID, SAVE_CONTROLS_TEMPLATE, SAVE_CONTROL_STATUS, SET_ANSWERS_INTO_STORE, SET_CONTROLS_INTO_STORE, SET_TEMPLATE_ID } from "../actions/FormBuilderAction";

const initialState = {
    data: [],
    saveAlways: true,
    lastItem: null,
    answer: [],
    templateId: '',
    errorMessage: '',
    saveControlStatus: true,
}

const FormBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTROLS_WITH_TEMPLATE_ID:
            return {
                ...state,
                data: action.payload
            };
        case SET_TEMPLATE_ID:
            return {
                ...state,
                templateId: action.payload
            };
        case GET_ANSWER_DEFAULT:
            return {
                ...state,
                answer: action.payload
            };
        case SET_CONTROLS_INTO_STORE:
            return {
                ...state,
                data: action.payload.data,
                saveControlStatus: action.payload.saveControlStatus
            }
        case SAVE_CONTROLS_TEMPLATE:
            return {
                ...state,
                data: action.payload.data,
                templateId: action.payload.templateId,
                saveControlStatus: action.payload.saveControlStatus
            }
        case SAVE_CONTROL_STATUS:
            return {
                ...state,
                saveControlStatus: action.payload
            }
        case SET_ANSWERS_INTO_STORE:
            return {
                ...state,
                answer: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default FormBuilderReducer