import axios from 'axios';

const  HOST = 'http://localhost:8080';


export const fetchUser = (payload) => axios.post(`${URL}/login`, payload);
export const fetchRegister = (payload) => axios.post(`${URL}/register`, payload);
export const fetchAllCars = () => axios.get(`${URL}/`);