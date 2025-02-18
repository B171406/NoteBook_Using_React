import { Children, createContext,useContext,useState } from "react";
 const AuthContext=createContext(null)

 export const AuthProvider = ({Children}) =>{
    const [user,setUser]=useState(null)
    const login = user =>{
        setUser(user)
    }
    const logout = user =>{
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, login,logout}}>{Children}</AuthContext.Provider>
    )
 }

 export const useAuth =()=>{
    return useContext(AuthContext)
 }