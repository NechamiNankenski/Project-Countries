import axios from 'axios';
import config from '../config';

export async function getCountries() {
    return await axios.get(`${config.apiBaseUrl}/Countries`);
}