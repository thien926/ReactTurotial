import { GET_ANSWER_DEFAULT, GET_CONTROLS_WITH_TEMPLATE_ID, SET_TEMPLATE_ID } from "../actions/FormBuilderAction";

const initialState = {
    data: [],
    saveAlways: true,
    lastItem: null,
    answer: [],
    templateId: '',
    errorMessage : ''
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
        default:
            return {
                ...state
            }
    }
}

export default FormBuilderReducer