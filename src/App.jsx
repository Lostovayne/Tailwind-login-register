import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/authContext';
import Home from './pages/Home';

function App() {
  return (
    <div className='fondo h-screen w-full flex justify-center items-center font-poppins'>
      <AuthProvider>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
