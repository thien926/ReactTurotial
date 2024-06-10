import Store from 'beedle';
import { get } from './requests'

const apiUrl = import.meta.env.VITE_API_URL;

const initialState = {
  data: [],
  saveAlways: true,
  lastItem: null,
  answer: [],
  templateId: '',
  errorMessage: ''
};

const actions = {
  async getControlWithTemplateId(context, templateId) {
    templateId = parseInt(templateId);
    if (isNaN(templateId)) {
      context.commit('setData', []);
    } else {
      get(`${apiUrl}/Controls/GetControlsWithTemplateId/${templateId}`).then(res => {
        res.data = res.data.map(itemX => {
          return {
            ...itemX.taskData,
            ...itemX,
            taskData: undefined
          };
        });
        context.commit('setData', res.data);
      })
    }
  },
  async getAnswerDefault(context, templateId) {
    templateId = parseInt(templateId);
    if (isNaN(templateId)) {
      context.commit('setAnswer', []);
    } else {
      get(`${apiUrl}/Answers/GetAnswerDefault/${templateId}`).then(res => {
        context.commit('setAnswer', res.data);
      })
    }
  },
  async setTemplateId(context, templateId) {
    context.commit('setTemplateId', templateId);
  }
};

const mutations = {
  setData(state, payload) {
    state.data = payload;
    return state;
  },
  setAnswer(state, payload) {
    state.answer = payload;
    return state;
  },
  setTemplateId(state, payload) {
    state.templateId = payload;
    return state;
  },
}

const formBuilderStore = new Store({
  actions,
  mutations,
  initialState,
});

export default formBuilderStore;
