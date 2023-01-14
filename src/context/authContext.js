import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,  setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null );

    const login = () => {
        // To Do
        setCurrentUser({
            id: 1, 
            name: "Sachit Gupta", 
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return(
        <AuthContext.Provider value = {{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}