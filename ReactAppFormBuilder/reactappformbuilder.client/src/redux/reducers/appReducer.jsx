import { combineReducers } from "redux";
import TemplateReducer from "./TemplateReducer"
import FormBuilderReducer from "./FormBuilderReducer"

const appReducers = combineReducers({
    TemplateReducer,
    FormBuilderReducer
})

export default appReducers