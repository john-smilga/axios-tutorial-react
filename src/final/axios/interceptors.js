import axios from 'axios';
const jwt = 'jwtToken';

const authFetch = axios.create({
  baseURL: 'https://course-api.com/',
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
// response

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response)
    if (error.response.status === 401) {
      console.log('AUTH ERROR');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
