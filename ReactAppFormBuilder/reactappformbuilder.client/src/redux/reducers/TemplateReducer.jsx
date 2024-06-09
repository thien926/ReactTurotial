import { GET_ALL_TEMPLATE } from "../actions/TemplateAction";

const initialState = {
    data : [],
}

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TEMPLATE:
            return {
                ...state,
                data: action.payload
            };
    
        default:
            return {
                ...state
            }
    }
}

export default TemplateReducer