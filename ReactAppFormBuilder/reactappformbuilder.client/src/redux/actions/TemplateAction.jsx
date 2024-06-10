import { get } from "./requests"

const apiUrl = import.meta.env.VITE_API_URL;

export const GET_ALL_TEMPLATE = 'GET_ALL_TEMPLATE'

export const getAllTemplate = () => (dispatch) => {
    get(`${apiUrl}/Templates`).then(res => {
        dispatch({
            type : GET_ALL_TEMPLATE,
            payload : res.data
        })
    })
}