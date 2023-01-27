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
  
  //para esperar que firebase cargue
  const [loading, setLoading] = useState(true);


  // logear usuarios

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // Cerrar sesion

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);

    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout , loading }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
