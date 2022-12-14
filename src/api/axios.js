import axios from 'axios';
import {getItem} from '@/helpers/persistanseStorage';

axios.defaults.baseURL = 'https://api.realworld.io/api';

axios.interceptors.request.use(config => {
    const token = getItem('accessToken');
    const authorizisationToken = token ? `Token ${token}` : '';
    config.headers.Authorization = authorizisationToken;
    return config;
})

export default axios;