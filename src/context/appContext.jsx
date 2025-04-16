import { createContext, useState } from "react";

export const appContext = createContext();

export const ContextProvider = (props) => {
  
  const Backend_URL = import.meta.env.VITE_BACKEND_URL
  
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)

  const [ getUserData , setGetUserData ] = useState(false)


  const value = {
    Backend_URL,
    isLoggedIn, setIsLoggedIn,
    getUserData, setGetUserData
  }
  return(
    <appContext.Provider value={value}>
    {props.children}
    </appContext.Provider>
  )
}