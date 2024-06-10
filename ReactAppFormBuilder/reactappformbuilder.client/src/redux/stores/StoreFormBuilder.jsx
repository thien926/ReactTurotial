import { createStore } from 'beedle';

const initialState = {
  data: [],
  saveAlways: true,
  lastItem: null,
  answer: [],
  templateId: '',
  errorMessage: ''
};

const actions = {
  getControlWithTemplateId(state, templateId) {
    templateId = parseInt(templateId);
    if(isNaN(templateId)) {
      return { ...state, data: [] };
    } else {
        get(`${apiUrl}/Controls/GetControlsWithTemplateId/${templateId}`).then(res => {
            res.data = res.data.map(itemX => {
                return {
                    ...itemX.taskData,
                    ...itemX,
                    taskData: undefined
                };
            });
            return { ...state, data: res.data };
        })
    }
  },
  getAnswerDefault(state, templateId) {
    templateId = parseInt(templateId);
    if(isNaN(templateId)) {
      return { ...state, answer: [] };
    } else {
        get(`${apiUrl}/Answers/GetAnswerDefault/${templateId}`).then(res => {
          return { ...state, answer: res.data };  
        })
    }
  },
  setTemplateId(state, templateId) {
    return { ...state, templateId: templateId };
  }
};

const storeFormBuilder = createStore(initialState, actions);
