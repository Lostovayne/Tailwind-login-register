import { createContext, useContext } from 'react';

import { auth } from '../Config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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

  // logear usuarios

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
