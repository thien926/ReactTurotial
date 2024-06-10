import Store from 'beedle';
import { get } from './requests'

const apiUrl = import.meta.env.VITE_API_URL;

const initialState = {
    data: [],
}

const actions = {
    async getAllTemplate(context) {
        try {
            get(`${apiUrl}/Templates`).then(res => {
                const data = res.data;
                context.commit('setData', data);
            })
        } catch (error) {
            console.error('Error fetching template data:', error);
        }

    }
}

const mutations = {
    setData(state, payload) {
        state.data = payload;
        return state;
    },
}

const templateStore = new Store({
    actions,
    mutations,
    initialState,
});

export default templateStore;