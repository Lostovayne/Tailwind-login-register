import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../Config/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const authContext = createContext();

//hook para enviar el contexto
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  // registro de usuarios
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  //poara comprobar estado del usuario
  const [user, setUser] = useState(null);

  // logear usuarios

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // Cerrar sesion

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
