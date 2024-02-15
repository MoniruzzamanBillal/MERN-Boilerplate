import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../Utils/Firebase.config";

export const AuthContext = createContext();

const AppProvider = ({ children }) => {
  const [test, setTest] = useState("test in auth ");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   register function
  const registerFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   email login function
  const loginFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logoutFunction = () => {
    signOut(auth);
  };

  //   toggle dark mode function $
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  // for changing user effect
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = {
    loading,
    user,
    test,
    registerFunction,
    loginFunction,
    logoutFunction,
    toggleDarkMode,
  };

  return (
    <AuthContext.Provider value={authValue}> {children} </AuthContext.Provider>
  );

  //
};

export default AppProvider;
