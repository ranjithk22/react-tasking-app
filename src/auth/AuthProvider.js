import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setUser(user);
    setIsLoggedIn(true);
    sessionStorage.setItem("loginUser", JSON.stringify(user));
    sessionStorage.setItem("loginStatus", JSON.stringify(true));
  };
  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.setItem("loginUser", JSON.stringify(""));
    sessionStorage.setItem("loginStatus", JSON.stringify(false));
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext)
}
