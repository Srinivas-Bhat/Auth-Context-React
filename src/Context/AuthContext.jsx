import React, { createContext, useState } from 'react';
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);

    // const postData = () => {
    //     const res = axios.post("https://reqres.in/api/login")
    // }



    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>{children}</AuthContext.Provider>
    )
}