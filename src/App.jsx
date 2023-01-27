import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider, { useAuth } from './context/authContext';
import Home from './pages/Home';
// import ProtectedRoutes from './pages/ProtectedRoutes';
import LayoutPrivate from './layout/LayoutPrivate';
import Users from './pages/Users';

function App() {
  return (
    <div className='fondo h-screen w-full flex justify-center items-center font-poppins'>
      <AuthProvider>
        <Routes>
          {/* Rutas protegidas */}

          <Route path='/' element={<LayoutPrivate />}>
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
