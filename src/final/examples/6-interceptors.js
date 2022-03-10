import { useEffect } from 'react';
import authFetch from '../axios/interceptors';
const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch.get('/axios-tutorial');
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
