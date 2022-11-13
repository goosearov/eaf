import React, { createContext, useState, useContext } from "react";
import users from "../data/users";

const AuthContext = createContext(); 

export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    let user = null;
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      user = users[savedUser];
    }
    return user || null;
  });
  const [loading, setLoading] = useState(false);


  function signIn(email, password) {
    setLoading(true);
    const user = users[email];
    console.log(user)
    if (user && user.password === password) {
      localStorage.setItem("user", user.email);
      setUser(user);
    } else {
      setUser(null);
    }
    setLoading(false);
  }

  function signOut() {
    localStorage.removeItem("user");
    return setUser(null);
  }

  const values = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
