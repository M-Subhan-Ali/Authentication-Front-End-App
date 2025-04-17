import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const appContext = createContext();

export const ContextProvider = (props) => {
  
  axios.defaults.withCredentials = true ;

  const Backend_URL = import.meta.env.VITE_BACKEND_URL
  
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)

  const [ UserData , setUserData ] = useState(false)


  const getUserData= async ( ) => {
    try {
      const {data} = await axios.get(`${Backend_URL}/user/data`)
      if(data.success){
        setUserData(data.userData)
      }else{
        toast.error(data.message, {
                  position: "top-center",
                  autoClose: 3000, // 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored", // or "light", "dark"
                });
      }
    } catch (error) {
      toast.error(data.message, {
                position: "top-center",
                autoClose: 3000, // 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored", // or "light", "dark"
              });
    }
  }


  const getAuthState = async ( ) => {
  try {
    const {data} = await  axios.get(`${Backend_URL}/api/auth/is-auth`)
    if(data.success){
      setIsLoggedIn(true)
      getUserData()
    }
    
  } catch (error) {
    toast.error(error.message)
  }
  }

  useEffect(()=>{
    getAuthState()
  },[])

  const value = {
    Backend_URL,
    isLoggedIn, setIsLoggedIn,
    UserData, setUserData ,
    getUserData
  }
  return(
    <appContext.Provider value={value}>
    {props.children}
    </appContext.Provider>
  )
}