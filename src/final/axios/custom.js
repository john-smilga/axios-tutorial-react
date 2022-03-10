import axios from 'axios';
const jwt = 'jwtToken';

const authFetch = axios.create({
  baseURL: 'https://course-api.com/',

  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

export default authFetch;
