import { useEffect } from 'react';

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
