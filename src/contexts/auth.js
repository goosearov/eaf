import React, { createContext, useState, useContext } from "react";
import users from "../data/users";

const AuthContext = React.createContext(); 

export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  function signIn(email, password) {
    setLoading(true);
    const user = users[email];
    console.log(user)
    if (user && user.password === password) {
      setUser(user);
      console.log("Success")
      console.log(user);
    } else {
      setUser(null);
      console.log("Fail")
    }
    setLoading(false);
  }

  function signOut() {
    return setUser(null);
  }

  const values = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
