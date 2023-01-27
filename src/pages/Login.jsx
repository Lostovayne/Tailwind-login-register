import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState();

  //navegar

  const navigate = useNavigate();

  //contexto

  const { login} = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='bg-white  w-[32rem]   mx-auto px-16 py-14 shadow-xl shadow-gray-300 rounded-md'>
      <h1 className='text-2xl text-gray-800 font-sans font-normal mb-1'>
        Sign in with your email
      </h1>
      <span className='text-sm text-gray-600'>You don't have an account?</span>
      <Link to="/register" className=' text-sm ml-2 text-blue-500'>Sign up</Link>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 text-gray-500 text-xs mt-10'>
        <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
          <span className=''>Email address</span>
          <input
            type='text'
            className='placeholder:text-sm text-sm outline-none py-[1px]'
            placeholder='mia@khalifa.com'
            onChange={handleChange}
            name='email'
          />
        </div>

        <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
          <span className=''>Password</span>
          <input
            type='password'
            className='placeholder:text-sm text-sm outline-none py-[1px]'
            placeholder='*********'
            onChange={handleChange}
            name='password'
          />
        </div>

        <div>
          <p className='text-blue-500'>Forgot your password?</p>
        </div>

        <button
          type='submit'
          className='bg-[#5551FF] text-white py-5 rounded text-sm my-3 shadow-xl shadow-[#5551FF]/30 '>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
