import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Header from '../components/Header';
import Aside from '../components/Aside';

const LayoutPrivate = () => {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!user) return <Navigate to='/login' />;

  return (
    <main className='h-screen w-full flex flex-col '>
      <Header />
      <section className=' flex '>
        <Aside  />
        <Outlet />
      </section>
    </main>
  );
};

export default LayoutPrivate;
