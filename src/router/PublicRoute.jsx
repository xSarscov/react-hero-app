import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  
    const { logged } = useContext( AuthContext );
    
    return (!logged)
    ? children
    : <Navigate to="/marvel" />

}
