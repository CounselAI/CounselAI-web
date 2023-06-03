import React, { Children } from "react";
import { createContext, useState,useContext } from "react";



const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [userpid, setuserpid] = useState();

  const value = { userpid, setuserpid };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
