import axios from 'axios';

import { API } from './config';

export const postApiAuthLogin = async (data) => {
    try {
        const response = await axios.post(API + "auth/login", data);

        return response;
    } catch (error) {
        console.error(error);
    }
}

export const postApiAuthRegistro = async (data) => {
    try {
        const response = await axios.post(API + 'auth/registro', data);
        
        return response
    } catch (error) {
        console.error(error);
    }
}