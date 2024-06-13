import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);



export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [user,setUser]=useState(null);

    const login = () => {
        setIsAuthenticated(true);
    };
    // const login = (userData) => {
    //     setIsAuthenticated(true)
    //     setUser(userData)
    //     ;
    // };
    
    const logout = () => {
        setIsAuthenticated(false);
        // setUser(null)
        
        
    };
    


    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
