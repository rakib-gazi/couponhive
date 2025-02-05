import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }else{
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogInWIthGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
  const updateUserProfile =(name, photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo,
    })
  }
  const AuthInfo = {
    user,
    setUser,
    createUser,
    LogInUser,
    LogInWIthGoogle,
    LogOutUser,
    loading,
    passwordReset,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
