import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // createUser function to create a new user in firebase auth
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sing in function to sign in a user in firebase auth
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // local store user save giving reload bt the data dose not gone
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubcribe();
    };
  }, []);

  // sing out function to sign out a user in firebase auth
  const singOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    singInUser,
    singOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
