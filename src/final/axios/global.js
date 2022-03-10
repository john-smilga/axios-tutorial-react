import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer jwtToken';

export default axios;
