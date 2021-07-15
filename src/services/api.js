import axios from 'axios';

const api = axios.create({
    baseURL: 'http://livrariahabitualapi.herokuapp.com/'
})

export default api;