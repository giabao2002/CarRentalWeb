import axios from 'axios';

const  HOST = 'http://localhost:8080';

const HEADER = {
    headers: {
        Origin: 'http://localhost:5173'
      }
};


export const fetchUser = payload => axios.post(`${HOST}/login`, payload, HEADER);
export const fetchRegister = payload => axios.post(`${HOST}/register`, payload, HEADER);
export const fetchAllCars = () => axios.get(`${HOST}/`, HEADER);