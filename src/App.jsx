import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/authContext';
import Home from './pages/Home';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <div className='fondo h-screen w-full flex justify-center items-center font-poppins'>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
