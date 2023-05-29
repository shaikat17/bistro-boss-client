import { createContext, useContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase.init";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // google signin
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

   // github signin
   const signWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

 // logout function
 const logOut = () => {
    return signOut(auth);
  };

//   update user information
const updateUserProfile = (user = user, uName, photoUrl) => {
    setLoading(true)
    return updateProfile(user, {
      displayName: uName,
      photoURL: photoUrl,
    });
  };


  // create user
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sing in
  const signin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

    // observe auth state change
  useEffect(() => {
    // setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{
    signin,
    signOut,
    createUser,
    loading,
    setLoading,
    user
  }}>
    {children}</AuthContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider };
