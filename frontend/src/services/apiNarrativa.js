import axios from 'axios';

import { API } from './config';

export const getApiNarrativas = async () => {
    const response = await axios.get(API+'narrativa/listen');

    return response
}