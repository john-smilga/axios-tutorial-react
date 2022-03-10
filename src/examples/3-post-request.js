import { useState } from 'react';
import axios from 'axios';
const url = 'https://course-api.com/axios-tutorial';

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jwt, setJWT] = useState(null);
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    console.log('submit form');
  };

  const getSecretData = async () => {
    console.log('fetch restricted data');
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
      <section className='section'>
        <button className='btn' onClick={getSecretData}>
          get secret data
        </button>
        <h4 style={{ marginTop: '1rem' }}>{data}</h4>
      </section>
    </section>
  );
};
export default PostRequest;
