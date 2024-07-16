import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  
    const { logged } = useContext( AuthContext );   

    const { pathname, search } = useLocation();

    useEffect(() => {
        const lastPath = pathname + search;
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search])
    


    return (logged)
    ? children 
    : <Navigate to="/login" />
}
