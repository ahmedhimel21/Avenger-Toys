import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(!user){
    // alert('Please login first')
    toast.error('You have to log in first to view details')
    
  }
  if (loading) {
    return (
      <progress
      className="progress progress-secondary w-56"
      value="100"
      max="100"
    ></progress>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
