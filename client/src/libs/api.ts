import axios from 'axios';

export const apiJSON = axios.create({
  baseURL: 'http://localhost:3030',
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

