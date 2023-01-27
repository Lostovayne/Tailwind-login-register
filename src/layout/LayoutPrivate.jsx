import { Link, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Header from '../components/Header';

const LayoutPrivate = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to='/login' />;

  return (
    <main className='h-screen w-full'>
      <Header />

      <Outlet />

      <footer>footer</footer>
    </main>
  );
};

export default LayoutPrivate;
