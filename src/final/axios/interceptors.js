import axios from 'axios';
const jwt = 'jwtToken';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});

authFetch.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${jwt}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('AUTH ERROR');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
