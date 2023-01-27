import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider, { useAuth } from './context/authContext';
import Home from './pages/Home';
// import ProtectedRoutes from './pages/ProtectedRoutes';
import LayoutPrivate from './layout/LayoutPrivate';
import Users from './pages/Users';

function App() {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  console.log(user);

  return (
    <div className='fondo h-screen w-full flex justify-center items-center font-poppins'>
      <Routes>
        {/* Rutas protegidas */}

        <Route path='/' element={<LayoutPrivate />}>
          <Route index element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
