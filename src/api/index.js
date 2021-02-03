import axios from 'axios';
const API_BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
});

const api = {
    getTasks: async ({sort_field, sort_direction, page}) => {
        const response = await axiosInstance.get(`/?developer=guychgeldi&sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`);
        return response;
    },
    post:async ({values, type}) => {
      const config = {
        "content-type": "multipart/form-data",
      }
      const response = await axiosInstance.post(`/${type}?developer=guychgeldi`, values, config);
      return response;
    },
}

export default api;